import React from 'react';

const shopByCategories = [
  {
    label: 'POLOS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/56ba705d-69df-40b2-b5b5-7f51f7127fbd/1791971481.jpeg',
    href: '/t-shirts?collar=polo',
  },
  {
    label: 'OUTERWEAR',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/09898572-d1f8-4b19-887b-96e58bf456c1/1791971533.jpeg',
    href: '/jackets',
  },
  {
    label: 'PLUS SIZE',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/2bc1ad6e-4a4c-4fe4-955b-65d28e5d8b36/1791971554.jpeg',
    href: '/plus-size',
    badge: 'IN STORE',
  },
  {
    label: 'SHIRTS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/a783f54d-0e07-4e97-b1e2-abf8846fbef9/1791971467.jpeg',
    href: '/shirts',
  },
  {
    label: 'T-SHIRTS',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/56ba705d-69df-40b2-b5b5-7f51f7127fbd/1791971481.jpeg',
    href: '/t-shirts',
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="category-section">
      <div className="category-section-inner">
        {/* Title */}
        <div className="category-header">
          <div>
            <p className="category-eyebrow">SHOP BY</p>
            <h2 className="category-title">CATEGORY</h2>
            <div className="category-underline" />
          </div>
        </div>

        {/* 5 category cards — centered, equal gap on both mobile and desktop */}
        <div className="category-grid">
          {shopByCategories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              className="category-card"
              onClick={e => e.preventDefault()}
            >
              {/* Label row on top */}
              <div className="category-card-label-row">
                <span className="category-card-label">{cat.label}</span>
                {cat.badge && (
                  <span className="category-card-badge">{cat.badge}</span>
                )}
              </div>
              {/* Image below */}
              <div className="category-card-img-wrap">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="category-card-img"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Shop All link */}
        <div className="category-shop-all">
          <a href="/shop" onClick={e => e.preventDefault()} className="category-shop-all-link">
            SHOP ALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
