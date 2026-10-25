import React from 'react';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';
import PromoBanners from '../components/PromoBanners';
import ShopByOccasion from '../components/ShopByOccasion';
import ShopYourSize from '../components/ShopYourSize';
import ShopByPrice from '../components/ShopByPrice';
import TrendingSection from '../components/TrendingSection';
import BrandStory from '../components/BrandStory';
import NewsletterSection from '../components/NewsletterSection';
import SeoSection from '../components/SeoSection';

const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Hero Banner Carousel */}
      <HeroBanner />

      {/* 2. Shop by Category circles */}
      <CategorySection />

      {/* 3. Promo Banners (Last Few + Up to 30% off) */}
      <PromoBanners />

      {/* 4. Shop by Style/Occasion */}
      <ShopByOccasion />

      {/* 5. Shop Your Size */}
      <ShopYourSize />

      {/* 6. Next Level Prices / Shop by Price */}
      <ShopByPrice />

      {/* 7. Trending product grid with tabs */}
      <TrendingSection />

      {/* 8. Brand story section */}
      <BrandStory />

      {/* 9. Newsletter */}
      <NewsletterSection />

      {/* 10. SEO content section (like original) */}
      <SeoSection />
    </main>
  );
};

export default Home;
