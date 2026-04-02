import admin from 'firebase-admin';

// Initialize Firebase Admin (Only once per cold start)
if (!admin.apps.length) {
  try {
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountJson) {
      console.error("Missing FIREBASE_SERVICE_ACCOUNT environment variable.");
    } else {
      const serviceAccount = JSON.parse(serviceAccountJson);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
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
    const db = admin.firestore();
    const messaging = admin.messaging();
    const now = Date.now();

    // 1. Fetch pending notifications where targetTimeMs <= now
    const snapshot = await db.collection('scheduled_notifications')
      .where('status', '==', 'pending')
      .where('targetTimeMs', '<=', now)
      .get();

    if (snapshot.empty) {
      return res.status(200).json({ message: 'No pending notifications to send.', count: 0 });
    }

    let sentCount = 0;
    const batch = db.batch();

    // 2. Loop through and send
    for (const doc of snapshot.docs) {
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
            sentAt: admin.firestore.FieldValue.serverTimestamp() 
        });
        sentCount++;
      } catch (err) {
        console.error(`Failed to send notification for ${doc.id}:`, err);
        // If the token is invalid/unregistered, mark it failed to avoid infinite retries
        if (err.code === 'messaging/invalid-registration-token' || err.code === 'messaging/registration-token-not-registered') {
          batch.update(doc.ref, { status: 'failed_invalid_token' });
        } else {
          batch.update(doc.ref, { status: 'failed', error: err.message });
        }
      }
    }

    // 3. Commit the database updates
    await batch.commit();

    return res.status(200).json({ message: 'Success', count: sentCount });

  } catch (err) {
    console.error('Error processing cron job:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
