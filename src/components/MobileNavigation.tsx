import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import {
  TfiClose,
  TfiHeart,
  TfiUser,
  TfiLocationPin,
} from 'react-icons/tfi';
import { useStore } from '../context/StoreContext';
import { navItems } from '../data/navigation';

const MobileNavigation: React.FC = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useStore();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!mobileMenuOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 drawer-overlay"
        style={{ zIndex: 200, backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 left-0 h-full drawer-panel overflow-y-auto"
        style={{
          width: '300px',
          backgroundColor: '#ffffff',
          zIndex: 201,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between"
          style={{
            height: '56px',
            borderBottom: '1px solid #e8e8e3',
            padding: '0 20px',
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.05em' }}>MENU</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center"
            style={{ width: '36px', height: '36px' }}
          >
            <TfiClose size={18} color="#1a1a1a" />
          </button>
        </div>

        {/* Nav Items */}
        <nav>
          {navItems.map((item) => (
            <div key={item.label} style={{ borderBottom: '1px solid #f0f0eb' }}>
              <button
                className="w-full flex items-center justify-between"
                style={{
                  height: '50px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '0 20px',
                }}
                onClick={() => {
                  if (item.megaMenu) {
                    setExpandedItem(expandedItem === item.label ? null : item.label);
                  }
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: item.badge === 'SALE' ? '#e63329' : '#1a1a1a',
                  }}
                >
                  {item.label}
                </span>
                {item.megaMenu ? (
                  <ChevronDown
                    size={16}
                    color="#999"
                    style={{
                      transform: expandedItem === item.label ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                ) : (
                  <ChevronRight size={16} color="#999" />
                )}
              </button>

              {/* Sub-items */}
              {item.megaMenu && expandedItem === item.label && (
                <div style={{ backgroundColor: '#f8f8f5', paddingBottom: '8px' }}>
                  {item.megaMenu.map((section, i) => (
                    <div key={i}>
                      <p
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          color: '#999',
                          padding: '12px 20px 6px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {section.title}
                      </p>
                      {section.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.href}
                          style={{
                            display: 'block',
                            padding: '9px 20px',
                            fontSize: '13px',
                            color: '#1a1a1a',
                            textDecoration: 'none',
                          }}
                          onClick={e => e.preventDefault()}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom links */}
        <div style={{ padding: '20px 20px', borderTop: '1px solid #e8e8e3', marginTop: '8px' }}>
          {[
            { icon: <TfiUser size={16} />, label: 'My Account' },
            { icon: <TfiHeart size={16} />, label: 'Wishlist' },
            { icon: <TfiLocationPin size={16} />, label: 'Find a Store' },
          ].map((item, i) => (
            <button
              key={i}
              className="flex items-center gap-3 w-full"
              style={{
                padding: '13px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderBottom: i < 2 ? '1px solid #f0f0eb' : 'none',
              }}
            >
              <span style={{ color: '#666', display: 'flex' }}>{item.icon}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#1a1a1a' }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
