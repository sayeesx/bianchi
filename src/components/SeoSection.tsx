import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const topCategories = [
  'T-shirts', 'Shirts', 'Joggers', 'Shorts', 'Trousers',
  'Sweatshirts & Hoodies', 'Sweaters', 'Bags', 'Accessories', 'Belts',
  'Blazers', 'Boxers', 'Cargo Pants', 'Chinos', 'Co-ords',
  'Hoodies', 'Jackets', 'Jeans', 'Night Suit & Pyjamas', 'Overshirt',
  'Perfumes', 'Shoes', 'Sunglasses',
];

const popularSearches = [
  'shirts for men', 'jeans for men', 'trousers for men', 'white shirt',
  'black shirt', 'overshirt men', 'baggy jeans', 'straight fit jeans',
  'bootcut jeans', 'korean pants', 'gurkha pants', 'cargo pants',
  'linen shirts', 'denim shirts', 'formal shirts', 'crochet shirts',
  'striped shirts', 'printed shirts', 'formal pants for men', 'concert outfits men',
];

const SeoSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="seo-section">
      <div className="seo-inner">
        <div className="seo-grid">
          {/* Top Categories */}
          <div>
            <h3
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              TOP CATEGORIES
            </h3>
            <div className="flex flex-wrap" style={{ gap: '6px' }}>
              {topCategories.map(cat => (
                <a
                  key={cat}
                  href={`/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  style={{
                    fontSize: '12px',
                    color: '#555',
                    textDecoration: 'none',
                    padding: '4px 0',
                    marginRight: '8px',
                    borderBottom: '1px solid transparent',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#1a1a1a';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = '#1a1a1a';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = '#555';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent';
                  }}
                  onClick={e => e.preventDefault()}
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div>
            <h3
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              POPULAR SEARCHES
            </h3>
            <div className="flex flex-wrap" style={{ gap: '6px' }}>
              {popularSearches.map(term => (
                <a
                  key={term}
                  href={`/search/${encodeURIComponent(term)}`}
                  style={{
                    fontSize: '12px',
                    color: '#555',
                    textDecoration: 'none',
                    padding: '4px 0',
                    marginRight: '8px',
                    borderBottom: '1px solid transparent',
                    transition: 'color 0.15s, border-color 0.15s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#1a1a1a';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = '#1a1a1a';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = '#555';
                    (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent';
                  }}
                  onClick={e => e.preventDefault()}
                >
                  {term}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SEO text */}
        <div
          style={{
            marginTop: '40px',
            borderTop: '1px solid #e8e8e3',
            paddingTop: '28px',
          }}
        >
          <h2
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '12px',
            }}
          >
            More about shopping At Bianchi for men
          </h2>
          <div
            style={{
              fontSize: '12.5px',
              color: '#666',
              lineHeight: 1.8,
              maxHeight: expanded ? 'none' : '80px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>
              The BIANCHI Shopping Experience – Where Digital Meets Style
            </h3>
            <p style={{ marginBottom: '10px' }}>
              At BIANCHI, we redefine the modern shopping experience, merging seamless digital
              convenience with engaging in-store interactions. Whether you're shopping online or
              visiting our immersive retail spaces, we ensure a smooth, stylish, and hassle-free
              journey that caters to today's fashion-forward men.
            </p>
            <p style={{ marginBottom: '10px' }}>
              Our direct-to-consumer (D2C) approach eliminates traditional retail barriers,
              giving you complete control over how and where you engage with our trend-driven
              menswear collections. From effortless online browsing to hands-on in-store
              exploration, BIANCHI lets you shop on your terms, at your pace.
            </p>
            <h3 style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a', marginBottom: '6px' }}>
              Shop Anytime, Anywhere – The Digital Shopping Experience
            </h3>
            <p style={{ marginBottom: '10px' }}>
              BIANCHI online shopping allows you to browse, select, and purchase from our curated
              menswear collections anytime, anywhere. Whether you're searching for sharp formalwear,
              contemporary casual styles, or trend-forward accessories, our website provides an
              intuitive, fast, and stylish experience.
            </p>

            {/* Fade overlay when collapsed */}
            {!expanded && (
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40px',
                  background: 'linear-gradient(to bottom, transparent, #f8f8f5)',
                }}
              />
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-3"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600,
              color: '#1a1a1a',
              padding: '4px 0',
            }}
          >
            {expanded ? 'Read less' : 'Read more'}
            <ChevronDown
              size={14}
              style={{
                transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
