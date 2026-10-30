import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { MegaMenuSection } from '../data/navigation';
import { RuneIcon } from './RuneIcon';

interface MegaMenuProps {
  sections: MegaMenuSection[];
  onClose: () => void;
  activeLabel?: string;
}

const featuredPreviews: Record<string, { title: string; subtitle: string; image: string; link: string }> = {
  'NEW ARRIVALS': {
    title: 'THE NEW DROP',
    subtitle: 'Over 50+ fresh styles added weekly',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    link: '/new-arrivals',
  },
  'SHIRTS': {
    title: 'STATEMENT SHIRTS',
    subtitle: 'Cuban collars, linens & textured weaves',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    link: '/shirts',
  },
  'T-SHIRTS': {
    title: 'OVERSIZED TEES',
    subtitle: 'Heavyweight 240+ GSM pure cotton drape',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    link: '/t-shirts',
  },
  'BOTTOMWEAR': {
    title: 'THE DENIM LAB',
    subtitle: 'Baggy, straight & pleated relaxed silhouettes',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    link: '/bottomwear',
  },
};

const MegaMenu: React.FC<MegaMenuProps> = ({ sections, onClose, activeLabel = 'NEW ARRIVALS' }) => {
  const navigate = useNavigate();
  const featured = featuredPreviews[activeLabel] || featuredPreviews['NEW ARRIVALS'];

  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e8e8e3',
        borderBottom: '1px solid #e8e8e3',
        boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
        zIndex: 99,
      }}
      onMouseLeave={onClose}
    >
      <div
        style={{
          width: '100%',
          padding: '36px clamp(28px, 3.5vw, 64px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '48px',
          boxSizing: 'border-box',
        }}
      >
        {/* Navigation Columns */}
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', flex: 1 }}>
          {sections.map((section, idx) => (
            <div key={idx} style={{ minWidth: '160px' }}>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#999999',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {section.title}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#1a1a1a',
                        textDecoration: 'none',
                        transition: 'color 0.15s ease, transform 0.15s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#e63329';
                        e.currentTarget.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1a1a1a';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        navigate(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Editorial Card (Right side) */}
        {featured && (
          <div
            style={{
              width: '320px',
              flexShrink: 0,
              backgroundColor: '#f8f8f5',
              border: '1px solid #e8e8e3',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease',
            }}
            onClick={() => {
              onClose();
              navigate(featured.link);
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={{ width: '100%', height: '170px', overflow: 'hidden', backgroundColor: '#e5e5e0' }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                loading="lazy"
              />
            </div>
            <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', color: '#1a1a1a', textTransform: 'uppercase' }}>
                  {featured.title}
                </span>
                <RuneIcon name="arrows-arrow-right" size={13} color="#1a1a1a" />
              </div>
              <p style={{ fontSize: '11.5px', color: '#777', margin: 0 }}>
                {featured.subtitle}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaMenu;
