import React, { Component, useEffect } from 'react';
import '../../styles/careers.css';
import CareersApp from './src/App';

class CareersErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Careers section rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '120px 24px', textAlign: 'center', background: '#ede6d6', color: '#2a2725', minHeight: '100vh' }}>
          <h2 style={{ fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '16px' }}>Unable to load Careers</h2>
          <p style={{ maxWidth: '500px', margin: '0 auto 24px', opacity: 0.8 }}>
            {this.state.error?.message || 'An unexpected rendering error occurred.'}
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{ padding: '10px 24px', borderRadius: '9999px', background: '#2a2725', color: '#ede6d6', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function CareersView({ onNavigateHome, onNavigateContact, onNavigateBookProject }) {
  useEffect(() => {
    document.title = 'Careers & Studio Life — ROVAWARE Engineering Studio';
    document.body.classList.add('view-careers');
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
      document.body.classList.remove('view-careers');
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="careers-redesign-root">
      {/* Floating Back to Studio Bar */}
      <div
        style={{
          position: 'fixed',
          top: '18px',
          left: '24px',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <button
          type="button"
          onClick={onNavigateHome}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            borderRadius: '9999px',
            background: 'rgba(42, 39, 37, 0.88)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(237, 230, 214, 0.2)',
            color: '#ede6d6',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2a2725';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(42, 39, 37, 0.88)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Studio</span>
        </button>
      </div>

      <CareersErrorBoundary>
        <CareersApp />
      </CareersErrorBoundary>
    </div>
  );
}

