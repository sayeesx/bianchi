import React from 'react';
import { shopByPrice } from '../data/banners';

const PromoBanners: React.FC = () => {
  return (
    <section className="never-before-section">
      {/* Hero banner — full width editorial */}
      <div className="never-before-hero">
        <img
          src="https://d2d5n4ft74bagm.cloudfront.net/media/banners/a43a7c64-ff79-4d11-b0f8-dd22ebe08cea/1791804358_desktop.jpeg"
          alt="Never Before Prices"
          className="never-before-hero-img"
          loading="lazy"
        />
      </div>

      {/* Price cards strip */}
      <div className="never-before-cards">
        {shopByPrice.map((item) => (
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
