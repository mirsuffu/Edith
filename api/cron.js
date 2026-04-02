import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';

// Initialize Firebase Admin (Only once per cold start)
if (!getApps().length) {
  try {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountJson) {
      console.error("Missing FIREBASE_SERVICE_ACCOUNT environment variable.");
    } else {
      const serviceAccount = JSON.parse(serviceAccountJson);
      initializeApp({
        credential: cert(serviceAccount)
      });
    }
  } catch (error) {
    console.error('Firebase admin initialization error:', error.stack);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Simple auth to prevent standard web crawlers from triggering it repeatedly
  const { secret } = req.query;
  if (process.env.CRON_SECRET && secret !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const db = getFirestore();
    const messaging = getMessaging();
    const now = Date.now();

    // FIXED: Only query by 'status' to avoid the need for a composite index!
    const snapshot = await db.collection('scheduled_notifications')
      .where('status', '==', 'pending')
      .get();

    if (snapshot.empty) {
      return res.status(200).json({ message: 'No pending notifications found in DB.', count: 0 });
    }

    let sentCount = 0;
    const batch = db.batch();

    // Filter by time in memory instead of in the query
    const dueNotifications = snapshot.docs.filter(doc => {
        const data = doc.data();
        return data.targetTimeMs <= now; 
    });

    if (dueNotifications.length === 0) {
        return res.status(200).json({ message: 'Notifications exist but none are due yet.', count: 0 });
    }

    // 2. Loop through and send
    for (const doc of dueNotifications) {
      const data = doc.data();
      
      const payload = {
        token: data.token,
        notification: {
          title: data.title || 'E.D.I.T.H',
          body: data.body || '',
        },
        data: {
          url: '/'
        }
      };

      try {
        await messaging.send(payload);
        // Mark as sent
        batch.update(doc.ref, { 
            status: 'sent', 
            sentAt: FieldValue.serverTimestamp() 
        });
        sentCount++;
      } catch (err) {
        console.error(`Failed to send notification for ${doc.id}:`, err);
        // If the token is invalid/unregistered, mark it failed to avoid infinite retries
        if (err.code === 'messaging/invalid-registration-token' || err.code === 'messaging/registration-token-not-registered') {
          batch.update(doc.ref, { status: 'failed_invalid_token' });
        } else {
          // Keep it as pending or mark as error
          batch.update(doc.ref, { status: 'error', lastError: err.message });
        }
      }
    }

    // 3. Commit the database updates
    await batch.commit();

    return res.status(200).json({ message: 'Success', count: sentCount });

  } catch (err) {
    console.error('Error processing cron job:', err);
    return res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
}
