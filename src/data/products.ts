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
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Straight Fit Stretch Jeans',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&q=80',
    category: 'jeans',
    slug: 'straight-fit-stretch-jeans-1',
  },
  {
    id: '2',
    name: 'Slim Fit Stretch Pleated Trousers',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4136?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80',
    category: 'trousers',
    slug: 'slim-fit-stretch-pleated-trousers',
  },
  {
    id: '3',
    name: 'Slim Fit Stretch Shirt',
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=400&q=80',
    colorCount: 4,
    category: 'shirts',
    slug: 'slim-fit-stretch-shirt',
  },
  {
    id: '4',
    name: '100% Cotton Regular Fit Brown Shirt',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80',
    colorCount: 3,
    category: 'shirts',
    slug: 'cotton-regular-fit-brown-shirt',
  },
  {
    id: '5',
    name: 'Straight Fit Stretch Jeans',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    category: 'jeans',
    slug: 'straight-fit-stretch-jeans-2',
  },
  {
    id: '6',
    name: '100% Cotton Slim Fit Signature Shirt',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=400&q=80',
    category: 'shirts',
    slug: 'cotton-slim-fit-signature-shirt',
    isNew: true,
  },
  {
    id: '7',
    name: 'Straight Fit Washed Jeans',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&q=80',
    category: 'jeans',
    slug: 'straight-fit-washed-jeans-1',
  },
  {
    id: '8',
    name: 'Washed Straight Fit Jeans',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=400&q=80',
    category: 'jeans',
    slug: 'washed-straight-fit-jeans',
  },
  {
    id: '9',
    name: 'High Neck Snap Button Zipper Jacket',
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    category: 'jackets',
    slug: 'high-neck-snap-button-zipper-jacket',
    badge: 'NEW',
  },
  {
    id: '10',
    name: 'Faux Leather Snap Button Zipper Jacket',
    price: 2624,
    originalPrice: 3499,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
    category: 'jackets',
    slug: 'faux-leather-snap-button-zipper-jacket',
  },
  {
    id: '11',
    name: 'Textured Flat Knit Polo T-Shirt',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
    category: 't-shirts',
    slug: 'textured-flat-knit-polo-t-shirt',
  },
  {
    id: '12',
    name: 'Rugby Stripes Oversized Polo T-Shirt',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
    category: 't-shirts',
    slug: 'rugby-stripes-oversized-polo',
  },
  {
    id: '13',
    name: 'Washed Bootcut Jeans',
    price: 2099,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400&q=80',
    category: 'jeans',
    slug: 'washed-bootcut-jeans',
  },
  {
    id: '14',
    name: 'Regular Fit Essential Polo Sweater',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80',
    category: 'sweaters',
    slug: 'regular-fit-essential-polo-sweater',
  },
  {
    id: '15',
    name: 'Ombre Dyed Textured Sweater',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&q=80',
    category: 'sweaters',
    slug: 'ombre-dyed-textured-sweater',
  },
  {
    id: '16',
    name: 'OnLoop Edge Satin Slim Fit Stretch Shirt',
    price: 1699,
    originalPrice: 2099,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&q=80',
    colorCount: 3,
    category: 'shirts',
    slug: 'onloop-edge-satin-slim-fit-shirt',
  },
  {
    id: '17',
    name: 'Black Straight Fit Jeans',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&q=80',
    category: 'jeans',
    slug: 'black-straight-fit-jeans',
  },
  {
    id: '18',
    name: '100% Cotton Regular Fit Oxford Shirt',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80',
    colorCount: 3,
    category: 'shirts',
    slug: 'cotton-regular-fit-oxford-shirt',
  },
  {
    id: '19',
    name: 'Washed Baggy Jeans',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&q=80',
    category: 'jeans',
    slug: 'washed-baggy-jeans',
  },
  {
    id: '20',
    name: '100% Acrylic Textured Box Fit Sweater',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80',
    category: 'sweaters',
    slug: 'acrylic-textured-box-fit-sweater',
  },
];

export const trendingTabs = ['ALL', 'SHIRTS', 'JACKETS', 'JEANS', 'T-SHIRTS', 'SUNGLASSES', 'TROUSERS', 'SWEATERS', 'SHOES'];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'ALL') return products;
  return products.filter(p => p.category === category.toLowerCase());
};
