import { precacheAndRoute } from 'workbox-precaching';

// Precaches all the files Vite generated (CSS, HTML, JS) to ensure offline support is retained
precacheAndRoute(self.__WB_MANIFEST);

/* E.D.I.T.H Service Worker — Notification Engine */
/* Handles FCM push events and local scheduled notifications */

const CACHE_NAME = 'edith-v7';
const NOTIFICATION_STORE = 'edith-notifications';

/* ---- IndexedDB helpers for pending notifications ---- */
function openNotifDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(NOTIFICATION_STORE, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('pending')) {
        db.createObjectStore('pending', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function savePendingNotification(notif) {
  const db = await openNotifDB();
  const tx = db.transaction('pending', 'readwrite');
  tx.objectStore('pending').put(notif);
  return new Promise((resolve) => { tx.oncomplete = resolve; });
}

async function removePendingNotification(id) {
  const db = await openNotifDB();
  const tx = db.transaction('pending', 'readwrite');
  tx.objectStore('pending').delete(id);
  return new Promise((resolve) => { tx.oncomplete = resolve; });
}

async function getAllPendingNotifications() {
  const db = await openNotifDB();
  const tx = db.transaction('pending', 'readonly');
  const store = tx.objectStore('pending');
  return new Promise((resolve) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => resolve([]);
  });
}

/* ---- Notification scheduling ---- */
const scheduledTimers = new Map();

function scheduleNotification(notif) {
  const now = Date.now();
  const fireAt = new Date(notif.scheduledAt).getTime();
  const delay = Math.max(0, fireAt - now);

  if (delay > 0 && delay < 24 * 60 * 60 * 1000) {
    const timerId = setTimeout(async () => {
      await self.registration.showNotification(notif.title, {
        body: notif.body || '',
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        tag: notif.id,
        data: { url: '/' },
      });
      await removePendingNotification(notif.id);
      scheduledTimers.delete(notif.id);
    }, delay);
    scheduledTimers.set(notif.id, timerId);
  }
}

function cancelScheduledNotification(id) {
  if (scheduledTimers.has(id)) {
    clearTimeout(scheduledTimers.get(id));
    scheduledTimers.delete(id);
  }
  removePendingNotification(id);
}

/* ---- Service Worker Lifecycle ---- */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.clients.claim();
      const pending = await getAllPendingNotifications();
      pending.forEach(scheduleNotification);
    })()
  );
});

/* ---- Push event (FCM) ---- */
self.addEventListener('push', (event) => {
  let data = { title: 'E.D.I.T.H', body: 'Time to study!' };
  try {
    if (event.data) data = event.data.json();
  } catch (e) {
    if (event.data) data.body = event.data.text();
  }

  event.waitUntil(
    self.registration.showNotification(data.title || 'E.D.I.T.H', {
      body: data.body || '',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png',
      data: { url: data.url || '/' },
    })
  );
});

/* ---- Notification click ---- */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow(urlToOpen);
    })
  );
});

/* ---- Messages from main app ---- */
self.addEventListener('message', (event) => {
  const { type, payload } = event.data || {};

  if (type === 'PING') {
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage('pong');
    }
  }

  if (type === 'SCHEDULE_NOTIFICATION') {
    savePendingNotification(payload).then(() => scheduleNotification(payload));
  }

  if (type === 'CANCEL_NOTIFICATION') {
    cancelScheduledNotification(payload.id);
  }
});
