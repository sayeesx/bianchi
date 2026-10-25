import React from 'react';
import { X, Tag, Truck, Sparkles, Gift, Zap } from 'lucide-react';

interface AnnouncementBarProps {
  onClose?: () => void;
}

const announcements = [
  { icon: <Tag size={12} strokeWidth={2} />, text: 'FLAT 20% OFF ON ALL ORDERS ABOVE ₹1499 | USE CODE: BIANCHI20' },
  { icon: <Truck size={12} strokeWidth={2} />, text: 'FREE SHIPPING ON ORDERS ABOVE ₹999' },
  { icon: <Sparkles size={12} strokeWidth={2} />, text: 'NEW ARRIVALS EVERY WEEK — SHOP THE LATEST DROPS' },
  { icon: <Gift size={12} strokeWidth={2} />, text: 'BUY 2 GET 1 FREE ON ALL T-SHIRTS' },
  { icon: <Zap size={12} strokeWidth={2} />, text: 'LAST FEW LEFT — SHOP BEFORE THEY\'RE GONE' },
];

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onClose }) => {
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

      {onClose && (
        <button
          onClick={onClose}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close announcement"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default AnnouncementBar;
