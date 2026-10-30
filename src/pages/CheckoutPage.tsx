import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { RuneIcon } from '../components/RuneIcon';

type CheckoutStep = 'contact' | 'shipping' | 'payment' | 'success';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal } = useStore();
  const [step, setStep] = useState<CheckoutStep>('contact');
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'upi',
    upiId: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardName: '',
  });

  const shipping = cartTotal >= 999 ? 0 : 79;
  const discount = couponApplied ? Math.round(cartTotal * 0.2) : 0;
  const total = cartTotal + shipping - discount;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCoupon = () => {
    if (coupon.toUpperCase() === 'BIANCHI20') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code. Try BIANCHI20');
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    window.scrollTo(0, 0);
  };

  if (cartItems.length === 0 && step !== 'success') {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '40px 24px', textAlign: 'center' }}>
        <RuneIcon name="money-shopping-bag" size={48} color="#ddd" />
        <h2 style={{ fontSize: '22px', fontWeight: 700 }}>Your bag is empty</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Add items before proceeding to checkout.</p>
        <button
          onClick={() => navigate('/')}
          style={{ padding: '14px 32px', background: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <span style={{ color: '#fff', fontSize: '32px' }}>✓</span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#1a1a1a', marginBottom: '12px', letterSpacing: '-0.02em' }}>ORDER CONFIRMED!</h1>
        <p style={{ fontSize: '15px', color: '#555', marginBottom: '8px', maxWidth: '400px' }}>
          Thank you for shopping with BIANCHI. Your order has been placed successfully.
        </p>
        <p style={{ fontSize: '13px', color: '#999', marginBottom: '36px' }}>A confirmation email will be sent to {formData.email || 'your email'}</p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/')}
            style={{ padding: '14px 32px', background: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            CONTINUE SHOPPING
          </button>
          <button
            onClick={() => navigate('/')}
            style={{ padding: '14px 32px', background: '#fff', color: '#1a1a1a', border: '2px solid #1a1a1a', cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}
          >
            TRACK ORDER
          </button>
        </div>
      </div>
    );
  }

  return (
    <main style={{ background: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e8e8e3', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', fontWeight: 900, letterSpacing: '0.05em', color: '#1a1a1a' }}>
            BIANCHI
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#999' }}>
            <RuneIcon name="indicators-shield-check" size={14} color="#2d7a3a" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e8e8e3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '0' }}>
          {(['contact', 'shipping', 'payment'] as CheckoutStep[]).map((s, i) => (
            <React.Fragment key={s}>
              <button
                onClick={() => { if (s !== step && i < ['contact','shipping','payment'].indexOf(step)) setStep(s); }}
                style={{
                  padding: '14px 0', background: 'none', border: 'none', cursor: 'default',
                  fontSize: '11px', fontWeight: step === s ? 700 : 500,
                  color: step === s ? '#1a1a1a' : ['contact','shipping','payment'].indexOf(step) > i ? '#666' : '#bbb',
                  borderBottom: step === s ? '2px solid #1a1a1a' : '2px solid transparent',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  marginBottom: '-1px',
                }}
              >
                {i + 1}. {s}
              </button>
              {i < 2 && <span style={{ padding: '0 12px', color: '#ccc', fontSize: '10px' }}>›</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }} className="checkout-layout">
        {/* Left: Form */}
        <div className="checkout-form-col">
          <form onSubmit={handlePlaceOrder}>
            {/* CONTACT step */}
            {step === 'contact' && (
              <CheckoutSection title="Contact Information">
                <div className="checkout-field-row">
                  <CheckoutField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
                  <CheckoutField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                </div>
                <div style={{ marginTop: '24px' }}>
                  <button type="button" onClick={() => setStep('shipping')} className="checkout-btn-primary">
                    CONTINUE TO SHIPPING →
                  </button>
                </div>
              </CheckoutSection>
            )}

            {/* SHIPPING step */}
            {step === 'shipping' && (
              <CheckoutSection title="Shipping Address">
                <div className="checkout-field-row">
                  <CheckoutField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Arjun" />
                  <CheckoutField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Sharma" />
                </div>
                <CheckoutField label="Address" name="address" value={formData.address} onChange={handleChange} required placeholder="House/Flat No., Street Name" />
                <CheckoutField label="Apartment, Suite (optional)" name="apartment" value={formData.apartment} onChange={handleChange} placeholder="Apartment, suite, etc." />
                <div className="checkout-field-row">
                  <CheckoutField label="City" name="city" value={formData.city} onChange={handleChange} required placeholder="Mumbai" />
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', letterSpacing: '0.08em', marginBottom: '6px', textTransform: 'uppercase' }}>State</label>
                    <select name="state" value={formData.state} onChange={handleChange} required style={{ width: '100%', padding: '12px 14px', border: '1px solid #d0d0cb', fontSize: '13px', background: '#fff', color: '#1a1a1a', outline: 'none', appearance: 'none' }}>
                      <option value="">Select state</option>
                      {['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'West Bengal', 'Telangana', 'Uttar Pradesh', 'Kerala'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <CheckoutField label="PIN Code" name="pincode" value={formData.pincode} onChange={handleChange} required placeholder="400001" maxLength={6} />
                </div>

                {/* Shipping method */}
                <div style={{ marginTop: '24px', marginBottom: '8px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#1a1a1a', textTransform: 'uppercase', marginBottom: '12px' }}>Shipping Method</p>
                  <div style={{ border: '1px solid #e8e8e3', overflow: 'hidden' }}>
                    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', background: cartTotal >= 999 ? '#f0fdf4' : '#fff', cursor: 'pointer', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <input type="radio" name="shipping" defaultChecked style={{ accentColor: '#1a1a1a' }} readOnly />
                        <div>
                          <p style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>Standard Delivery (3–5 days)</p>
                          <p style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{cartTotal >= 999 ? 'FREE on orders above ₹999' : '₹79'}</p>
                        </div>
                      </div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: cartTotal >= 999 ? '#2d7a3a' : '#1a1a1a' }}>
                        {cartTotal >= 999 ? 'FREE' : '₹79'}
                      </span>
                    </label>
                    <div style={{ borderTop: '1px solid #e8e8e3' }}>
                      <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', cursor: 'pointer', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <input type="radio" name="shipping" style={{ accentColor: '#1a1a1a' }} readOnly />
                          <div>
                            <p style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>Express Delivery (1–2 days)</p>
                            <p style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>Priority shipping</p>
                          </div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 700 }}>₹149</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <button type="button" onClick={() => setStep('contact')} style={{ flex: 1, padding: '14px', background: '#fff', color: '#1a1a1a', border: '2px solid #1a1a1a', cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}>
                    ← BACK
                  </button>
                  <button type="button" onClick={() => setStep('payment')} className="checkout-btn-primary" style={{ flex: 2 }}>
                    CONTINUE TO PAYMENT →
                  </button>
                </div>
              </CheckoutSection>
            )}

            {/* PAYMENT step */}
            {step === 'payment' && (
              <CheckoutSection title="Payment">
                <div style={{ border: '1px solid #e8e8e3', overflow: 'hidden', marginBottom: '20px' }}>
                  {/* UPI */}
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', cursor: 'pointer', borderBottom: '1px solid #f0f0eb', background: formData.paymentMethod === 'upi' ? '#fafafa' : '#fff' }}>
                    <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleChange} style={{ accentColor: '#1a1a1a' }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '13px', fontWeight: 600 }}>UPI / PhonePe / GPay</p>
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {['GPay', 'PhonePe', 'BHIM'].map(p => (
                        <span key={p} style={{ fontSize: '9px', fontWeight: 700, padding: '3px 8px', background: '#1a1a1a', color: '#fff', borderRadius: '2px' }}>{p}</span>
                      ))}
                    </div>
                  </label>
                  {formData.paymentMethod === 'upi' && (
                    <div style={{ padding: '16px', background: '#fafafa', borderBottom: '1px solid #f0f0eb' }}>
                      <CheckoutField label="UPI ID" name="upiId" value={formData.upiId} onChange={handleChange} placeholder="yourname@upi" />
                    </div>
                  )}

                  {/* Card */}
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', cursor: 'pointer', borderBottom: '1px solid #f0f0eb', background: formData.paymentMethod === 'card' ? '#fafafa' : '#fff' }}>
                    <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} style={{ accentColor: '#1a1a1a' }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '13px', fontWeight: 600 }}>Credit / Debit Card</p>
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {['VISA', 'MC', 'RuPay'].map(p => (
                        <span key={p} style={{ fontSize: '9px', fontWeight: 700, padding: '3px 8px', background: '#1a1a1a', color: '#fff', borderRadius: '2px' }}>{p}</span>
                      ))}
                    </div>
                  </label>
                  {formData.paymentMethod === 'card' && (
                    <div style={{ padding: '16px', background: '#fafafa', borderBottom: '1px solid #f0f0eb', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <CheckoutField label="Card Number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength={19} />
                      <div className="checkout-field-row">
                        <CheckoutField label="Expiry (MM/YY)" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} placeholder="MM/YY" maxLength={5} />
                        <CheckoutField label="CVV" name="cardCvv" value={formData.cardCvv} onChange={handleChange} placeholder="123" maxLength={3} type="password" />
                      </div>
                      <CheckoutField label="Name on Card" name="cardName" value={formData.cardName} onChange={handleChange} placeholder="Arjun Sharma" />
                    </div>
                  )}

                  {/* COD */}
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', cursor: 'pointer', background: formData.paymentMethod === 'cod' ? '#fafafa' : '#fff' }}>
                    <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} style={{ accentColor: '#1a1a1a' }} />
                    <div>
                      <p style={{ fontSize: '13px', fontWeight: 600 }}>Cash on Delivery</p>
                      <p style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>Additional ₹50 COD charge applicable</p>
                    </div>
                  </label>
                </div>

                <div style={{ background: '#f8f8f5', padding: '14px 16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RuneIcon name="indicators-shield-check" size={16} color="#2d7a3a" />
                  <span style={{ fontSize: '12px', color: '#555' }}>Your payment information is encrypted and secure.</span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={() => setStep('shipping')} style={{ flex: 1, padding: '14px', background: '#fff', color: '#1a1a1a', border: '2px solid #1a1a1a', cursor: 'pointer', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}>
                    ← BACK
                  </button>
                  <button type="submit" className="checkout-btn-primary" style={{ flex: 2 }}>
                    PLACE ORDER — ₹{total.toLocaleString('en-IN')}
                  </button>
                </div>
              </CheckoutSection>
            )}
          </form>
        </div>

        {/* Right: Order summary */}
        <div className="checkout-summary-col">
          <div style={{ background: '#fff', border: '1px solid #e8e8e3', padding: '24px', position: 'sticky', top: '80px' }}>
            <h3 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', color: '#1a1a1a', textTransform: 'uppercase', marginBottom: '20px' }}>
              Order Summary ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)
            </h3>

            {/* Cart items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px', maxHeight: '280px', overflowY: 'auto' }}>
              {cartItems.map(item => (
                <div key={`${item.product.id}-${item.size}`} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <div style={{ width: '64px', height: '80px', overflow: 'hidden', background: '#f5f5f0' }}>
                      <img src={item.product.image} alt={item.product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span style={{ position: 'absolute', top: '-8px', right: '-8px', width: '20px', height: '20px', borderRadius: '50%', background: '#666', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.quantity}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '12.5px', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.4, marginBottom: '3px' }}>{item.product.name}</p>
                    <p style={{ fontSize: '11px', color: '#999' }}>Size: {item.size}</p>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '4px' }}>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coupon */}
            <div style={{ borderTop: '1px solid #f0f0eb', paddingTop: '16px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '0' }}>
                <input
                  type="text"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                  placeholder="Enter coupon code"
                  style={{ flex: 1, padding: '10px 14px', border: '1px solid #d0d0cb', borderRight: 'none', fontSize: '13px', outline: 'none', background: '#fafafa' }}
                />
                <button
                  onClick={handleCoupon}
                  style={{ padding: '10px 16px', background: '#1a1a1a', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', whiteSpace: 'nowrap' }}
                >
                  APPLY
                </button>
              </div>
              {couponApplied && <p style={{ fontSize: '11px', color: '#2d7a3a', marginTop: '6px', fontWeight: 600 }}>✓ BIANCHI20 applied — 20% off!</p>}
              {couponError && <p style={{ fontSize: '11px', color: '#e63329', marginTop: '6px' }}>{couponError}</p>}
            </div>

            {/* Price breakdown */}
            <div style={{ borderTop: '1px solid #f0f0eb', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <PriceRow label="Subtotal" value={`₹${cartTotal.toLocaleString('en-IN')}`} />
              <PriceRow label="Shipping" value={shipping === 0 ? 'FREE' : `₹${shipping}`} valueColor={shipping === 0 ? '#2d7a3a' : undefined} />
              {couponApplied && <PriceRow label="Discount (BIANCHI20)" value={`-₹${discount.toLocaleString('en-IN')}`} valueColor="#2d7a3a" />}
              <div style={{ borderTop: '1px solid #e8e8e3', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Total</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a' }}>₹{total.toLocaleString('en-IN')}</span>
                  <p style={{ fontSize: '10px', color: '#999', marginTop: '2px' }}>Inclusive of all taxes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: start;
        }
        .checkout-form-col { min-width: 0; }
        .checkout-summary-col { min-width: 0; }
        .checkout-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .checkout-btn-primary {
          width: 100%;
          padding: 15px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: background 0.2s;
        }
        .checkout-btn-primary:hover { background: #333; }
        @media (min-width: 768px) {
          .checkout-layout {
            grid-template-columns: 1fr 380px;
            gap: 40px;
          }
          .checkout-summary-col { order: 2; }
          .checkout-form-col { order: 1; }
        }
        @media (max-width: 500px) {
          .checkout-field-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
};

// Sub-components
const CheckoutSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ background: '#fff', border: '1px solid #e8e8e3', padding: '24px', marginBottom: '16px' }}>
    <h2 style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.08em', color: '#1a1a1a', textTransform: 'uppercase', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid #f0f0eb' }}>{title}</h2>
    {children}
  </div>
);

const CheckoutField: React.FC<{
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; placeholder?: string; maxLength?: number;
}> = ({ label, name, value, onChange, type = 'text', required = false, placeholder, maxLength }) => (
  <div style={{ flex: 1 }}>
    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', letterSpacing: '0.08em', marginBottom: '6px', textTransform: 'uppercase' }}>{label}</label>
    <input
      type={type} name={name} value={value} onChange={onChange}
      required={required} placeholder={placeholder} maxLength={maxLength}
      style={{ width: '100%', padding: '12px 14px', border: '1px solid #d0d0cb', fontSize: '13px', outline: 'none', background: '#fff', color: '#1a1a1a', transition: 'border-color 0.2s' }}
      onFocus={e => e.currentTarget.style.borderColor = '#1a1a1a'}
      onBlur={e => e.currentTarget.style.borderColor = '#d0d0cb'}
    />
  </div>
);

const PriceRow: React.FC<{ label: string; value: string; valueColor?: string }> = ({ label, value, valueColor }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <span style={{ fontSize: '13px', color: '#666' }}>{label}</span>
    <span style={{ fontSize: '13px', fontWeight: 600, color: valueColor || '#1a1a1a' }}>{value}</span>
  </div>
);

export default CheckoutPage;
