import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import SearchPage from './pages/SearchPage';
import AccountPage from './pages/AccountPage';
import SalePage from './pages/SalePage';
import WishlistPage from './pages/WishlistPage';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        {/* Announcement Bar — no close button, endless ticker */}
        <AnnouncementBar />

        {/* Sticky responsive header for all browser sizes */}
        <Header />

        {/* Mobile menu navigation */}
        <MobileNavigation />

        {/* Cart drawer */}
        <CartDrawer />

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          
          {/* Collection / Category routes */}
          <Route path="/new-arrivals" element={<CategoryPage />} />
          <Route path="/shirts" element={<CategoryPage />} />
          <Route path="/t-shirts" element={<CategoryPage />} />
          <Route path="/bottomwear" element={<CategoryPage />} />
          <Route path="/jeans" element={<CategoryPage />} />
          <Route path="/trousers" element={<CategoryPage />} />
          <Route path="/jackets" element={<CategoryPage />} />
          <Route path="/co-ords" element={<CategoryPage />} />
          <Route path="/sweaters" element={<CategoryPage />} />
          <Route path="/shop" element={<CategoryPage />} />

          <Route path="*" element={<Home />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </StoreProvider>
    </BrowserRouter>
  );
};

export default App;
