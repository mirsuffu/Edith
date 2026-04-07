# E.D.I.T.H. Project Blueprint (v1.0)
**Date:** April 7, 2026  
**Status:** Stable PWA / Pending Capacitor Migration

## 1. Core Identity & UI/UX State
*   **Default Landing:** The app is configured to land on the **Planner Hub** tab upon authentication.
*   **Top Bar:** Features a CSS-driven vertical ticker for "Days to Lectures" and "Days to Exams". Labels are shortened to "Days" for clarity and to prevent overlap.
*   **Edith AI Chat:** Uses the `SendHorizontal` icon with forced dimensions (`18px`) to solve the 0px rendering bug in some mobile browsers.
*   **Interaction Design:** 
    *   `click.mp3` is triggered only on valid interactive element clicks (buttons, tabs, toggles).
    *   Redundant sound triggers on Modal mount have been removed.
    *   **Welcome Modal:** Streamlined to exclude "Not Now" logic; serves as an essential daily briefing.

## 2. Technical Infrastructure (PWA/Web)
*   **Base URL:** All asset paths are prefixed with `/Edith/` for GitHub Pages compatibility.
*   **Service Worker (`sw-custom.js`):** 
    *   V7 Implementation.
    *   Supports Offline Pre-caching (Workbox).
    *   **Push Notifications:** Correctly parses FCM JSON payloads (checking `notification`, `data`, and root nodes).
    *   **Local Scheduling:** Uses IndexedDB (`edith-notifications`) and `setTimeout` in the background to handle reminders while the app is dormant.

## 3. Data & Sync
*   **Local Storage:** Uses Zustand with a persistent store (`edith-store`) for all user data.
*   **Sync Engine:** Cloud sync is handled via Firebase Firestore, triggered by a debounced listener on store changes.
*   **GitHub Integration:** Personal Access Token (PAT) is used for the AI Logic relay; visibility is restricted to "Editor Mode" in Settings.

## 4. Pending Migration: Android Wrapper (Capacitor)
*   **Objective:** Wrap current web project into an Android APK for deep OS integration.
*   **Key Goals:**
    1.  **Notification Hub:** Move from Service Worker `push` events to **Native FCM SDK** for 100% background delivery reliability.
    2.  **Filesystem Access:** Enable native Import/Export directly into the Android `Downloads` or `Documents` folders.
    3.  **Android Identity:** Target package name (e.g., `com.edith.tracker`) with native logo (512x512).
*   **Risks & Fixes:**
    *   *Google Auth:* Requires adding Android SHA-1 fingerprint to Firebase console.
    *   *Safe Area:* Mobile Bottom Bar may require `env(safe-area-inset-bottom)` tuning.

## 5. Security & Access
*   **Admin/Editor Mode:** A toggle in Settings that reveals hidden/sensitive fields (like the GitHub PAT).
*   **Firebase Config:** Critical keys are stored in `@/config/firebase.ts`.

---
*This blueprint acts as the external memory for E.D.I.T.H. development. Refer to this if the chat context is flushed.*
