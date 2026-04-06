import React, { useEffect, useRef, useCallback, Suspense, lazy } from 'react';
import { playClick } from '@/hooks/useSounds';
import { useAppStore } from '@/store/appStore';
import { useAuth } from '@/hooks/useAuth';
import { LoginScreen } from '@/components/auth/LoginScreen';
import { RegisterScreen } from '@/components/auth/RegisterScreen';
import { TopBar } from '@/components/layout/TopBar';
import { SideRail } from '@/components/layout/SideRail';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { WelcomeModal } from '@/components/modals/WelcomeModal';
import { TodayModal } from '@/components/modals/TodayModal';
import { ActionConfirmModal } from '@/components/modals/ActionConfirmModal';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { ToastContainer } from '@/components/ui/Toast';
import { toLocalDateStr } from '@/utils/dates';
import { toast, TOAST_MESSAGES } from '@/utils/toast';
import { debouncedFirestoreSync } from '@/services/firestoreService';
import { registerServiceWorker } from '@/services/notificationService';
import { isFirebaseConfigured } from '@/config/firebase';
import type { ThemeMode } from '@/types';

// Lazy-loaded tabs
const TrackerTab = lazy(() => import('@/components/tabs/TrackerTab').then(m => ({ default: m.TrackerTab })));
const PlannerHubTab = lazy(() => import('@/components/tabs/PlannerHubTab').then(m => ({ default: m.PlannerHubTab })));
const PerformanceTab = lazy(() => import('@/components/tabs/PerformanceTab').then(m => ({ default: m.PerformanceTab })));
const EdithTab = lazy(() => import('@/components/tabs/EdithTab').then(m => ({ default: m.EdithTab })));
const SettingsTab = lazy(() => import('@/components/tabs/SettingsTab').then(m => ({ default: m.SettingsTab })));

const resolveThemeClass = (mode: ThemeMode): 'light' | '' => {
  if (mode === 'light') return 'light';
  if (mode === 'dark') return '';
  if (mode === 'system') {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : '';
  }
  if (mode === 'auto') {
    const hour = new Date().getHours();
    return (hour >= 7 && hour < 19) ? 'light' : '';
  }
  return '';
};

const TabFallback = () => (
  <div className="h-full flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spinner" />
  </div>
);

