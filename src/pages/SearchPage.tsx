import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { RuneIcon } from '../components/RuneIcon';

const trendingSearches = [
  'Oversized T-Shirts',
  'Baggy Jeans',
  'Linen Shirts',
  'Cargo Pants',
  'Co-Ords',
  'Formal Shirts',
  'Jackets',
  'Polo T-Shirts',
];

const quickCategories = [
  { label: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80', query: 'shirts' },
  { label: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', query: 'jeans' },
  { label: 'T-Shirts', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80', query: 't-shirts' },
  { label: 'Jackets', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80', query: 'jackets' },
  { label: 'Trousers', image: 'https://images.unsplash.com/photo-1594938298603-c8148bfb2882?w=400&q=80', query: 'trousers' },
  { label: 'Sweaters', image: 'https://images.unsplash.com/photo-1614632537239-e6d704d7f4a4?w=400&q=80', query: 'sweaters' },
];

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query) {
      setSearchParams({ q: query }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [query, setSearchParams]);

  // Filter products by query
  const cleanQ = query.trim().toLowerCase();
  const filteredProducts = cleanQ.length > 0
    ? products.filter((p) =>
        p.name.toLowerCase().includes(cleanQ) ||
        p.category.toLowerCase().includes(cleanQ) ||
        (p.description && p.description.toLowerCase().includes(cleanQ))
      )
    : [];

  return (
    <main style={{ minHeight: '80vh', backgroundColor: '#ffffff' }}>
      {/* Search Input Bar (Sticky at top below header) */}
      <div
        style={{
          borderBottom: '1px solid #e8e8e3',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: '60px',
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(16px, 3vw, 48px)',
            height: '70px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <RuneIcon name="tools-search" size={22} color="#1a1a1a" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for shirts, jeans, oversized tees, jackets..."
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '18px',
              fontWeight: 500,
              color: '#1a1a1a',
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                color: '#666',
              }}
              aria-label="Clear search"
            >
              <RuneIcon name="indicators-x" size={18} />
            </button>
          )}
          <button
            onClick={() => navigate(-1)}
            style={{
              background: 'none',
              border: 'none',
              borderLeft: '1px solid #e8e8e3',
              paddingLeft: '16px',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#666',
              fontFamily: 'inherit',
            }}
          >
            CLOSE
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '36px clamp(16px, 3vw, 48px)',
        }}
      >
        {/* If no query entered: Show Trending Searches & Quick Visual Categories */}
        {cleanQ.length === 0 && (
          <div>
            {/* Trending tags */}
            <div style={{ marginBottom: '44px' }}>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#999',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                POPULAR TRENDING SEARCHES
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    style={{
                      padding: '10px 18px',
                      backgroundColor: '#f8f8f5',
                      border: '1px solid #e0e0db',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      fontFamily: 'inherit',
                      borderRadius: '0',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8f8f5';
                      e.currentTarget.style.color = '#1a1a1a';
                      e.currentTarget.style.borderColor = '#e0e0db';
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Categories */}
            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#999',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                EXPLORE TOP COLLECTIONS
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '14px',
                }}
              >
                {quickCategories.map((cat) => (
                  <div
                    key={cat.label}
                    onClick={() => setQuery(cat.query)}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid #e8e8e3',
                      backgroundColor: '#f8f8f5',
                      overflow: 'hidden',
                      position: 'relative',
                      aspectRatio: '3/4',
                    }}
                    className="search-quick-cat"
                  >
                    <img
                      src={cat.image}
                      alt={cat.label}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.3s ease',
                      }}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '24px 14px 12px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                      }}
                    >
                      <p
                        style={{
                          color: '#ffffff',
                          fontSize: '12px',
                          fontWeight: 800,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          margin: 0,
                        }}
                      >
                        {cat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* When Query is Present */}
        {cleanQ.length > 0 && (
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '28px',
                paddingBottom: '16px',
                borderBottom: '1px solid #e8e8e3',
              }}
            >
              <div>
                <p style={{ fontSize: '15px', color: '#666' }}>
                  Showing results for <span style={{ fontWeight: 800, color: '#1a1a1a' }}>"{query}"</span>
                </p>
                <p style={{ fontSize: '12px', color: '#999', marginTop: '2px' }}>
                  {filteredProducts.length} item{filteredProducts.length === 1 ? '' : 's'} found
                </p>
              </div>

              {filteredProducts.length > 0 && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#e63329',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  Clear Results
                </button>
              )}
            </div>

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '14px',
                }}
                className="search-results-grid"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div
                style={{
                  textAlign: 'center',
                  padding: '64px 20px',
                  backgroundColor: '#f8f8f5',
                  border: '1px solid #e8e8e3',
                }}
              >
                <RuneIcon name="tools-search" size={40} color="#999" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', marginBottom: '8px' }}>
                  No matches found for "{query}"
                </h3>
                <p style={{ fontSize: '13px', color: '#666', maxWidth: '400px', margin: '0 auto 24px' }}>
                  Check your spelling or try popular categories like Shirts, Jeans, or Jackets.
                </p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {trendingSearches.slice(0, 4).map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      style={{
                        padding: '8px 16px',
                        backgroundColor: '#ffffff',
                        border: '1px solid #d0d0cb',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .search-quick-cat:hover img {
          transform: scale(1.05);
        }
        @media (min-width: 640px) {
          .search-results-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 1024px) {
          .search-results-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (min-width: 1280px) {
          .search-results-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
};

export default SearchPage;

