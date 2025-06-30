import React, { useState, useEffect } from 'react';
import BelowNavbarForm from '../components/BelowNavbarForm';
import FindUsSection from '../components/FindUsSection';
import Modal from '../components/Modal';
import ExperienceCentreSection from '../components/ExperienceCentreSection';
import OneStopShopSection from '../components/OneStopShopSection';
import VideoGallery from '../components/VideoGallery';
import FinalCTA from '../components/FinalCTA';
import AboveFooterForm from '../components/AboveFooterForm';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 15000); // Show modal after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BelowNavbarForm />
      <FindUsSection />
      <ExperienceCentreSection />
      <OneStopShopSection />
      <VideoGallery />
      <FinalCTA />
      <AboveFooterForm />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Home;