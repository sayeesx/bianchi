import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, getProductBySlug } from '../data/products';
import { useStore } from '../context/StoreContext';
import { RuneIcon } from '../components/RuneIcon';
import ProductCard from '../components/ProductCard';

const SIZE_GUIDE = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();

  const product = slug ? getProductBySlug(slug) : undefined;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [sizeError, setSizeError] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const wishlisted = product ? isWishlisted(product.id) : false;

  if (!product) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', padding: '20px' }}>
        <p style={{ fontSize: '18px', fontWeight: 600 }}>Product not found</p>
        <button
          onClick={() => navigate('/')}
          style={{ padding: '12px 28px', background: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}
        >
          BACK TO HOME
        </button>
      </div>
    );
  }

  const images = [product.image, product.hoverImage].filter(Boolean) as string[];
  const sizes = product.sizes || SIZE_GUIDE;
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);

  const handleAddToBag = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addToCart(product, selectedSize);
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2000);
      return;
    }
    addToCart(product, selectedSize);
    navigate('/checkout');
  };

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '40px' }}>
      {/* Breadcrumb — compact & horizontally scrollable on mobile */}
      <div style={{ borderBottom: '1px solid #f0f0eb', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '12px clamp(16px, 2.5vw, 32px)' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#999', overflowX: 'auto', whiteSpace: 'nowrap' }} className="scrollbar-hide">
            <a href="/" onClick={e => { e.preventDefault(); navigate('/'); }} style={{ color: '#999', textDecoration: 'none' }}>Home</a>
            <span>/</span>
            <a href={`/${product.category}`} onClick={e => { e.preventDefault(); navigate(`/${product.category}`); }} style={{ color: '#999', textDecoration: 'none', textTransform: 'capitalize' }}>
              {product.category}
            </a>
            <span>/</span>
            <span style={{ color: '#1a1a1a', fontWeight: 600 }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Layout */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: 'clamp(16px, 3vw, 36px) clamp(16px, 2.5vw, 32px)',
        }}
        className="product-detail-layout"
      >
        {/* Left: Images Column */}
        <div className="product-detail-images">
          {/* Main Hero Image */}
          <div
            style={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '3/4',
              maxHeight: '680px',
              backgroundColor: '#f5f5f0',
              width: '100%',
            }}
          >
            <img
              src={images[activeImg]}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />

            {/* Wishlist Button floating on top right */}
            <button
              onClick={() => toggleWishlist(product.id)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                zIndex: 2,
              }}
              aria-label="Wishlist"
            >
              <RuneIcon
                name="tools-heart"
                size={17}
                type={wishlisted ? 'fill' : 'normal'}
                color={wishlisted ? '#e63329' : '#1a1a1a'}
              />
            </button>

            {/* Discount badge */}
            {product.discount && (
              <span
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  backgroundColor: '#e63329',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '4px 9px',
                  letterSpacing: '0.04em',
                  zIndex: 2,
                }}
              >
                -{product.discount}% OFF
              </span>
            )}
          </div>

          {/* Thumbnail strip — rendered below image on mobile, left on desktop */}
          <div className="product-thumb-strip">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  width: '68px',
                  height: '84px',
                  border: i === activeImg ? '2px solid #1a1a1a' : '1px solid #d0d0cb',
                  padding: '2px',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  flexShrink: 0,
                  transition: 'border-color 0.15s ease',
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="product-detail-info">
          {/* Badge */}
          {product.badge && (
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                fontSize: '9.5px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                padding: '4px 9px',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}
            >
              {product.badge}
            </span>
          )}

          <h1
            style={{
              fontSize: 'clamp(20px, 2.5vw, 26px)',
              fontWeight: 800,
              color: '#1a1a1a',
              lineHeight: 1.3,
              marginBottom: '10px',
              letterSpacing: '-0.01em',
            }}
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '2px', color: '#f4a81d', fontSize: '13px' }}>
              {'★★★★☆'}
            </div>
            <span style={{ fontSize: '12px', color: '#666' }}>4.2 (128 reviews)</span>
          </div>

          {/* Price Row */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '22px' }}>
            <span style={{ fontSize: '24px', fontWeight: 800, color: '#1a1a1a' }}>
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '15px', color: '#999', textDecoration: 'line-through' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {product.discount && (
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#e63329' }}>
                ({product.discount}% OFF)
              </span>
            )}
          </div>

          <div style={{ width: '100%', height: '1px', backgroundColor: '#f0f0eb', marginBottom: '22px' }} />

          {/* Size selection */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <p style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', color: '#1a1a1a', textTransform: 'uppercase', margin: 0 }}>
                SELECT SIZE {selectedSize && <span style={{ fontWeight: 400, color: '#666' }}>— {selectedSize}</span>}
              </p>
              <button
                onClick={() => setShowSizeGuide(!showSizeGuide)}
                style={{ fontSize: '11px', fontWeight: 600, color: '#666', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Size Guide
              </button>
            </div>

            {sizeError && (
              <p style={{ fontSize: '12px', color: '#e63329', marginBottom: '10px', fontWeight: 600 }}>
                ⚠️ Please select a size before adding to bag
              </p>
            )}

            {/* Size Buttons Grid */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                  style={{
                    minWidth: '50px',
                    height: '48px',
                    padding: '0 10px',
                    border: selectedSize === size ? '2px solid #1a1a1a' : '1px solid #d0d0cb',
                    backgroundColor: selectedSize === size ? '#1a1a1a' : '#ffffff',
                    color: selectedSize === size ? '#ffffff' : '#1a1a1a',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    fontFamily: 'inherit',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Collapsible Size Guide Table */}
            {showSizeGuide && (
              <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f8f8f5', border: '1px solid #e8e8e3' }}>
                <p style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '10px', color: '#1a1a1a' }}>
                  MEASUREMENTS (IN CM)
                </p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', fontSize: '11px', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
                        {['Size', 'Chest', 'Waist', 'Length'].map((h) => (
                          <th key={h} style={{ padding: '7px 10px', fontWeight: 700, letterSpacing: '0.06em' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['S', '91', '76', '71'],
                        ['M', '96', '81', '72'],
                        ['L', '101', '86', '73'],
                        ['XL', '106', '91', '74'],
                        ['XXL', '116', '101', '75'],
                      ].map((row, i) => (
                        <tr key={row[0]} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f8f8f5' }}>
                          {row.map((cell, j) => (
                            <td key={j} style={{ padding: '7px 10px', borderBottom: '1px solid #e8e8e3' }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Action CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            <button
              onClick={handleAddToBag}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: addedToBag ? '#2d7a3a' : '#1a1a1a',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'background-color 0.2s ease',
                fontFamily: 'inherit',
              }}
            >
              {addedToBag ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
            </button>
            <button
              onClick={handleBuyNow}
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#ffffff',
                color: '#1a1a1a',
                border: '2px solid #1a1a1a',
                cursor: 'pointer',
                fontSize: '12.5px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit',
              }}
            >
              BUY NOW
            </button>
          </div>

          {/* Trust Guarantees */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: '#f8f8f5',
              border: '1px solid #f0f0eb',
            }}
          >
            {[
              { icon: 'money-truck', text: 'Free delivery on orders above ₹999' },
              { icon: 'money-tag', text: 'Easy 15-day return & exchange window' },
              { icon: 'tools-sparkles', text: '100% original Bianchi verified quality' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <RuneIcon name={item.icon as any} size={16} color="#666" />
                <span style={{ fontSize: '12px', color: '#555' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Accordion Sections */}
          <ProductAccordion title="PRODUCT DESCRIPTION" defaultOpen>
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#555', margin: 0 }}>
              {product.description || 'Premium quality garment crafted with the finest materials for exceptional comfort, silhouette drape and durability.'}
            </p>
            <ul style={{ marginTop: '10px', paddingLeft: '18px', fontSize: '12.5px', lineHeight: 1.7, color: '#666' }}>
              <li>Premium grade fabric weave</li>
              <li>Comfort stretch & regular machine wash</li>
              <li>Engineered in India by Bianchi</li>
            </ul>
          </ProductAccordion>

          <ProductAccordion title="SIZE & FIT">
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#555', margin: 0 }}>
              Model is 6'1" wearing size M. True to Indian standard sizing. For a relaxed oversized streetwear fit, choose one size up.
            </p>
          </ProductAccordion>

          <ProductAccordion title="SHIPPING & EASY RETURNS">
            <p style={{ fontSize: '13px', lineHeight: 1.7, color: '#555', margin: 0 }}>
              Standard delivery takes 3–5 business days. Express next-day dispatch available at checkout. Hassle-free 15-day return and exchange policy.
            </p>
          </ProductAccordion>
        </div>
      </div>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section style={{ maxWidth: '1440px', margin: '20px auto 0', padding: '0 clamp(16px, 2.5vw, 32px)' }}>
          <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
              YOU MAY ALSO LIKE
            </h2>
            <a
              href={`/${product.category}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/${product.category}`);
              }}
              style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', color: '#1a1a1a', textDecoration: 'underline' }}
            >
              VIEW ALL
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}
            className="related-products-grid"
          >
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Responsive Layout CSS */}
      <style>{`
        .product-detail-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .product-detail-images {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .product-thumb-strip {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          order: 2;
          padding-bottom: 4px;
        }
        .product-thumb-strip::-webkit-scrollbar { display: none; }
        .product-thumb-strip { -ms-overflow-style: none; scrollbar-width: none; }

        @media (min-width: 860px) {
          .product-detail-layout {
            grid-template-columns: 1.15fr 1fr;
            gap: 48px;
            align-items: start;
          }
          .product-detail-images {
            flex-direction: row-reverse;
            gap: 16px;
          }
          .product-thumb-strip {
            flex-direction: column;
            order: 1;
            overflow-x: visible;
          }
        }

        @media (min-width: 640px) {
          .related-products-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .related-products-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
};

// Accordion Subcomponent
const ProductAccordion: React.FC<{ title: string; defaultOpen?: boolean; children: React.ReactNode }> = ({
  title,
  defaultOpen = false,
  children,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderTop: '1px solid #e8e8e3' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 0',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '11px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: '#1a1a1a',
          textTransform: 'uppercase',
          fontFamily: 'inherit',
        }}
      >
        <span>{title}</span>
        <span style={{ fontSize: '18px', fontWeight: 300, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s ease' }}>
          +
        </span>
      </button>
      {open && <div style={{ paddingBottom: '16px' }}>{children}</div>}
    </div>
  );
};

export default ProductPage;
