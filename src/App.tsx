import React, { useState } from 'react';
import { StoreProvider } from './context/StoreContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import MobileNavigation from './components/MobileNavigation';
import CartDrawer from './components/CartDrawer';
import SearchDrawer from './components/SearchDrawer';
import Home from './pages/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <StoreProvider>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <AnnouncementBar onClose={() => setShowAnnouncement(false)} />
      )}

      {/* Sticky header */}
      <Header />

      {/* Mobile menu */}
      <MobileNavigation />

      {/* Search overlay */}
      <SearchDrawer />

      {/* Cart drawer */}
      <CartDrawer />

      {/* Page content */}
      <Home />

      {/* Footer */}
      <Footer />
    </StoreProvider>
  );
};

export default App;
