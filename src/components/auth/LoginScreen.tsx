import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { signIn, resetPassword } from '@/services/authService';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { isFirebaseConfigured } from '@/config/firebase';

export const LoginScreen: React.FC = () => {
  const setAuthScreen = useAppStore((s) => s.setAuthScreen);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError('Fill in both fields.');
      return;
    }
    setLoading(true);
    setError('');
    const result = await signIn(email, password);
    if (!result.success) {
      setError("Suffu didn't find you in his mind. Create a new account or Reset the password.");
    } else {
      toast.success(TOAST_MESSAGES.loginSuccess);
    }
    setLoading(false);
  };

  const handleReset = async () => {
    if (!email.trim()) { setError('Enter your email first, then hit Forgot Password.'); return; }
    const result = await resetPassword(email);
    if (result.success) toast.info(TOAST_MESSAGES.passwordReset);
    else setError(result.error || 'Reset failed');
  };

  const switchToRegister = () => {
    setAuthScreen('register');
  };

  return (
    <div className="h-full flex items-center justify-center p-4 relative" style={{ zIndex: 2 }}>
      <div className="w-full max-w-md auth-enter">
        {/* Logo + Heading */}
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <img src={import.meta.env.BASE_URL + 'logo.png'} alt="E.D.I.T.H" className="w-20 h-20 mx-auto rounded-2xl mb-4 relative" style={{ zIndex: 1 }} />
            {/* Glow behind logo */}
            <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-liquid-pulse opacity-30"
              style={{ background: 'var(--accent)', filter: 'blur(20px)' }} />
          </div>
          <h1 className="font-display text-4xl font-extrabold text-text-1 tracking-tight uppercase">E.D.I.T.H</h1>
          <p className="text-text-2 text-sm mt-2 font-medium">CA Intermediate Study Tracker</p>
        </div>

        {/* Form card — glassmorphic */}
        <form onSubmit={handleLogin} className="glass rounded-3xl p-6 card-shadow space-y-5">
          <h2 className="font-display text-lg font-bold text-text-1">Sign In</h2>

          {!isFirebaseConfigured && (
            <div className="text-xs text-warning bg-warning/10 border border-warning/20 rounded-xl p-3">
              Firebase not configured. See FIREBASE_SETUP_GUIDE.md
            </div>
          )}

          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {error && <p className="text-danger text-xs font-medium shake-error">{error}</p>}

          <Button type="submit" loading={loading} className="w-full" size="lg">
            Login
          </Button>

          <div className="flex justify-between items-center text-xs">
            <button type="button" onClick={handleReset} className="text-accent hover:underline font-medium">
              Forgot password?
            </button>
            <button type="button" onClick={switchToRegister} className="text-text-2 hover:text-text-1 font-medium">
              Create account →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
