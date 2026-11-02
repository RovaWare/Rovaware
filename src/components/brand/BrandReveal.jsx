import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, X, Sparkles, ArrowRight } from 'lucide-react';
import '../../styles/brand-reveal.css';

/**
 * ROVAWARE — Premium Cinematic Particle-Based Brand Reveal Animation
 * 
 * Concept:
 * Thousands of tiny glowing orange particles materialize from the cosmic void,
 * follow 3D swirling trajectories, accelerate toward center, and gradually assemble
 * to crystallize the exact typography of "ROVAWARE".
 * 
 * Sequence:
 * 1. Intro: Black screen, ambient glowing particles drift in 3D space, volumetric rays appear.
 * 2. Particle Formation: Particles accelerate along curved streamline attractors and assemble into ROVAWARE.
 * 3. Brand Reveal: Bright orange energy flash, crystalline illuminated wordmark, laser underline, and tagline reveal.
 * 4. Interactive Mode: Cursor causes fluid dispersion with magnetic spring recovery, ambient floating embers.
 */

export default function BrandReveal({
  onComplete,
  onClose,
  standalone = false,
  autoStart = true
}) {
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);
  const flashOverlayRef = useRef(null);
  
  // State for HUD & UI
  const [phase, setPhase] = useState('intro'); // 'intro' | 'forming' | 'revealed' | 'interactive'
  const [particleCount, setParticleCount] = useState(0);
  const [isUnderlineIlluminated, setIsUnderlineIlluminated] = useState(false);
  const [isTaglineRevealed, setIsTaglineRevealed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // References for physics and timeline
  const particlesRef = useRef([]);
  const ambientParticlesRef = useRef([]);
  const shockwavesRef = useRef([]);
  const timelineRef = useRef({
    startTime: 0,
    elapsed: 0,
    hasFlashed: false,
    hasAssembled: false
  });
  const mouseRef = useRef({ x: -9999, y: -9999, active: false, radius: 120 });
  const textBoundsRef = useRef({ width: 0, height: 0, x: 0, y: 0 });

  // Pre-rendered sprite textures for fast particle rendering with radial glow
  const spritesRef = useRef({
    orange: null,
    brightOrange: null,
    white: null
  });

  // Create glowing particle sprites
  const initSprites = useCallback(() => {
    const createParticleSprite = (innerColor, outerColor) => {
      const sCanvas = document.createElement('canvas');
      const size = 32;
      sCanvas.width = size;
      sCanvas.height = size;
      const sCtx = sCanvas.getContext('2d');
      const center = size / 2;
      
      const grad = sCtx.createRadialGradient(center, center, 0, center, center, center);
      grad.addColorStop(0, innerColor);
      grad.addColorStop(0.35, outerColor);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      
      sCtx.fillStyle = grad;
      sCtx.beginPath();
      sCtx.arc(center, center, center, 0, Math.PI * 2);
      sCtx.fill();
      return sCanvas;
    };

    spritesRef.current.orange = createParticleSprite('#FFFFFF', '#FF6A00');
    spritesRef.current.brightOrange = createParticleSprite('#FFFFFF', '#FF8C32');
    spritesRef.current.white = createParticleSprite('#FFFFFF', 'rgba(255, 255, 255, 0.4)');
  }, []);

  // Generate target coordinates by rasterizing "ROVAWARE" onto an offscreen canvas
  const generateTextTargets = useCallback((width, height) => {
    const offscreen = document.createElement('canvas');
    offscreen.width = width;
    offscreen.height = height;
    const offCtx = offscreen.getContext('2d');

    // Scale font size based on viewport width
    const fontSize = Math.min(Math.max(width * 0.12, 42), 125);
    offCtx.fillStyle = '#FFFFFF';
    offCtx.font = `900 ${fontSize}px 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`;
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';

    const textY = height / 2 - 18;
    offCtx.fillText('ROVAWARE', width / 2, textY);

    const metrics = offCtx.measureText('ROVAWARE');
    textBoundsRef.current = {
      width: metrics.width,
      height: fontSize,
      x: width / 2 - metrics.width / 2,
      y: textY - fontSize / 2
    };

    const imgData = offCtx.getImageData(0, 0, width, height);
    const data = imgData.data;
    const targets = [];

    // Step size balances high fidelity letter shapes with silky-smooth 60fps performance
    const step = width < 768 ? 4 : 3;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const alpha = data[index + 3];

        if (alpha > 130) {
          targets.push({
            tx: x,
            ty: y,
            tz: (Math.random() - 0.5) * 20
          });
        }
      }
    }

    return targets;
  }, []);

  // Initialize all particles
  const initParticles = useCallback((width, height) => {
    const targets = generateTextTargets(width, height);
    const particles = [];
    const centerX = width / 2;
    const centerY = height / 2;

    // 1. Text formation particles
    targets.forEach((target, i) => {
      // Spawn particles scattered in 3D outer vortex space
      const angle = Math.random() * Math.PI * 2;
      const distance = 400 + Math.random() * (Math.max(width, height) * 0.85);
      const spawnZ = (Math.random() - 0.5) * 1000;

      const ox = centerX + Math.cos(angle) * distance;
      const oy = centerY + Math.sin(angle) * distance;
      const oz = spawnZ;

      // Color distribution: vibrant orange, bright highlight, crystalline white
      const colorRand = Math.random();
      let spriteType = 'orange';
      if (colorRand > 0.75) spriteType = 'brightOrange';
      if (colorRand > 0.94) spriteType = 'white';

      particles.push({
        // Current position
        x: ox,
        y: oy,
        z: oz,
        // Origin
        ox: ox,
        oy: oy,
        oz: oz,
        // Target (where it forms the letter)
        tx: target.tx,
        ty: target.ty,
        tz: target.tz,
        // Velocities
        vx: 0,
        vy: 0,
        vz: 0,
        // Attributes
        size: 1.2 + Math.random() * 1.6,
        spriteType,
        stagger: Math.random() * 1.4, // Staggered arrival for cinematic organic streaming
        swirlAngle: (Math.random() - 0.5) * 4,
        alpha: 0.15 + Math.random() * 0.85,
        sparkleSpeed: 0.02 + Math.random() * 0.04,
        sparklePhase: Math.random() * Math.PI * 2
      });
    });

    particlesRef.current = particles;
    setParticleCount(particles.length);

    // 2. Cosmic ambient floating particles (independent drifting particles)
    const ambient = [];
    const ambientCount = width < 768 ? 90 : 180;
    for (let i = 0; i < ambientCount; i++) {
      ambient.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: (Math.random() - 0.5) * 600,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4 - 0.15, // Gentle upward drift
        size: 1.0 + Math.random() * 2.2,
        spriteType: Math.random() > 0.4 ? 'orange' : 'brightOrange',
        alpha: 0.2 + Math.random() * 0.6
      });
    }
    ambientParticlesRef.current = ambient;
  }, [generateTextTargets]);

  // Trigger bright cinematic energy flash
  const triggerEnergyFlash = useCallback(() => {
    if (flashOverlayRef.current) {
      flashOverlayRef.current.style.opacity = '0.75';
      setTimeout(() => {
        if (flashOverlayRef.current) {
          flashOverlayRef.current.style.transition = 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
          flashOverlayRef.current.style.opacity = '0';
        }
      }, 40);
    }

    // Add bright shockwave ring
    const canvas = canvasRef.current;
    if (canvas) {
      shockwavesRef.current.push({
        x: canvas.width / (2 * (window.devicePixelRatio || 1)),
        y: canvas.height / (2 * (window.devicePixelRatio || 1)) - 18,
        radius: 10,
        maxRadius: Math.max(canvas.width, canvas.height) * 0.6,
        alpha: 0.85,
        speed: 18
      });
    }
  }, []);

  // Reset & Replay the animation sequence
  const handleReplay = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    setPhase('intro');
    setIsUnderlineIlluminated(false);
    setIsTaglineRevealed(false);

    timelineRef.current = {
      startTime: performance.now(),
      elapsed: 0,
      hasFlashed: false,
      hasAssembled: false
    };

    // Re-scatter existing particles to outer 3D vortex
    const centerX = width / 2;
    const centerY = height / 2;

    particlesRef.current.forEach((p) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 400 + Math.random() * (Math.max(width, height) * 0.85);
      p.ox = centerX + Math.cos(angle) * distance;
      p.oy = centerY + Math.sin(angle) * distance;
      p.oz = (Math.random() - 0.5) * 1000;
      p.x = p.ox;
      p.y = p.oy;
      p.z = p.oz;
      p.vx = 0;
      p.vy = 0;
      p.vz = 0;
    });
  }, []);

  // Gracefully close / transition to site
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) onClose();
      if (onComplete) onComplete();
    }, 550);
  }, [onClose, onComplete]);

  // Main Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    initSprites();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles(width, height);
    };

    resize();
    window.addEventListener('resize', resize);

    timelineRef.current.startTime = performance.now();

    // Mouse movement listeners for interactive particle physics
    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const onTouchEnd = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Easing helper
    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    // Render loop
    const render = (now) => {
      animFrameId.current = requestAnimationFrame(render);

      if (isPaused) return;

      const elapsedSec = (now - timelineRef.current.startTime) / 1000;
      timelineRef.current.elapsed = elapsedSec;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // 1. Clear with subtle trail motion blur
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      // Phase transitions based on timeline
      // Intro: 0s -> 1.5s
      // Forming: 1.5s -> 4.2s
      // Reveal Flash: 4.2s -> 4.8s
      // Interactive: 4.8s+

      if (elapsedSec < 1.5) {
        if (phase !== 'intro') setPhase('intro');
      } else if (elapsedSec < 4.2) {
        if (phase !== 'forming') setPhase('forming');
      } else if (!timelineRef.current.hasFlashed) {
        timelineRef.current.hasFlashed = true;
        setPhase('revealed');
        triggerEnergyFlash();
        setIsUnderlineIlluminated(true);
        setTimeout(() => {
          setIsTaglineRevealed(true);
          setPhase('interactive');
        }, 650);
      }

      // Additive blending for photonic glowing particles
      ctx.globalCompositeOperation = 'lighter';

      const particles = particlesRef.current;
      const ambient = ambientParticlesRef.current;
      const mouse = mouseRef.current;

      // 2. Render Cosmic Ambient Particles
      for (let i = 0; i < ambient.length; i++) {
        const ap = ambient[i];
        ap.x += ap.vx;
        ap.y += ap.vy;

        // Wrap around screen
        if (ap.x < 0) ap.x = width;
        if (ap.x > width) ap.x = 0;
        if (ap.y < 0) ap.y = height;
        if (ap.y > height) ap.y = 0;

        const sprite = spritesRef.current[ap.spriteType] || spritesRef.current.orange;
        ctx.globalAlpha = ap.alpha * (0.4 + Math.sin(now * 0.002 + i) * 0.2);
        const sz = ap.size * 10;
        ctx.drawImage(sprite, ap.x - sz / 2, ap.y - sz / 2, sz, sz);
      }

      // 3. Render Shockwaves
      const shockwaves = shockwavesRef.current;
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha *= 0.95;

        if (sw.alpha < 0.01 || sw.radius > sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(255, 106, 0, ${sw.alpha})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = '#FF8C32';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // 4. Update & Render ROVAWARE Letter Particles
      const isForming = elapsedSec >= 1.5;
      const isAssembled = elapsedSec >= 4.2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!isForming) {
          // Intro Phase: subtle 3D floating Brownian drift
          const t = now * 0.001 + i * 0.02;
          p.x = p.ox + Math.sin(t) * 15;
          p.y = p.oy + Math.cos(t * 0.8) * 15;
        } else if (!isAssembled) {
          // Forming Phase: smoothly accelerate toward target letter position
          // Normalized time accounting for staggered particle entry
          const particleTime = Math.max(0, elapsedSec - 1.5 - p.stagger);
          const formDuration = 2.2;
          const progress = Math.min(1, particleTime / formDuration);
          const ease = easeInOutCubic(progress);

          // Swirling vortex trajectory toward target
          const currentSwirl = (1 - ease) * p.swirlAngle * 2.5;
          const cosS = Math.cos(currentSwirl);
          const sinS = Math.sin(currentSwirl);

          const dx = p.tx - p.ox;
          const dy = p.ty - p.oy;

          const rotatedDx = dx * cosS - dy * sinS;
          const rotatedDy = dx * sinS + dy * cosS;

          p.x = p.ox + rotatedDx * ease;
          p.y = p.oy + rotatedDy * ease;
          p.z = p.oz * (1 - ease) + p.tz * ease;
        } else {
          // Revealed & Interactive Phase:
          // Subtle organic breathing motion around letter coordinates
          const breath = Math.sin(now * 0.002 + i * 0.1) * 0.6;
          const targetX = p.tx + (p.tz > 0 ? breath : -breath);
          const targetY = p.ty + breath;

          // Mouse-follow interaction force field (cursor repulsion with spring return)
          if (mouse.active) {
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const dist = Math.hypot(mdx, mdy);

            if (dist < mouse.radius && dist > 0) {
              const force = (1 - dist / mouse.radius) * 16;
              p.vx += (mdx / dist) * force;
              p.vy += (mdy / dist) * force;
            }
          }

          // Magnetic spring physics restoring particles to exact letter target
          const spring = 0.075;
          const friction = 0.85;

          const ax = (targetX - p.x) * spring;
          const ay = (targetY - p.y) * spring;

          p.vx = (p.vx + ax) * friction;
          p.vy = (p.vy + ay) * friction;

          p.x += p.vx;
          p.y += p.vy;
        }

        // 3D Perspective Projection
        const fov = 750;
        const scale = Math.max(0.2, fov / (fov + (p.z || 0)));
        const renderSize = p.size * scale * (isAssembled ? 11 : 14);

        // Alpha calculation
        let alpha = p.alpha;
        if (!isForming) {
          alpha = Math.min(0.7, elapsedSec * 0.5) * p.alpha;
        } else if (isAssembled) {
          // Sparkle highlight
          const sparkle = Math.sin(now * p.sparkleSpeed + p.sparklePhase);
          alpha = 0.75 + sparkle * 0.25;
        }

        const sprite = spritesRef.current[p.spriteType] || spritesRef.current.orange;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
        ctx.drawImage(sprite, p.x - renderSize / 2, p.y - renderSize / 2, renderSize, renderSize);
      }

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [initParticles, initSprites, isPaused, phase, triggerEnergyFlash]);

  return (
    <div className={`brand-reveal-overlay ${isClosing ? 'fade-out' : ''}`}>
      {/* Canvas Particle Simulation Viewport */}
      <div className="brand-reveal-canvas-container">
        <canvas ref={canvasRef} className="brand-reveal-canvas" />
      </div>

      {/* Volumetric Radial Glow & Light Rays */}
      <div className={`brand-reveal-ambient-glow ${phase === 'revealed' || phase === 'interactive' ? 'active' : ''}`} />
      <div className={`brand-reveal-light-rays ${phase !== 'intro' ? 'active' : ''}`} />

      {/* Energy Flash Shockwave Overlay */}
      <div ref={flashOverlayRef} className="brand-reveal-flash-overlay" />

      {/* Subtle Cinematic Grain Texture */}
      <div className="brand-reveal-grain" />

      {/* HUD Telemetry Header */}
      <header className="brand-reveal-hud-header">
        <div className="brand-reveal-hud-left">
          <div className="brand-reveal-status-pill">
            <span className="brand-reveal-status-indicator" />
            <span>
              {phase === 'intro' && 'Synthesizing Particles'}
              {phase === 'forming' && 'Assembling ROVAWARE'}
              {phase === 'revealed' && 'Wordmark Crystallized'}
              {phase === 'interactive' && 'Interactive Particle Field'}
            </span>
          </div>
          <span className="brand-reveal-particle-count">
            {particleCount.toLocaleString()} PHOTON PARTICLES
          </span>
        </div>

        <div className="brand-reveal-controls">
          <button
            type="button"
            className="brand-reveal-btn"
            onClick={handleReplay}
            title="Replay Reveal Animation"
          >
            <RotateCcw className="brand-reveal-btn-icon" />
            <span>Replay</span>
          </button>

          <button
            type="button"
            className="brand-reveal-btn"
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume Simulation' : 'Pause Simulation'}
          >
            <Play className="brand-reveal-btn-icon" style={{ transform: isPaused ? 'none' : 'rotate(90deg)' }} />
            <span>{isPaused ? 'Resume' : 'Pause'}</span>
          </button>

          {!standalone && (
            <button
              type="button"
              className="brand-reveal-btn primary"
              onClick={handleClose}
              title="Enter Website"
            >
              <span>Enter Platform</span>
              <ArrowRight className="brand-reveal-btn-icon" />
            </button>
          )}

          {onClose && (
            <button
              type="button"
              className="brand-reveal-btn"
              onClick={handleClose}
              title="Close Reveal"
              style={{ padding: '8px 10px' }}
            >
              <X className="brand-reveal-btn-icon" />
            </button>
          )}
        </div>
      </header>

      {/* Typography Overlay: Laser Underline & Tagline */}
      <div className="brand-reveal-typography-layer">
        <div className="brand-reveal-wordmark-container">
          {/* Laser Underline beneath formed particles */}
          <div className="brand-reveal-laser-line-wrapper">
            <div className={`brand-reveal-laser-line ${isUnderlineIlluminated ? 'illuminated' : ''}`}>
              <div className="brand-reveal-laser-photon" />
            </div>
          </div>

          {/* Tagline: Engineering the Digital Future */}
          <div className={`brand-reveal-tagline-box ${isTaglineRevealed ? 'revealed' : ''}`}>
            <span className="brand-reveal-tagline-dot" />
            <h2 className="brand-reveal-tagline">Engineering the Digital Future.</h2>
            <span className="brand-reveal-tagline-dot" />
          </div>
        </div>
      </div>

      {/* Bottom Hint on Desktop */}
      <div className={`brand-reveal-footer-hint ${phase === 'interactive' ? 'active' : ''}`}>
        <div className="brand-reveal-mouse-icon">
          <span className="brand-reveal-mouse-dot" />
        </div>
        <span className="brand-reveal-hint-text">Move cursor to interact with digital particle field</span>
      </div>
    </div>
  );
}

