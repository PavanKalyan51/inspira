import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FindUsSection from './components/FindUsSection';
import Modal from './components/Modal';
import ExperienceCentreSection from './components/ExperienceCentreSection';
import OneStopShopSection from './components/OneStopShopSection';
import VideoGallery from './components/VideoGallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 15000); // Show modal after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FindUsSection />
      <ExperienceCentreSection />
      <OneStopShopSection />
      <VideoGallery />
      <FinalCTA />
      <Footer />
      <FloatingButtons />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;