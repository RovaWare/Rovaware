import React, { useRef, useEffect } from 'react';

/**
 * MagneticButton / Magnetic Wrapper
 * Wrap any button or link to give it a magnetic pull effect towards the cursor.
 * 
 * Example:
 * <MagneticButton strength={0.35}>
 *   <button className="btn primary">Start a Project</button>
 * </MagneticButton>
 */
export default function MagneticButton({
  children,
  strength = 0.35,
  textStrength = 0.15,
  radiusMultiplier = 1.35,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof window === 'undefined' || !window.matchMedia?.('(pointer: fine)').matches) {
      return;
    }

    let active = false;
    let currentX = 0;
    let currentY = 0;

    const inners = el.querySelectorAll('span, svg, .play-ring');

    const handleMouseMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = (r.left + r.width / 2) - currentX;
      const cy = (r.top + r.height / 2) - currentY;

      const distX = e.clientX - cx;
      const distY = e.clientY - cy;
      const dist = Math.hypot(distX, distY);
      const radius = Math.max(r.width, r.height) * radiusMultiplier;

      if (dist < radius) {
        active = true;
        currentX = distX * strength;
        currentY = distY * strength;

        el.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)';
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

        inners.forEach((inner) => {
          inner.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)';
          inner.style.transform = `translate3d(${(distX * textStrength).toFixed(2)}px, ${(distY * textStrength).toFixed(2)}px, 0)`;
        });
      } else if (active) {
        release();
      }
    };

    const release = () => {
      active = false;
      currentX = 0;
      currentY = 0;

      el.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.4, 0.35, 1)';
      el.style.transform = 'translate3d(0, 0, 0)';

      inners.forEach((inner) => {
        inner.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.4, 0.35, 1)';
        inner.style.transform = 'translate3d(0, 0, 0)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', release);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', release);
      el.style.transform = '';
      el.style.transition = '';
      inners.forEach((inner) => {
        inner.style.transform = '';
        inner.style.transition = '';
      });
    };
  }, [strength, textStrength, radiusMultiplier]);

  return (
    <Component
      ref={containerRef}
      className={`magnetic-wrapper inline-block ${className}`}
      style={{ display: 'inline-block', willChange: 'transform', ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}

