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

/* ── Zero-latency Web Audio API ── */

let audioCtx: AudioContext | null = null;
let clickBuffer: AudioBuffer | null = null;
let popBuffer: AudioBuffer | null = null;

function initAudio() {
  if (typeof window === 'undefined') return;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    audioCtx = new AudioContextClass();

    fetch(`${BASE}sounds/click.mp3`)
      .then(r => r.arrayBuffer())
      .then(b => audioCtx!.decodeAudioData(b))
      .then(buf => { clickBuffer = buf; })
      .catch(() => {});

    fetch(`${BASE}sounds/pop.mp3`)
      .then(r => r.arrayBuffer())
      .then(b => audioCtx!.decodeAudioData(b))
      .then(buf => { popBuffer = buf; })
      .catch(() => {});
  }
}

function playBuffer(buffer: AudioBuffer | null) {
  if (!audioCtx) initAudio();
  if (!audioCtx || !buffer) return;
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  const gain = audioCtx.createGain();
  gain.gain.value = 0.35;
  source.connect(gain);
  gain.connect(audioCtx.destination);
  source.start(0);
}

export function playClick() {
  try { playBuffer(clickBuffer); } catch {}
}

export function playPop() {
  try { playBuffer(popBuffer); } catch {}
}

import { useEffect, useRef } from 'react';

let mountCounter = 0;
let lastMountTime = 0;

export function useCardPop() {
  const hasPopped = useRef(false);
  useEffect(() => {
    if (hasPopped.current) return;
    hasPopped.current = true;

    const now = Date.now();
    if (now - lastMountTime > 100) {
      mountCounter = 0;
    }
    lastMountTime = now;

    const idx = mountCounter++;
    const delay = Math.min(idx * 50, 400);
    const t = setTimeout(() => playPop(), delay);
    return () => clearTimeout(t);
  }, []);
}

