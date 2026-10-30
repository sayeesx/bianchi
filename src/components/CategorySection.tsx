import React from 'react';
import { RuneIcon } from './RuneIcon';
import { categories } from '../data/navigation';

const CategorySection: React.FC = () => {
  return (
    <section className="cat-section">
      <div className="cat-inner">
        {/* 3×2 button grid — using real Bianchi category images */}
        <div className="cat-grid">
          {categories.slice(0, 6).map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="cat-btn"
              onClick={(e) => e.preventDefault()}
            >
              <div className="cat-btn-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="cat-btn-img"
                  loading="lazy"
                />
                <span className="cat-btn-overlay-label">{cat.label}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Shop All */}
        <div className="cat-shop-all">
          <a
            href="/shop"
            className="cat-shop-all-link"
            onClick={(e) => e.preventDefault()}
          >
            SHOP ALL <RuneIcon name="arrows-arrow-right" size={13} className="cat-shop-all-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
