import React from 'react';
import { serviceCategories } from './servicesData';
import {
  Code2,
  Layout,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const categoryIcons = {
  BUILD: Code2,
  DESIGN: Layout,
  GROW: TrendingUp,
  BUSINESS_SUPPORT: ShieldCheck
};

export default function ServicesMegaMenu({
  isOpen,
  currentPath,
  onNavigateService,
  onNavigateAllServices,
  onClose,
  onMouseEnter,
  onMouseLeave
}) {
  if (!isOpen) return null;

  return (
    <div
      className="services-mega-menu-panel"
      role="region"
      aria-label="Services Mega Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mega-menu-glow-top" />

      {/* 4 Category Columns Grid */}
      <div className="mega-menu-grid">
        {serviceCategories.map((category) => {
          const CatIcon = categoryIcons[category.id] || Code2;
          return (
            <div key={category.id} className="mega-menu-col">
              {/* Category Header */}
              <div className="mega-menu-col-header">
                <div
                  className="col-header-icon-box"
                  style={{ color: category.accent, borderColor: `${category.accent}33`, background: `${category.accent}14` }}
                >
                  <CatIcon size={14} />
                </div>
                <div className="col-header-info">
                  <span className="col-title" style={{ color: category.accent }}>
                    {category.title}
                  </span>
                  <span className="col-tagline">{category.tagline}</span>
                </div>
              </div>

              {/* Service Links List */}
              <div className="mega-menu-links">
                {category.services.map((service) => {
                  const servicePath = `/services/${service.slug}`;
                  const isActive = currentPath === servicePath;

                  return (
                    <a
                      key={service.slug}
                      href={servicePath}
                      className={`mega-menu-item ${isActive ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (onClose) onClose();
                        onNavigateService(service.slug);
                      }}
                    >
                      <div className="item-text-group">
                        <div className="item-title-row">
                          <span className="item-title">{service.title}</span>
                          <span className="item-badge">{service.badge}</span>
                        </div>
                        <p className="item-desc">{service.shortDesc}</p>
                      </div>
                      <ArrowRight size={13} className="item-arrow-icon" />
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Exploration Strip */}
      <div className="mega-menu-footer-bar">
        <div className="footer-bar-left">
          <Sparkles size={14} className="footer-sparkle" />
          <span>Need custom architectural scoping or full-stack cross-discipline solutions?</span>
        </div>

        <a
          href="/services"
          className="mega-menu-all-services-btn"
          onClick={(e) => {
            e.preventDefault();
            if (onClose) onClose();
            onNavigateAllServices();
          }}
        >
          <span>View All 9 Services & Capabilities</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

