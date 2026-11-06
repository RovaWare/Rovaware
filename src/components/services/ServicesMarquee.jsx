import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Code2,
  Smartphone,
  BrainCircuit,
  Workflow,
  Palette,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import '../../styles/ServicesMarquee.css';

// 6 Distinct Service Cards as specified
const SERVICES = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'High-performance websites and digital experiences built for modern businesses.',
    icon: Code2,
    tag: '01 // PLATFORMS',
    actionLabel: 'Explore Architecture',
    slug: 'web-development',
  },
  {
    id: 'app-development',
    title: 'App Development',
    description:
      'Powerful mobile and web applications designed around your business needs.',
    icon: Smartphone,
    tag: '02 // MOBILE',
    actionLabel: 'Explore Mobile',
    slug: 'android-development',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'Intelligent AI-powered products that simplify complex business processes.',
    icon: BrainCircuit,
    tag: '03 // INTELLIGENCE',
    actionLabel: 'Explore AI Systems',
    slug: 'chatbot-integration',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    description:
      'Automate repetitive workflows and connect your business tools.',
    icon: Workflow,
    tag: '04 // AUTOMATION',
    actionLabel: 'Explore Workflows',
    slug: 'saas-scaling',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Intuitive, modern interfaces that make digital experiences effortless.',
    icon: Palette,
    tag: '05 // INTERFACES',
    actionLabel: 'Explore Design Systems',
    slug: 'ui-ux-design',
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    description:
      'Scalable software solutions designed around your unique requirements.',
    icon: Layers,
    tag: '06 // SYSTEMS',
    actionLabel: 'Explore Solutions',
    slug: 'web-development',
  },
];

// Repeat 3 times to guarantee smooth continuous loop across any screen width
const TOTAL_SETS = 3;
const CAROUSEL_ITEMS = Array.from({ length: TOTAL_SETS }, (_, setIdx) =>
  SERVICES.map((service) => ({
    ...service,
    uniqueKey: `${service.id}-set-${setIdx}`,
  }))
).flat();

