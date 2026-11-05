import React, { useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useSpring,
} from 'framer-motion';
import clsx from 'clsx';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Calendar,
  Clock,
  Eye,
  ThumbsUp,
  Link2,
  Check,
  Bookmark,
  ChevronRight,
  BookOpen,
  Copy,
  Sparkles,
} from 'lucide-react';

import '../../styles/blog.css';
import { getArticleBySlug, getRelatedArticles } from './blogData';

/* Syntax Highlighting Utilities */
const KEYWORDS = /\b(import|from|export|const|let|var|function|return|async|await|class|new|interface|type|extends|implements|private|public|if|else|try|catch|throw|this|typeof|default|for|of|while|switch|case|break|null|undefined|true|false)\b/g;

function highlightLine(line) {
  const parts = [];
  const commentIdx = line.indexOf('//');
  let codePart = line;
  let commentPart = '';
  if (commentIdx >= 0 && !/['"`]/.test(line.slice(0, commentIdx))) {
    codePart = line.slice(0, commentIdx);
    commentPart = line.slice(commentIdx);
  }

  const literalRegex = /('[^']*'|"[^"]*"|`[^`]*`)|(\b\d+(?:\.\d+)?\b)/g;
  let lastIdx = 0;
  let match;

  const pushTokens = (str, prefix) => {
    str.split(KEYWORDS).forEach((seg, i) => {
      if (i % 2 === 1) {
        parts.push(<span key={`${prefix}-kw-${i}`} className="tk-kw">{seg}</span>);
      } else if (seg) {
        parts.push(<span key={`${prefix}-plain-${i}`}>{seg}</span>);
      }
    });
  };

  while ((match = literalRegex.exec(codePart)) !== null) {
    pushTokens(codePart.slice(lastIdx, match.index), `p${match.index}`);
    parts.push(
      <span
        key={`lit-${match.index}`}
        className={match[1] ? 'tk-str' : 'tk-num'}
      >
        {match[0]}
      </span>
    );
    lastIdx = match.index + match[0].length;
  }
  pushTokens(codePart.slice(lastIdx), 'end');

  if (commentPart) {
    parts.push(<span key="cm" className="tk-cm">{commentPart}</span>);
  }

  return parts;
}

function CodeBlock({ code = '', language = 'typescript', filename = 'Example.ts' }) {
  const [copied, setCopied] = useState(false);
  const lines = code.trim().split('\n');

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="blog-code-block">
      <div className="blog-code-header">
        <span className="blog-code-filename">{filename}</span>
        <div className="blog-code-actions">
          <span className="blog-code-lang">{language}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="blog-code-copy-btn"
            title="Copy code"
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
      <pre className="blog-code-pre">
        <code>
          {lines.map((line, idx) => (
            <div key={idx} className="blog-code-line">
              <span className="blog-code-ln">{idx + 1}</span>
              <span className="blog-code-content">{highlightLine(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

function TwitterIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function ArticleDetailView({
  slug,
  onNavigateBlog,
  onSelectArticle,
  onNavigateHome,
}) {
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeTocId, setActiveTocId] = useState('');

  // Scroll reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Table of contents active spy
  useEffect(() => {
    if (!article?.sections?.length) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = article.sections.length - 1; i >= 0; i--) {
        const sec = article.sections[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTocId(sec.id);
          return;
        }
      }
      setActiveTocId(article.sections[0].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      });
    }
  };

  const handleShareTwitter = () => {
    if (!article) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${article.title} via RovaWare Engineering`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    if (!article) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  if (!article) {
    return (
      <div className="blog-page-root" style={{ minHeight: '80vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '16px' }}>Article Not Found</h2>
          <p style={{ color: '#94A3B8', marginBottom: '28px' }}>
            The research article you are looking for does not exist or may have been relocated.
          </p>
          <button
            type="button"
            onClick={onNavigateBlog}
            className="blog-back-link"
          >
            <ArrowLeft size={16} />
            <span>Return to All Articles</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-root">
      {/* Top Reading Progress Bar */}
      <motion.div className="blog-scroll-progress-bar" style={{ scaleX }} />

      {/* Background glow orbs */}
      <div className="blog-hero-glow-layer" aria-hidden="true">
        <motion.div
          className="blog-hero-orb blog-hero-orb-1"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blog-hero-orb blog-hero-orb-2"
          animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Detail Header & Breadcrumb Bar */}
      <div className="blog-detail-header-bar">
        <div className="blog-detail-container">
          <div className="blog-detail-nav-row">
            <button
              type="button"
              onClick={onNavigateBlog}
              className="blog-back-link"
            >
              <ArrowLeft size={14} />
              <span>All Articles</span>
            </button>

            <nav className="blog-detail-breadcrumbs" aria-label="Breadcrumb">
              <span
                onClick={onNavigateHome}
                style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#717A8C')}
              >
                Home
              </span>
              <ChevronRight size={12} />
              <span
                onClick={onNavigateBlog}
                style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#717A8C')}
              >
                Blog
              </span>
              <ChevronRight size={12} />
              <span className="blog-breadcrumb-current-cat">{article.category}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Article Hero */}
      <header className="blog-article-hero">
        <div className="blog-detail-container">
          <motion.div
            className="blog-article-hero-badge-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="blog-cat-badge">{article.category}</span>
            <span className="blog-card-meta-item">
              <Calendar size={13} />
              <span>{article.publishedAt}</span>
            </span>
            <span className="blog-card-meta-item">
              <Clock size={13} />
              <span>{article.readTime}</span>
            </span>
          </motion.div>

          <motion.h1
            className="blog-article-hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {article.title}
          </motion.h1>

          <motion.p
            className="blog-article-hero-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {article.excerpt}
          </motion.p>

          <motion.div
            className="blog-article-meta-bar"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
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
                onClick={() => setLiked((prev) => !prev)}
                className={clsx('blog-share-btn', liked && 'copied')}
                title={liked ? 'Recommended' : 'Recommend this article'}
              >
                <ThumbsUp size={14} fill={liked ? 'currentColor' : 'none'} />
                <span>{liked ? 'Recommended' : 'Recommend'}</span>
                <span>({article.stats.likes + (liked ? 1 : 0)})</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className={clsx('blog-share-btn', copied && 'copied')}
                title="Copy shareable link"
              >
                {copied ? <Check size={14} /> : <Link2 size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <button
                type="button"
                onClick={() => setBookmarked((prev) => !prev)}
                className={clsx('blog-share-icon-btn', bookmarked && 'bookmarked')}
                title={bookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
              >
                <Bookmark size={14} fill={bookmarked ? 'currentColor' : 'none'} />
              </button>

              <button
                type="button"
                onClick={handleShareTwitter}
                className="blog-share-icon-btn"
                title="Share on X (Twitter)"
              >
                <TwitterIcon size={13} />
              </button>

              <button
                type="button"
                onClick={handleShareLinkedIn}
                className="blog-share-icon-btn"
                title="Share on LinkedIn"
              >
                <LinkedInIcon size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Media */}
      <div className="blog-detail-container">
        <motion.div
          className="blog-article-hero-media"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <img
            src={article.featuredImage}
            alt={article.title}
            className="blog-article-hero-img"
          />
          <div className="blog-article-hero-img-overlay" />
        </motion.div>
      </div>

      {/* Main Content Layout with Sticky Sidebar */}
      <div className="blog-detail-container">
        <div className="blog-article-layout">
          {/* Main Sections */}
          <main className="blog-article-content">
            {article.sections?.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                className="blog-content-section"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="blog-section-heading">
                  <span style={{ color: '#38BDF8', marginRight: '10px', fontSize: '0.85em' }}>
                    0{idx + 1}.
                  </span>
                  {section.heading.replace(/^\d+\.\s*/, '')}
                </h2>

                {section.lead && (
                  <p className="blog-content-lead">{section.lead}</p>
                )}

                {section.paragraphs?.map((para, pIdx) => (
                  <p key={pIdx} className="blog-content-p">{para}</p>
                ))}

                {section.list && (
                  <ul className="blog-content-list">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx}>
                        <Check size={16} className="blog-list-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div
                    className={clsx(
                      'blog-callout',
                      section.callout.type === 'important'
                        ? 'blog-callout-important'
                        : 'blog-callout-tip'
                    )}
                  >
                    <div className="blog-callout-header">
                      <span className="blog-callout-badge">
                        {section.callout.type.toUpperCase()}
                      </span>
                      <h4 className="blog-callout-title">{section.callout.title}</h4>
                    </div>
                    <p className="blog-callout-text">{section.callout.text}</p>
                  </div>
                )}

                {section.codeSnippet && (
                  <CodeBlock {...section.codeSnippet} />
                )}
              </motion.section>
            ))}

            {/* Author Bio Card */}
            {article.author && (
              <motion.div
                className="blog-author-bio-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="blog-author-bio-avatar"
                />
                <div>
                  <span className="blog-author-bio-written">WRITTEN BY</span>
                  <h4 className="blog-author-bio-name">{article.author.name}</h4>
                  <p className="blog-author-bio-role">{article.author.role}</p>
                  <p className="blog-author-bio-text">{article.author.bio}</p>
                </div>
              </motion.div>
            )}

            {/* Bottom Nav */}
            <div className="blog-bottom-nav">
              <button
                type="button"
                onClick={onNavigateBlog}
                className="blog-bottom-back-btn"
              >
                <ArrowLeft size={14} />
                <span>All Research Articles</span>
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="blog-bottom-top-btn"
              >
                <ArrowUp size={14} />
                <span>Back to Top</span>
              </button>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="blog-article-sidebar">
            <div className="blog-sidebar-sticky-wrapper">
              {/* Table of Contents */}
              {article.tableOfContents?.length > 0 && (
                <div className="blog-toc-card">
                  <div className="blog-toc-header">
                    <BookOpen size={15} style={{ color: '#38BDF8' }} />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="blog-toc-list" aria-label="Table of contents">
                    {article.tableOfContents.map((item, idx) => {
                      const isActive = activeTocId === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollToSection(item.id)}
                          className={clsx('blog-toc-item', isActive && 'active')}
                        >
                          <span style={{ opacity: 0.5, marginRight: '8px', fontFamily: 'monospace' }}>
                            0{idx + 1}
                          </span>
                          <span>{item.title.replace(/^\d+\.\s*/, '')}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              )}

              {/* Share Card */}
              <div className="blog-sidebar-share-card">
                <h4>Share Technical Analysis</h4>
                <div className="blog-sidebar-share-btns">
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="blog-sidebar-btn"
                  >
                    <span>{copied ? 'Link Copied!' : 'Copy Direct Link'}</span>
                    {copied ? <Check size={14} /> : <Link2 size={14} />}
                  </button>

                  <button
                    type="button"
                    onClick={handleShareTwitter}
                    className="blog-sidebar-btn"
                  >
                    <span>Share on X (Twitter)</span>
                    <TwitterIcon size={13} />
                  </button>

                  <button
                    type="button"
                    onClick={handleShareLinkedIn}
                    className="blog-sidebar-btn"
                  >
                    <span>Share on LinkedIn</span>
                    <LinkedInIcon size={13} />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        {relatedArticles?.length > 0 && (
          <section className="blog-related-section">
            <div className="blog-related-header">
              <div>
                <span className="blog-hero-kicker">
                  <Sparkles size={12} />
                  <span>Further Reading</span>
                </span>
                <h3 className="blog-related-heading">Related Technical Analyses</h3>
              </div>
              <button
                type="button"
                onClick={onNavigateBlog}
                className="blog-back-link"
              >
                <span>View Full Archive</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="blog-articles-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {relatedArticles.map((relArt, idx) => (
                <motion.article
                  key={relArt.slug}
                  className="blog-article-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => onSelectArticle && onSelectArticle(relArt.slug)}
                >
                  <div className="blog-card-media-wrapper">
                    <img
                      src={relArt.featuredImage}
                      alt={relArt.title}
                      className="blog-card-img"
                    />
                    <div className="blog-card-img-overlay" />
                    <span className="blog-card-cat-badge">{relArt.category}</span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta-row">
                      <span className="blog-card-meta-item">
                        <Calendar size={13} />
                        <span>{relArt.publishedAt}</span>
                      </span>
                      <span className="blog-card-meta-item">
                        <Clock size={13} />
                        <span>{relArt.readTime}</span>
                      </span>
                    </div>

                    <h3 className="blog-card-title">{relArt.title}</h3>
                    <p className="blog-card-excerpt">{relArt.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img
                          src={relArt.author.avatar}
                          alt={relArt.author.name}
                          className="blog-card-author-img"
                        />
                        <span className="blog-card-author-name">{relArt.author.name}</span>
                      </div>
                      <span className="blog-card-read-btn">
                        <span>Read</span>
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
