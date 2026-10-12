/**
 * Continuous Background Music Player using HTML5 Audio.
 * Features:
 * - Clean re-encoded MP3 with standard headers to prevent Chrome/Safari 5-second demuxer cut-offs
 * - Auto-recovery from unintended browser/system pauses and buffer stalls
 * - Seamless continuous looping with 'ended' event fallback
 * - Cross-device interaction unlocking for mobile & desktop
 */

import { loveConfig } from '../config';

type StateChangeListener = (isPlaying: boolean) => void;

class RomanticMusicPlayer {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private userPaused: boolean = false;
  private listeners: Set<StateChangeListener> = new Set();
  private interactionAttached: boolean = false;
  private resumeTimeout: number | null = null;

  // Re-encoded clean standard CBR 128k MP3 with valid headers and timestamps
  private primaryUrl: string = '/audio/bgm.mp3';
  // User's remote fallback URL
  private remoteUrl: string = loveConfig.musicUrl || 'https://www.image2url.com/r2/default/audio/1789977176306-f7718b82-8f57-4f17-b942-263b50e21f0c.mp3';

  private getAudio(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;

    if (!this.audio) {
      try {
        let el = document.getElementById('app-bg-audio') as HTMLAudioElement | null;
        if (!el) {
          el = document.createElement('audio');
          el.id = 'app-bg-audio';
          el.loop = true;
          el.preload = 'auto';
          el.volume = 0.85;
          el.setAttribute('playsinline', 'true');
          el.setAttribute('webkit-playsinline', 'true');

          el.src = this.primaryUrl;

          // Keep in DOM with zero visual footprint so browsers don't suspend it
          el.style.position = 'fixed';
          el.style.bottom = '0px';
          el.style.right = '0px';
          el.style.width = '1px';
          el.style.height = '1px';
          el.style.opacity = '0.01';
          el.style.pointerEvents = 'none';

          document.body.appendChild(el);
        }

        // --- PLAYBACK EVENT HANDLERS ---
        el.addEventListener('play', () => {
          this.isPlaying = true;
          if (this.resumeTimeout) {
            window.clearTimeout(this.resumeTimeout);
            this.resumeTimeout = null;
          }
          this.notify();
        });

        el.addEventListener('playing', () => {
          this.isPlaying = true;
          this.notify();
        });

        el.addEventListener('pause', () => {
          if (this.userPaused) {
            // User explicitly requested pause
            this.isPlaying = false;
            this.notify();
          } else {
            // Browser or buffer stalled/interrupted playback; auto-recover
            this.scheduleAutoResume();
          }
        });

        // Loop failsafe when track ends
        el.addEventListener('ended', () => {
          if (!this.userPaused && this.audio) {
            this.audio.currentTime = 0;
            this.audio.play().catch(() => {});
          }
        });

        // Stalled or waiting recovery
        el.addEventListener('stalled', () => {
          if (!this.userPaused) {
            this.scheduleAutoResume();
          }
        });

        el.addEventListener('error', (e) => {
          console.warn('Audio stream error, attempting fallback source:', e);
          if (this.audio && this.audio.src !== this.remoteUrl) {
            this.audio.src = this.remoteUrl;
            this.audio.load();
            if (!this.userPaused) {
              this.audio.play().catch(() => {});
            }
          }
        });

        this.audio = el;
      } catch (err) {
        console.warn('Audio initialization error:', err);
      }
    }

    return this.audio;
  }

  /**
   * Automatically recovers playback if the browser pauses it without user consent
   * (e.g. during tab unfocus, low memory, or network buffer lag).
   */
  private scheduleAutoResume() {
    if (this.userPaused) return;

    if (this.resumeTimeout) {
      window.clearTimeout(this.resumeTimeout);
    }

    this.resumeTimeout = window.setTimeout(() => {
      if (!this.userPaused && this.audio && this.audio.paused) {
        this.audio.play().then(() => {
          this.isPlaying = true;
          this.notify();
        }).catch(() => {
          // If browser policy requires user interaction, keep isPlaying in sync
          this.isPlaying = false;
          this.notify();
        });
      }
    }, 150);
  }

  public subscribe(listener: StateChangeListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlaying);
      } catch (err) {
        console.error('Error notifying audio listener:', err);
      }
    });
  }

  public async play(): Promise<boolean> {
    this.userPaused = false;
    const sound = this.getAudio();
    if (!sound) return false;

    try {
      await sound.play();
      this.isPlaying = true;
      this.notify();
      return true;
    } catch {
      this.isPlaying = false;
      this.notify();
      return false;
    }
  }

  public stop() {
    this.userPaused = true;
    if (this.resumeTimeout) {
      window.clearTimeout(this.resumeTimeout);
      this.resumeTimeout = null;
    }
    const sound = this.getAudio();
    if (sound) {
      sound.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      return await this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getUserPaused(): boolean {
    return this.userPaused;
  }

  /**
   * Attaches one-time interaction listeners across user actions
   * to guarantee audio unlocks seamlessly without getting cut off.
   */
  public attemptAutoplay() {
    if (this.userPaused) return;

    this.play().then((started) => {
      if (started) return;

      if (!this.interactionAttached && typeof window !== 'undefined') {
        this.interactionAttached = true;

        const unlockAudio = () => {
          if (!this.userPaused && !this.isPlaying) {
            this.play();
          }
          cleanup();
        };

        const cleanup = () => {
          window.removeEventListener('click', unlockAudio);
          window.removeEventListener('touchstart', unlockAudio);
          window.removeEventListener('pointerdown', unlockAudio);
          window.removeEventListener('keydown', unlockAudio);
          document.removeEventListener('click', unlockAudio);
          document.removeEventListener('touchstart', unlockAudio);
        };

        window.addEventListener('click', unlockAudio, { once: true, passive: true });
        window.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
        window.addEventListener('pointerdown', unlockAudio, { once: true, passive: true });
        window.addEventListener('keydown', unlockAudio, { once: true, passive: true });
        document.addEventListener('click', unlockAudio, { once: true, passive: true });
        document.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
      }
    });
  }
}

export const musicPlayer = new RomanticMusicPlayer();
