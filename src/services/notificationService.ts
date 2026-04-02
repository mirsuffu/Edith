/** Notification service — wraps service worker messaging and permission requests */
import { toast } from '@/utils/toast';
import { messaging, db, VAPID_KEY } from '@/config/firebase';
import { getToken } from 'firebase/messaging';
import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore';

export type NotificationFailureType = 
  | 'PERMISSION_DENIED'
  | 'SW_NOT_INSTALLED'
  | 'PAYLOAD_ERROR'
  | 'BACKGROUND_THROTTLING'
  | 'UNKNOWN';

export interface NotificationFailureReport {
  type: NotificationFailureType;
  details: string;
  timestamp: string;
}

export const isNotificationSupported = (): boolean =>
  'Notification' in window && 'serviceWorker' in navigator;

export const getNotificationPermission = (): NotificationPermission =>
  isNotificationSupported() ? Notification.permission : 'denied';

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!isNotificationSupported()) return 'denied';
  const permission = await Notification.requestPermission();
  
  if (permission === 'granted') {
    try {
      const reg = await navigator.serviceWorker.ready;
      const currentToken = await getToken(messaging, { 
        vapidKey: VAPID_KEY,
        serviceWorkerRegistration: reg 
      });
      if (currentToken) {
        // Save this token to local storage so we can use it to schedule
        localStorage.setItem('fcm_token', currentToken);
        console.log('FCM Token retrieved successfully.');
      }
    } catch (err) {
      console.warn('An error occurred while retrieving token. ', err);
    }
  }
  return permission;
};

/** Retry queue with exponential back-off */
const retryQueue: { notif: any, attempt: number }[] = [];

const processRetryQueue = async () => {
  if (retryQueue.length === 0) return;

  const { notif, attempt } = retryQueue.shift()!;
  
  try {
    const reg = await navigator.serviceWorker.ready;
    reg.active?.postMessage({
      type: 'SCHEDULE_NOTIFICATION',
      payload: notif,
    });
  } catch (e) {
    if (attempt < 5) {
      const delay = Math.pow(2, attempt) * 1000;
      setTimeout(() => {
        retryQueue.push({ notif, attempt: attempt + 1 });
        processRetryQueue();
      }, delay);
    }
  }
};

/** Diagnose the notification pipeline and produce a report */
export const diagnoseNotificationPipeline = async (): Promise<NotificationFailureReport> => {
  if (!isNotificationSupported()) {
    return {
      type: 'SW_NOT_INSTALLED',
      details: 'Browser does not support notifications or service workers.',
      timestamp: new Date().toISOString(),
    };
  }

  const permission = Notification.permission;
  if (permission === 'denied') {
    return {
      type: 'PERMISSION_DENIED',
      details: 'User has blocked notification permissions.',
      timestamp: new Date().toISOString(),
    };
  }

  const reg = await navigator.serviceWorker.getRegistration();
  if (!reg) {
    return {
      type: 'SW_NOT_INSTALLED',
      details: 'No active service worker registration found.',
      timestamp: new Date().toISOString(),
    };
  }

  // Check if SW is active
  if (!reg.active) {
    return {
      type: 'SW_NOT_INSTALLED',
      details: 'Service worker is registered but not active.',
      timestamp: new Date().toISOString(),
    };
  }

  // Attempt to ping the SW
  try {
    const channel = new MessageChannel();
    const pingPromise = new Promise((resolve, reject) => {
      channel.port1.onmessage = (event) => {
        if (event.data === 'pong') resolve('ok');
        else reject(new Error('Unexpected SW response'));
      };
      setTimeout(() => reject(new Error('SW ping timeout')), 2000);
    });

    reg.active.postMessage({ type: 'PING' }, [channel.port2]);
    await pingPromise;
  } catch (e: any) {
    return {
      type: 'BACKGROUND_THROTTLING',
      details: `Service worker communication failed: ${e.message}`,
      timestamp: new Date().toISOString(),
    };
  }

  return {
    type: 'UNKNOWN',
    details: 'Pipeline appears healthy, but delivery might be silent due to OS focus mode or browser throttling.',
    timestamp: new Date().toISOString(),
  };
};

export const scheduleLocalNotification = async (
  id: string,
  title: string,
  body: string,
  scheduledAt: string // ISO datetime
): Promise<void> => {
  if (!isNotificationSupported()) return;

  const permission = Notification.permission;
  if (permission === 'denied') {
    toast.error('Notifications are blocked. Please enable them in settings.');
    return;
  }

  const token = localStorage.getItem('fcm_token');
  if (!token) {
    toast.error('Push token missing. Please toggle notifications off and on in Settings.');
    return;
  }

  try {
    // Validate payload
    if (!id || !title || !scheduledAt) {
      throw new Error('Invalid notification payload');
    }

    // Determine target Unix timestamp for the backend
    const targetUnixTimeMs = new Date(scheduledAt).getTime();

    // Instead of local Service Worker message, write to Firestore!
    const notifRef = doc(collection(db, 'scheduled_notifications'), id);
    await setDoc(notifRef, {
      id,
      title,
      body,
      scheduledAt,       // the human-readable ISO string
      targetTimeMs: targetUnixTimeMs, // used by cron job to easily check "< Date.now()"
      token,             // who gets the message
      status: 'pending', // marks as waiting to be sent
      createdAt: Date.now()
    });

  } catch (e: any) {
    console.error('Failed to schedule notification in Firestore', e);
    toast.error('Failed to schedule notification check your connection or permissions.');
  }
};

export const cancelNotification = async (id: string): Promise<void> => {
  if (!isNotificationSupported()) return;

  try {
    const notifRef = doc(collection(db, 'scheduled_notifications'), id);
    await deleteDoc(notifRef);
  } catch (e) {
    console.warn('Failed to delete scheduled notification from Firestore', e);
  }
};

/** Register the custom service worker */
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      // Use BASE_URL to correctly register from sub-directory (Fixes 404 error)
      const swPath = `${import.meta.env.BASE_URL}sw.js`.replace(/\/+/g, '/');
      await navigator.serviceWorker.register(swPath, {
        scope: import.meta.env.BASE_URL
      });
    } catch (e) {
      console.warn('Service worker registration failed:', e);
    }
  }
};
