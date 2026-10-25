export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuSection[];
  badge?: string;
}

export interface MegaMenuSection {
  title: string;
  links: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  {
    label: 'NEW ARRIVALS',
    href: '/new-arrivals',
    megaMenu: [
      {
        title: 'NEW IN',
        links: [
          { label: 'View All New Arrivals', href: '/new-arrivals' },
          { label: 'New Shirts', href: '/shirts' },
          { label: 'New T-Shirts', href: '/t-shirts' },
          { label: 'New Jeans', href: '/jeans' },
          { label: 'New Jackets', href: '/jackets' },
          { label: 'New Trousers', href: '/trousers' },
        ],
      },
    ],
  },
  {
    label: 'SHIRTS',
    href: '/shirts',
    megaMenu: [
      {
        title: 'SHOP BY FIT',
        links: [
          { label: 'Slim Fit', href: '/shirts?fit=slim' },
          { label: 'Regular Fit', href: '/shirts?fit=regular' },
          { label: 'Box Fit', href: '/shirts?fit=box' },
          { label: 'Oversized', href: '/shirts?fit=oversized' },
        ],
      },
      {
        title: 'SHOP BY STYLE',
        links: [
          { label: 'Casual Shirts', href: '/shirts?style=casual' },
          { label: 'Formal Shirts', href: '/shirts?style=formal' },
          { label: 'Printed Shirts', href: '/shirts?style=printed' },
          { label: 'Linen Shirts', href: '/shirts?style=linen' },
          { label: 'Checked Shirts', href: '/shirts?style=checked' },
          { label: 'Striped Shirts', href: '/shirts?style=striped' },
        ],
      },
    ],
  },
  {
    label: 'T-SHIRTS',
    href: '/t-shirts',
    megaMenu: [
      {
        title: 'SHOP BY FIT',
        links: [
          { label: 'Oversized T-Shirts', href: '/t-shirts?fit=oversized' },
          { label: 'Regular Fit', href: '/t-shirts?fit=regular' },
          { label: 'Polo T-Shirts', href: '/t-shirts?collar=polo' },
        ],
      },
    ],
  },
  {
    label: 'BOTTOMWEAR',
    href: '/bottomwear',
    megaMenu: [
      {
        title: 'JEANS',
        links: [
          { label: 'All Jeans', href: '/jeans' },
          { label: 'Straight Fit Jeans', href: '/jeans?fit=straight' },
          { label: 'Baggy Jeans', href: '/jeans?fit=baggy' },
          { label: 'Slim Fit Jeans', href: '/jeans?fit=slim' },
          { label: 'Bootcut Jeans', href: '/jeans?fit=bootcut' },
        ],
      },
      {
        title: 'TROUSERS',
        links: [
          { label: 'All Trousers', href: '/trousers' },
          { label: 'Chinos', href: '/chinos' },
          { label: 'Cargo Pants', href: '/cargo' },
          { label: 'Joggers', href: '/joggers' },
        ],
      },
    ],
  },
  {
    label: 'CO-ORDS',
    href: '/co-ords',
  },
  {
    label: 'JACKETS',
    href: '/jackets',
  },
  {
    label: 'SALE',
    href: '/sale',
    badge: 'SALE',
  },
];

export const categories = [
  { label: 'Jeans', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/59184083-e04f-4aa5-9943-45a749cae980/1791971456.jpeg?w=90', href: '/jeans' },
  { label: 'Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/a783f54d-0e07-4e97-b1e2-abf8846fbef9/1791971467.jpeg?w=90', href: '/shirts' },
  { label: 'T-Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/56ba705d-69df-40b2-b5b5-7f51f7127fbd/1791971481.jpeg?w=90', href: '/t-shirts' },
  { label: 'Trousers', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/333207f2-f3fe-4020-825f-45c4cbd05c9a/1791971496.jpeg?w=90', href: '/trousers' },
  { label: 'Co-ords', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/df5f9492-53eb-4a12-8db0-4367b77bcd70/1791971518.jpeg?w=90', href: '/co-ords' },
  { label: 'Jackets', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/09898572-d1f8-4b19-887b-96e58bf456c1/1791971533.jpeg?w=90', href: '/jackets' },
  { label: 'Sweaters', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/2bc1ad6e-4a4c-4fe4-955b-65d28e5d8b36/1791971554.jpeg?w=90', href: '/sweaters' },
  { label: 'Shoes', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/8d9d1cbd-1180-487e-b078-4364f8246761/1791971570.jpeg?w=90', href: '/shoes' },
  { label: 'Accessories', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/featured-category/0ddd6589-25a3-4d03-91c5-1f411aaaa9b2/1791971588.jpeg?w=90', href: '/accessories' },
];

export const announcementMessages = [
  'FLAT 20% OFF ON ALL ORDERS ABOVE ₹1499 | USE CODE: BIANCHI20',
  'FREE SHIPPING ON ORDERS ABOVE ₹999',
  'NEW ARRIVALS EVERY WEEK — SHOP THE LATEST DROPS',
  'BUY 2 GET 1 FREE ON ALL T-SHIRTS',
  'LAST FEW LEFT — SHOP BEFORE THEY\'RE GONE',
];
