import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Copy,
  Check,
  Bookmark,
  ChevronRight,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { BLOG_ARTICLES } from '../../data/blogData';

export default function ArticleDetailView({
  slug,
  onNavigateBlog,
  onSelectArticle,
  onNavigateHome
}) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('');

  // Find the article
  const article = BLOG_ARTICLES.find((a) => a.slug === slug) || BLOG_ARTICLES[0];

  // Related articles (matching category or topics, excluding current)
  const relatedArticles = BLOG_ARTICLES.filter(
    (a) => a.id !== article.id && (a.category === article.category || (a.topics && a.topics.some(t => article.topics?.includes(t))))
  ).slice(0, 3);

  // Set document title dynamically
  useEffect(() => {
    if (article) {
      document.title = `${article.title} — RovaWare Insights`;
    }
    return () => {
      document.title = 'ROVAWARE — Build • Automate • Scale';
    };
  }, [article]);

  // Scroll spy for Table of Contents
  useEffect(() => {
    const handleScroll = () => {
      if (!article?.sections) return;
      const scrollPos = window.scrollY + 200;
      for (let i = article.sections.length - 1; i >= 0; i--) {
        const sec = article.sections[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(sec.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard?.writeText(url).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    });
  };

  const handleCopyCode = (code, id) => {
    navigator.clipboard?.writeText(code).then(() => {
      setCopiedCodeId(id);
      setTimeout(() => setCopiedCodeId(null), 2500);
    });
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`"${article.title}" by @rovaware`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  if (!article) {
    return (
      <div className="blog-page-root">
        <div className="blog-not-found-container">
          <h2>Article Not Found</h2>
          <p>The requested article could not be located in our research archive.</p>
          <button type="button" className="blog-back-btn" onClick={onNavigateBlog}>
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-detail-root">
      {/* Top Navigation & Breadcrumbs */}
      <div className="blog-detail-header-bar">
        <div className="blog-detail-container">
          <div className="blog-detail-nav-row">
            <button
              type="button"
              className="blog-back-link"
              onClick={onNavigateBlog}
            >
              <ArrowLeft size={15} />
              <span>Back to All Articles</span>
            </button>

            <nav className="blog-detail-breadcrumbs" aria-label="Breadcrumb">
              <button
                type="button"
                className="blog-breadcrumb-link"
                onClick={onNavigateHome}
              >
                Home
              </button>
              <ChevronRight size={12} className="blog-breadcrumb-sep" />
              <button
                type="button"
                className="blog-breadcrumb-link"
                onClick={onNavigateBlog}
              >
                Blog
              </button>
              <ChevronRight size={12} className="blog-breadcrumb-sep" />
              <span className="blog-breadcrumb-current-cat">{article.category}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* ARTICLE HERO */}
      <header className="blog-article-hero">
        <div className="blog-detail-container">
          <div className="blog-article-hero-badge-row">
            <span className="blog-category-pill">{article.category}</span>
            <div className="blog-time-meta">
              <Calendar size={13} />
              <span>{article.publishedAt}</span>
            </div>
            <div className="blog-time-meta">
              <Clock size={13} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="blog-article-hero-title">
            {article.title}
          </h1>

          <p className="blog-article-hero-lead">
            {article.excerpt}
          </p>

          {/* Author and Social Bar */}
          <div className="blog-article-meta-bar">
            <div className="blog-article-author-box">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="blog-article-author-img"
              />
              <div>
                <span className="blog-article-author-name">{article.author.name}</span>
                <span className="blog-article-author-role">{article.author.role}</span>
              </div>
            </div>

            <div className="blog-article-share-actions">
              <button
                type="button"
                className={`blog-share-btn ${copiedLink ? 'copied' : ''}`}
                onClick={handleCopyLink}
                title="Copy Article Link"
              >
                {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedLink ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <button
                type="button"
                className="blog-share-icon-btn"
                onClick={handleShareTwitter}
                title="Share on X / Twitter"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>

              <button
                type="button"
                className="blog-share-icon-btn"
                onClick={handleShareLinkedIn}
                title="Share on LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>

              <button
                type="button"
                className={`blog-share-icon-btn ${isBookmarked ? 'bookmarked' : ''}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
                title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
              >
                <Bookmark size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED MEDIA */}
      <div className="blog-detail-container">
        <div className="blog-article-hero-media">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="blog-article-hero-img"
          />
          <div className="blog-article-hero-img-overlay" />
        </div>
      </div>

      {/* ARTICLE BODY & SIDEBAR */}
      <div className="blog-detail-container">
        <div className="blog-article-layout">
          {/* Main Article Content */}
          <main className="blog-article-content">
            {article.sections?.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="blog-content-section"
              >
                <h2 className="blog-section-heading">
                  {section.heading}
                </h2>

                {section.lead && (
                  <p className="blog-content-lead">
                    {section.lead}
                  </p>
                )}

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="blog-content-p">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="blog-content-list">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx}>
                        <CheckCircle2 size={16} className="blog-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className={`blog-callout blog-callout-${section.callout.type || 'tip'}`}>
                    <div className="blog-callout-header">
                      <span className="blog-callout-badge">
                        {section.callout.type === 'important' ? 'CRITICAL NOTE' : 'PRO TIP'}
                      </span>
                      <h4 className="blog-callout-title">{section.callout.title}</h4>
                    </div>
                    <p className="blog-callout-text">{section.callout.text}</p>
                  </div>
                )}

                {section.codeSnippet && (
                  <div className="blog-code-block">
                    <div className="blog-code-header">
                      <span className="blog-code-filename">
                        {section.codeSnippet.filename || 'Example'}
                      </span>
                      <div className="blog-code-actions">
                        <span className="blog-code-lang">
                          {section.codeSnippet.language}
                        </span>
                        <button
                          type="button"
                          className="blog-code-copy-btn"
                          onClick={() =>
                            handleCopyCode(section.codeSnippet.code, section.id)
                          }
                        >
                          {copiedCodeId === section.id ? (
                            <>
                              <Check size={13} />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <pre className="blog-code-pre">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </section>
            ))}

            {/* AUTHOR BIO CARD */}
            <div className="blog-author-bio-card">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="blog-author-bio-avatar"
              />
              <div className="blog-author-bio-details">
                <span className="blog-author-bio-written">WRITTEN BY</span>
                <h4 className="blog-author-bio-name">{article.author.name}</h4>
                <p className="blog-author-bio-role">{article.author.role}</p>
                <p className="blog-author-bio-text">{article.author.bio}</p>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="blog-bottom-nav">
              <button
                type="button"
                className="blog-bottom-back-btn"
                onClick={onNavigateBlog}
              >
                <ArrowLeft size={16} />
                <span>Return to All Articles</span>
              </button>

              <button
                type="button"
                className="blog-bottom-top-btn"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span>Back to Top</span>
                <ChevronRight size={15} style={{ transform: 'rotate(-90deg)' }} />
              </button>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="blog-article-sidebar">
            <div className="blog-sidebar-sticky-wrapper">
              {/* Table of Contents */}
              {article.tableOfContents && (
                <div className="blog-toc-card">
                  <div className="blog-toc-header">
                    <BookOpen size={16} />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="blog-toc-list">
                    {article.tableOfContents.map((toc) => (
                      <button
                        key={toc.id}
                        type="button"
                        className={`blog-toc-item ${
                          activeSectionId === toc.id ? 'active' : ''
                        }`}
                        onClick={() => scrollToSection(toc.id)}
                      >
                        {toc.title}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Share Card */}
              <div className="blog-sidebar-share-card">
                <h4>Share this analysis</h4>
                <div className="blog-sidebar-share-btns">
                  <button
                    type="button"
                    className="blog-sidebar-btn"
                    onClick={handleShareTwitter}
                  >
                    <span>Share on X</span>
                    <ExternalLink size={13} />
                  </button>
                  <button
                    type="button"
                    className="blog-sidebar-btn"
                    onClick={handleShareLinkedIn}
                  >
                    <span>Share on LinkedIn</span>
                    <ExternalLink size={13} />
                  </button>
                  <button
                    type="button"
                    className="blog-sidebar-btn"
                    onClick={handleCopyLink}
                  >
                    <span>{copiedLink ? 'Copied to Clipboard!' : 'Copy URL'}</span>
                    {copiedLink ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* RELATED ARTICLES SECTION */}
      {relatedArticles.length > 0 && (
        <section className="blog-related-section">
          <div className="blog-detail-container">
            <div className="blog-section-header">
              <div className="blog-section-subtitle">
                <BookOpen size={15} />
                <span>CONTINUE READING</span>
              </div>
              <h2 className="blog-section-title">Related Technical Insights</h2>
            </div>

            <div className="blog-articles-grid">
              {relatedArticles.map((rel) => (
                <article
                  key={rel.id}
                  className="blog-article-card"
                  onClick={() => onSelectArticle(rel.slug)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectArticle(rel.slug)}
                >
                  <div className="blog-card-media">
                    <img
                      src={rel.featuredImage}
                      alt={rel.title}
                      className="blog-card-img"
                      loading="lazy"
                    />
                    <div className="blog-card-overlay" />
                    <span className="blog-category-pill blog-card-pill">
                      {rel.category}
                    </span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta-top">
                      <span className="blog-card-date">
                        <Calendar size={12} />
                        {rel.publishedAt}
                      </span>
                      <span className="blog-card-readtime">
                        <Clock size={12} />
                        {rel.readTime}
                      </span>
                    </div>

                    <h3 className="blog-card-title">{rel.title}</h3>

                    <p className="blog-card-excerpt">{rel.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img
                          src={rel.author.avatar}
                          alt={rel.author.name}
                          className="blog-card-author-avatar"
                        />
                        <span className="blog-card-author-name">{rel.author.name}</span>
                      </div>

                      <span className="blog-card-read-link">
                        <span>Read More</span>
                        <ArrowRight size={13} className="blog-card-read-icon" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

