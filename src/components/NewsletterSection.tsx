import React, { useState } from 'react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', color: '#999', textTransform: 'uppercase', marginBottom: '8px' }}>
          STAY IN THE LOOP
        </p>
        <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, color: '#1a1a1a', letterSpacing: '-0.01em', marginBottom: '10px' }}>
          JOIN THE BIANCHI SQUAD
        </h2>
        <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px', lineHeight: 1.6 }}>
          Get early access to new arrivals, exclusive offers and trend updates straight to your inbox.
        </p>

        {submitted ? (
          <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '14px 24px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em' }}>
            ✓ YOU'RE IN! Welcome to the squad.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        )}

        <p style={{ fontSize: '11px', color: '#999', marginTop: '12px' }}>
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
