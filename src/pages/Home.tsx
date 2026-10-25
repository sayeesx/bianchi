import React, { Suspense, lazy } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategorySection from '../components/CategorySection';

// Lazy-load everything below the fold
const PromoBanners     = lazy(() => import('../components/PromoBanners'));
const ShopByOccasion   = lazy(() => import('../components/ShopByOccasion'));
const ShopYourSize     = lazy(() => import('../components/ShopYourSize'));
const ShopByPrice      = lazy(() => import('../components/ShopByPrice'));
const TrendingSection  = lazy(() => import('../components/TrendingSection'));
const BrandStory       = lazy(() => import('../components/BrandStory'));
const NewsletterSection = lazy(() => import('../components/NewsletterSection'));
const SeoSection       = lazy(() => import('../components/SeoSection'));

// Minimal skeleton placeholder while lazy chunks load
const Skeleton: React.FC<{ height?: string }> = ({ height = '200px' }) => (
  <div style={{ height, background: '#f5f5f0', width: '100%' }} />
);

const Home: React.FC = () => {
  return (
    <main>
      {/* Above fold — loaded immediately */}
      <HeroBanner />
      <CategorySection />

      {/* Below fold — code-split and lazy loaded */}
      <Suspense fallback={<Skeleton height="320px" />}>
        <PromoBanners />
      </Suspense>
      <Suspense fallback={<Skeleton height="220px" />}>
        <ShopByOccasion />
      </Suspense>
      <Suspense fallback={<Skeleton height="120px" />}>
        <ShopYourSize />
      </Suspense>
      <Suspense fallback={<Skeleton height="280px" />}>
        <ShopByPrice />
      </Suspense>
      <Suspense fallback={<Skeleton height="400px" />}>
        <TrendingSection />
      </Suspense>
      <Suspense fallback={<Skeleton height="300px" />}>
        <BrandStory />
      </Suspense>
      <Suspense fallback={<Skeleton height="160px" />}>
        <NewsletterSection />
      </Suspense>
      <Suspense fallback={<Skeleton height="200px" />}>
        <SeoSection />
      </Suspense>
    </main>
  );
};

export default Home;
