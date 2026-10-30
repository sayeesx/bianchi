import React from 'react';
import { RuneIcon } from './RuneIcon';

const announcements = [
  { icon: <RuneIcon name="money-tag" size={12} />, text: 'FLAT 20% OFF ON ALL ORDERS ABOVE ₹1499 | USE CODE: BIANCHI20' },
  { icon: <RuneIcon name="money-truck" size={12} />, text: 'FREE SHIPPING ON ORDERS ABOVE ₹999' },
  { icon: <RuneIcon name="tools-sparkles" size={12} />, text: 'NEW ARRIVALS EVERY WEEK — SHOP THE LATEST DROPS' },
  { icon: <RuneIcon name="money-gift" size={12} />, text: 'BUY 2 GET 1 FREE ON ALL T-SHIRTS' },
  { icon: <RuneIcon name="other-zap" size={12} />, text: 'LAST FEW LEFT — SHOP BEFORE THEY\'RE GONE' },
];

const AnnouncementBar: React.FC = () => {
  // Duplicate for seamless loop
  const items = [...announcements, ...announcements];

  return (
    <div
      style={{ backgroundColor: '#1a1a1a', height: '36px' }}
      className="relative overflow-hidden flex items-center"
    >
      <div className="flex-1 overflow-hidden">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={i}
              style={{
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                paddingRight: '72px',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span style={{ opacity: 0.8, flexShrink: 0 }}>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
