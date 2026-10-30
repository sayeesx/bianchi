import React, { useState, useEffect } from 'react';
import { products, type Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { RuneIcon } from '../components/RuneIcon';

// Prepare rich sale items with authentic discount calculations
const saleProducts: Product[] = products.map((p, index) => {
  const discountPercentages = [20, 25, 30, 35, 40, 22, 28, 18];
  const discount = p.discount || discountPercentages[index % discountPercentages.length];
  const originalPrice = p.originalPrice || Math.round(p.price / (1 - discount / 100));

  return {
    ...p,
    discount,
    originalPrice,
    badge: index % 3 === 0 ? 'HOT SALE' : (index % 4 === 0 ? 'LIMITED DROP' : undefined),
  };
});

const categories = ['ALL', 'SHIRTS', 'T-SHIRTS', 'JEANS', 'JACKETS', 'TROUSERS', 'SWEATERS'];

const SalePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState<'discount-high' | 'price-low' | 'price-high'>('discount-high');
  const [priceRange, setPriceRange] = useState<'all' | 'under-1500' | '1500-2500' | 'above-2500'>('all');

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter products
  const filtered = saleProducts.filter((p) => {
    if (selectedCategory !== 'ALL' && p.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    if (priceRange === 'under-1500' && p.price >= 1500) return false;
    if (priceRange === '1500-2500' && (p.price < 1500 || p.price > 2500)) return false;
    if (priceRange === 'above-2500' && p.price <= 2500) return false;
    return true;
  });

  // Sort products
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'discount-high') return (b.discount || 0) - (a.discount || 0);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <main style={{ minHeight: '80vh', backgroundColor: '#ffffff' }}>
      {/* Editorial Sale Hero Banner */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          padding: '48px clamp(16px, 4vw, 64px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                backgroundColor: '#e63329',
                color: '#fff',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                padding: '4px 10px',
                textTransform: 'uppercase',
              }}
            >
              LIMITED TIME FLASH SALE
            </span>
            <span style={{ fontSize: '12px', color: '#999', letterSpacing: '0.04em' }}>
              ENDS IN: {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            END OF SEASON SALE
          </h1>

          <p style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: 0 }}>
            Up to 40% off across premium streetwear, luxury linens, denim edits and outerwear. Automatic discount at checkout.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#fff' }}>
              <RuneIcon name="money-tag" size={14} color="#e63329" />
              <span>Use code <strong>BIANCHI20</strong> for extra ₹200 off above ₹1499</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#fff' }}>
              <RuneIcon name="money-truck" size={14} color="#4caf50" />
              <span>Free Express Delivery on orders above ₹999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Filter & Sort Controls */}
      <div
        style={{
          borderBottom: '1px solid #e8e8e3',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: '60px',
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '12px clamp(16px, 2.5vw, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }} className="scrollbar-hide">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: isSelected ? '#1a1a1a' : '#f8f8f5',
                    color: isSelected ? '#ffffff' : '#1a1a1a',
                    border: '1px solid',
                    borderColor: isSelected ? '#1a1a1a' : '#e0e0db',
                    fontSize: '11.5px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.15s ease',
                    fontFamily: 'inherit',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right: Sort and Price Range Dropdowns */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value as any)}
              style={{
                height: '36px',
                padding: '0 10px',
                border: '1px solid #d0d0cb',
                backgroundColor: '#ffffff',
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#1a1a1a',
                cursor: 'pointer',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option value="all">All Prices</option>
              <option value="under-1500">Under ₹1,500</option>
              <option value="1500-2500">₹1,500 - ₹2,500</option>
              <option value="above-2500">Above ₹2,500</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                height: '36px',
                padding: '0 10px',
                border: '1px solid #d0d0cb',
                backgroundColor: '#ffffff',
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#1a1a1a',
                cursor: 'pointer',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option value="discount-high">Highest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Product Grid */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '36px clamp(16px, 2.5vw, 48px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <p style={{ fontSize: '13px', color: '#666' }}>
            Showing <strong style={{ color: '#1a1a1a' }}>{sorted.length}</strong> items in{' '}
            <strong style={{ color: '#1a1a1a' }}>{selectedCategory}</strong>
          </p>

          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#e63329',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            🔥 SELLING FAST
          </span>
        </div>

        {sorted.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
            }}
            className="sale-products-grid"
          >
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px 0' }}>
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
              No items match this filter criteria
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setPriceRange('all');
              }}
              style={{
                marginTop: '12px',
                padding: '10px 24px',
                backgroundColor: '#1a1a1a',
                color: '#fff',
                border: 'none',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 640px) {
          .sale-products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 1024px) {
          .sale-products-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (min-width: 1280px) {
          .sale-products-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
};

export default SalePage;
