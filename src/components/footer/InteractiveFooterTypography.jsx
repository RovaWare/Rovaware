import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

/**
 * THEME_CONFIG
 * Route-aware themes matching RovaWare's design system:
 * - 'deep-blue': Electric Blue (#38BDF8) & Indigo (#6366F1) on Home, Blog, Article
 * - 'orange-black': Vibrant Orange (#FF8C32) & Sunset Amber (#FF6A00) on Services, About Company, Book a Project
 * - 'emerald-green': Neon Mint (#10B981) & Emerald (#059669) on Contact
 */
const THEME_CONFIG = {
  'deep-blue': {
    name: 'deep-blue',
    accent: '#38BDF8',
    accentRgb: [56, 189, 248],
    secondaryRgb: [99, 102, 241],
    rovaBaseRgb: [240, 246, 252],
    rovaBaseAlpha: 0.85,
    wareBaseAlpha: 0.92,
    glowLine: 'rgba(56, 189, 248, 0.45)',
    dotGlow: '0 0 10px #38BDF8, 0 0 18px rgba(56, 189, 248, 0.65)',
    pillBorder: 'rgba(56, 189, 248, 0.25)',
  },
  'orange-black': {
    name: 'orange-black',
    accent: '#FF8C32',
    accentRgb: [255, 140, 50],
    secondaryRgb: [255, 106, 0],
    rovaBaseRgb: [255, 245, 237],
    rovaBaseAlpha: 0.85,
    wareBaseAlpha: 0.92,
    glowLine: 'rgba(255, 140, 50, 0.45)',
    dotGlow: '0 0 10px #FF8C32, 0 0 18px rgba(255, 140, 50, 0.65)',
    pillBorder: 'rgba(255, 140, 50, 0.25)',
  },
  'emerald-green': {
    name: 'emerald-green',
    accent: '#10B981',
    accentRgb: [16, 185, 129],
    secondaryRgb: [5, 150, 105],
    rovaBaseRgb: [240, 253, 244],
    rovaBaseAlpha: 0.85,
    wareBaseAlpha: 0.92,
    glowLine: 'rgba(16, 185, 129, 0.45)',
    dotGlow: '0 0 10px #10B981, 0 0 18px rgba(16, 185, 129, 0.65)',
    pillBorder: 'rgba(16, 185, 129, 0.25)',
  },
  'rose-gold': {
    name: 'rose-gold',
    accent: '#D8B56A',
    accentRgb: [216, 181, 106],
    secondaryRgb: [229, 164, 197],
    rovaBaseRgb: [245, 239, 242],
    rovaBaseAlpha: 0.85,
    wareBaseAlpha: 0.92,
    glowLine: 'rgba(216, 181, 106, 0.45)',
    dotGlow: '0 0 10px #D8B56A, 0 0 18px rgba(229, 164, 197, 0.65)',
    pillBorder: 'rgba(216, 181, 106, 0.25)',
  },
};

