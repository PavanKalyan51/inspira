import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Home from './pages/Home.tsx';
import Interiors from './pages/Interiors.tsx';
import DesignIdeas from './pages/DesignIdeas.tsx';
import Magazine from './pages/Magazine.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import ModularInteriors from './pages/ModularInteriors.tsx';
import FullHomeInteriors from './pages/FullHomeInteriors.tsx';
import BespokeDesigns from './pages/BespokeDesigns.tsx';
import Renovations from './pages/Renovations.tsx';
import ArticleDetail from './pages/ArticleDetail.tsx';
import ThankYou from './pages/ThankYou.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/design-ideas" element={<DesignIdeas />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/modular-interiors" element={<ModularInteriors />} />
          <Route path="/full-home-interiors" element={<FullHomeInteriors />} />
          <Route path="/bespoke-designs" element={<BespokeDesigns />} />
          <Route path="/renovations" element={<Renovations />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  </StrictMode>
);