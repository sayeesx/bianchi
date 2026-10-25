import React from 'react';

const priceItems = [
  {
    label: 'BUY 3 TOPWEAR',
    price: '@ ₹2699',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/90f15fc8-103d-4062-9974-5d00e65e508e/1792147799.jpeg',
    href: '/topwear-offer',
  },
  {
    label: 'BUY 2 BOTTOM WEAR',
    price: '@ ₹2899',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/879b08dc-fe6b-47ff-8916-a97e5e7318a5/1792147829.jpeg',
    href: '/bottomwear-offer',
  },
  {
    label: 'SUNGLASSES',
    price: '₹999',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/63abd977-30f5-44e3-8a08-9e9cfb066352/1792661126.jpeg',
    href: '/sunglasses',
  },
  {
    label: 'PERFUMES',
    price: '50% OFF',
    isOff: true,
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/cc252370-be54-476c-bb4b-d2f9a60266a1/1792661138.jpeg',
    href: '/perfumes',
  },
];

const PromoBanners: React.FC = () => {
  return (
    <section className="never-before-section">
      {/* Hero banner */}
      <div className="never-before-hero">
        <img
          src="https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price-card/1b2ea7f5-3edd-4a9c-b8da-c503ca62e9be/1791868919_desktop.jpeg"
          alt="Never Before Prices"
          className="never-before-hero-img"
        />
        <div className="never-before-text">
          <h2 className="never-before-heading">
            NEVER<br />BEFORE<br />PRICES
          </h2>
        </div>
      </div>

      {/* Price cards strip */}
      <div className="never-before-cards">
        {priceItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="never-before-card"
            onClick={e => e.preventDefault()}
          >
            <div className="never-before-card-img">
              <img src={item.image} alt={item.label} />
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
