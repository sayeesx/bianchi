import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RuneIcon } from './RuneIcon';
import { useStore } from '../context/StoreContext';
import { navItems } from '../data/navigation';

const MobileNavigation: React.FC = () => {
  const navigate = useNavigate();
  const { mobileMenuOpen, setMobileMenuOpen } = useStore();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!mobileMenuOpen) return null;

  const handleNav = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header */}
          <div
            className="flex items-center justify-between"
            style={{
              height: '56px',
              borderBottom: '1px solid #e8e8e3',
              padding: '0 20px',
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.08em' }}>MENU</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center"
              style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Close menu"
            >
              <RuneIcon name="indicators-x" size={18} color="#1a1a1a" />
            </button>
          </div>

          {/* Nav Items */}
          <nav>
            {navItems.map((item) => (
              <div key={item.label} style={{ borderBottom: '1px solid #f0f0eb' }}>
                <div className="w-full flex items-center justify-between" style={{ height: '50px', padding: '0 20px' }}>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      flex: 1,
                    }}
                    onClick={() => handleNav(item.href)}
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
                  </button>

                  {item.megaMenu && (
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
                    >
                      <RuneIcon
                        name="arrows-chevron-down"
                        size={15}
                        color="#999"
                        style={{
                          transform: expandedItem === item.label ? 'rotate(180deg)' : 'rotate(0)',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                  )}
                </div>

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
                            onClick={(e) => {
                              e.preventDefault();
                              handleNav(link.href);
                            }}
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
        </div>

        {/* Bottom links */}
        <div style={{ padding: '20px', borderTop: '1px solid #e8e8e3' }}>
          {[
            { icon: <RuneIcon name="indicators-circle-user" size={16} />, label: 'My Account', href: '/account' },
            { icon: <RuneIcon name="tools-heart" size={16} />, label: 'Wishlist', href: '/wishlist' },
            { icon: <RuneIcon name="money-tag" size={16} />, label: 'Sale & Offers', href: '/sale' },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => handleNav(item.href)}
              className="flex items-center gap-3 w-full"
              style={{
                padding: '12px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderBottom: i < 2 ? '1px solid #f0f0eb' : 'none',
                textAlign: 'left',
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
