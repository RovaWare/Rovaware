import React, { useEffect } from 'react';
import BookProjectApp from './src/App';
import '../../../styles/book-project-new.css';

export default function BookProjectView({ onNavigateHome, onNavigateContact }) {
  useEffect(() => {
    document.title = 'Book a Project — ROVAWARE Engineering Studio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, []);

  return (
    <div className="book-project-page-root">
      <BookProjectApp hideNav={true} hideFooter={true} />
    </div>
  );
}

