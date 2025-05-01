
    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Layout from '@/components/Layout';
    import HomePage from '@/pages/HomePage';
    import ServicesPage from '@/pages/ServicesPage';
    import GalleryPage from '@/pages/GalleryPage';
    import AboutPage from '@/pages/AboutPage';
    import ContactPage from '@/pages/ContactPage';
    import { Toaster } from '@/components/ui/toaster';

    function App() {
      return (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
          <Toaster />
        </Router>
      );
    }

    export default App;
  