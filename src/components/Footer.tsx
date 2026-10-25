import React from 'react';

const FacebookIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const footerLinks = {
  COMPANY: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    { label: 'Return/Exchange Policy', href: '/return-exchange-policy' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Stakeholders', href: '/stakeholders' },
  ],
  'TOP CATEGORIES': [
    { label: 'T-shirts', href: '/t-shirts' },
    { label: 'Shirts', href: '/shirts' },
    { label: 'Joggers', href: '/joggers' },
    { label: 'Shorts', href: '/shorts' },
    { label: 'Trousers', href: '/trousers' },
    { label: 'Sweatshirts & Hoodies', href: '/sweatshirts' },
    { label: 'Sweaters', href: '/sweaters' },
    { label: 'Jackets', href: '/jackets' },
    { label: 'Jeans', href: '/jeans' },
    { label: 'Co-ords', href: '/co-ords' },
  ],
  'POPULAR SEARCHES': [
    { label: 'Shirts for men', href: '/shirts' },
    { label: 'Jeans for men', href: '/jeans' },
    { label: 'Trousers for men', href: '/trousers' },
    { label: 'Oversized T-shirts', href: '/t-shirts?fit=oversized' },
    { label: 'Baggy Jeans', href: '/jeans?fit=baggy' },
    { label: 'Cargo Pants', href: '/cargo' },
    { label: 'Linen Shirts', href: '/shirts?style=linen' },
    { label: 'Formal Shirts', href: '/shirts?style=formal' },
    { label: 'Polo T-shirts', href: '/t-shirts?collar=polo' },
    { label: 'Korean Trousers', href: '/trousers?style=korean' },
  ],
  'DOWNLOAD APP': [
    { label: 'App Store', href: 'https://apps.apple.com', external: true },
    { label: 'Play Store', href: 'https://play.google.com', external: true },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#f5f5f0', borderTop: '1px solid #e8e8e3' }}>
      {/* Top: Trust badges */}
      <div className="footer-trust">
        <div className="footer-trust-grid">
          {[
            { icon: '🚚', title: 'FREE SHIPPING', sub: 'On orders above ₹999' },
            { icon: '↩️', title: 'EASY RETURNS', sub: '15-day hassle-free returns' },
            { icon: '✓', title: '100% AUTHENTIC', sub: 'Original products only' },
            { icon: '🔒', title: 'SECURE PAYMENT', sub: '100% secure checkout' },
          ].map((item, i) => (
            <div key={i} className="footer-trust-item">
              <span style={{ fontSize: '22px' }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.04em' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '10.5px', color: '#666' }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="footer-links-grid">
        {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: '#1a1a1a',
                  textTransform: 'uppercase',
                  marginBottom: '14px',
                }}
              >
                {section}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: '12.5px',
                        color: '#555',
                        textDecoration: 'none',
                        lineHeight: 1.4,
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#1a1a1a')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#555')}
                      onClick={e => e.preventDefault()}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social icons for COMPANY section */}
              {section === 'COMPANY' && (
                <div className="flex items-center gap-3 mt-5">
                  {[
                    { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
                    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
                    { icon: <LinkedinIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '34px',
                        height: '34px',
                        border: '1px solid #d0d0cb',
                        color: '#555',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1a1a';
                        (e.currentTarget as HTMLElement).style.borderColor = '#1a1a1a';
                        (e.currentTarget as HTMLElement).style.color = '#fff';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                        (e.currentTarget as HTMLElement).style.borderColor = '#d0d0cb';
                        (e.currentTarget as HTMLElement).style.color = '#555';
                      }}
                      onClick={e => e.preventDefault()}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}

              {/* App download for DOWNLOAD APP section */}
              {section === 'DOWNLOAD APP' && (
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="https://apps.apple.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      padding: '8px 14px',
                      textDecoration: 'none',
                      fontSize: '11px',
                      fontWeight: 600,
                      width: 'fit-content',
                    }}
                    onClick={e => e.preventDefault()}
                  >
                    <span style={{ fontSize: '18px' }}>🍎</span>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      padding: '8px 14px',
                      textDecoration: 'none',
                      fontSize: '11px',
                      fontWeight: 600,
                      width: 'fit-content',
                    }}
                    onClick={e => e.preventDefault()}
                  >
                    <span style={{ fontSize: '18px' }}>▶</span>
                    Play Store
                  </a>
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p
            style={{
              fontSize: '11.5px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            © 2024 BIANCHI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Privacy Policy', 'Terms & Conditions', 'Return Policy'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                onClick={e => e.preventDefault()}
              >
                {link}
              </a>
            ))}
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'UPI', 'COD'].map((method) => (
              <span
                key={method}
                style={{
                  fontSize: '9px',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '3px 6px',
                  letterSpacing: '0.04em',
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