export default function InteractiveFooterTypography({ theme = 'deep-blue' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    lastX: -9999,
    lastY: -9999,
    speed: 0,
    active: false,
    radius: 125,
  });
  const shockwavesRef = useRef([]);
  const [isInteracting, setIsInteracting] = useState(false);

  // Active theme configuration
  const currentThemeConfig = useMemo(() => {
    return THEME_CONFIG[theme] || THEME_CONFIG['deep-blue'];
  }, [theme]);

  // Keep a ref to the active theme config so the 60fps render loop always has latest values
  const themeRef = useRef(currentThemeConfig);
  useEffect(() => {
    themeRef.current = currentThemeConfig;
  }, [currentThemeConfig]);

  // Character sets: ROVA on left half, WARE on right half
  const ROVA_CHARS = ['R', 'O', 'V', 'A'];
  const WARE_CHARS = ['W', 'A', 'R', 'E'];

  // Initialize or rebuild particle grid based on container dimensions
  const initParticles = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    // Responsive height
    const height = width < 480 ? 64 : width < 768 ? 105 : 235;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    // Optimized grid spacing for high density & crisp readability
    const gap = width < 480 ? 5.5 : width < 768 ? 6.5 : 7.2;
    const charSize = Math.max(6, Math.floor(gap * 0.92));

    // Offscreen canvas for typography rasterization & sampling
    const offscreen = document.createElement('canvas');
    offscreen.width = width;
    offscreen.height = height;
    const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
    if (!offCtx) return;

    // Calculate maximum font size that fits "ROVAWARE" cleanly
    let fontSize = Math.min(width * 0.175, height * 0.85);
    offCtx.font = `900 ${fontSize}px "Orbitron", "Plus Jakarta Sans", -apple-system, sans-serif`;
    if ('letterSpacing' in offCtx) {
      offCtx.letterSpacing = `${Math.max(2, Math.round(fontSize * 0.04))}px`;
    }
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';

    // Constrain width with margins so it stays fully visible
    const maxTextWidth = width * 0.94;
    let measured = offCtx.measureText('ROVAWARE').width;
    if (measured > maxTextWidth) {
      fontSize = Math.floor(fontSize * (maxTextWidth / measured));
      offCtx.font = `900 ${fontSize}px "Orbitron", "Plus Jakarta Sans", -apple-system, sans-serif`;
      if ('letterSpacing' in offCtx) {
        offCtx.letterSpacing = `${Math.max(2, Math.round(fontSize * 0.03))}px`;
      }
    }

    // Render large solid text to sample pixel alpha
    offCtx.fillStyle = '#ffffff';
    offCtx.fillText('ROVAWARE', width / 2, height / 2);

    // Read pixel buffer
    let imgData;
    try {
      imgData = offCtx.getImageData(0, 0, width, height).data;
    } catch {
      return;
    }

    const newParticles = [];
    const centerX = width / 2;
    let rovaIdx = 0;
    let wareIdx = 0;

    // Sample across grid
    for (let y = gap / 2; y < height; y += gap) {
      for (let x = gap / 2; x < width; x += gap) {
        const px = Math.floor(x);
        const py = Math.floor(y);
        const idx = (py * width + px) * 4;
        const alpha = imgData[idx + 3];

        if (alpha > 70) {
          const isWare = x >= centerX;
          let char;
          if (isWare) {
            char = WARE_CHARS[wareIdx % WARE_CHARS.length];
            wareIdx++;
          } else {
            char = ROVA_CHARS[rovaIdx % ROVA_CHARS.length];
            rovaIdx++;
          }

          newParticles.push({
            originX: x,
            originY: y,
            x: x + (Math.random() - 0.5) * 6,
            y: y + (Math.random() - 0.5) * 6,
            vx: 0,
            vy: 0,
            char,
            isWare,
            size: charSize,
            highlight: 0,
            seed: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    particlesRef.current = newParticles;
    mouseRef.current.radius = width < 480 ? 80 : width < 768 ? 100 : 130;
  }, []);

  // Set up listeners and animation loop
  useEffect(() => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        initParticles();
      });
    } else {
      initParticles();
    }

    // Resize observer
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initParticles();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Animation physics loop
    let lastTime = performance.now();

    const render = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const radiusSq = mouse.radius * mouse.radius;
      const activeTheme = themeRef.current;

      // Update shockwaves
      const shockwaves = shockwavesRef.current;
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += 540 * dt;
        sw.strength *= 0.92;
        if (sw.radius > sw.maxRadius || sw.strength < 0.05) {
          shockwaves.splice(s, 1);
        }
      }

      // Track interaction state
      let activeHighlightCount = 0;

      // Setup typography font
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const [themeR, themeG, themeB] = activeTheme.accentRgb;
      const [secR, secG, secB] = activeTheme.secondaryRgb;
      const [rovaR, rovaG, rovaB] = activeTheme.rovaBaseRgb;

      // Iterate through particles
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // 1. Mouse Repulsion / Magnetic Scattering
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < radiusSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = (mouse.radius - dist) / mouse.radius; // 0 to 1
            const repulsePower = Math.pow(force, 1.5) * (14 + Math.min(mouse.speed * 0.9, 32));
            const angle = Math.atan2(dy, dx);

            // Outward thrust
            p.vx += Math.cos(angle) * repulsePower * 0.45;
            p.vy += Math.sin(angle) * repulsePower * 0.45;

            // Highlight luminescence
            p.highlight = Math.min(1, p.highlight + force * 1.5);
            activeHighlightCount++;
          } else {
            p.highlight = Math.max(0, p.highlight - 0.035);
          }
        } else {
          p.highlight = Math.max(0, p.highlight - 0.035);
        }

        // 2. Shockwave blast impulses
        for (let s = 0; s < shockwaves.length; s++) {
          const sw = shockwaves[s];
          const sdx = p.x - sw.x;
          const sdy = p.y - sw.y;
          const sdist = Math.hypot(sdx, sdy);
          const diff = Math.abs(sdist - sw.radius);

          if (diff < 45) {
            const sforce = (1 - diff / 45) * sw.strength * 22;
            const sangle = Math.atan2(sdy, sdx);
            p.vx += Math.cos(sangle) * sforce;
            p.vy += Math.sin(sangle) * sforce;
            p.highlight = Math.min(1, p.highlight + 0.9);
          }
        }

        // 3. Ambient Idle Wave
        const ambientWave = Math.sin(currentTime * 0.002 + p.originX * 0.016 + p.seed) * 1.2;
        const targetX = p.originX;
        const targetY = p.originY + ambientWave;

        // 4. Spring Damping Physics
        const spring = 0.082;
        const friction = 0.83;

        p.vx += (targetX - p.x) * spring;
        p.vy += (targetY - p.y) * spring;

        p.vx *= friction;
        p.vy *= friction;

        p.x += p.vx;
        p.y += p.vy;

        // 5. Theme-Aware Color Rendering:
        // ROVA = White / Platinum (matching the logo's ROVA)
        // WARE = Theme Accent Color (Electric Blue on Home, Orange on Services, Emerald on Contact)
        const h = p.highlight;
        let r, g, b, a;

        if (p.isWare) {
          // WARE: Rich Theme Accent Color with luminous core on hover
          if (h > 0.01) {
            r = Math.round(themeR + (255 - themeR) * h * 0.85);
            g = Math.round(themeG + (255 - themeG) * h * 0.85);
            b = Math.round(themeB + (255 - themeB) * h * 0.85);
            a = Math.min(1, activeTheme.wareBaseAlpha + 0.15 * h).toFixed(3);
          } else {
            r = themeR;
            g = themeG;
            b = themeB;
            a = activeTheme.wareBaseAlpha.toFixed(3);
          }
        } else {
          // ROVA: Crisp Pure White / Platinum with theme glow on hover
          if (h > 0.01) {
            r = Math.round(rovaR + (255 - rovaR) * h);
            g = Math.round(rovaG + (themeG - rovaG) * (h * 0.6));
            b = Math.round(rovaB + (themeB - rovaB) * (h * 0.6));
            a = Math.min(1, activeTheme.rovaBaseAlpha + 0.15 * h).toFixed(3);
          } else {
            r = rovaR;
            g = rovaG;
            b = rovaB;
            a = activeTheme.rovaBaseAlpha.toFixed(3);
          }
        }

        ctx.font = `700 ${p.size}px "JetBrains Mono", "Plus Jakarta Sans", monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      setIsInteracting(activeHighlightCount > 0 || shockwaves.length > 0);

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [initParticles]);

  // Pointer event handlers
  const handlePointerMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    const mouse = mouseRef.current;
    if (mouse.lastX > -9000) {
      mouse.speed = Math.hypot(currentX - mouse.lastX, currentY - mouse.lastY);
    }
    mouse.lastX = currentX;
    mouse.lastY = currentY;
    mouse.x = currentX;
    mouse.y = currentY;
    mouse.active = true;
  };

  const handlePointerLeave = () => {
    const mouse = mouseRef.current;
    mouse.active = false;
    mouse.x = -9999;
    mouse.y = -9999;
    mouse.lastX = -9999;
    mouse.lastY = -9999;
    mouse.speed = 0;
  };

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    shockwavesRef.current.push({
      x: clickX,
      y: clickY,
      radius: 5,
      maxRadius: Math.min(canvas.clientWidth * 0.45, 260),
      strength: 1.0,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`footer-typography-section theme-${currentThemeConfig.name}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      role="region"
      aria-label="Interactive RovaWare Wordmark Typography"
    >
      {/* Decorative Brand Header & Interaction Guide */}
      <div className="footer-typog-header">
        <div
          className="footer-typog-pill"
          style={{ borderColor: currentThemeConfig.pillBorder }}
        >
          <span
            className="footer-typog-dot"
            style={{
              background: currentThemeConfig.accent,
              boxShadow: isInteracting
                ? currentThemeConfig.dotGlow
                : `0 0 6px ${currentThemeConfig.accent}80`,
              transform: isInteracting ? 'scale(1.3)' : 'scale(1)',
            }}
          />
          <span className="footer-typog-label">KINETIC TYPOGRAPHY SYSTEM</span>
        </div>
        <div className="footer-typog-hint">
          <span>MOVE CURSOR TO DISTORT</span>
          <span className="hint-divider" style={{ color: currentThemeConfig.accent }}>•</span>
          <span>CLICK TO SCATTER</span>
        </div>
      </div>

      {/* Canvas Layer */}
      <div className="footer-typog-canvas-wrap">
        <canvas ref={canvasRef} className="footer-typog-canvas" />
      </div>

      {/* Theme Accent Bottom Ambient Glow Rule */}
      <div
        className="footer-typog-glow-line"
        style={{
          background: `linear-gradient(90deg, transparent, ${currentThemeConfig.glowLine} 50%, transparent)`,
        }}
      />
    </div>
  );
}
