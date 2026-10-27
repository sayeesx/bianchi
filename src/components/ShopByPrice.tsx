import React from 'react';

// Placeholder images via picsum — small, compressed
const priceDrop = 'https://picsum.photos/seed/pricedrop2/560/400';

const shopByPrice = [
  { label: 'BUY 3 TOPWEAR', image: 'https://picsum.photos/seed/sbp1/300/360', href: '/topwear-offer' },
  { label: 'BUY 2 BOTTOM WEAR', image: 'https://picsum.photos/seed/sbp2/300/360', href: '/bottomwear-offer' },
  { label: 'SUNGLASSES', image: 'https://picsum.photos/seed/sbp3/300/360', href: '/sunglasses' },
  { label: 'PERFUMES', image: 'https://picsum.photos/seed/sbp4/300/360', href: '/perfumes' },
];

const ShopByPrice: React.FC = () => {
  return (
    <section className="shop-price-section">
      <div className="shop-price-inner">
        {/* Desktop layout wrapper */}
        <div className="shop-price-layout">
          {/* Big card — hidden on mobile via CSS */}
          <a
            href="/price-drop"
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
