import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { Pause, Play } from 'lucide-react';
import type { ScentId } from '../data';
import '../film-controls.css';

/** Local media is requested only near the viewport; playback stops offscreen. */
export function LocalFilm({ scent, playing, className = '', controls = false }: {
  scent: ScentId;
  playing?: boolean;
  className?: string;
  controls?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [manual, setManual] = useState<boolean | null>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const requested = manual ?? playing ?? !reduced;

  useEffect(() => {
    const el = wrapper.current;
    if (!el) return;
    const lazy = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setNear(true);
    }, { rootMargin: '150px' });
    const active = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .12 });
    lazy.observe(el);
    active.observe(el);
    return () => { lazy.disconnect(); active.disconnect(); };
  }, []);

  useEffect(() => {
    setFailed(false);
    setReady(false);
    setIsPlaying(false);
  }, [scent]);

  // A new external playback instruction replaces the previous local choice.
  useEffect(() => { setManual(null); }, [scent, playing]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const syncPlayback = () => {
      if (near && visible && requested && !document.hidden && !failed) {
        void el.play().catch((error: unknown) => {
          // Scrolling away can interrupt a pending play request normally.
          if (!cancelled && !(error instanceof DOMException && error.name === 'AbortError')) {
            setFailed(true);
            setIsPlaying(false);
          }
        });
      } else {
        el.pause();
      }
    };
    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', syncPlayback);
      el.pause();
    };
  }, [scent, near, visible, requested, failed]);

  const togglePlayback = () => {
    const el = ref.current;
    if (!el) return;
    if (!el.paused && !failed) {
      setManual(false);
      el.pause();
      return;
    }
    setManual(true);
    setFailed(false);
    if (el.error) el.load();
    // Keep retry inside the user gesture when autoplay was refused.
    if (near && visible && !document.hidden) {
      void el.play().catch((error: unknown) => {
        if (ref.current === el && !(error instanceof DOMException && error.name === 'AbortError')) {
          setFailed(true);
          setIsPlaying(false);
        }
      });
    }
  };

  return <div ref={wrapper} className={`local-film ${className}`} data-ready={ready && !failed}>
    <img className="film-poster" src={`/images/${scent}-poster.jpg`} alt="" loading="lazy" />
    <video
      ref={ref}
      key={scent}
      src={near ? `/videos/${scent}.mp4` : undefined}
      poster={`/images/${scent}-poster.jpg`}
      muted playsInline loop preload="none"
      aria-label={`${scent} abstract fragrance identity film`}
      onLoadedData={() => setReady(true)}
      onPlay={() => setIsPlaying(true)}
      onPlaying={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onEnded={() => setIsPlaying(false)}
      onError={() => { setFailed(true); setReady(false); setIsPlaying(false); }}
    />
    {controls && <button
      type="button"
      className="local-film-control"
      aria-label={isPlaying && !failed ? 'Pause fragrance film' : 'Play fragrance film'}
      title={isPlaying && !failed ? 'Pause fragrance film' : 'Play fragrance film'}
      onClick={togglePlayback}
    >
      {isPlaying && !failed
        ? <Pause size={19} strokeWidth={1.8} aria-hidden="true" />
        : <Play size={19} strokeWidth={1.8} aria-hidden="true" />}
    </button>}
  </div>;
}
