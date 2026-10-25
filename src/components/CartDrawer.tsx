import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const CartDrawer: React.FC = () => {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (!cartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 drawer-overlay"
        style={{ zIndex: 300, backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full flex flex-col"
        style={{
          width: '400px',
          maxWidth: '100vw',
          backgroundColor: '#ffffff',
          zIndex: 301,
          boxShadow: '-4px 0 24px rgba(0,0,0,0.12)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5"
          style={{
            height: '60px',
            borderBottom: '1px solid #e8e8e3',
            flexShrink: 0,
          }}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <span style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.04em' }}>
              YOUR BAG
            </span>
            {cartItems.length > 0 && (
              <span
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 700,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {cartItems.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-full"
              style={{ padding: '40px 20px', textAlign: 'center' }}
            >
              <ShoppingBag size={48} color="#ddd" strokeWidth={1} />
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginTop: '16px',
                  marginBottom: '8px',
                }}
              >
                Your bag is empty
              </p>
              <p style={{ fontSize: '13px', color: '#999', marginBottom: '24px' }}>
                Add items to get started
              </p>
              <button
                onClick={() => setCartOpen(false)}
                style={{
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  padding: '12px 28px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  border: 'none',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div style={{ padding: '0' }}>
              {cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 p-4"
                  style={{
                    borderBottom: '1px solid #f0f0eb',
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '80px',
                      height: '100px',
                      flexShrink: 0,
                      backgroundColor: '#f5f5f0',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 500,
                          color: '#1a1a1a',
                          lineHeight: 1.4,
                        }}
                      >
                        {item.product.name}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          flexShrink: 0,
                          color: '#999',
                        }}
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p style={{ fontSize: '11px', color: '#999', marginTop: '3px' }}>
                      Size: {item.size}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      {/* Qty */}
                      <div
                        className="flex items-center"
                        style={{ border: '1px solid #e0e0db' }}
                      >
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Minus size={12} />
                        </button>
                        <span
                          style={{
                            width: '28px',
                            textAlign: 'center',
                            fontSize: '12px',
                            fontWeight: 600,
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          style={{
                            width: '28px',
                            height: '28px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      {/* Price */}
                      <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div
            style={{
              borderTop: '1px solid #e8e8e3',
              padding: '16px 20px',
              flexShrink: 0,
              backgroundColor: '#fff',
            }}
          >
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-3">
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#666' }}>Subtotal</span>
              <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>
            <p style={{ fontSize: '11px', color: '#999', marginBottom: '14px' }}>
              Shipping & taxes calculated at checkout
            </p>
            <button
              style={{
                width: '100%',
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                padding: '14px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
