import React from 'react';
import { shopByOccasion } from '../data/banners';

const ShopByOccasion: React.FC = () => {
  return (
    <section className="shop-occasion-section">
      <div className="shop-occasion-inner">
        {/* Header */}
        <div style={{ marginBottom: '16px' }}>
          <p className="category-eyebrow">SHOP BY</p>
          <h2 className="category-title">STYLE</h2>
        </div>

        {/* Horizontal scroll cards */}
        <div className="shop-occasion-scroll scrollbar-hide">
          {shopByOccasion.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="shop-occasion-card"
              onClick={e => e.preventDefault()}
            >
              <img
                src={item.image}
                alt={item.label}
              />
              <div className="shop-occasion-label">
                <p>{item.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByOccasion;
