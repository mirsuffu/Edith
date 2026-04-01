import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        'surface-3': 'var(--surface-3)',
        border: 'var(--border)',
        'border-2': 'var(--border-2)',
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        'text-3': 'var(--text-3)',
        accent: 'var(--accent)',
        'accent-glow': 'var(--accent-glow)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
        'danger-glow': 'var(--danger-glow)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        xl: '12px',
        '3xl': '24px',
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 280ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'modal-open': 'modalOpen 220ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'modal-close': 'modalClose 180ms cubic-bezier(0.55, 0, 1, 0.45) forwards',
        'number-pop': 'numberPop 200ms ease-out',
        'toast-in': 'toastSlideIn 280ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'toast-out': 'toastSlideOut 220ms cubic-bezier(0.55, 0, 1, 0.45) forwards',
        'spinner': 'spinnerRotate 800ms linear infinite',
        'login-gradient': 'loginGradient 12s ease infinite',
        'float-particle': 'floatParticle linear infinite',
        'auth-enter': 'authSlideIn 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'auth-exit': 'authSlideOut 400ms cubic-bezier(0.55, 0, 1, 0.45) forwards',
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        modalOpen: {
          '0%': { opacity: '0', transform: 'scale(0.94) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        modalClose: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.94) translateY(8px)' },
        },
        numberPop: {
          '0%': { transform: 'scale(0.85)' },
          '60%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        toastSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(16px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        toastSlideOut: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(16px) scale(0.95)' },
        },
        spinnerRotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        loginGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '100% 25%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '0% 75%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatParticle: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(calc(-100vh - 20px)) translateX(30px) scale(0.5)', opacity: '0' },
        },
        authSlideIn: {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        authSlideOut: {
          '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(-20px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
