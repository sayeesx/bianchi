export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  hoverImage?: string;
  colors?: string[];
  colorCount?: number;
  badge?: string;
  category: string;
  slug: string;
  isNew?: boolean;
  rating?: number;
  sizes?: string[];
  description?: string;
  mockupUuid?: string;
  smartObjectUuid?: string;
}

// Dynamic Mockups API config
export const DYNAMIC_MOCKUPS_API_KEY = 'f411da6a-6a48-469b-99ed-0c583d37b8c4:cb6d492773c82964855063fdc9a1cdaf0f801553022ea4e80b2411c9ffefbe07';
export const DYNAMIC_MOCKUPS_BASE_URL = 'https://app.dynamicmockups.com/api/v1';

// High-quality Bianchi product images from public fashion CDN sources
export const products: Product[] = [
  {
    id: '1',
    name: 'Straight Fit Stretch Jeans',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80',
    category: 'jeans',
    slug: 'straight-fit-stretch-jeans-1',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'A classic straight fit jeans crafted from premium stretch denim for all-day comfort. Features a 5-pocket design and subtle fading.',
  },
  {
    id: '2',
    name: 'Slim Fit Stretch Pleated Trousers',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148bfb2882?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&q=80',
    category: 'trousers',
    slug: 'slim-fit-stretch-pleated-trousers',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Tailored slim-fit trousers with elegant pleating and stretch fabric for unrestricted movement throughout the day.',
  },
  {
    id: '3',
    name: 'Slim Fit Stretch Shirt',
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80',
    colorCount: 4,
    category: 'shirts',
    slug: 'slim-fit-stretch-shirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A versatile slim-fit shirt in premium stretch fabric. Perfect for both formal and casual occasions.',
  },
  {
    id: '4',
    name: '100% Cotton Regular Fit Brown Shirt',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=600&q=80',
    colorCount: 3,
    category: 'shirts',
    slug: 'cotton-regular-fit-brown-shirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Crafted from 100% pure cotton, this regular fit shirt offers breathability and timeless style.',
  },
  {
    id: '5',
    name: 'Baggy Relaxed Fit Jeans',
    price: 2299,
    image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    category: 'jeans',
    slug: 'straight-fit-stretch-jeans-2',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'An on-trend baggy silhouette with a relaxed fit through the seat and thighs. Street-style ready.',
  },
  {
    id: '6',
    name: '100% Cotton Slim Fit Signature Shirt',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80',
    category: 'shirts',
    slug: 'cotton-slim-fit-signature-shirt',
    isNew: true,
    badge: 'NEW',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Our signature slim-fit shirt in 100% premium cotton with a subtle texture weave. A wardrobe essential.',
  },
  {
    id: '7',
    name: 'Washed Straight Fit Jeans',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=600&q=80',
    category: 'jeans',
    slug: 'straight-fit-washed-jeans-1',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Premium washed denim in a classic straight fit. The stone-wash finish adds depth and character.',
  },
  {
    id: '8',
    name: 'Washed Slim Fit Jeans',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80',
    category: 'jeans',
    slug: 'washed-straight-fit-jeans',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Slim fit jeans with authentic washed detailing. Made from 98% cotton with 2% elastane for stretch.',
  },
  {
    id: '9',
    name: 'High Neck Snap Button Zipper Jacket',
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1547624643-3bf761b09502?w=600&q=80',
    category: 'jackets',
    slug: 'high-neck-snap-button-zipper-jacket',
    badge: 'NEW',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A statement high-neck jacket with snap button closure and YKK zipper. Ideal for cooler evenings.',
  },
  {
    id: '10',
    name: 'Faux Leather Snap Button Zipper Jacket',
    price: 2624,
    originalPrice: 3499,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
    category: 'jackets',
    slug: 'faux-leather-snap-button-zipper-jacket',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium faux leather jacket with snap button detailing. Effortlessly cool, season-spanning style.',
  },
  {
    id: '11',
    name: 'Textured Flat Knit Polo T-Shirt',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80',
    category: 't-shirts',
    slug: 'textured-flat-knit-polo-t-shirt',
    colorCount: 3,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A premium polo in textured flat-knit fabric with a refined collar and 3-button placket.',
  },
  {
    id: '12',
    name: 'Rugby Stripes Oversized Polo T-Shirt',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    category: 't-shirts',
    slug: 'rugby-stripes-oversized-polo',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Oversized polo with bold rugby stripes. A relaxed boxy fit that pairs perfectly with straight jeans.',
  },
  {
    id: '13',
    name: 'Washed Bootcut Jeans',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80',
    category: 'jeans',
    slug: 'washed-bootcut-jeans',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'A retro-inspired bootcut silhouette in premium washed denim. Style with ankle boots or sneakers.',
  },
  {
    id: '14',
    name: 'Regular Fit Essential Polo Sweater',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1614632537239-e6d704d7f4a4?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80',
    category: 'sweaters',
    slug: 'regular-fit-essential-polo-sweater',
    colorCount: 4,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'An essential polo sweater in soft-touch yarn. Regular fit, ribbed cuffs and hem for a polished look.',
  },
  {
    id: '15',
    name: 'Ombre Dyed Textured Sweater',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1614632537239-e6d704d7f4a4?w=600&q=80',
    category: 'sweaters',
    slug: 'ombre-dyed-textured-sweater',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Gradient ombre dyeing meets textured knit in this eye-catching sweater. A modern wardrobe statement.',
  },
  {
    id: '16',
    name: 'OnLoop Edge Satin Slim Fit Stretch Shirt',
    price: 1699,
    originalPrice: 2099,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
    colorCount: 3,
    category: 'shirts',
    slug: 'onloop-edge-satin-slim-fit-shirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A luxe satin-finish shirt in our slim fit. The smooth sheen catches light beautifully for evening outings.',
  },
  {
    id: '17',
    name: 'Black Straight Fit Jeans',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80',
    category: 'jeans',
    slug: 'black-straight-fit-jeans',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Classic black straight-fit jeans in rigid denim. A versatile staple for any outfit.',
  },
  {
    id: '18',
    name: '100% Cotton Regular Fit Oxford Shirt',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    colorCount: 3,
    category: 'shirts',
    slug: 'cotton-regular-fit-oxford-shirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'The oxford shirt — a timeless classic. Made from 100% cotton with a button-down collar.',
  },
  {
    id: '19',
    name: 'Washed Baggy Jeans',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80',
    category: 'jeans',
    slug: 'washed-baggy-jeans',
    sizes: ['28', '30', '32', '34', '36'],
    description: 'Relaxed baggy jeans with a washed finish and dropped crotch. The go-to for street-style looks.',
  },
  {
    id: '20',
    name: '100% Acrylic Textured Box Fit Sweater',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80',
    category: 'sweaters',
    slug: 'acrylic-textured-box-fit-sweater',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A chunky box-fit sweater in 100% acrylic with rich textured knit. Oversized silhouette, premium feel.',
  },
];

export const trendingTabs = ['ALL', 'SHIRTS', 'JACKETS', 'JEANS', 'T-SHIRTS', 'SUNGLASSES', 'TROUSERS', 'SWEATERS', 'SHOES'];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'ALL') return products;
  return products.filter(p => p.category === category.toLowerCase());
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};
