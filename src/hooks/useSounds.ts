/**
 * Sound utility — preloads click & pop sounds and exposes
 * global playClick / playPop helpers.
 *
 * Usage:
 *   import { playClick, playPop } from '@/hooks/useSounds';
 *   playClick();   // on tap / click
 *   playPop();     // on modal open / card appear
 */

const BASE = import.meta.env.BASE_URL;

/* ── tiny audio-pool (avoids overlapping-playback glitches) ── */

function createPool(src: string, size = 4): HTMLAudioElement[] {
  return Array.from({ length: size }, () => {
    const a = new Audio(`${BASE}sounds/${src}`);
    a.preload = 'auto';
    a.volume = 0.35;
    return a;
  });
}

let clickPool: HTMLAudioElement[] | null = null;
let popPool: HTMLAudioElement[] | null = null;
let clickIdx = 0;
let popIdx = 0;

function ensurePools() {
  if (!clickPool) clickPool = createPool('click.mp3', 4);
  if (!popPool) popPool = createPool('pop.mp3', 6);
}

export function playClick() {
  try {
    ensurePools();
    const a = clickPool![clickIdx % clickPool!.length];
    clickIdx++;
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch { /* silent */ }
}

export function playPop() {
  try {
    ensurePools();
    const a = popPool![popIdx % popPool!.length];
    popIdx++;
    a.currentTime = 0;
    a.play().catch(() => {});
  } catch { /* silent */ }
}
