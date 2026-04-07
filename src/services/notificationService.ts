/** Notification service — wraps service worker messaging and permission requests */
import { toast } from '@/utils/toast';
import { getMessagingInstance, db, VAPID_KEY } from '@/config/firebase';
import { getToken } from 'firebase/messaging';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';

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

export const isNotificationSupported = (): boolean => {
  if (Capacitor.isNativePlatform()) return true;
  return 'serviceWorker' in navigator && 'Notification' in window && 'PushManager' in window;
};

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!isNotificationSupported()) return 'default';
  
  if (Capacitor.isNativePlatform()) {
    let permStatus = await PushNotifications.checkPermissions();
    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    // Create a mandatory channel for Android
    try {
      await LocalNotifications.createChannel({
        id: 'edith-notifications',
        name: 'Edith Notifications',
        description: 'Study reminders and task alerts',
        importance: 5, // High importance
        visibility: 1, // Public
        vibration: true,
      });
      console.log('Notification channel created: edith-notifications');
    } catch (e) {
      console.warn('Failed to create notification channel', e);
    }

    // Also request Local Notification permissions
    let localStatus = await LocalNotifications.checkPermissions();
    if (localStatus.display === 'prompt') {
      localStatus = await LocalNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted' || localStatus.display !== 'granted') {
      toast.error('Notification permissions denied.');
      return 'denied';
    }
    try {
      await PushNotifications.register();
      toast.success('Notifications fully enabled!');
      return 'granted';
    } catch (e: any) {
      console.error('Failed to register native push', e);
      toast.error('Failed to connect to native messaging service.');
      return 'denied';
    }
  }

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

  if (Capacitor.isNativePlatform()) {
    console.log('Native environment detected. Initializing Native Push Listeners and skipping SW.');
    PushNotifications.addListener('registration', (token) => {
      console.log('Native FCM Token generated:', token.value.slice(0, 10) + '...');
      localStorage.setItem('fcm_token', token.value);
    });
    PushNotifications.addListener('registrationError', (error) => {
      console.error('Error on native FCM registration:', JSON.stringify(error));
    });
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Native push received in foreground:', notification);
    });
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('Native push action performed:', notification.actionId);
    });
    return;
  }

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

/**
 * Legacy local scheduling — now upgraded to use the persistent engine
 * to ensure reliability even if the browser stops the worker timer.
 */
export const scheduleLocalNotification = async (
  id: string,
  title: string,
  body: string,
  scheduledAt: string
): Promise<void> => {
  return schedulePersistentNotification(id, title, body, scheduledAt);
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

  const isNative = Capacitor.isNativePlatform();

  // On Native, use Local Notifications for reminders to ensure 100% reliability
  if (isNative) {
    try {
      const targetDate = new Date(scheduledAt);
      const now = new Date();

      // If time is in the past, don't schedule
      if (targetDate <= now) {
        toast.error('Cannot schedule reminder in the past.');
        return;
      }

      await LocalNotifications.schedule({
        notifications: [
          {
            title,
            body,
            id: Math.abs(id.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0)) % 2147483647 || Math.floor(Math.random() * 1000000),
            schedule: { at: targetDate, allowWhileIdle: true },
            sound: 'default',
            channelId: 'edith-notifications',
            attachments: [],
            actionTypeId: '',
            extra: null,
          },
        ],
      });

      console.log('Notification scheduled locally on Android:', id);
      toast.success('Reminder scheduled successfully!');

      // Still write to Firestore for multi-device sync if user is logged in
      const token = localStorage.getItem('fcm_token');
      if (token) {
        const notifRef = doc(db, 'scheduled_notifications', id);
        await setDoc(notifRef, {
          id, title, body, scheduledAt, targetTimeMs: targetDate.getTime(),
          token, status: 'pending', createdAt: Date.now()
        }, { merge: true });
      }
      return;
    } catch (err: any) {
      console.error('Native scheduling error:', err);
      toast.error(`Local scheduling failed: ${err.message}`);
      return;
    }
  }

  // Web PWA fallback logic...
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
    // 1. Cancel local SW timer or native scheduled
    if (Capacitor.isNativePlatform()) {
      const numericId = Math.abs(id.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0));
      await LocalNotifications.cancel({ notifications: [{ id: numericId }] });
    } else {
      const reg = await navigator.serviceWorker.ready;
      reg.active?.postMessage({
        type: 'CANCEL_NOTIFICATION',
        payload: { id }
      });
    }

    // 2. Delete from Firestore
    const notifRef = doc(db, 'scheduled_notifications', id);
    await deleteDoc(notifRef);
    
    toast.info('Notification cancelled.');
  } catch (err) {
    console.warn('Error cancelling notification:', err);
  }
};
