import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

// Placeholder images via picsum — small size to reduce CDN requests
const shopByCategories = [
  {
    label: 'SHIRTS',
    image: 'https://picsum.photos/seed/shirts/300/300',
    href: '/shirts',
  },
  {
    label: 'TROUSERS',
    image: 'https://picsum.photos/seed/trousers/300/300',
    href: '/trousers',
  },
  {
    label: 'T-SHIRTS',
    image: 'https://picsum.photos/seed/tshirts/300/300',
    href: '/t-shirts',
  },
  {
    label: 'JEANS',
    image: 'https://picsum.photos/seed/jeans/300/300',
    href: '/jeans',
  },
  {
    label: 'CARGOS',
    image: 'https://picsum.photos/seed/cargos/300/300',
    href: '/cargos',
  },
  {
    label: 'POLOS',
    image: 'https://picsum.photos/seed/polos/300/300',
    href: '/t-shirts?collar=polo',
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="cat-section">
      <div className="cat-inner">
        {/* 3×2 button grid */}
        <div className="cat-grid">
          {shopByCategories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="cat-btn"
              onClick={(e) => e.preventDefault()}
            >
              {/* Image only — no text label above image */}
              <div className="cat-btn-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="cat-btn-img"
                  loading="lazy"
                />
                {/* Label overlaid at bottom */}
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
            SHOP ALL <HiArrowRight className="cat-shop-all-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
