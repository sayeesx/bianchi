import React from 'react';
import { shopByPrice } from '../data/banners';

const priceDrop = 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price-card/1b2ea7f5-3edd-4a9c-b8da-c503ca62e9be/1791868919_desktop.jpeg';

const ShopByPrice: React.FC = () => {
  return (
    <section className="shop-price-section">
      <div className="shop-price-inner">
        {/* Header */}
        <div className="shop-price-header">
          <p className="eyebrow" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase', marginBottom: '2px' }}>NEXT</p>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>LEVEL PRICES</h2>
        </div>

        {/* Desktop layout wrapper */}
        <div className="shop-price-layout">
          {/* Big card — hidden on mobile via CSS */}
          <a
            href="/price-drop"
            className="shop-price-big-card"
            style={{ display: 'none' }}
            onClick={e => e.preventDefault()}
          >
            <img src={priceDrop} alt="Price Drop" />
          </a>

          {/* Grid of 4 cards — 2 cols mobile, 4 cols desktop */}
          <div className="shop-price-grid" style={{ flex: 1 }}>
            {shopByPrice.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="shop-price-card"
                onClick={e => e.preventDefault()}
              >
                <img
                  src={item.image}
                  alt={item.label}
                />
                <div className="shop-price-label">
                  <p>{item.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByPrice;
