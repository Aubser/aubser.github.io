"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAnimatedTransform } from "@/hooks/useAnimatedTransform";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  title: string;
  subtitle: string;
  images: CarouselImage[];
}

export default function Carousel({ title, subtitle, images }: CarouselProps) {
  const TOTAL      = images.length;
  const SLIDE_W    = 520;
  const SLIDE_GAP  = 24;
  const SLIDE_FULL = SLIDE_W + SLIDE_GAP;

  const trackRef    = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef<boolean>(false);
  const trackPos    = useRef<number>(TOTAL);
  const touchStartX = useRef<number>(0);

  const [currentReal, setCurrentReal] = useState<number>(0);

  const allImages = [...images, ...images, ...images];

  // ── Animated transform hooks ─────────────────────────────────────
  const { ref: titleRef,    style: titleStyle    } = useAnimatedTransform({ direction: "down", distance: 16, threshold: 0.2 });
  const { ref: subtitleRef, style: subtitleStyle } = useAnimatedTransform({ direction: "up",   distance: 16, threshold: 0.2 });
  const { ref: carouselRef, style: carouselStyle } = useAnimatedTransform({ direction: "up",   distance: 32, threshold: 0.1 });
  const { ref: dotsRef,     style: dotsStyle     } = useAnimatedTransform({ direction: "up",   distance: 16, threshold: 0.1 });

  // ── Offset Calculation ───────────────────────────────────────────
  const getOffset = useCallback((idx: number): number => {
    if (!viewportRef.current) return 0;
    const vpW = viewportRef.current.getBoundingClientRect().width;
    return (vpW / 2) - (idx * SLIDE_FULL) - (SLIDE_FULL / 2) + (SLIDE_GAP / 2);
  }, [SLIDE_FULL, SLIDE_GAP]);

  // ── Update active slide styles ───────────────────────────────────
  const updateVisuals = useCallback((idx: number, real: number): void => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>('.carousel-slide');
    slides.forEach((s: HTMLElement, i: number) => {
      if (i === idx) {
        s.style.transform = 'scale(1)';
        s.style.opacity   = '1';
        s.style.filter    = 'brightness(1)';
      } else {
        s.style.transform = 'scale(0.82)';
        s.style.opacity   = '0.45';
        s.style.filter    = 'brightness(0.6)';
      }
    });
    setCurrentReal(real);
  }, []);

  // ── Instant jump (no animation) ──────────────────────────────────
  const setInstant = useCallback((idx: number): void => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.querySelectorAll<HTMLElement>('.carousel-slide');
    slides.forEach((s: HTMLElement) => s.style.transition = 'none');
    track.style.transition = 'none';
    track.getBoundingClientRect();
    track.style.transform = `translateX(${getOffset(idx)}px)`;
    const real = ((idx - TOTAL) % TOTAL + TOTAL) % TOTAL;
    updateVisuals(idx, real);
  }, [getOffset, TOTAL, updateVisuals]);

  // ── Animated move ────────────────────────────────────────────────
  const animateTo = useCallback((idx: number): void => {
    const track = trackRef.current;
    if (!track) return;
    isAnimating.current = true;
    track.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform  = `translateX(${getOffset(idx)}px)`;
    const real = ((idx - TOTAL) % TOTAL + TOTAL) % TOTAL;
    updateVisuals(idx, real);
  }, [getOffset, TOTAL, updateVisuals]);

  // ── Navigate ─────────────────────────────────────────────────────
  const next = useCallback((): void => {
    if (isAnimating.current) return;
    trackPos.current += 1;
    animateTo(trackPos.current);
  }, [animateTo]);

  const prev = useCallback((): void => {
    if (isAnimating.current) return;
    trackPos.current -= 1;
    animateTo(trackPos.current);
  }, [animateTo]);

  // ── Transition end: silent loop reset ────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTransitionEnd = (e: TransitionEvent): void => {
      if (e.target !== track || e.propertyName !== 'transform') return;

      if (trackPos.current < TOTAL) {
        trackPos.current = trackPos.current + TOTAL;
      } else if (trackPos.current >= TOTAL * 2) {
        trackPos.current = trackPos.current - TOTAL;
      } else {
        isAnimating.current = false;
        return;
      }

      track.style.transition = 'none';
      const slides = track.querySelectorAll<HTMLElement>('.carousel-slide');
      slides.forEach((s: HTMLElement) => s.style.transition = 'none');
      track.getBoundingClientRect();
      track.style.transform = `translateX(${getOffset(trackPos.current)}px)`;
      const real = ((trackPos.current - TOTAL) % TOTAL + TOTAL) % TOTAL;
      updateVisuals(trackPos.current, real);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          slides.forEach((s: HTMLElement) => s.style.transition = `
            transform 0.55s cubic-bezier(0.4, 0, 0.2, 1),
            opacity   0.55s ease,
            filter    0.55s ease
          `);
          track.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
          isAnimating.current = false;
        });
      });
    };

    track.addEventListener('transitionend', onTransitionEnd);
    return () => track.removeEventListener('transitionend', onTransitionEnd);
  }, [TOTAL, getOffset, updateVisuals]);

  // ── Init + resize ────────────────────────────────────────────────
  useEffect(() => {
    setInstant(trackPos.current);
    viewportRef.current?.focus({ preventScroll: true });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;
        const slides = track.querySelectorAll<HTMLElement>('.carousel-slide');
        slides.forEach((s: HTMLElement) => s.style.transition = `
          transform 0.55s cubic-bezier(0.4, 0, 0.2, 1),
          opacity   0.55s ease,
          filter    0.55s ease
        `);
        track.style.transition = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';
        isAnimating.current = false;
      });
    });

    const onResize = (): void => setInstant(trackPos.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setInstant]);

  // ── Keyboard ─────────────────────────────────────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [next, prev]);

  // ── Touch ────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
  };

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="flex justify-center items-center w-full">
      <section className="w-full max-w-6xl px-5 py-10 text-center flex flex-col justify-center min-h-[90vh]">

        {/* Title */}
        <h2
          ref={titleRef}
          style={titleStyle}
          className="text-3xl lg:text-4xl font-bold mb-4"
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={subtitleStyle}
          className="text-base lg:text-lg leading-relaxed mb-6"
        >
          {subtitle}
        </p>

        {/* Carousel */}
        <div
          ref={carouselRef}
          style={carouselStyle}
          className="relative flex items-center justify-center"
        >

          {/* Prev */}
          <button
            onClick={() => { prev(); viewportRef.current?.focus(); }}
            className="absolute left-4 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur text-white text-2xl flex items-center justify-center hover:bg-black/80 transition-colors select-none"
          >&#8249;</button>

          {/* Viewport */}
          <div
            ref={viewportRef}
            className="w-full overflow-hidden outline-none"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
              if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex items-center"
              style={{ willChange: 'transform' }}
            >
              {allImages.map((img: CarouselImage, i: number) => (
                <div
                  key={i}
                  className="carousel-slide flex-none rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    width:     `${SLIDE_W}px`,
                    height:    '320px',
                    margin:    `0 ${SLIDE_GAP / 2}px`,
                    transform: 'scale(0.82)',
                    opacity:   0.45,
                    filter:    'brightness(0.6)',
                  }}
                  onClick={() => {
                    if (isAnimating.current || i === trackPos.current) return;
                    const diff = i - trackPos.current;
                    if (Math.abs(diff) === 1) diff > 0 ? next() : prev();
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover block pointer-events-none select-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => { next(); viewportRef.current?.focus(); }}
            className="absolute right-4 z-10 w-11 h-11 rounded-full bg-black/60 backdrop-blur text-white text-2xl flex items-center justify-center hover:bg-black/80 transition-colors select-none"
          >&#8250;</button>

        </div>

        {/* Dots */}
        <div
          ref={dotsRef}
          style={dotsStyle}
          className="flex justify-center gap-2 mt-7"
        >
          {images.map((_: CarouselImage, i: number) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => {
                if (isAnimating.current || i === currentReal) return;
                trackPos.current = TOTAL + i;
                animateTo(trackPos.current);
                viewportRef.current?.focus();
              }}
              className="w-2.5 h-2.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300"
              style={{
                background: i === currentReal ? '#fff' : '#525252',
                transform:  i === currentReal ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>

      </section>
    </div>
  );
}