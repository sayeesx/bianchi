import React from 'react';

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];

const ShopYourSize: React.FC = () => {
  return (
    <section className="shop-size-section">
      <div className="shop-size-inner">
        <div className="shop-size-layout">
          <div className="shop-size-text">
            <p className="eyebrow" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase', marginBottom: '4px' }}>
              FIND YOUR PERFECT FIT
            </p>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a' }}>
              SHOP YOUR SIZE
            </h2>
          </div>

          <div className="shop-size-buttons">
            {sizes.map((size) => (
              <a
                key={size}
                href={`/shop?size=${size}`}
                className="size-btn"
                onClick={e => e.preventDefault()}
              >
                {size}
              </a>
            ))}
          </div>

          {/* Banner image — desktop only */}
          <a
            href="/shop-your-size"
            className="hidden lg:block"
            style={{ textDecoration: 'none' }}
            onClick={e => e.preventDefault()}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/shop_your_size-new.jpg?v=1791869015"
              alt="Shop Your Size"
              style={{ height: '80px', objectFit: 'contain' }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShopYourSize;
