import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [hovered, setHovered] = useState(false);
  const [addedSize, setAddedSize] = useState<string | null>(null);
  const wishlisted = isWishlisted(product.id);

  const handleAddToBag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 'M');
    setAddedSize('M');
    setTimeout(() => setAddedSize(null), 1500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <a
      href={`/product/${product.slug}`}
      className="product-card block"
      style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={e => e.preventDefault()}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: '#f5f5f0',
          aspectRatio: '3/4',
          position: 'relative',
        }}
      >
        {/* Primary image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full product-img-primary"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
        {/* Hover image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={product.name}
            className="absolute inset-0 w-full h-full product-img-secondary"
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1" style={{ zIndex: 2 }}>
          {product.badge && (
            <span
              style={{
                backgroundColor: '#1a1a1a',
                color: '#fff',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                padding: '3px 7px',
              }}
            >
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span
              style={{
                backgroundColor: '#e63329',
                color: '#fff',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.06em',
                padding: '3px 7px',
              }}
            >
              -{product.discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 flex items-center justify-center"
          style={{
            zIndex: 2,
            width: '30px',
            height: '30px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            border: 'none',
            cursor: 'pointer',
            opacity: hovered || wishlisted ? 1 : 0,
            transition: 'opacity 0.2s ease',
            borderRadius: '50%',
          }}
          aria-label="Add to wishlist"
        >
          <Heart
            size={14}
            fill={wishlisted ? '#e63329' : 'none'}
            color={wishlisted ? '#e63329' : '#1a1a1a'}
            strokeWidth={2}
          />
        </button>

        {/* Add to bag - appears on hover (always visible on mobile) */}
        <div
          className="product-add-btn-wrap"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.25s ease',
          }}
        >
          <button
            onClick={handleAddToBag}
            style={{
              width: '100%',
              backgroundColor: addedSize ? '#4caf50' : '#1a1a1a',
              color: '#fff',
              border: 'none',
              padding: '11px 0',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
          >
            {addedSize ? '✓ ADDED' : 'ADD TO BAG'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div style={{ paddingTop: '10px', paddingBottom: '4px' }}>
        {/* Color options */}
        {product.colorCount && product.colorCount > 1 && (
          <p
            style={{
              fontSize: '10px',
              color: '#999',
              marginBottom: '4px',
            }}
          >
            +{product.colorCount} colours
          </p>
        )}

        {/* Name */}
        <p
          style={{
            fontSize: '12.5px',
            fontWeight: 500,
            color: '#1a1a1a',
            lineHeight: 1.4,
            marginBottom: '5px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {product.name}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#1a1a1a',
            }}
          >
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: '#999',
                textDecoration: 'line-through',
              }}
            >
              ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
          )}
          {product.discount && (
            <span
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#e63329',
              }}
            >
              ({product.discount}% off)
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
