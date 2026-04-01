import { useEffect } from 'react';
import { auth, isFirebaseConfigured } from '@/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppStore } from '@/store/appStore';
import { subscribeToUserData } from '@/services/firestoreService';

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
        setUserProfile({
          name: firebaseUser.displayName || 'Student',
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
      const localUpdatedAt = useAppStore.getState().data.updatedAt;
      // Only hydrate from cloud if cloud data is newer
      if (!localUpdatedAt || cloudData.updatedAt > localUpdatedAt) {
        setData(cloudData);
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
