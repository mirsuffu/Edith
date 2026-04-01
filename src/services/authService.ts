import { auth } from '@/config/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';

type AuthResult = { success: boolean; error?: string };

export const signIn = async (email: string, password: string): Promise<AuthResult> => {
  if (!auth) return { success: false, error: 'Firebase not configured' };
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (e: any) {
    const code = e?.code || '';
    if (code === 'auth/user-not-found') return { success: false, error: "No account found. Double check your email." };
    if (code === 'auth/wrong-password') return { success: false, error: "Wrong password. Try harder." };
    if (code === 'auth/invalid-email') return { success: false, error: "That email doesn't look right." };
    if (code === 'auth/too-many-requests') return { success: false, error: "Too many attempts. Take a breather." };
    return { success: false, error: e?.message || 'Login failed' };
  }
};

export const signUp = async (email: string, password: string, name: string): Promise<AuthResult> => {
  if (!auth) return { success: false, error: 'Firebase not configured' };
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    return { success: true };
  } catch (e: any) {
    const code = e?.code || '';
    if (code === 'auth/email-already-in-use') return { success: false, error: "That email's taken. Log in instead." };
    if (code === 'auth/weak-password') return { success: false, error: "That password's weaker than my prep schedule. Try harder." };
    if (code === 'auth/invalid-email') return { success: false, error: "That email doesn't look right." };
    return { success: false, error: e?.message || 'Registration failed' };
  }
};

export const signOutUser = async (): Promise<AuthResult> => {
  if (!auth) return { success: false, error: 'Firebase not configured' };
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e?.message || 'Sign out failed' };
  }
};

export const resetPassword = async (email: string): Promise<AuthResult> => {
  if (!auth) return { success: false, error: 'Firebase not configured' };
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e?.message || 'Password reset failed' };
  }
};
