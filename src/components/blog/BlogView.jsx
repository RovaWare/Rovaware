import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Tag,
  Sparkles,
  BookOpen,
  TrendingUp,
  Brain,
  Globe,
  Cpu,
  Palette,
  Cloud,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  X,
  Mail,
  ChevronRight
} from 'lucide-react';

import '../../styles/blog.css';
import {
  BLOG_CATEGORIES,
  BLOG_TOPICS,
  BLOG_ARTICLES,
  BLOG_STATS
} from './blogData';

// Map icon name string to Lucide component
const TOPIC_ICONS = {
  Brain,
  Globe,
  Cpu,
  Palette,
  Cloud,
  Layers,
  Zap,
  ShieldCheck
};

const EASE_OUT = [0.16, 1, 0.3, 1];

export default function BlogView({
  onSelectArticle,
  onOpenArticle,
  onNavigateHome,
  onHome
}) {
  const handleSelectArticle = onSelectArticle || onOpenArticle;
  const handleNavigateHome = onNavigateHome || onHome;

  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle | loading | success | error
  const [newsletterMessage, setNewsletterMessage] = useState('');

  // Featured article
  const featuredArticle = useMemo(() => {
    return BLOG_ARTICLES.find((a) => a.isFeatured) || BLOG_ARTICLES[0];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All Articles' || article.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.topics &&
          article.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailRegex.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterStatus('loading');
    setTimeout(() => {
      try {
        const stored = JSON.parse(
          localStorage.getItem('rovaware_newsletter_subscribers') || '[]'
        );
        if (!stored.includes(newsletterEmail)) {
          stored.push(newsletterEmail);
          localStorage.setItem(
            'rovaware_newsletter_subscribers',
            JSON.stringify(stored)
          );
        }
        setNewsletterStatus('success');
        setNewsletterMessage(
          "You're subscribed! You'll receive our bi-weekly engineering breakdowns."
        );
        setNewsletterEmail('');
      } catch (err) {
        setNewsletterStatus('error');
        setNewsletterMessage('Could not save subscription. Please try again.');
      }
    }, 600);
  };

  const handleTopicClick = (topic) => {
    setSelectedCategory(topic.category);
    setSearchQuery('');
    const gridEl = document.getElementById('articles-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-page-root">
      {/* 1. BLOG HERO SECTION WITH ANIMATED ORBS */}
      <section className="blog-hero">
        <div className="blog-hero-glow-layer" aria-hidden="true">
          <motion.div
            className="blog-hero-orb blog-hero-orb-1"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, 20, 35, 0],
              scale: [1, 1.08, 0.95, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="blog-hero-orb blog-hero-orb-2"
            animate={{
              x: [0, -25, 20, 0],
              y: [0, 30, -15, 0],
              scale: [1, 0.96, 1.06, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="blog-hero-grid-pattern" />
        </div>

        <div className="blog-hero-inner">
          {/* Breadcrumb */}
          <motion.div
            className="blog-breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              type="button"
              className="blog-breadcrumb-link"
              onClick={handleNavigateHome}
            >
              Home
            </button>
            <ChevronRight size={13} className="blog-breadcrumb-sep" />
            <span className="blog-breadcrumb-current">Insights & Blog</span>
          </motion.div>

          <motion.div
            className="blog-hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles size={14} className="blog-badge-icon" />
            <span>RovaWare Engineering Dispatch</span>
          </motion.div>

          <motion.h1
            className="blog-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          >
            Insights That Inspire{' '}
            <span className="blog-hero-title-accent">Digital Innovation.</span>
          </motion.h1>

          <motion.p
            className="blog-hero-desc"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          >
            Discover ideas, practical guides and expert insights on software development,
            artificial intelligence, automation and the technologies shaping tomorrow.
          </motion.p>

          {/* Search bar */}
          <motion.div
            className="blog-search-container"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT }}
          >
            <div className="blog-search-input-wrapper">
              <Search size={18} className="blog-search-icon" />
              <input
                type="text"
                className="blog-search-input"
                placeholder="Search articles by title, topic, or keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="blog-search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>
            {searchQuery && (
              <span className="blog-search-count-label">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
              </span>
            )}
          </motion.div>

          {/* Statistics Bar */}
          <motion.div
            className="blog-stats-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT }}
          >
            {BLOG_STATS.map((stat, idx) => (
              <div key={idx} className="blog-stat-item">
                <span className="blog-stat-value">{stat.value}</span>
                <span className="blog-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SECTION */}
      {!searchQuery && selectedCategory === 'All Articles' && featuredArticle && (
        <section className="blog-featured-section">
          <motion.div
            className="blog-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="blog-section-subtitle">
              <TrendingUp size={15} />
              <span>EDITORIAL HIGHLIGHT</span>
            </div>
            <h2 className="blog-section-title">Featured Article</h2>
          </motion.div>

          <motion.div
            className="blog-featured-card"
            onClick={() => handleSelectArticle(featuredArticle.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelectArticle(featuredArticle.slug)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <div className="blog-featured-media">
              <img
                src={featuredArticle.featuredImage}
                alt={featuredArticle.title}
                className="blog-featured-img"
                loading="eager"
              />
              <div className="blog-featured-overlay" />
              <span className="blog-featured-badge">Featured Story</span>
            </div>

            <div className="blog-featured-content">
              <div className="blog-featured-meta-top">
                <span className="blog-category-pill">{featuredArticle.category}</span>
                <div className="blog-time-meta">
                  <Clock size={13} />
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>

              <h3 className="blog-featured-title">
                {featuredArticle.title}
              </h3>

              <p className="blog-featured-excerpt">
                {featuredArticle.excerpt}
              </p>

              <div className="blog-featured-footer">
                <div className="blog-author-info">
                  <img
                    src={featuredArticle.author.avatar}
                    alt={featuredArticle.author.name}
                    className="blog-author-avatar"
                  />
                  <div>
                    <span className="blog-author-name">{featuredArticle.author.name}</span>
                    <span className="blog-author-meta">
                      {featuredArticle.author.role} • {featuredArticle.publishedAt}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="blog-featured-cta"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectArticle(featuredArticle.slug);
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* 3. CATEGORIES HORIZONTAL PILLS */}
      <section className="blog-categories-section">
        <div className="blog-categories-wrapper">
          <div className="blog-categories-scroll">
            {BLOG_CATEGORIES.map((cat) => {
              const count =
                cat === 'All Articles'
                  ? BLOG_ARTICLES.length
                  : BLOG_ARTICLES.filter((a) => a.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  className={`blog-category-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(6);
                  }}
                >
                  <span>{cat}</span>
                  <span className="blog-category-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ARTICLES GRID */}
      <section id="articles-grid" className="blog-articles-section">
        <motion.div
          className="blog-section-header-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="blog-section-subtitle">
              <BookOpen size={15} />
              <span>CURATED RESEARCH</span>
            </div>
            <h2 className="blog-section-title">
              {selectedCategory === 'All Articles' ? 'Latest Articles' : selectedCategory}
            </h2>
          </div>
          <span className="blog-results-meta">
            Showing {Math.min(visibleCount, filteredArticles.length)} of {filteredArticles.length} articles
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredArticles.length === 0 ? (
            <motion.div
              key="empty"
              className="blog-empty-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="blog-empty-icon-box">
                <Search size={32} />
              </div>
              <h3>No articles found</h3>
              <p>
                We couldn't find any articles matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
              </p>
              <button
                type="button"
                className="blog-clear-filters-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Articles');
                }}
              >
                Reset Filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${selectedCategory}-${searchQuery}`}
              className="blog-articles-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filteredArticles.slice(0, visibleCount).map((article, idx) => (
                <motion.article
                  key={article.id}
                  className="blog-article-card"
                  onClick={() => handleSelectArticle(article.slug)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => e.key === 'Enter' && handleSelectArticle(article.slug)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: EASE_OUT, delay: (idx % 3) * 0.1 }}
                >
                  <div className="blog-card-media">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="blog-card-img"
                      loading="lazy"
                    />
                    <div className="blog-card-overlay" />
                    <span className="blog-category-pill blog-card-pill">
                      {article.category}
                    </span>
                  </div>

                  <div className="blog-card-body">
                    <div className="blog-card-meta-top">
                      <span className="blog-card-date">
                        <Calendar size={12} />
                        {article.publishedAt}
                      </span>
                      <span className="blog-card-readtime">
                        <Clock size={12} />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="blog-card-title">{article.title}</h3>

                    <p className="blog-card-excerpt">{article.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img
                          src={article.author.avatar}
                          alt={article.author.name}
                          className="blog-card-author-avatar"
                        />
                        <span className="blog-card-author-name">{article.author.name}</span>
                      </div>

                      <span className="blog-card-read-link">
                        <span>Read More</span>
                        <ArrowRight size={13} className="blog-card-read-icon" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Pagination */}
        {filteredArticles.length > visibleCount && (
          <div className="blog-load-more-wrapper">
            <button
              type="button"
              className="blog-load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              <span>Load More Articles</span>
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>

      {/* 5. TOPICS EXPLORATION SECTION */}
      <section className="blog-topics-section">
        <motion.div
          className="blog-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="blog-section-subtitle">
            <Tag size={15} />
            <span>EXPLORE BY DOMAIN</span>
          </div>
          <h2 className="blog-section-title">Explore Core Topics</h2>
          <p className="blog-section-desc">
            Deep-dive into specific engineering disciplines curated by RovaWare leads.
          </p>
        </motion.div>

        <div className="blog-topics-grid">
          {BLOG_TOPICS.map((topic, idx) => {
            const IconComponent = TOPIC_ICONS[topic.icon] || BookOpen;
            return (
              <motion.div
                key={topic.id}
                className="blog-topic-card"
                onClick={() => handleTopicClick(topic)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleTopicClick(topic)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
              >
                <div className="blog-topic-icon-box">
                  <IconComponent size={22} />
                </div>
                <div className="blog-topic-content">
                  <div className="blog-topic-header">
                    <h3 className="blog-topic-title">{topic.name}</h3>
                    <span className="blog-topic-count">{topic.count} articles</span>
                  </div>
                  <p className="blog-topic-desc">{topic.description}</p>
                  <span className="blog-topic-link">
                    <span>Browse Topic</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. NEWSLETTER SUBSCRIPTION SECTION */}
      <section className="blog-newsletter-section">
        <div className="blog-newsletter-glow" aria-hidden="true" />
        <motion.div
          className="blog-newsletter-card"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <div className="blog-newsletter-badge">
            <Mail size={14} />
            <span>ROVAWARE DISPATCH</span>
          </div>

          <h2 className="blog-newsletter-title">Stay Ahead of What&apos;s Next.</h2>

          <p className="blog-newsletter-desc">
            Get the latest insights on AI, software engineering and digital innovation delivered
            directly to your inbox bi-weekly. Zero fluff, 100% technical craft.
          </p>

          {newsletterStatus === 'success' ? (
            <motion.div
              className="blog-newsletter-success-box"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle2 size={22} className="blog-newsletter-success-icon" />
              <div>
                <h4>Subscription Confirmed!</h4>
                <p>{newsletterMessage}</p>
                <button
                  type="button"
                  className="blog-newsletter-reset-btn"
                  onClick={() => setNewsletterStatus('idle')}
                >
                  Subscribe another email
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="blog-newsletter-form">
              <div className="blog-newsletter-input-group">
                <Mail size={17} className="blog-newsletter-input-icon" />
                <input
                  type="email"
                  className="blog-newsletter-input"
                  placeholder="Enter your engineering work email..."
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                  required
                />
                <button
                  type="submit"
                  className="blog-newsletter-submit-btn"
                  disabled={newsletterStatus === 'loading'}
                >
                  <span>{newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {newsletterStatus === 'error' && (
                <div className="blog-newsletter-error">
                  <AlertCircle size={14} />
                  <span>{newsletterMessage}</span>
                </div>
              )}

              <div className="blog-newsletter-meta">
                <span>✓ Bi-weekly dispatch</span>
                <span>•</span>
                <span>✓ No spam guarantee</span>
                <span>•</span>
                <span>✓ 1-click unsubscribe</span>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
}
