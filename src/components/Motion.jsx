import React, { useEffect, useRef, useState } from 'react';

// Shared singleton scroll manager so all Parallax elements share one passive scroll listener + rAF loop
const subscribers = new Set();
let rafId = null;
let listenerAttached = false;

function updateAll() {
  rafId = null;
  subscribers.forEach((cb) => cb());
}

function onScrollOrResize() {
  if (rafId === null) {
    rafId = window.requestAnimationFrame(updateAll);
  }
}

function subscribe(cb) {
  subscribers.add(cb);
  if (!listenerAttached && typeof window !== 'undefined') {
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    listenerAttached = true;
  }
  return () => {
    subscribers.delete(cb);
    if (subscribers.size === 0 && listenerAttached && typeof window !== 'undefined') {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
      listenerAttached = false;
    }
  };
}

/**
 * Scroll-driven parallax container using GPU-accelerated translate3d without React re-renders.
 * @param {number} speed - Vertical travel in px across viewport pass (negative = moves up faster, positive = lags down)
 * @param {number} horizontalSpeed - Optional horizontal drift in px across viewport pass
 * @param {number} baseScale - Base scale (e.g. 1.12 for clipped background photos so edges never reveal)
 */
export function Parallax({
  children,
  speed = -30,
  horizontalSpeed = 0,
  baseScale = 1,
  className = '',
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const updatePosition = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // Normalized position relative to viewport center: -1 (above) to +1 (below)
      const elementCenter = rect.top + rect.height * 0.5;
      const viewportCenter = vh * 0.5;
      const rawProgress = (elementCenter - viewportCenter) / (vh + rect.height * 0.5);
      const progress = Math.max(-1.25, Math.min(1.25, rawProgress));

      const y = (progress * speed).toFixed(2);
      const x = (progress * horizontalSpeed).toFixed(2);
      const scalePart = baseScale !== 1 ? ` scale(${baseScale})` : '';

      el.style.transform = `translate3d(${x}px, ${y}px, 0)${scalePart}`;
    };

    updatePosition();
    return subscribe(updatePosition);
  }, [speed, horizontalSpeed, baseScale]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Smooth IntersectionObserver scroll reveal wrapper.
 */
export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === 'up'
      ? 'translate-y-7'
      : direction === 'down'
      ? '-translate-y-7'
      : direction === 'scale'
      ? 'scale-95'
      : 'translate-y-0';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0 scale-100' : `opacity-0 ${hiddenTransform}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
