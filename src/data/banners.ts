export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  mobileImage?: string;
  href: string;
  cta?: string;
  textPosition?: 'left' | 'center' | 'right';
  textColor?: 'light' | 'dark';
}

export const heroBanners: Banner[] = [
  {
    id: '1',
    title: 'BISMIL',
    subtitle: "The Collab You've Been Waiting For",
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/89394399-c477-419c-92b0-928e2e7c6991/1792752467_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/89394399-c477-419c-92b0-928e2e7c6991/1792752467_mobile.jpeg',
    href: '/bismil',
    cta: 'SHOP NOW',
    textPosition: 'left',
    textColor: 'light',
  },
  {
    id: '2',
    title: 'FESTIVE EDIT',
    subtitle: 'Dress to impress this season',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/5c3fdcf7-dbe7-4c1d-b02a-b0b27cad15fd/1792412985_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/5c3fdcf7-dbe7-4c1d-b02a-b0b27cad15fd/1792412985_mobile.jpeg',
    href: '/festive-edit',
    cta: 'EXPLORE',
    textPosition: 'left',
    textColor: 'light',
  },
  {
    id: '3',
    title: 'THE PUFFER EDIT',
    subtitle: 'Stay warm, stay stylish',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/b8d2f665-b0e0-4371-b136-4716dbf20975/1792152952_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/b8d2f665-b0e0-4371-b136-4716dbf20975/1792152952_mobile.jpeg',
    href: '/puffer-edit',
    cta: 'SHOP NOW',
    textPosition: 'left',
    textColor: 'light',
  },
  {
    id: '4',
    title: 'OUTERWEAR',
    subtitle: 'Layer up in style',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/20d1bc54-5e52-411c-b3af-0b4fbef3aeeb/1789450936_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/20d1bc54-5e52-411c-b3af-0b4fbef3aeeb/1789450936_mobile.jpeg',
    href: '/outerwear',
    cta: 'EXPLORE',
    textPosition: 'left',
    textColor: 'light',
  },
  {
    id: '5',
    title: 'BAGGY JEANS',
    subtitle: 'The denim revolution',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/a43a7c64-ff79-4d11-b0f8-dd22ebe08cea/1791804358_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/a43a7c64-ff79-4d11-b0f8-dd22ebe08cea/1791804358_mobile.jpeg',
    href: '/baggy-jeans',
    cta: 'SHOP NOW',
    textPosition: 'left',
    textColor: 'light',
  },
  {
    id: '6',
    title: 'STATEMENT SHIRTS',
    subtitle: 'Bold prints, bolder looks',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/8cd974e5-7ca0-4125-a154-1ff0624fc434/1789666179_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/8cd974e5-7ca0-4125-a154-1ff0624fc434/1789666179_mobile.jpeg',
    href: '/statement-shirts',
    cta: 'EXPLORE',
    textPosition: 'left',
    textColor: 'light',
  },
  {
    id: '7',
    title: 'PERFUMES',
    subtitle: 'Signature scents for every mood',
    image: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/eec77386-06de-49a9-bd68-b1645010eaa9/1788933123_desktop.jpeg',
    mobileImage: 'https://d2d5n4ft74bagm.cloudfront.net/media/banners/eec77386-06de-49a9-bd68-b1645010eaa9/1788933123_mobile.jpeg',
    href: '/perfumes',
    cta: 'SHOP NOW',
    textPosition: 'left',
    textColor: 'light',
  },
];

export const shopByOccasion = [
  { label: 'Checked Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/2ce81ca6-8be8-4294-b404-524905d9577a/1789665454_desktop.jpeg?w=90', href: '/shirts?style=checked' },
  { label: 'Formal Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/d3fa414f-7299-49bc-9380-eb8832c72b75/1789665318_desktop.jpeg?w=90', href: '/shirts?style=formal' },
  { label: 'Hand Embroidered', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/dba7e4f4-331f-4a17-88b2-27555e544c73/1790312601_desktop.jpeg?w=90', href: '/shirts?style=embroidered' },
  { label: 'Jacquard Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/891345a5-4f4b-45fa-aa03-6836fe81405d/1790154059_desktop.jpeg?w=90', href: '/shirts?style=jacquard' },
  { label: 'Striped Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/9284eb18-69dc-4c13-b351-e1c00a4d378c/1789665148_desktop.jpeg?w=90', href: '/shirts?pattern=stripes' },
  { label: 'Printed Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/c40ee88e-3ca1-4a9c-a8af-9f392a61c2e5/1789665206_desktop.jpeg?w=90', href: '/shirts?pattern=printed' },
  { label: 'Linen Shirts', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-occasion/be3ad9e7-67ad-47ca-85eb-891c4b4d57e1/1791796757_desktop.jpeg?w=90', href: '/shirts?style=linen' },
];

export const shopByPrice = [
  { label: 'BUY 3 TOPWEAR', price: '@ ₹2699', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/90f15fc8-103d-4062-9974-5d00e65e508e/1792147799.jpeg?w=90', href: '/topwear-offer' },
  { label: 'BUY 2 BOTTOM WEAR', price: '@ ₹2899', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/879b08dc-fe6b-47ff-8916-a97e5e7318a5/1792147829.jpeg?w=90', href: '/bottomwear-offer' },
  { label: 'SUNGLASSES', price: '₹999', image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/63abd977-30f5-44e3-8a08-9e9cfb066352/1792661126.jpeg?w=90', href: '/sunglasses' },
  { label: 'PERFUMES', price: '50% OFF', isOff: true, image: 'https://d2d5n4ft74bagm.cloudfront.net/media/shop-by-price/cc252370-be54-476c-bb4b-d2f9a60266a1/1792661138.jpeg?w=90', href: '/perfumes' },
];
