import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section className="brand-story-section">
      <div className="brand-story-inner">
        <div className="brand-story-layout">
          {/* Text */}
          <div>
            <p className="brand-story-eyebrow">THE BRAND</p>
            <h2 className="brand-story-title">
              NEXT LEVEL
              <br />
              FASHION
            </h2>
            <p className="brand-story-body">
              At BIANCHI, we redefine the modern shopping experience, merging seamless
              digital convenience with engaging in-store interactions. Trend-driven menswear
              for the fashion-forward generation.
            </p>
            <a
              href="/about"
              className="brand-story-cta"
              onClick={e => e.preventDefault()}
            >
              ABOUT US
            </a>
          </div>

          {/* Images */}
          <div className="brand-story-images">
            <div className="brand-story-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
                alt="Brand Story 1"
              />
            </div>
            <div className="brand-story-img-wrap brand-story-img-offset">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80"
                alt="Brand Story 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
