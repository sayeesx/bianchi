import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products, type Product } from '../data/products';
import ProductCard from '../components/ProductCard';

interface CategoryInfo {
  title: string;
  categoryKey: string;
  description: string;
  bannerImage: string;
}

const categoryMap: Record<string, CategoryInfo> = {
  '/new-arrivals': {
    title: 'NEW ARRIVALS',
    categoryKey: 'all',
    description: 'Fresh seasonal drops, cutting-edge silhouettes and the latest street-ready designs.',
    bannerImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80',
  },
  '/shirts': {
    title: 'SHIRTS',
    categoryKey: 'shirts',
    description: 'From premium 100% linen and Cuban collars to structured Oxford weaves and satin finishes.',
    bannerImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80',
  },
  '/t-shirts': {
    title: 'T-SHIRTS & POLOS',
    categoryKey: 't-shirts',
    description: 'Heavyweight oversized tees, 240+ GSM cotton, textured waffle knits and classic rugby stripes.',
    bannerImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1200&q=80',
  },
  '/bottomwear': {
    title: 'BOTTOMWEAR',
    categoryKey: 'jeans',
    description: 'Relaxed baggy denim, structured straight leg cuts, tailored pleats and utility cargo pants.',
    bannerImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80',
  },
  '/jeans': {
    title: 'JEANS',
    categoryKey: 'jeans',
    description: 'Authentic stone washes, comfort stretch fabric, vintage fades and wide-leg streetwear fits.',
    bannerImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80',
  },
  '/trousers': {
    title: 'TROUSERS & CHINOS',
    categoryKey: 'trousers',
    description: 'Smart pleated trousers, Gurkha details, lightweight stretch blends and Korean draping.',
    bannerImage: 'https://images.unsplash.com/photo-1594938298603-c8148bfb2882?w=1200&q=80',
  },
  '/jackets': {
    title: 'JACKETS & OUTERWEAR',
    categoryKey: 'jackets',
    description: 'High-neck snaps, utility zip bombers, faux leather jackets and winter layering essentials.',
    bannerImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80',
  },
  '/co-ords': {
    title: 'CO-ORDS',
    categoryKey: 'shirts',
    description: 'Effortless coordinated sets in textured jacquard, resort linens and printed cotton.',
    bannerImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1200&q=80',
  },
  '/sweaters': {
    title: 'SWEATERS & KNITS',
    categoryKey: 'sweaters',
    description: 'Ombre dyed textures, box-fit chunky knits, essential polo sweaters and soft acrylic blends.',
    bannerImage: 'https://images.unsplash.com/photo-1614632537239-e6d704d7f4a4?w=1200&q=80',
  },
};

const CategoryPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const info = categoryMap[path] || {
    title: path.replace('/', '').toUpperCase().replace('-', ' '),
    categoryKey: 'all',
    description: 'Explore our latest collection of premium menswear curated for modern living.',
    bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
  };

  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  // Filter items
  const items: Product[] = info.categoryKey === 'all'
    ? products
    : products.filter((p) => p.category.toLowerCase() === info.categoryKey.toLowerCase());

  // If few items in specific category, supplement with related items so the grid looks full and generous
  const displayItems = items.length >= 4 ? items : [...items, ...products.slice(0, 8 - items.length)];

  // Sort items
  const sortedItems = [...displayItems].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <main style={{ minHeight: '80vh', backgroundColor: '#ffffff' }}>
      {/* Category Header Banner */}
      <div
        style={{
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          padding: '48px clamp(16px, 3.5vw, 64px)',
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.6)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            COLLECTION
          </span>
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 54px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}
          >
            {info.title}
          </h1>
          <p
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '560px',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {info.description}
          </p>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div
        style={{
          borderBottom: '1px solid #e8e8e3',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: '60px',
          zIndex: 30,
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '14px clamp(16px, 3.5vw, 64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
            <strong style={{ color: '#1a1a1a' }}>{sortedItems.length}</strong> Products
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                height: '36px',
                padding: '0 12px',
                border: '1px solid #d0d0cb',
                backgroundColor: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                color: '#1a1a1a',
                cursor: 'pointer',
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '36px clamp(16px, 3.5vw, 64px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
          }}
          className="category-products-grid"
        >
          {sortedItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .category-products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 1024px) {
          .category-products-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 20px !important;
          }
        }
        @media (min-width: 1280px) {
          .category-products-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
};

export default CategoryPage;
