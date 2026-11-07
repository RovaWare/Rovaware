import React, { useState, useEffect } from 'react';
import '../../styles/intro-loader.css';

/**
 * ROVAWARE — Initial Website Loading Component
 * Minimal dark screen with official logo reveal, specular blue-to-cyan light sweep,
 * and high-precision progress trace.
 * Shows only ONCE per browser session via sessionStorage.
 */
export default function InitialIntroLoader({ onFinish }) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Only show on the first visit per browser session
    try {
      const alreadySeen = sessionStorage.getItem('rovaware_session_intro_shown');
      if (alreadySeen) {
        setShouldRender(false);
        if (onFinish) onFinish();
        return;
      }
    } catch {
      // In case private mode blocks sessionStorage
    }

    setShouldRender(true);

    // Fast, crisp 1.4s duration — never blocks user
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1300);

    const finishTimer = setTimeout(() => {
      setShouldRender(false);
      try {
        sessionStorage.setItem('rovaware_session_intro_shown', 'true');
      } catch {
        // Fallback
      }
      if (onFinish) onFinish();
    }, 1750);

    // Allow user to click or press any key to skip immediately
    const handleSkip = () => {
      setIsFadingOut(true);
      setTimeout(() => {
        setShouldRender(false);
        try {
          sessionStorage.setItem('rovaware_session_intro_shown', 'true');
        } catch {}
        if (onFinish) onFinish();
      }, 200);
    };

    window.addEventListener('keydown', handleSkip, { once: true });

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
      window.removeEventListener('keydown', handleSkip);
    };
  }, [onFinish]);

  if (!shouldRender) return null;

  return (
    <div
      className={`intro-loader-backdrop ${isFadingOut ? 'is-fading-out' : ''}`}
      aria-label="RovaWare Loading"
      role="dialog"
      aria-modal="true"
    >
      {/* Ambient Radial Glow */}
      <div className="intro-loader-ambient" aria-hidden="true" />

      {/* Center Stage Brand Reveal */}
      <div className="intro-loader-stage">
        <div className="intro-loader-brand">
          <img
            src="/assets/rovaware_icon.png?v=12"
            alt="RovaWare Logo"
            className="intro-loader-icon"
          />
          <span className="intro-loader-divider" aria-hidden="true" />
          <div className="intro-loader-text-group">
            <div className="intro-loader-title">
              <span className="part-rova">ROVA</span>
              <span className="part-ware">WARE</span>
              {/* Blue-Cyan Light Sweep Shimmer */}
              <div className="intro-loader-sweep" aria-hidden="true" />
            </div>
            <div className="intro-loader-tagline">
              ENGINEERING THE DIGITAL FUTURE
            </div>
          </div>
        </div>

        {/* Minimal High-Precision Trace Progress Bar */}
        <div className="intro-loader-progress-wrap" aria-hidden="true">
          <div className="intro-loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}

