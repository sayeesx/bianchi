import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RuneIcon } from './RuneIcon';

interface MockupFit {
  size: string;
  category: string;
  fitName: string;
  image: string;
  chest: string;
  length: string;
  shoulder: string;
  recommendedFor: string;
}

const mockupFits: MockupFit[] = [
  {
    size: 'XS',
    category: 'T-Shirts',
    fitName: 'Slim Fit Crew Neck Mockup',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&q=80',
    chest: '36 in / 91 cm',
    length: '26 in / 66 cm',
    shoulder: '16.5 in / 42 cm',
    recommendedFor: 'Lean builds / tight styling',
  },
  {
    size: 'S',
    category: 'Shirts',
    fitName: 'Structured Oxford Shirt Mockup',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80',
    chest: '38 in / 96 cm',
    length: '27 in / 68 cm',
    shoulder: '17 in / 43 cm',
    recommendedFor: 'Slim athletic builds',
  },
  {
    size: 'M',
    category: 'Polo & Knits',
    fitName: 'Textured Flat Knit Polo Mockup',
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=500&q=80',
    chest: '40 in / 102 cm',
    length: '28 in / 71 cm',
    shoulder: '17.5 in / 44 cm',
    recommendedFor: 'Standard fit for 5\'8" - 5\'11"',
  },
  {
    size: 'L',
    category: 'Oversized Tees',
    fitName: 'Heavyweight Boxy Tee Mockup',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80',
    chest: '42 in / 107 cm',
    length: '29 in / 74 cm',
    shoulder: '18.5 in / 47 cm',
    recommendedFor: 'Relaxed streetwear drape',
  },
  {
    size: 'XL',
    category: 'Jackets',
    fitName: 'Utility Snap Jacket Mockup',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80',
    chest: '44 in / 112 cm',
    length: '30 in / 76 cm',
    shoulder: '19.5 in / 49 cm',
    recommendedFor: 'Layering over hoodies',
  },
  {
    size: '2XL',
    category: 'Denim',
    fitName: 'Relaxed Straight Denim Mockup',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80',
    chest: '46 in / 117 cm',
    length: '31 in / 79 cm',
    shoulder: '20.5 in / 52 cm',
    recommendedFor: 'Broad chests / relaxed fit',
  },
  {
    size: '3XL',
    category: 'Co-Ords',
    fitName: 'Relaxed Resort Shirt Mockup',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500&q=80',
    chest: '48 in / 122 cm',
    length: '32 in / 81 cm',
    shoulder: '21.5 in / 55 cm',
    recommendedFor: 'Maximum comfort & drape',
  },
  {
    size: '4XL',
    category: 'Sweaters',
    fitName: 'Oversized Knit Mockup',
    image: 'https://images.unsplash.com/photo-1614632537239-e6d704d7f4a4?w=500&q=80',
    chest: '50 in / 127 cm',
    length: '33 in / 84 cm',
    shoulder: '22.5 in / 57 cm',
    recommendedFor: 'Relaxed generous silhouette',
  },
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'];

const ShopYourSize: React.FC = () => {
  const navigate = useNavigate();
  const [activeSize, setActiveSize] = useState('M');

  const currentFit = mockupFits.find(f => f.size === activeSize) || mockupFits[2];

  return (
    <section className="shop-size-section" style={{ backgroundColor: '#ffffff', padding: '40px 0', borderTop: '1px solid #e8e8e3' }}>
      <div className="shop-size-inner" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}>
            FIND YOUR PERFECT FIT
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              SHOP YOUR SIZE
            </h2>
            <p style={{ fontSize: '13px', color: '#666' }}>
              Select a size to view true-to-fit mockups & measurements
            </p>
          </div>
        </div>

        {/* Size Selector Pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {sizes.map((size) => {
            const isSelected = activeSize === size;
            return (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                style={{
                  minWidth: '56px',
                  height: '48px',
                  padding: '0 16px',
                  backgroundColor: isSelected ? '#1a1a1a' : '#f8f8f5',
                  color: isSelected ? '#ffffff' : '#1a1a1a',
                  border: isSelected ? '1px solid #1a1a1a' : '1px solid #e0e0db',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={e => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#ebebe5';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#f8f8f5';
                  }
                }}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* Mockup Card Showcase */}
        <div
          style={{
            backgroundColor: '#f8f8f5',
            border: '1px solid #e8e8e3',
            display: 'grid',
            gridTemplateColumns: '1fr',
            overflow: 'hidden',
          }}
          className="shop-size-showcase-grid"
        >
          {/* Left: Mockup Image */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              backgroundColor: '#e8e8e3',
              overflow: 'hidden',
            }}
            className="shop-size-mockup-img-wrap"
          >
            <img
              src={currentFit.image}
              alt={currentFit.fitName}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.4s ease',
              }}
              loading="lazy"
            />
            {/* Tag Badge */}
            <div
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                backgroundColor: '#1a1a1a',
                color: '#fff',
                padding: '6px 14px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              SIZE {currentFit.size} MOCKUP
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: 600,
                color: '#1a1a1a',
                backdropFilter: 'blur(4px)',
              }}
            >
              Category: {currentFit.category}
            </div>
          </div>

          {/* Right: Fit Specification & CTA */}
          <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#e63329', textTransform: 'uppercase' }}>
                FIT SPECIFICATION
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', marginTop: '4px', marginBottom: '8px' }}>
                {currentFit.fitName}
              </h3>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
                Designed & tailored for {currentFit.recommendedFor}.
              </p>

              {/* Measurements Specs */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  backgroundColor: '#ffffff',
                  padding: '16px',
                  border: '1px solid #e8e8e3',
                  marginBottom: '24px',
                }}
              >
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>CHEST</p>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '2px' }}>{currentFit.chest}</p>
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>LENGTH</p>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '2px' }}>{currentFit.length}</p>
                </div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 700, color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase' }}>SHOULDER</p>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '2px' }}>{currentFit.shoulder}</p>
                </div>
              </div>

              {/* Perks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#444' }}>
                  <RuneIcon name="indicators-shield-check" size={14} color="#2d7a3a" />
                  <span>True to Indian standard menswear sizing</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#444' }}>
                  <RuneIcon name="tools-sparkles" size={14} color="#1a1a1a" />
                  <span>Pre-shrunk fabric ensures exact measurements stay true after wash</span>
                </div>
              </div>
            </div>

            {/* Shop size CTA */}
            <button
              onClick={() => navigate(`/search?q=${encodeURIComponent(activeSize)}`)}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'background-color 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#333')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
            >
              <span>EXPLORE ALL SIZE {activeSize} PRODUCTS</span>
              <RuneIcon name="arrows-arrow-right" size={14} color="#fff" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .shop-size-showcase-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .shop-size-mockup-img-wrap {
            aspect-ratio: auto !important;
            height: 100% !important;
            min-height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ShopYourSize;
