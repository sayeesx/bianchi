import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RuneIcon } from './RuneIcon';
import { useStore } from '../context/StoreContext';
import { navItems } from '../data/navigation';
import MegaMenu from './MegaMenu';

const BianchiLogo = () => (
  <span
    style={{
      fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      fontSize: '22px',
      fontWeight: 900,
      color: '#1a1a1a',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      lineHeight: 1,
      display: 'inline-block',
    }}
  >
    BIANCHI
  </span>
);

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { cartCount, setCartOpen, setMobileMenuOpen } = useStore();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="header-sticky"
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8e8e3',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.2s ease',
        zIndex: 100,
      }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Desktop Header — ONLY shown on desktop via CSS, icons pushed to right */}
      <div className="header-desktop-bar">
        {/* Left: Nav items */}
        <nav
          className="flex items-center"
          style={{ gap: '0', flexShrink: 0, zIndex: 11 }}
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.megaMenu) {
                  setActiveMenu(item.label);
                } else {
                  setActiveMenu(null);
                }
              }}
            >
              <a
                href={item.href}
                className="flex items-center"
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  color: item.badge === 'SALE' ? '#e63329' : '#1a1a1a',
                  padding: '0 13px',
                  height: '60px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  borderBottom: activeMenu === item.label ? '2px solid #1a1a1a' : '2px solid transparent',
                  transition: 'border-color 0.15s ease, color 0.15s ease',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveMenu(null);
                  navigate(item.href);
                }}
              >
                {item.label}
                {item.megaMenu && (
                  <RuneIcon
                    name="arrows-chevron-down"
                    size={12}
                    style={{
                      marginLeft: '3px',
                      transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Center: Brand Logo — mathematically centered */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            backgroundColor: '#fff',
            padding: '0 16px',
            pointerEvents: 'auto',
          }}
        >
          <a
            href="/"
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              setActiveMenu(null);
              navigate('/');
            }}
          >
            <BianchiLogo />
          </a>
        </div>

        {/* Right: Action Icons — aligned to far right with minimal right gap */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0,
            zIndex: 11,
          }}
        >
          {/* Search — opens dedicated full Search Page */}
          <button
            onClick={() => {
              setActiveMenu(null);
              navigate('/search');
            }}
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '38px', height: '38px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Search"
            title="Search"
          >
            <RuneIcon name="tools-search" size={19} color="#1a1a1a" />
          </button>

          {/* Account / Profile — Phone -> OTP -> Profile */}
          <button
            onClick={() => {
              setActiveMenu(null);
              navigate('/account');
            }}
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '38px', height: '38px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Account"
            title="My Account"
          >
            <RuneIcon name="indicators-circle-user" size={19} color="#1a1a1a" />
          </button>

          {/* Wishlist */}
          <button
            onClick={() => {
              setActiveMenu(null);
              navigate('/wishlist');
            }}
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '38px', height: '38px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Wishlist"
            title="Wishlist"
          >
            <RuneIcon name="tools-heart" size={19} color="#1a1a1a" />
          </button>

          {/* Shopping Cart Drawer */}
          <button
            onClick={() => {
              setActiveMenu(null);
              setCartOpen(true);
            }}
            className="relative flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '38px', height: '38px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Shopping cart"
            title="Cart"
          >
            <RuneIcon name="money-shopping-cart" size={19} color="#1a1a1a" />
            {cartCount > 0 && (
              <span
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  top: '2px',
                  right: '2px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  fontSize: '9px',
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header — ONLY shown on mobile/tablets <= 900px via CSS */}
      <div className="header-mobile-bar">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center justify-center"
          style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Menu"
        >
          <RuneIcon name="layouts-menu" size={20} color="#1a1a1a" />
        </button>

        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <BianchiLogo />
        </a>

        <div className="flex items-center" style={{ gap: '2px' }}>
          <button
            onClick={() => navigate('/search')}
            className="flex items-center justify-center"
            style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Search"
          >
            <RuneIcon name="tools-search" size={18} color="#1a1a1a" />
          </button>
          <button
            onClick={() => navigate('/account')}
            className="flex items-center justify-center"
            style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Account"
          >
            <RuneIcon name="indicators-circle-user" size={18} color="#1a1a1a" />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center"
            style={{ width: '36px', height: '36px', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Shopping cart"
          >
            <RuneIcon name="money-shopping-cart" size={18} color="#1a1a1a" />
            {cartCount > 0 && (
              <span
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  top: '2px',
                  right: '2px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  fontSize: '9px',
                  fontWeight: 700,
                }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MegaMenu Dropdown — full width underneath header bar with exact alignment */}
      {activeMenu && navItems.find((n) => n.label === activeMenu)?.megaMenu && (
        <MegaMenu
          activeLabel={activeMenu}
          sections={navItems.find((n) => n.label === activeMenu)!.megaMenu!}
          onClose={() => setActiveMenu(null)}
        />
      )}
    </header>
  );
};

export default Header;
