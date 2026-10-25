import React, { useState } from 'react';
import { trendingTabs, products, getProductsByCategory } from '../data/products';
import ProductCard from './ProductCard';

const TrendingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filtered = getProductsByCategory(activeTab);
  const displayProducts = filtered.length > 0 ? filtered : products.slice(0, 10);

  return (
    <section className="trending-section">
      <div className="trending-inner">
        {/* Header */}
        <div className="trending-header">
          <h2 className="trending-title">TRENDING</h2>
          <a
            href="/shop"
            className="trending-view-all"
            onClick={e => e.preventDefault()}
          >
            VIEW ALL
          </a>
        </div>

        {/* Tabs — horizontal scroll */}
        <div className="trending-tabs-wrap">
          <div className="trending-tabs">
            {trendingTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`trending-tab${activeTab === tab ? ' active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="trending-grid">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
