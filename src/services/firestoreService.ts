import { db, isFirebaseConfigured } from '@/config/firebase';
import { doc, setDoc, onSnapshot, collection, deleteDoc } from 'firebase/firestore';
import type { AppData, ChatSession } from '@/types';
import { useAppStore } from '@/store/appStore';
import { toast, TOAST_MESSAGES } from '@/utils/toast';

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

/** Debounced save of app data to Firestore */
export const debouncedFirestoreSync = (delayMs = 1500) => {
  if (!isFirebaseConfigured || !db) return;
  if (debounceTimer) clearTimeout(debounceTimer);

  debounceTimer = setTimeout(async () => {
    const { user, data } = useAppStore.getState();
    if (!user) return;

    useAppStore.setState({ syncStatus: 'syncing' });
    try {
      const docRef = doc(db, 'users', user.uid, 'data', 'master');
      await setDoc(docRef, data);
      useAppStore.setState({ syncStatus: 'idle' });
    } catch (e: any) {
      console.error('Firestore sync error:', e);
      useAppStore.setState({ syncStatus: 'error' });
      toast.error(TOAST_MESSAGES.syncError);
    }
  }, delayMs);
};

/** Subscribe to real-time updates from Firestore */
export const subscribeToUserData = (uid: string, callback: (data: AppData) => void) => {
  if (!db) return () => {};

  const docRef = doc(db, 'users', uid, 'data', 'master');
  return onSnapshot(
    docRef,
    (snap) => {
      if (snap.exists()) {
        callback(snap.data() as AppData);
      }
    },
    (error) => {
      console.error('Firestore snapshot error:', error.code, error.message);
      useAppStore.setState({ syncStatus: 'error' });
      toast.error(TOAST_MESSAGES.syncError);
    }
  );
};

/** Save a chat session to its own Firestore document (avoids main doc size bloat) */
export const saveChatSession = async (uid: string, session: ChatSession) => {
  if (!db) return;
  try {
    const docRef = doc(db, 'users', uid, 'chats', session.id);
    await setDoc(docRef, session);
  } catch (e) {
    console.error('Failed to save chat session:', e);
  }
};

/** Delete a chat session from Firestore */
export const deleteChatSessionFromFirestore = async (uid: string, sessionId: string) => {
  if (!db) return;
  try {
    await deleteDoc(doc(db, 'users', uid, 'chats', sessionId));
  } catch (e) {
    console.error('Failed to delete chat session:', e);
  }
};
