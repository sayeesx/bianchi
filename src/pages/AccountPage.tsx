import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RuneIcon } from '../components/RuneIcon';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

interface UserData {
  name: string;
  phone: string;
  email: string;
  dob?: string;
  gender?: string;
}

const mockOrders = [
  {
    id: 'BNC-89241',
    date: '28 Oct 2026',
    status: 'Delivered',
    total: 3698,
    items: [
      {
        name: 'Straight Fit Stretch Jeans',
        size: '32',
        price: 2099,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&q=80',
      },
      {
        name: 'Slim Fit Stretch Pleated Trousers',
        size: '32',
        price: 1599,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148bfb2882?w=300&q=80',
      },
    ],
  },
  {
    id: 'BNC-77192',
    date: '14 Oct 2026',
    status: 'In Transit',
    total: 1699,
    items: [
      {
        name: '100% Cotton Slim Fit Signature Shirt',
        size: 'M',
        price: 1699,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80',
      },
    ],
  },
];

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { wishlist } = useStore();

  // Auth flow states
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [phoneError, setPhoneError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [timer, setTimer] = useState(30);
  const [user, setUser] = useState<UserData | null>(null);

  // Active dashboard tab
  const [activeTab, setActiveTab] = useState<'orders' | 'wishlist' | 'addresses' | 'details'>('orders');

  // Check login state on mount
  useEffect(() => {
    const saved = localStorage.getItem('bianchi_auth_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed);
        setStep('profile');
      } catch {
        localStorage.removeItem('bianchi_auth_user');
      }
    }
  }, []);

  // Timer countdown for OTP resend
  useEffect(() => {
    let interval: any = null;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  // Handle phone submit
  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.trim().replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit mobile number');
      return;
    }
    setPhoneError('');
    setTimer(30);
    setStep('otp');
  };

  // Handle OTP inputs
  const handleOtpInput = (index: number, val: string) => {
    if (!/^\d*$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[index] = val.slice(-1);
    setOtp(newOtp);

    // Auto advance focus
    if (val && index < 3) {
      const nextInput = document.getElementById(`otp-box-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-box-${index - 1}`);
      prevInput?.focus();
    }
  };

  // Verify OTP
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = otp.join('');
    if (entered.length < 4) {
      setOtpError('Please enter the complete 4-digit code');
      return;
    }
    // Accept any 4-digit code for instant seamless access
    const newUser: UserData = {
      name: 'Aditya Roy',
      phone: `+91 ${phone}`,
      email: 'aditya.roy@example.com',
      dob: '1998-05-12',
      gender: 'Male',
    };
    setUser(newUser);
    localStorage.setItem('bianchi_auth_user', JSON.stringify(newUser));
    setStep('profile');
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('bianchi_auth_user');
    setUser(null);
    setStep('phone');
    setPhone('');
    setOtp(['', '', '', '']);
  };

  const wishlistedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <main style={{ minHeight: '80vh', backgroundColor: '#f8f8f5', padding: '40px clamp(16px, 3vw, 48px)' }}>
      <div style={{ maxWidth: step === 'profile' ? '1200px' : '460px', margin: '0 auto' }}>
        
        {/* STEP 1: PHONE INPUT (IF NOT LOGGED IN) */}
        {step === 'phone' && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e8e8e3',
              padding: '40px 32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: '24px',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  color: '#1a1a1a',
                  display: 'block',
                  marginBottom: '10px',
                }}
              >
                BIANCHI
              </span>
              <h1 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', marginBottom: '6px' }}>
                LOGIN OR SIGN UP
              </h1>
              <p style={{ fontSize: '13px', color: '#666' }}>
                Enter your phone number to receive a verification code
              </p>
            </div>

            <form onSubmit={handlePhoneSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#666',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  Mobile Number
                </label>
                <div
                  style={{
                    display: 'flex',
                    border: '1px solid #d0d0cb',
                    backgroundColor: '#ffffff',
                    height: '48px',
                  }}
                >
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 14px',
                      backgroundColor: '#f5f5f0',
                      borderRight: '1px solid #d0d0cb',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#1a1a1a',
                    }}
                  >
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit number"
                    style={{
                      flex: 1,
                      border: 'none',
                      outline: 'none',
                      padding: '0 14px',
                      fontSize: '14px',
                      fontWeight: 500,
                      fontFamily: 'inherit',
                      color: '#1a1a1a',
                    }}
                    autoFocus
                  />
                </div>
                {phoneError && (
                  <p style={{ fontSize: '11px', color: '#e63329', marginTop: '6px' }}>{phoneError}</p>
                )}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1a1a1a')}
              >
                REQUEST OTP
              </button>
            </form>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '11px', color: '#888', lineHeight: 1.5 }}>
                By signing in, you agree to BIANCHI's{' '}
                <a href="/terms" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Terms of Service</a> &{' '}
                <a href="/privacy" style={{ color: '#1a1a1a', textDecoration: 'underline' }}>Privacy Policy</a>.
              </p>
            </div>
          </div>
        )}

        {/* STEP 2: OTP VERIFICATION */}
        {step === 'otp' && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e8e8e3',
              padding: '40px 32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <button
                onClick={() => setStep('phone')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  color: '#666',
                  marginBottom: '16px',
                  fontFamily: 'inherit',
                }}
              >
                <RuneIcon name="arrows-arrow-left" size={12} color="#666" />
                CHANGE NUMBER
              </button>

              <h1 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a1a', marginBottom: '6px' }}>
                VERIFY OTP
              </h1>
              <p style={{ fontSize: '13px', color: '#666' }}>
                We sent a 4-digit verification code to <span style={{ fontWeight: 700, color: '#1a1a1a' }}>+91 {phone}</span>
              </p>
            </div>

            <form onSubmit={handleVerifyOtp}>
              {/* 4 OTP Input Boxes */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-box-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpInput(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    style={{
                      width: '56px',
                      height: '60px',
                      textAlign: 'center',
                      fontSize: '22px',
                      fontWeight: 800,
                      border: '2px solid #1a1a1a',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      color: '#1a1a1a',
                      fontFamily: 'inherit',
                    }}
                    autoFocus={i === 0}
                  />
                ))}
              </div>

              {otpError && (
                <p style={{ fontSize: '12px', color: '#e63329', textAlign: 'center', marginBottom: '16px' }}>
                  {otpError}
                </p>
              )}

              <button
                type="submit"
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: '#1a1a1a',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                  fontFamily: 'inherit',
                }}
              >
                VERIFY & CONTINUE
              </button>
            </form>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              {timer > 0 ? (
                <p style={{ fontSize: '12px', color: '#888' }}>
                  Resend code in <span style={{ fontWeight: 700, color: '#1a1a1a' }}>{timer}s</span>
                </p>
              ) : (
                <button
                  onClick={() => setTimer(30)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#e63329',
                    fontFamily: 'inherit',
                    textDecoration: 'underline',
                  }}
                >
                  RESEND OTP
                </button>
              )}
            </div>
          </div>
        )}

        {/* STEP 3: LOGGED-IN PROFILE DASHBOARD */}
        {step === 'profile' && user && (
          <div>
            {/* Top User Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8e8e3',
                padding: '28px 32px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#1a1a1a',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    fontWeight: 900,
                  }}
                >
                  {user.name.charAt(0)}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <h1 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', margin: 0 }}>
                      {user.name}
                    </h1>
                    <span
                      style={{
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        fontSize: '9px',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        padding: '2px 8px',
                        textTransform: 'uppercase',
                      }}
                    >
                      BIANCHI BLACK
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>
                    {user.phone} • {user.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#ffffff',
                  color: '#e63329',
                  border: '1px solid #e63329',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e63329';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#e63329';
                }}
              >
                LOG OUT
              </button>
            </div>

            {/* Dashboard Tabs & Content */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '24px',
              }}
              className="account-dashboard-layout"
            >
              {/* Tab Navigation Sidebar */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e8e8e3',
                  alignSelf: 'start',
                }}
              >
                {[
                  { key: 'orders', label: 'My Orders', icon: 'money-shopping-bag', count: mockOrders.length },
                  { key: 'wishlist', label: 'My Wishlist', icon: 'tools-heart', count: wishlist.length },
                  { key: 'addresses', label: 'Saved Addresses', icon: 'tools-map-pin' },
                  { key: 'details', label: 'Profile Details', icon: 'indicators-circle-user' },
                ].map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key as any)}
                      style={{
                        width: '100%',
                        padding: '16px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: 'none',
                        borderBottom: '1px solid #f0f0eb',
                        backgroundColor: isActive ? '#f8f8f5' : '#ffffff',
                        borderLeft: isActive ? '3px solid #1a1a1a' : '3px solid transparent',
                        color: isActive ? '#1a1a1a' : '#666',
                        fontSize: '13px',
                        fontWeight: isActive ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        transition: 'background-color 0.15s',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <RuneIcon name={tab.icon as any} size={16} color={isActive ? '#1a1a1a' : '#666'} />
                        {tab.label}
                      </span>
                      {tab.count !== undefined && (
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 700,
                            backgroundColor: isActive ? '#1a1a1a' : '#f0f0eb',
                            color: isActive ? '#fff' : '#666',
                            padding: '2px 8px',
                            borderRadius: '10px',
                          }}
                        >
                          {tab.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Tab Panel Content */}
              <div style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e3', padding: '32px' }}>
                
                {/* 1. ORDERS TAB */}
                {activeTab === 'orders' && (
                  <div>
                    <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '20px' }}>
                      ORDER HISTORY
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {mockOrders.map((order) => (
                        <div
                          key={order.id}
                          style={{
                            border: '1px solid #e8e8e3',
                            padding: '20px',
                            backgroundColor: '#fafafa',
                          }}
                        >
                          {/* Order Header */}
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              borderBottom: '1px solid #e8e8e3',
                              paddingBottom: '14px',
                              marginBottom: '16px',
                              flexWrap: 'wrap',
                              gap: '10px',
                            }}
                          >
                            <div>
                              <p style={{ fontSize: '13px', fontWeight: 800, color: '#1a1a1a' }}>
                                ORDER #{order.id}
                              </p>
                              <p style={{ fontSize: '12px', color: '#888', marginTop: '2px' }}>
                                Placed on {order.date}
                              </p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                              <span
                                style={{
                                  display: 'inline-block',
                                  fontSize: '11px',
                                  fontWeight: 800,
                                  letterSpacing: '0.06em',
                                  padding: '4px 10px',
                                  backgroundColor: order.status === 'Delivered' ? '#f0fdf4' : '#fffbeb',
                                  color: order.status === 'Delivered' ? '#2d7a3a' : '#b45309',
                                  border: `1px solid ${order.status === 'Delivered' ? '#bbf7d0' : '#fde68a'}`,
                                  textTransform: 'uppercase',
                                }}
                              >
                                {order.status}
                              </span>
                              <p style={{ fontSize: '13px', fontWeight: 800, color: '#1a1a1a', marginTop: '4px' }}>
                                ₹{order.total.toLocaleString('en-IN')}
                              </p>
                            </div>
                          </div>

                          {/* Order Items */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {order.items.map((item, idx) => (
                              <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                                <div style={{ width: '56px', height: '70px', overflow: 'hidden', backgroundColor: '#e5e5e0', flexShrink: 0 }}>
                                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#1a1a1a' }}>{item.name}</p>
                                  <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>Size: {item.size}</p>
                                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '4px' }}>
                                    ₹{item.price.toLocaleString('en-IN')}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. WISHLIST TAB */}
                {activeTab === 'wishlist' && (
                  <div>
                    <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '20px' }}>
                      MY WISHLIST ({wishlistedProducts.length})
                    </h2>

                    {wishlistedProducts.length > 0 ? (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                        {wishlistedProducts.map((p) => (
                          <ProductCard key={p.id} product={p} />
                        ))}
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '40px 0' }}>
                        <RuneIcon name="tools-heart" size={36} color="#ccc" style={{ margin: '0 auto 12px' }} />
                        <p style={{ fontSize: '14px', color: '#666' }}>Your wishlist is currently empty.</p>
                        <button
                          onClick={() => navigate('/')}
                          style={{
                            marginTop: '16px',
                            padding: '10px 24px',
                            backgroundColor: '#1a1a1a',
                            color: '#fff',
                            border: 'none',
                            fontSize: '11px',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            cursor: 'pointer',
                          }}
                        >
                          DISCOVER PRODUCTS
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. SAVED ADDRESSES TAB */}
                {activeTab === 'addresses' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0 }}>
                        SAVED ADDRESSES
                      </h2>
                      <button
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#1a1a1a',
                          color: '#fff',
                          border: 'none',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer',
                        }}
                      >
                        + ADD NEW
                      </button>
                    </div>

                    <div style={{ border: '1px solid #e8e8e3', padding: '20px', backgroundColor: '#fafafa' }}>
                      <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.08em', padding: '3px 8px', backgroundColor: '#1a1a1a', color: '#fff', textTransform: 'uppercase' }}>
                        DEFAULT HOME
                      </span>
                      <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginTop: '12px' }}>Aditya Roy</p>
                      <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5, marginTop: '4px' }}>
                        Flat 402, Sunset Boulevard, Bandra West<br />
                        Mumbai, Maharashtra - 400050<br />
                        Phone: +91 98765 43210
                      </p>
                    </div>
                  </div>
                )}

                {/* 4. DETAILS TAB */}
                {activeTab === 'details' && (
                  <div>
                    <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#1a1a1a', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '20px' }}>
                      PERSONAL INFORMATION
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                      <div style={{ border: '1px solid #e8e8e3', padding: '16px' }}>
                        <p style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase' }}>FULL NAME</p>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginTop: '4px' }}>{user.name}</p>
                      </div>
                      <div style={{ border: '1px solid #e8e8e3', padding: '16px' }}>
                        <p style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase' }}>MOBILE NUMBER</p>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginTop: '4px' }}>{user.phone}</p>
                      </div>
                      <div style={{ border: '1px solid #e8e8e3', padding: '16px' }}>
                        <p style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase' }}>EMAIL ADDRESS</p>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginTop: '4px' }}>{user.email}</p>
                      </div>
                      <div style={{ border: '1px solid #e8e8e3', padding: '16px' }}>
                        <p style={{ fontSize: '11px', color: '#999', fontWeight: 700, textTransform: 'uppercase' }}>MEMBERSHIP STATUS</p>
                        <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginTop: '4px' }}>Bianchi Elite Platinum</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (min-width: 860px) {
          .account-dashboard-layout {
            grid-template-columns: 280px 1fr !important;
          }
        }
      `}</style>
    </main>
  );
};

export default AccountPage;

