import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';

const shopByCategories = [
  {
    label: 'SHIRTS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/a783f54d-0e07-4e97-b1e2-abf8846fbef9/1791971467.jpeg',
    href: '/shirts',
  },
  {
    label: 'TROUSERS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/09898572-d1f8-4b19-887b-96e58bf456c1/1791971533.jpeg',
    href: '/trousers',
  },
  {
    label: 'T-SHIRTS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/56ba705d-69df-40b2-b5b5-7f51f7127fbd/1791971481.jpeg',
    href: '/t-shirts',
  },
  {
    label: 'JEANS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/2bc1ad6e-4a4c-4fe4-955b-65d28e5d8b36/1791971554.jpeg',
    href: '/jeans',
  },
  {
    label: 'CARGOS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/09898572-d1f8-4b19-887b-96e58bf456c1/1791971533.jpeg',
    href: '/cargos',
  },
  {
    label: 'POLOS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/56ba705d-69df-40b2-b5b5-7f51f7127fbd/1791971481.jpeg',
    href: '/t-shirts?collar=polo',
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="cat-section">
      <div className="cat-inner">
        {/* Header */}
        <div className="cat-header">
          <div>
            <p className="cat-eyebrow">SHOP BY</p>
            <h2 className="cat-title">CATEGORY</h2>
            <div className="cat-underline" />
          </div>
        </div>

        {/* 3×2 button grid */}
        <div className="cat-grid">
          {shopByCategories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="cat-btn"
              onClick={(e) => e.preventDefault()}
            >
              {/* Label row */}
              <span className="cat-btn-label">{cat.label}</span>
              {/* Image */}
              <div className="cat-btn-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="cat-btn-img"
                  loading="lazy"
                />
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
