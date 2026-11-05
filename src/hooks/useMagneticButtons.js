import { useEffect } from 'react';

/**
 * useMagneticButtons
 * Luxury magnetic cursor pull effect for buttons and CTAs (like Awwwards / luxury studio sites).
 * 
 * When mouse cursor approaches within the magnetic radius of a button,
 * the button smoothly translates toward the cursor. The inner text/icon also
 * moves with secondary parallax for a tactile, 3D magnetic feel.
 * When cursor leaves, the button smoothly springs back to its initial position.
 * 
 * Works seamlessly across desktop browsers; automatically disabled on touch devices.
 */
export function useMagneticButtons(
  selector = '[data-magnetic], .btn-magnetic, .btn-nav-cta, .btn-callback-nav, .about-action .btn',
  options = {}
) {
  const {
    defaultStrength = 0.35,
    textStrengthMultiplier = 0.45,
    radiusMultiplier = 1.35
  } = options;

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined' || !window.matchMedia?.('(pointer: fine)').matches) {
      return;
    }

    const tracked = new Map();

    const registerElement = (el) => {
      if (tracked.has(el)) return;
      
      const strength = el.dataset.magnetic ? parseFloat(el.dataset.magnetic) : defaultStrength;
      const inners = el.querySelectorAll('span, svg, .play-ring');

      tracked.set(el, {
        el,
        strength: isNaN(strength) ? defaultStrength : strength,
        inners: Array.from(inners),
        active: false,
        currentX: 0,
        currentY: 0
      });
    };

    const scanElements = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(registerElement);
    };

    scanElements();

    // Re-scan when DOM changes (e.g., dynamic views, modal popups)
    const observer = new MutationObserver(() => {
      scanElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    const handleMouseMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;

      tracked.forEach((item, el) => {
        // Skip elements no longer in document or hidden
        if (!document.body.contains(el) || el.offsetParent === null) {
          return;
        }

        const r = el.getBoundingClientRect();
        
        // Compute un-transformed center by subtracting current displacement
        const cx = (r.left + r.width / 2) - item.currentX;
        const cy = (r.top + r.height / 2) - item.currentY;

        const distX = mx - cx;
        const distY = my - cy;
        const dist = Math.hypot(distX, distY);
        const radius = Math.max(r.width, r.height) * radiusMultiplier;

        if (dist < radius) {
          item.active = true;
          // Magnetic displacement
          const moveX = distX * item.strength;
          const moveY = distY * item.strength;

          item.currentX = moveX;
          item.currentY = moveY;

          el.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)';
          el.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;

          // Secondary parallax on inner text & icons
          const innerMoveX = moveX * textStrengthMultiplier;
          const innerMoveY = moveY * textStrengthMultiplier;

          item.inners.forEach((inner) => {
            inner.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0.2, 1)';
            inner.style.transform = `translate3d(${innerMoveX.toFixed(2)}px, ${innerMoveY.toFixed(2)}px, 0)`;
          });
        } else if (item.active) {
          // Release with spring snap-back
          item.active = false;
          item.currentX = 0;
          item.currentY = 0;

          el.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.4, 0.35, 1)';
          el.style.transform = 'translate3d(0, 0, 0)';

          item.inners.forEach((inner) => {
            inner.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.4, 0.35, 1)';
            inner.style.transform = 'translate3d(0, 0, 0)';
          });
        }
      });
    };

    // When cursor leaves window, release all active buttons
    const handleMouseLeaveWindow = () => {
      tracked.forEach((item) => {
        if (item.active) {
          item.active = false;
          item.currentX = 0;
          item.currentY = 0;
          item.el.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.4, 0.35, 1)';
          item.el.style.transform = 'translate3d(0, 0, 0)';
          item.inners.forEach((inner) => {
            inner.style.transition = 'transform 0.65s cubic-bezier(0.25, 1.4, 0.35, 1)';
            inner.style.transform = 'translate3d(0, 0, 0)';
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);

      // Reset any modified inline styles on unmount
      tracked.forEach((item) => {
        item.el.style.transform = '';
        item.el.style.transition = '';
        item.inners.forEach((inner) => {
          inner.style.transform = '';
          inner.style.transition = '';
        });
      });
      tracked.clear();
    };
  }, [selector, defaultStrength, textStrengthMultiplier, radiusMultiplier]);
}

export default useMagneticButtons;

