import React, { useState, useEffect, useRef } from 'react';
import { RuneIcon } from './RuneIcon';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';

const trendingSearches = [
  'Oversized T-shirts', 'Baggy Jeans', 'Linen Shirts', 'Cargo Pants',
  'Co-ords', 'Formal Shirts', 'Jackets', 'Trousers',
];

const SearchDrawer: React.FC = () => {
  const { searchOpen, setSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!searchOpen) setQuery('');
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setSearchOpen]);

  const results = query.length > 1
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  if (!searchOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0"
        style={{ zIndex: 400, backgroundColor: 'rgba(0,0,0,0.4)' }}
        onClick={() => setSearchOpen(false)}
      />

      {/* Search panel */}
      <div
        className="fixed top-0 left-0 right-0"
        style={{
          zIndex: 401,
          backgroundColor: '#ffffff',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          paddingBottom: results.length > 0 ? '0' : '20px',
        }}
      >
        {/* Input row */}
        <div
          className="max-w-[1440px] mx-auto flex items-center px-4"
          style={{ height: '64px', gap: '12px' }}
        >
          <RuneIcon name="tools-search" size={20} color="#999" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for products, styles..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              color: '#1a1a1a',
              backgroundColor: 'transparent',
            }}
          />
          <button
            onClick={() => setSearchOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Close search"
          >
            <RuneIcon name="indicators-x" size={22} color="#1a1a1a" />
          </button>
        </div>

        {/* Results or trending */}
        <div className="max-w-[1440px] mx-auto px-4 pb-6">
          {results.length > 0 ? (
            <div>
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#999',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                RESULTS FOR "{query}"
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {results.map(p => (
                  <a
                    key={p.id}
                    href={`/product/${p.slug}`}
                    className="flex items-center gap-3 py-3"
                    style={{
                      borderBottom: '1px solid #f0f0eb',
                      textDecoration: 'none',
                    }}
                    onClick={e => { e.preventDefault(); setSearchOpen(false); }}
                  >
                    <div style={{ width: '44px', height: '56px', flexShrink: 0, backgroundColor: '#f5f5f0', overflow: 'hidden' }}>
                      <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a1a1a' }}>{p.name}</p>
                      <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#999',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}
              >
                TRENDING SEARCHES
              </p>
              <div className="flex flex-wrap" style={{ gap: '8px' }}>
                {trendingSearches.map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    style={{
                      padding: '7px 14px',
                      border: '1px solid #e0e0db',
                      backgroundColor: '#f8f8f5',
                      fontSize: '12px',
                      color: '#1a1a1a',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1a1a';
                      (e.currentTarget as HTMLElement).style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#f8f8f5';
                      (e.currentTarget as HTMLElement).style.color = '#1a1a1a';
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchDrawer;
