import React from 'react';
import type { MegaMenuSection } from '../data/navigation';

interface MegaMenuProps {
  sections: MegaMenuSection[];
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ sections, onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e8e8e3',
        borderBottom: '1px solid #e8e8e3',
        boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
        zIndex: 99,
        padding: '28px 0',
      }}
      onMouseLeave={onClose}
    >
      <div
        className="max-w-[1440px] mx-auto px-8"
        style={{ display: 'flex', gap: '60px' }}
      >
        {sections.map((section, idx) => (
          <div key={idx}>
            <p
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#999',
                marginBottom: '14px',
                textTransform: 'uppercase',
              }}
            >
              {section.title}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#1a1a1a',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#666')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#1a1a1a')}
                    onClick={e => e.preventDefault()}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
