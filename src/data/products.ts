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
    image: 'https://picsum.photos/seed/prod1/300/400',
    hoverImage: 'https://picsum.photos/seed/prod1h/300/400',
    category: 'jeans',
    slug: 'straight-fit-stretch-jeans-1',
  },
  {
    id: '2',
    name: 'Slim Fit Stretch Pleated Trousers',
    price: 1599,
    image: 'https://picsum.photos/seed/prod2/300/400',
    hoverImage: 'https://picsum.photos/seed/prod2h/300/400',
    category: 'trousers',
    slug: 'slim-fit-stretch-pleated-trousers',
  },
  {
    id: '3',
    name: 'Slim Fit Stretch Shirt',
    price: 999,
    originalPrice: 1299,
    discount: 23,
    image: 'https://picsum.photos/seed/prod3/300/400',
    hoverImage: 'https://picsum.photos/seed/prod3h/300/400',
    colorCount: 4,
    category: 'shirts',
    slug: 'slim-fit-stretch-shirt',
  },
  {
    id: '4',
    name: '100% Cotton Regular Fit Brown Shirt',
    price: 1399,
    image: 'https://picsum.photos/seed/prod4/300/400',
    hoverImage: 'https://picsum.photos/seed/prod4h/300/400',
    colorCount: 3,
    category: 'shirts',
    slug: 'cotton-regular-fit-brown-shirt',
  },
  {
    id: '5',
    name: 'Straight Fit Stretch Jeans',
    price: 2099,
    image: 'https://picsum.photos/seed/prod5/300/400',
    hoverImage: 'https://picsum.photos/seed/prod5h/300/400',
    category: 'jeans',
    slug: 'straight-fit-stretch-jeans-2',
  },
  {
    id: '6',
    name: '100% Cotton Slim Fit Signature Shirt',
    price: 1699,
    image: 'https://picsum.photos/seed/prod6/300/400',
    hoverImage: 'https://picsum.photos/seed/prod6h/300/400',
    category: 'shirts',
    slug: 'cotton-slim-fit-signature-shirt',
    isNew: true,
  },
  {
    id: '7',
    name: 'Straight Fit Washed Jeans',
    price: 1799,
    image: 'https://picsum.photos/seed/prod7/300/400',
    hoverImage: 'https://picsum.photos/seed/prod7h/300/400',
    category: 'jeans',
    slug: 'straight-fit-washed-jeans-1',
  },
  {
    id: '8',
    name: 'Washed Straight Fit Jeans',
    price: 1999,
    image: 'https://picsum.photos/seed/prod8/300/400',
    hoverImage: 'https://picsum.photos/seed/prod8h/300/400',
    category: 'jeans',
    slug: 'washed-straight-fit-jeans',
  },
  {
    id: '9',
    name: 'High Neck Snap Button Zipper Jacket',
    price: 3999,
    originalPrice: 4999,
    discount: 20,
    image: 'https://picsum.photos/seed/prod9/300/400',
    hoverImage: 'https://picsum.photos/seed/prod9h/300/400',
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
    image: 'https://picsum.photos/seed/prod10/300/400',
    hoverImage: 'https://picsum.photos/seed/prod10h/300/400',
    category: 'jackets',
    slug: 'faux-leather-snap-button-zipper-jacket',
  },
  {
    id: '11',
    name: 'Textured Flat Knit Polo T-Shirt',
    price: 1599,
    image: 'https://picsum.photos/seed/prod11/300/400',
    hoverImage: 'https://picsum.photos/seed/prod11h/300/400',
    category: 't-shirts',
    slug: 'textured-flat-knit-polo-t-shirt',
  },
  {
    id: '12',
    name: 'Rugby Stripes Oversized Polo T-Shirt',
    price: 1399,
    image: 'https://picsum.photos/seed/prod12/300/400',
    hoverImage: 'https://picsum.photos/seed/prod12h/300/400',
    category: 't-shirts',
    slug: 'rugby-stripes-oversized-polo',
  },
  {
    id: '13',
    name: 'Washed Bootcut Jeans',
    price: 2099,
    image: 'https://picsum.photos/seed/prod13/300/400',
    hoverImage: 'https://picsum.photos/seed/prod13h/300/400',
    category: 'jeans',
    slug: 'washed-bootcut-jeans',
  },
  {
    id: '14',
    name: 'Regular Fit Essential Polo Sweater',
    price: 1899,
    image: 'https://picsum.photos/seed/prod14/300/400',
    hoverImage: 'https://picsum.photos/seed/prod14h/300/400',
    category: 'sweaters',
    slug: 'regular-fit-essential-polo-sweater',
  },
  {
    id: '15',
    name: 'Ombre Dyed Textured Sweater',
    price: 1799,
    image: 'https://picsum.photos/seed/prod15/300/400',
    hoverImage: 'https://picsum.photos/seed/prod15h/300/400',
    category: 'sweaters',
    slug: 'ombre-dyed-textured-sweater',
  },
  {
    id: '16',
    name: 'OnLoop Edge Satin Slim Fit Stretch Shirt',
    price: 1699,
    originalPrice: 2099,
    discount: 19,
    image: 'https://picsum.photos/seed/prod16/300/400',
    hoverImage: 'https://picsum.photos/seed/prod16h/300/400',
    colorCount: 3,
    category: 'shirts',
    slug: 'onloop-edge-satin-slim-fit-shirt',
  },
  {
    id: '17',
    name: 'Black Straight Fit Jeans',
    price: 1999,
    image: 'https://picsum.photos/seed/prod17/300/400',
    hoverImage: 'https://picsum.photos/seed/prod17h/300/400',
    category: 'jeans',
    slug: 'black-straight-fit-jeans',
  },
  {
    id: '18',
    name: '100% Cotton Regular Fit Oxford Shirt',
    price: 1199,
    image: 'https://picsum.photos/seed/prod18/300/400',
    hoverImage: 'https://picsum.photos/seed/prod18h/300/400',
    colorCount: 3,
    category: 'shirts',
    slug: 'cotton-regular-fit-oxford-shirt',
  },
  {
    id: '19',
    name: 'Washed Baggy Jeans',
    price: 1999,
    image: 'https://picsum.photos/seed/prod19/300/400',
    hoverImage: 'https://picsum.photos/seed/prod19h/300/400',
    category: 'jeans',
    slug: 'washed-baggy-jeans',
  },
  {
    id: '20',
    name: '100% Acrylic Textured Box Fit Sweater',
    price: 1899,
    image: 'https://picsum.photos/seed/prod20/300/400',
    hoverImage: 'https://picsum.photos/seed/prod20h/300/400',
    category: 'sweaters',
    slug: 'acrylic-textured-box-fit-sweater',
  },
];

export const trendingTabs = ['ALL', 'SHIRTS', 'JACKETS', 'JEANS', 'T-SHIRTS', 'SUNGLASSES', 'TROUSERS', 'SWEATERS', 'SHOES'];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'ALL') return products;
  return products.filter(p => p.category === category.toLowerCase());
};
