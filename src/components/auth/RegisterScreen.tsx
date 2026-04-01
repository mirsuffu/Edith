import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { signUp } from '@/services/authService';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { toast, TOAST_MESSAGES } from '@/utils/toast';

export const RegisterScreen: React.FC = () => {
  const setAuthScreen = useAppStore((s) => s.setAuthScreen);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('Name is required.'); return; }
    if (!email.trim()) { setError('Email is required.'); return; }
    if (password.length < 8) { setError("That password's weaker than my prep schedule. Min 8 characters."); return; }
    if (password !== confirmPassword) { setError("Passwords don't match. Try again."); return; }

    setLoading(true);
    const result = await signUp(email, password, name);
    if (!result.success) setError(result.error || 'Registration failed');
    else toast.success(TOAST_MESSAGES.registerSuccess);
    setLoading(false);
  };

  const switchToLogin = () => {
    setAuthScreen('login');
  };

  return (
    <div className="h-full flex items-center justify-center p-4 relative" style={{ zIndex: 2 }}>
      <div className="w-full max-w-md auth-enter">
        {/* Logo + Heading */}
        <div className="text-center mb-10">
          <div className="relative inline-block">
            <img src="/logo.png" alt="E.D.I.T.H" className="w-20 h-20 mx-auto rounded-2xl mb-4 relative" style={{ zIndex: 1 }} />
            <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-liquid-pulse opacity-30"
              style={{ background: 'var(--accent)', filter: 'blur(20px)' }} />
          </div>
          <h1 className="font-display text-4xl font-extrabold text-text-1 tracking-tight uppercase">E.D.I.T.H</h1>
          <p className="text-text-2 text-sm mt-2 font-medium">Create your account</p>
        </div>

        {/* Form card — glassmorphic */}
        <form onSubmit={handleRegister} className="glass rounded-3xl p-6 card-shadow space-y-5">
          <h2 className="font-display text-lg font-bold text-text-1">Register</h2>

          <Input label="Name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          <Input label="Email" type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          <Input label="Password" type="password" placeholder="Min 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
          <Input label="Confirm Password" type="password" placeholder="Repeat password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} autoComplete="new-password" />

          {error && <p className="text-danger text-xs font-medium shake-error">{error}</p>}

          <Button type="submit" loading={loading} className="w-full" size="lg">
            Create Account
          </Button>

          <div className="text-center">
            <button type="button" onClick={switchToLogin} className="text-text-2 text-xs hover:text-text-1 font-medium">
              ← Already have an account? Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