export default function ServicesMarquee({ onSelectService }) {
  const stageRef = useRef(null);
  const cardElementsRef = useRef([]);

  // Animation timeline state in ref to avoid React state re-renders at 60fps
  const animStateRef = useRef({
    progressX: 0,
    speed: 48, // pixels per second (approx 42-45s per complete sequence)
    isHovered: false,
    isDragging: false,
    dragStartX: 0,
    dragStartProgress: 0,
    hasDragged: false,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Responsive dimensions helper
  const getCardMetrics = useCallback(() => {
    if (typeof window === 'undefined') {
      return { cardWidth: 320, gap: 32, maxAngle: 13, maxDrop: 52 };
    }
    const width = window.innerWidth;
    if (width <= 768) {
      return { cardWidth: 250, gap: 18, maxAngle: 8.5, maxDrop: 32 };
    }
    if (width <= 1024) {
      return { cardWidth: 290, gap: 24, maxAngle: 11, maxDrop: 42 };
    }
    return { cardWidth: 320, gap: 32, maxAngle: 13, maxDrop: 52 };
  }, []);

  // Main 60fps Animation Loop
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let animFrameId = null;
    let lastTime = performance.now();

    const updateCarousel = (currentTime) => {
      animFrameId = requestAnimationFrame(updateCarousel);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const stageWidth = stage.clientWidth || window.innerWidth;
      const centerX = stageWidth / 2;

      const { cardWidth, gap, maxAngle, maxDrop } = getCardMetrics();
      const cardStep = cardWidth + gap;
      const cycleWidth = SERVICES.length * cardStep;
      const totalTrackWidth = CAROUSEL_ITEMS.length * cardStep;

      const state = animStateRef.current;

      // Update right-to-left linear drift when not dragging and motion allowed
      if (!state.isDragging && !prefersReducedMotion) {
        state.progressX += state.speed * delta;
        // Seamless wrap around single cycle
        if (state.progressX >= cycleWidth) {
          state.progressX -= cycleWidth;
        } else if (state.progressX < 0) {
          state.progressX += cycleWidth;
        }
      }

      // Compute and apply 3D perspective transforms to each card
      for (let i = 0; i < CAROUSEL_ITEMS.length; i++) {
        const cardEl = cardElementsRef.current[i];
        if (!cardEl) continue;

        const baseOffset = i * cardStep - state.progressX;

        // Wrap relative to center coordinate within [-totalTrackWidth/2, totalTrackWidth/2]
        let relX = (baseOffset - centerX) % totalTrackWidth;
        if (relX < -totalTrackWidth / 2) relX += totalTrackWidth;
        if (relX > totalTrackWidth / 2) relX -= totalTrackWidth;

        // Normalized distance from center (-1: left edge of half-stage, +1: right edge)
        const normalized = relX / (stageWidth * 0.48);

        // Center card is straight (0 deg); outer cards progressively rotate
        // Right side rotates clockwise (> 0), Left side rotates counterclockwise (< 0)
        const rotation =
          Math.sign(normalized) *
          Math.pow(Math.abs(normalized), 0.94) *
          maxAngle;

        // Curved perspective arc: cards drop down as they move away from center
        const arcDrop = Math.pow(Math.abs(normalized), 1.65) * maxDrop;

        // Scale: center card is largest (1.0), edges slightly smaller
        const scale = Math.max(0.86, 1 - Math.abs(normalized) * 0.075);

        // Z-Index: center card has highest stacking priority
        const zIndex = Math.round(
          (2.5 - Math.min(Math.abs(normalized), 2.5)) * 40
        );

        // Opacity: smoothly culls cards as they exit viewport bounds
        const opacity = Math.max(
          0,
          Math.min(1, 1 - (Math.abs(normalized) - 1.25) * 2.5)
        );

        // Actual card X position in stage
        const posX = centerX + relX - cardWidth / 2;

        // Apply hardware-accelerated transforms
        cardEl.style.transform = `translate3d(${posX}px, ${arcDrop}px, 0) rotate(${rotation}deg) scale(${scale})`;
        cardEl.style.zIndex = zIndex;
        cardEl.style.opacity = opacity;
      }
    };

    animFrameId = requestAnimationFrame(updateCarousel);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [getCardMetrics, prefersReducedMotion]);

  // Pointer / Mouse Drag Support (scrub horizontal carousel)
  const handlePointerDown = (e) => {
    animStateRef.current.isDragging = true;
    animStateRef.current.dragStartX = e.clientX;
    animStateRef.current.dragStartProgress = animStateRef.current.progressX;
    animStateRef.current.hasDragged = false;
  };

  const handlePointerMove = (e) => {
    if (!animStateRef.current.isDragging) return;
    const diff = e.clientX - animStateRef.current.dragStartX;
    if (Math.abs(diff) > 4) {
      animStateRef.current.hasDragged = true;
    }
    // Invert diff so dragging left advances right-to-left
    animStateRef.current.progressX =
      animStateRef.current.dragStartProgress - diff;
  };

  const handlePointerUp = () => {
    animStateRef.current.isDragging = false;
  };

  const handleCardClick = (slug, e) => {
    if (animStateRef.current.hasDragged) {
      e.preventDefault();
      return;
    }
    if (onSelectService) {
      e.preventDefault();
      onSelectService(slug);
    }
  };

  return (
    <section
      className="services-marquee-section"
      aria-label="Capabilities and Services"
    >
      {/* Atmospheric Ambient Lighting */}
      <div className="marquee-ambient-glow marquee-glow-center" aria-hidden="true" />
      <div className="marquee-ambient-glow marquee-glow-left" aria-hidden="true" />
      <div className="marquee-ambient-glow marquee-glow-right" aria-hidden="true" />
      <div className="marquee-grid-overlay" aria-hidden="true" />

      {/* 3. Section Heading (Centered) */}
      <div className="services-marquee-header">
        <div className="marquee-eyebrow">
          <span className="marquee-eyebrow-dot" />
          <span className="marquee-eyebrow-text">OUR CAPABILITIES</span>
        </div>

        <h2 className="marquee-headline">
          TECHNOLOGY THAT{' '}
          <span className="marquee-highlight-blue">
            MOVES YOUR BUSINESS FORWARD.
          </span>
        </h2>

        <p className="marquee-description">
          Explore the digital solutions we create to help ambitious businesses
          grow, innovate, and scale.
        </p>
      </div>

      {/* 5. Perspective & Infinite Curved Marquee Stage */}
      <div
        ref={stageRef}
        className="services-marquee-stage"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => {
          animStateRef.current.isHovered = true;
        }}
        onMouseLeave={() => {
          animStateRef.current.isHovered = false;
          animStateRef.current.isDragging = false;
        }}
      >
        {/* Subtle curved horizon arc tracing the perspective path */}
        <div className="marquee-curve-backdrop" aria-hidden="true">
          <svg
            className="marquee-curve-svg"
            viewBox="0 0 1600 240"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#315EFF" stopOpacity="0" />
                <stop offset="25%" stopColor="#315EFF" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.45" />
                <stop offset="75%" stopColor="#315EFF" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#315EFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,220 Q 800,45 1600,220"
              stroke="url(#arcGlow)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Left & Right Edge Vignette / Masks for seamless infinite entrance */}
        <div className="marquee-stage-mask-left" aria-hidden="true" />
        <div className="marquee-stage-mask-right" aria-hidden="true" />

        {/* Dynamic Cards Track */}
        <div className="services-marquee-track">
          {CAROUSEL_ITEMS.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <a
                key={card.uniqueKey}
                ref={(el) => (cardElementsRef.current[idx] = el)}
                href={`/services/${card.slug}`}
                className="marquee-card-item"
                onClick={(e) => handleCardClick(card.slug, e)}
                aria-label={`${card.title} — ${card.description}`}
              >
                {/* Card Top: Icon & Category Tag */}
                <div className="marquee-card-header">
                  <div className="marquee-card-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="marquee-card-tag">{card.tag}</span>
                </div>

                {/* Card Body: Title & Description */}
                <div className="marquee-card-body">
                  <h3 className="marquee-card-title">{card.title}</h3>
                  <p className="marquee-card-desc">{card.description}</p>
                </div>

                {/* Card Bottom: Interactive Arrow & Label */}
                <div className="marquee-card-footer">
                  <span className="marquee-card-action-label">
                    {card.actionLabel}
                  </span>
                  <div className="marquee-card-arrow-circle" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

