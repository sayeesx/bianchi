import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  TfiSearch,
  TfiUser,
  TfiHeart,
  TfiShoppingCart,
  TfiAlignLeft,
} from 'react-icons/tfi';
import { useStore } from '../context/StoreContext';
import { navItems } from '../data/navigation';
import MegaMenu from './MegaMenu';

const BianchiLogo = () => (
  <span
    style={{
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSize: '22px',
      fontWeight: 900,
      color: '#1a1a1a',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      lineHeight: 1,
    }}
  >
    BIANCHI
  </span>
);

const Header: React.FC = () => {
  const { cartCount, setCartOpen, setSearchOpen, setMobileMenuOpen } = useStore();
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
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.2s ease',
        zIndex: 100,
      }}
    >
      {/* Desktop Header */}
      <div
        style={{ height: '60px' }}
        className="hidden md:flex items-center justify-between px-8 max-w-[1440px] mx-auto w-full"
      >
        {/* Left: Nav */}
        <nav
          className="flex items-center"
          style={{ gap: '0' }}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.label)}
            >
              <a
                href={item.href}
                className="flex items-center"
                style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '0.07em',
                  color: item.badge === 'SALE' ? '#e63329' : '#1a1a1a',
                  padding: '0 16px',
                  height: '60px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  borderBottom: activeMenu === item.label ? '2px solid #1a1a1a' : '2px solid transparent',
                  transition: 'border-color 0.15s ease',
                }}
                onClick={(e) => e.preventDefault()}
              >
                {item.label}
                {item.megaMenu && (
                  <ChevronDown
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

        {/* Center: Logo */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ zIndex: 10, backgroundColor: '#fff', padding: '0 16px' }}
        >
          <a href="/" style={{ textDecoration: 'none' }}>
            <BianchiLogo />
          </a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center" style={{ gap: '4px' }}>
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '36px', height: '36px' }}
            aria-label="Search"
          >
            <TfiSearch size={18} color="#1a1a1a" />
          </button>
          <button
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '36px', height: '36px' }}
            aria-label="Account"
          >
            <TfiUser size={18} color="#1a1a1a" />
          </button>
          <button
            className="flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '36px', height: '36px' }}
            aria-label="Wishlist"
          >
            <TfiHeart size={18} color="#1a1a1a" />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ width: '36px', height: '36px' }}
            aria-label="Shopping cart"
          >
            <TfiShoppingCart size={18} color="#1a1a1a" />
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

      {/* Mobile Header */}
      <div
        style={{ height: '56px' }}
        className="flex md:hidden items-center justify-between px-4"
      >
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center justify-center"
          style={{ width: '36px', height: '36px' }}
          aria-label="Menu"
        >
          <TfiAlignLeft size={20} color="#1a1a1a" />
        </button>

        <a href="/" className="absolute left-1/2 -translate-x-1/2" style={{ textDecoration: 'none' }}>
          <BianchiLogo />
        </a>

        <div className="flex items-center" style={{ gap: '4px' }}>
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center justify-center"
            style={{ width: '36px', height: '36px' }}
            aria-label="Search"
          >
            <TfiSearch size={18} color="#1a1a1a" />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center"
            style={{ width: '36px', height: '36px' }}
            aria-label="Shopping cart"
          >
            <TfiShoppingCart size={18} color="#1a1a1a" />
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

      {/* MegaMenu */}
      {activeMenu && navItems.find(n => n.label === activeMenu)?.megaMenu && (
        <MegaMenu
          sections={navItems.find(n => n.label === activeMenu)!.megaMenu!}
          onClose={() => setActiveMenu(null)}
        />
      )}
    </header>
  );
};

export default Header;
