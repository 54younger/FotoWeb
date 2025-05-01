
    import React from 'react';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import AnnouncementBar from '@/components/AnnouncementBar';

    const Layout = ({ children }) => {
      return (
        <div className="flex flex-col min-h-screen">
          <AnnouncementBar message="Limited-time launch offer: 15% off all bookings this month!" />
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;
  