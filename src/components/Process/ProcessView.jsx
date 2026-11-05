import React, { useEffect } from 'react';
import ProcessSection from './src/components/Process.jsx';

export default function ProcessView({ onNavigateHome, onNavigateContact, onNavigateBookProject }) {
  useEffect(() => {
    document.title = 'Our Process — ROVAWARE Engineering Studio';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  return (
    <div className="process-page-view" style={{ paddingTop: '72px', minHeight: '100vh', background: '#080a10' }}>
      <ProcessSection />
    </div>
  );
}

