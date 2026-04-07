/**
 * Sound utility — preloads click sound and exposes
 * global playClick helper.
 *
 * Usage:
 *   import { playClick } from '@/hooks/useSounds';
 *   playClick();   // on tap / click / modal open
 */

const BASE = import.meta.env.BASE_URL;

/* ── Zero-latency Web Audio API ── */

let audioCtx: AudioContext | null = null;
let clickBuffer: AudioBuffer | null = null;

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

import { useEffect, useRef } from 'react';
