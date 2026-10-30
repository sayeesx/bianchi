import React from 'react';
import { shopByPrice } from '../data/banners';

const priceDrop = 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/a43a7c64-ff79-4d11-b0f8-dd22ebe08cea/1791804358_desktop.jpeg';

const ShopByPrice: React.FC = () => {
  return (
    <section className="shop-price-section">
      <div className="shop-price-inner">
        {/* Desktop layout wrapper */}
        <div className="shop-price-layout">
          {/* Big card — hidden on mobile via CSS */}
          <a
            href="/sale"
            className="shop-price-big-card"
            style={{ display: 'none' }}
            onClick={e => e.preventDefault()}
          >
            <img src={priceDrop} alt="Price Drop" loading="lazy" />
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
                  loading="lazy"
                />
                <div className="shop-price-label">
                  <p>{item.label}</p>
                  {item.price && (
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#fff', marginTop: '2px', display: 'block' }}>
                      {item.price}
                    </span>
                  )}
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
