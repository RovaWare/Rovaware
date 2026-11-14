import React, { useEffect } from 'react';
import CareersApp from './src/App.jsx';
import '../../styles/careers.css';

export default function CareersView({ onNavigateHome, onNavigateContact, onNavigateBookProject }) {
  useEffect(() => {
    document.title = 'Careers & Open Roles — ROVAWARE Engineering Studio';
    window.scrollTo({ top: 0, behavior: 'instant' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  return (
    <div className="careers-redesign-root">
      <CareersApp
        onNavigateHome={onNavigateHome}
        onNavigateContact={onNavigateContact}
        onNavigateBookProject={onNavigateBookProject}
      />
    </div>
  );
}