const App: React.FC = () => {
  const { isAuthenticated, isFirebaseConfigured: fbConfigured } = useAuth();
  const authLoading = useAppStore((s) => s.authLoading);
  const authScreen = useAppStore((s) => s.authScreen);
  const activeTab = useAppStore((s) => s.activeTab);
  const themeMode = useAppStore((s) => s.data.themeMode);
  const fullScreenEnabled = useAppStore((s) => s.data.fullScreenEnabled);
  const lastWelcomeShown = useAppStore((s) => s.data.lastWelcomeShownDate);
  const setShowWelcomeModal = useAppStore((s) => s.setShowWelcomeModal);
  const setLastWelcomeShownDate = useAppStore((s) => s.setLastWelcomeShownDate);
  const setSyncStatus = useAppStore((s) => s.setSyncStatus);
  const user = useAppStore((s) => s.user);
  const prevThemeRef = useRef<string | null>(null);

  const lastSyncRef = useRef<string>('');

  // Firestore sync (Background listener - does not trigger re-render)
  useEffect(() => {
    if (!user || !fbConfigured) return;
    
    // Subscribe to store changes to trigger sync
     const unsub = useAppStore.subscribe(
       (state) => {
         const currentTs = state.data.updatedAt;
         if (currentTs && currentTs !== lastSyncRef.current) {
           lastSyncRef.current = currentTs;
           debouncedFirestoreSync();
         }
       }
     );
     return () => unsub();
  }, [user, fbConfigured]);

  // Theme
  useEffect(() => {
    const apply = () => {
      const cls = resolveThemeClass(themeMode);
      const html = document.documentElement;
      const currentIsLight = html.classList.contains('light');
      const newIsLight = cls === 'light';
      if (prevThemeRef.current !== null && currentIsLight !== newIsLight) {
        html.classList.add('theme-transitioning');
        setTimeout(() => html.classList.remove('theme-transitioning'), 700);
      }
      html.classList.toggle('light', newIsLight);
      prevThemeRef.current = cls;
    };
    apply();
    if (themeMode === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: light)');
      const handler = () => apply();
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
    if (themeMode === 'auto') {
      const interval = setInterval(apply, 60000);
      return () => clearInterval(interval);
    }
  }, [themeMode]);

  // Welcome modal
  useEffect(() => {
    const today = toLocalDateStr();
    if (lastWelcomeShown !== today && (isAuthenticated || !fbConfigured)) {
      setShowWelcomeModal(true);
      setLastWelcomeShownDate(today);
    }
  }, [isAuthenticated, lastWelcomeShown, fbConfigured, setShowWelcomeModal, setLastWelcomeShownDate]);

  // Online/offline
  useEffect(() => {
    const handleOnline = () => {
      setSyncStatus('idle');
      toast.info(TOAST_MESSAGES.onlineRestored);
      debouncedFirestoreSync(500);
    };
    const handleOffline = () => setSyncStatus('offline');
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [setSyncStatus]);

  // Service worker
  useEffect(() => { registerServiceWorker(); }, []);

  // Auto-click for fullscreen activation
  useEffect(() => {
    if (!fullScreenEnabled || document.fullscreenElement) return;

    const timer = setTimeout(() => {
      // Feature detection: bypass if already granted or not supported
      if (document.fullscreenElement || !document.documentElement.requestFullscreen) return;

      const autoClickBtn = document.createElement('button');
      autoClickBtn.style.position = 'fixed';
      autoClickBtn.style.top = '5%';
      autoClickBtn.style.left = '50%';
      autoClickBtn.style.width = '0px';
      autoClickBtn.style.height = '0px';
      autoClickBtn.style.opacity = '0';
      autoClickBtn.style.pointerEvents = 'none';
      autoClickBtn.setAttribute('aria-hidden', 'true');
      autoClickBtn.setAttribute('data-auto-click', 'true');
      
      document.body.appendChild(autoClickBtn);
      
      // Programmatic click
      autoClickBtn.click();
      
      // Cleanup
      setTimeout(() => {
        if (document.body.contains(autoClickBtn)) {
          document.body.removeChild(autoClickBtn);
        }
      }, 100);
    }, 1000);

    return () => clearTimeout(timer);
  }, [fullScreenEnabled]);

  // Global click & Fullscreen logic
  const handleGlobalClick = useCallback((e: MouseEvent) => {
    // Attempt to enter fullscreen on first interaction if setting is enabled
    if (fullScreenEnabled && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    const el = (e.target as HTMLElement)?.closest?.(
      'button, a, [role="tab"], [role="button"], input[type="checkbox"], input[type="radio"], select, .toggle-track, [data-clickable]'
    );
    if (el) playClick();
  }, [fullScreenEnabled]);

  useEffect(() => {
    document.addEventListener('click', handleGlobalClick, true);
    return () => document.removeEventListener('click', handleGlobalClick, true);
  }, [handleGlobalClick]);

  // Loading screen
  if (authLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          {/* Custom fan loader animation */}
          <div style={{ position: 'relative', width: 130, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
            <div
              style={{
                position: 'absolute',
                width: 50,
                height: 50,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, var(--accent, #3b82f6) 0%, transparent 40%, transparent 50%, var(--accent, #3b82f6) 50%, transparent 90%)',
                animation: 'edith-fan-spin 1s linear infinite',
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 50,
                height: 50,
                borderRadius: '50%',
                zIndex: 1,
                animation: 'edith-ring-pulse 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1)',
              }}
            />
          </div>
          <style>{`
            @keyframes edith-fan-spin { to { transform: rotate(-360deg); } }
            @keyframes edith-ring-pulse {
              0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent, #3b82f6) 70%, transparent); }
              100% { box-shadow: 0 0 0 40px color-mix(in srgb, var(--accent, #3b82f6) 0%, transparent); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Auth screens
  if (fbConfigured && !isAuthenticated) {
    return (
      <div className="h-screen auth-gradient-bg relative overflow-hidden">
        {authScreen === 'login' ? <LoginScreen /> : <RegisterScreen />}
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col bg-bg font-body overflow-hidden relative" style={{ zIndex: 0 }}>
      {/* Floating particles */}
      <FloatingParticles />

      {/* Top bar — universal, always visible */}
      <TopBar />

      {/* Main area: SideRail (desktop) + content */}
      <div className="flex flex-1 min-h-0">
        <SideRail />

        <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-3 md:px-5 py-2 pb-20 md:pb-2 relative" style={{ zIndex: 2 }}>
          <div className={activeTab === 'tracker' ? 'h-full' : 'hidden'}><Suspense fallback={<TabFallback />}><TrackerTab /></Suspense></div>
          <div className={activeTab === 'planner' ? 'h-full' : 'hidden'}><Suspense fallback={<TabFallback />}><PlannerHubTab /></Suspense></div>
          <div className={activeTab === 'performance' ? 'h-full' : 'hidden'}><Suspense fallback={<TabFallback />}><PerformanceTab /></Suspense></div>
          <div className={activeTab === 'edith' ? 'h-full' : 'hidden'}><Suspense fallback={<TabFallback />}><EdithTab /></Suspense></div>
          <div className={activeTab === 'settings' ? 'h-full' : 'hidden'}><Suspense fallback={<TabFallback />}><SettingsTab /></Suspense></div>
        </main>
      </div>

      {/* Mobile bottom bar */}
      <MobileBottomBar />

      {/* Modals */}
      <WelcomeModal />
      <TodayModal />
      <ActionConfirmModal />

      {/* Toasts */}
      <ToastContainer />
    </div>
  );
};

export default App;
