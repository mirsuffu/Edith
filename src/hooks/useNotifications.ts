import { useCallback } from 'react';
import { useAppStore } from '@/store/appStore';
import {
  requestNotificationPermission,
  scheduleLocalNotification,
  cancelNotification,
  isNotificationSupported,
} from '@/services/notificationService';

export const useNotifications = () => {
  const notificationsEnabled = useAppStore((s) => s.data.notificationsEnabled);
  const setNotificationsEnabled = useAppStore((s) => s.setNotificationsEnabled);

  const requestPermission = useCallback(async () => {
    const result = await requestNotificationPermission();
    setNotificationsEnabled(result === 'granted');
    return result;
  }, [setNotificationsEnabled]);

  const schedule = useCallback(async (id: string, title: string, body: string, at: string) => {
    if (!notificationsEnabled) return;
    await scheduleLocalNotification(id, title, body, at);
  }, [notificationsEnabled]);

  const cancel = useCallback(async (id: string) => {
    await cancelNotification(id);
  }, []);

  return {
    isSupported: isNotificationSupported(),
    permission: typeof Notification !== 'undefined' ? Notification.permission : 'default',
    notificationsEnabled,
    requestPermission,
    schedule,
    cancel,
  };
};
