/** Notification service — wraps service worker messaging and permission requests */

export const isNotificationSupported = (): boolean =>
  'Notification' in window && 'serviceWorker' in navigator;

export const getNotificationPermission = (): NotificationPermission =>
  isNotificationSupported() ? Notification.permission : 'denied';

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!isNotificationSupported()) return 'denied';
  return await Notification.requestPermission();
};

export const scheduleLocalNotification = async (
  id: string,
  title: string,
  body: string,
  scheduledAt: string // ISO datetime
): Promise<void> => {
  if (!isNotificationSupported()) return;

  const reg = await navigator.serviceWorker.ready;
  reg.active?.postMessage({
    type: 'SCHEDULE_NOTIFICATION',
    payload: { id, title, body, scheduledAt },
  });
};

export const cancelNotification = async (id: string): Promise<void> => {
  if (!isNotificationSupported()) return;

  const reg = await navigator.serviceWorker.ready;
  reg.active?.postMessage({
    type: 'CANCEL_NOTIFICATION',
    payload: { id },
  });
};

/** Register the custom service worker */
export const registerServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
    } catch (e) {
      console.warn('Service worker registration failed:', e);
    }
  }
};
