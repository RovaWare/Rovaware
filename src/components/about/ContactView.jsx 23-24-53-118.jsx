import React, { useEffect } from 'react';
import Hero from './contact/src/components/Hero';
import Marquee from './contact/src/components/Marquee';
import ContactSection from './contact/src/components/ContactSection';
import { useRevealObserver } from './contact/src/hooks/useInView';
import { useLenis } from './contact/src/hooks/useLenis';
import '../../styles/contact-new.css';

export default function ContactView({ onNavigateHome, onNavigateBookProject }) {
  useEffect(() => {
    document.title = 'Contact Engineering Leads — ROVAWARE';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.classList.add('is-loaded');

    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
      document.documentElement.classList.remove('is-loaded');
    };
  }, []);

  useLenis(true);
  useRevealObserver(true);

  return (
    <div className="contact-page-wrapper page-root">
      <Hero onNavigateHome={onNavigateHome} />
      <Marquee />
      <ContactSection onNavigateBookProject={onNavigateBookProject} />
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
