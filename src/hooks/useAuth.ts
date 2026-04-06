import { useEffect } from 'react';
import { auth, isFirebaseConfigured } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppStore } from '@/store/appStore';
import { subscribeToUserData } from '@/services/firestoreService';

const EPOCH_TIMESTAMP = '1970-01-01T00:00:00.000Z';

/** Check if local state is effectively "blank/default" */
const isBlankState = (updatedAt: string): boolean => {
  return !updatedAt || updatedAt === EPOCH_TIMESTAMP;
};

/**
 * Manages Firebase auth state and Firestore subscription.
 * If Firebase is not configured, immediately sets authLoading = false.
 */
export const useAuth = () => {
  const setUser = useAppStore((s) => s.setUser);
  const setUserProfile = useAppStore((s) => s.setUserProfile);
  const setAuthLoading = useAppStore((s) => s.setAuthLoading);
  const setData = useAppStore((s) => s.setData);
  const user = useAppStore((s) => s.user);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setAuthLoading(false);
      return;
    }

    const unsubAuth = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Use persisted userName from app data if available, else fall back to displayName
        const persistedName = useAppStore.getState().data.userName;
        setUserProfile({
          name: persistedName || firebaseUser.displayName || 'Student',
          email: firebaseUser.email || '',
        });
      } else {
        setUserProfile(null);
      }
      setAuthLoading(false);
    });

    return () => unsubAuth();
  }, []);

  // Subscribe to Firestore when user changes
  useEffect(() => {
    if (!user || !isFirebaseConfigured) return;

    const unsubData = subscribeToUserData(user.uid, (cloudData) => {
      const localState = useAppStore.getState().data;
      const localUpdatedAt = localState.updatedAt;

      // HYDRATION PRIORITY: If local state is blank/default, ALWAYS accept cloud data
      if (isBlankState(localUpdatedAt)) {
        setData(cloudData);
        // Also update userProfile from cloud data if it has a userName
        if (cloudData.userName) {
          useAppStore.getState().setUserProfile({
            name: cloudData.userName,
            email: useAppStore.getState().userProfile?.email || '',
          });
        }
        return;
      }

      // Normal case: only hydrate from cloud if cloud data is newer
      if (cloudData.updatedAt > localUpdatedAt) {
        setData(cloudData);
        if (cloudData.userName) {
          useAppStore.getState().setUserProfile({
            name: cloudData.userName,
            email: useAppStore.getState().userProfile?.email || '',
          });
        }
      }
    });

    return () => unsubData();
  }, [user]);

  return {
    user,
    isAuthenticated: !!user,
    isFirebaseConfigured,
  };
};
