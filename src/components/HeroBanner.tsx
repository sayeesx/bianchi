import React, { useState, useEffect, useCallback } from 'react';
import { heroBanners } from '../data/banners';

const HeroBanner: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % heroBanners.length), [current, goTo]);

  useEffect(() => {
    const interval = setInterval(next, 4500);
    return () => clearInterval(interval);
  }, [next]);

  const banner = heroBanners[current];

  return (
    <div className="hero-banner-wrapper">
      {/* Slides */}
      {heroBanners.map((b, i) => (
        <div
          key={b.id}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.6s ease',
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Use <picture> to serve portrait image on mobile, landscape on desktop */}
          <picture style={{ width: '100%', height: '100%', display: 'block' }}>
            {b.mobileImage && (
              <source
                media="(max-width: 767px)"
                srcSet={b.mobileImage}
              />
            )}
            <img
              src={b.image}
              alt={b.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />
          </picture>
        </div>
      ))}

      {/* Text overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end hero-text-overlay"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">{banner.title}</h1>
          {banner.subtitle && (
            <p className="hero-subtitle">{banner.subtitle}</p>
          )}
          <a
            href={banner.href}
            className="hero-cta"
            onClick={e => e.preventDefault()}
          >
            {banner.cta || 'SHOP NOW'}
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots" style={{ zIndex: 3 }}>
        {heroBanners.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="hero-dot"
            style={{
              width: i === current ? '20px' : '6px',
              backgroundColor: i === current ? '#ffffff' : 'rgba(255,255,255,0.5)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
