/** Notification service — wraps service worker messaging and permission requests */
import { toast } from '@/utils/toast';
import { getMessagingInstance, db, VAPID_KEY } from '@/config/firebase';
import { getToken } from 'firebase/messaging';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

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
  'serviceWorker' in navigator && 'Notification' in window && 'PushManager' in window;

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!isNotificationSupported()) return 'default';
  
  const permission = await Notification.requestPermission();
  
  if (permission === 'granted') {
    try {
      console.log('Permission granted, fetching FCM token...');
      const messaging = await getMessagingInstance();
      if (messaging) {
        const reg = await navigator.serviceWorker.ready;
        console.log('Service Worker ready, requesting token with VAPID key...');
        const currentToken = await getToken(messaging, { 
          vapidKey: VAPID_KEY,
          serviceWorkerRegistration: reg 
        });
        if (currentToken) {
          localStorage.setItem('fcm_token', currentToken);
          console.log('FCM Token retrieved successfully:', currentToken.slice(0, 10) + '...');
          toast.success('Notifications fully enabled!');
        } else {
          console.warn('No registration token available. Request permission to generate one.');
          toast.error('Failed to generate Device ID. Try again.');
        }
      } else {
        console.warn('Messaging instance could not be initialized.');
        toast.error('Device does not support push notifications.');
      }
    } catch (err) {
      console.error('An error occurred while retrieving token. ', err);
      toast.error('Error connecting to notification service.');
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
      payload: notif
    });
  } catch (err) {
    if (attempt < 3) {
      setTimeout(() => {
        retryQueue.push({ notif, attempt: attempt + 1 });
        processRetryQueue();
      }, 2000 * Math.pow(2, attempt));
    }
  }
};

export const registerServiceWorker = async (): Promise<void> => {
  if (!isNotificationSupported()) return;

  try {
    // Determine the path to sw based on base path (usually root for Vercel)
    const base = import.meta.env.BASE_URL || '/';
    const swPath = `${base}sw-custom.js`.replace(/\/+/g, '/');
    
    const registration = await navigator.serviceWorker.register(swPath, { scope: base });
    console.log('Service Worker registered successfully:', registration.scope);
  } catch (err) {
    console.error('Service Worker registration failed:', err);
  }
};

export const scheduleLocalNotification = async (
  id: string,
  title: string,
  body: string,
  scheduledAt: string // ISO datetime
): Promise<void> => {
  if (!isNotificationSupported()) return;

  const permission = Notification.permission;
  if (permission !== 'granted') {
    // If not granted, we can't do anything
    return;
  }

  const notif = { id, title, body, scheduledAt };

  try {
    const reg = await navigator.serviceWorker.ready;
    if (reg.active) {
      reg.active.postMessage({
        type: 'SCHEDULE_NOTIFICATION',
        payload: notif
      });
    } else {
      retryQueue.push({ notif, attempt: 0 });
      processRetryQueue();
    }
  } catch (err) {
    retryQueue.push({ notif, attempt: 0 });
    processRetryQueue();
  }
};

/**
 * ROCK-SOLID Notification Scheduling
 * Writes directly to Firestore collection 'scheduled_notifications'.
 * A serverless cron job on Vercel periodically checks this collection
 * and dispatches notifications via FCM.
 */
export const schedulePersistentNotification = async (
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
    toast.error('Device ID (Token) missing. Try toggling notifications in Settings.');
    return;
  }

  try {
    // Validate payload
    if (!id || !title || !scheduledAt) {
      throw new Error('Invalid notification data');
    }

    const targetUnixTimeMs = new Date(scheduledAt).getTime();
    if (isNaN(targetUnixTimeMs)) {
      throw new Error('Invalid scheduled time');
    }

    // Write to root-level collection readable by Vercel Backend
    const notifRef = doc(db, 'scheduled_notifications', id);
    await setDoc(notifRef, {
      id,
      title,
      body,
      scheduledAt,
      targetTimeMs: targetUnixTimeMs,
      token,
      status: 'pending', 
      createdAt: Date.now()
    });
    
    console.log('Notification scheduled in Firestore:', id);
    toast.success('Reminder scheduled successfully!');
    
  } catch (err: any) {
    console.error('Scheduling error:', err);
    toast.error(`Failed to schedule: ${err.message || 'Unknown error'}`);
  }
};

export const cancelNotification = async (id: string): Promise<void> => {
  if (!isNotificationSupported()) return;

  try {
    // 1. Cancel local SW timer
    const reg = await navigator.serviceWorker.ready;
    reg.active?.postMessage({
      type: 'CANCEL_NOTIFICATION',
      payload: { id }
    });

    // 2. Delete from Firestore
    const notifRef = doc(db, 'scheduled_notifications', id);
    await deleteDoc(notifRef);
    
    toast.info('Notification cancelled.');
  } catch (err) {
    console.warn('Error cancelling notification:', err);
  }
};
