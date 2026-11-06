import React from 'react';
import { Sparkles, ArrowUpRight, Play, Check } from 'lucide-react';

/**
 * Saved Previous Hero Section (Archived & Saved in Memory)
 * 
 * Preserved original Hero Section with full-background /assets/hero.mp4,
 * headline, action CTAs, and bottom specs bar.
 * Can be switched back at any time.
 */
export default function PreviousHeroSection({ heroVideoRef }) {
  return (
    <section id="hero" className="hero hero-full-bg">
      {/* Full Background Video Layer */}
      <div className="hero-bg-video-container" aria-hidden="true">
        <video
          ref={heroVideoRef}
          className="hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay" />
        <div className="hero-bg-glow" />
        <div className="hero-ambient-spotlight" />
      </div>

      <div className="hero-grid" />

      {/* Centered High-Impact Copy */}
      <div className="hero-container">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={13} />
            <span>FULL-STACK DEVELOPMENT & AI SOLUTIONS</span>
          </div>
          <h1>
            <span className="hero-title-line">Turn bold ideas into</span> <br />
            <span className="hero-highlight">digital reality.</span>
          </h1>
          <p>
            We build high-performance websites, powerful web applications, and intelligent AI solutions designed to elevate your brand, engage your audience, and grow your business.
          </p>

          <div className="hero-actions">
            <a
              href="#contact"
              className="btn primary"
            >
              Start a Project <ArrowUpRight size={16} />
            </a>
            <a href="#work" className="btn ghost">
              <span className="play-ring">
                <Play size={12} fill="#38BDF8" color="#38BDF8" style={{ marginLeft: 2 }} />
              </span>
              <span>See What We Build</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="hero-footer-bar">
        <div className="hero-specs-list">
          <div className="spec-item">
            <Check size={14} /> <span>High-Performance Web Apps</span>
          </div>
          <div className="spec-item">
            <Check size={14} /> <span>Intelligent AI & LLM Solutions</span>
          </div>
          <div className="spec-item">
            <Check size={14} /> <span>Modern Responsive Architecture</span>
          </div>
          <div className="spec-item">
            <Check size={14} /> <span>Rapid 99+ Speed Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

