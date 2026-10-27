import React from 'react';

// Placeholder images via picsum — small, compressed, single CDN (no external brand CDN requests)
const priceItems = [
  {
    label: 'BUY 3 TOPWEAR',
    price: '@ ₹2699',
    image: 'https://picsum.photos/seed/topwear/160/192',
    href: '/topwear-offer',
  },
  {
    label: 'BUY 2 BOTTOM WEAR',
    price: '@ ₹2899',
    image: 'https://picsum.photos/seed/bottomwear/160/192',
    href: '/bottomwear-offer',
  },
  {
    label: 'SUNGLASSES',
    price: '₹999',
    image: 'https://picsum.photos/seed/sunglasses/160/192',
    href: '/sunglasses',
  },
  {
    label: 'PERFUMES',
    price: '50% OFF',
    isOff: true,
    image: 'https://picsum.photos/seed/perfumes/160/192',
    href: '/perfumes',
  },
];

const PromoBanners: React.FC = () => {
  return (
    <section className="never-before-section">
      {/* Hero banner — image only, no text overlay */}
      <div className="never-before-hero">
        <img
          src="https://picsum.photos/seed/pricedrop/1200/400"
          alt="Price Drop"
          className="never-before-hero-img"
          loading="lazy"
        />
      </div>

      {/* Price cards strip — image only, no text labels on top of images */}
      <div className="never-before-cards">
        {priceItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="never-before-card"
            onClick={e => e.preventDefault()}
          >
            <div className="never-before-card-img">
              <img src={item.image} alt={item.label} loading="lazy" />
            </div>
            <div className="never-before-card-info">
              <span className="never-before-card-label">{item.label}</span>
              <span className={`never-before-card-price${item.isOff ? ' is-off' : ''}`}>
                {item.price}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
