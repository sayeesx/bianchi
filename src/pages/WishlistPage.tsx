import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { RuneIcon } from '../components/RuneIcon';

const WishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const { wishlist } = useStore();

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <main style={{ minHeight: '80vh', backgroundColor: '#ffffff', padding: '40px clamp(16px, 3vw, 48px)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Header */}
        <div
          style={{
            borderBottom: '1px solid #e8e8e3',
            paddingBottom: '20px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#999', textTransform: 'uppercase' }}>
              SAVED ITEMS
            </span>
            <h1
              style={{
                fontSize: '26px',
                fontWeight: 900,
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: '4px 0 0',
              }}
            >
              MY WISHLIST
            </h1>
          </div>
          <span style={{ fontSize: '13px', color: '#666' }}>
            {wishlistedProducts.length} item{wishlistedProducts.length === 1 ? '' : 's'}
          </span>
        </div>

        {/* Content */}
        {wishlistedProducts.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}
            className="wishlist-products-grid"
          >
            {wishlistedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 20px',
              backgroundColor: '#f8f8f5',
              border: '1px solid #e8e8e3',
              maxWidth: '600px',
              margin: '40px auto',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #e8e8e3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <RuneIcon name="tools-heart" size={24} color="#999" />
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', marginBottom: '8px' }}>
              Your wishlist is empty
            </h2>
            <p style={{ fontSize: '13.5px', color: '#666', lineHeight: 1.6, marginBottom: '28px' }}>
              Tap the heart icon on any product to save it here for later. Find your favorite fits before they sell out!
            </p>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '14px 32px',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                border: 'none',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
            >
              START EXPLORING
            </button>
          </div>
        )}

      </div>

      <style>{`
        @media (min-width: 640px) {
          .wishlist-products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 1024px) {
          .wishlist-products-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (min-width: 1280px) {
          .wishlist-products-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
};

export default WishlistPage;

