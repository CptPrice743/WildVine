import React, { useState } from 'react'; // Import useState
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import CTA from './components/CTA';
import Service from './components/Service';
import Donate from './components/Donate';
import Testimonials from './components/Testimonials';
import Partner from './components/Partner';
import Event from './components/Event';
import InstaPost from './components/InstaPost';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onDonateClick={openModal} />
      <main>
        <article>
          <Hero />
          <Features />
          <About />
          <CTA />
          <Service />
          <Donate onDonateClick={openModal} />
          <Testimonials />
          <Partner />
          <Event />
          <InstaPost />
        </article>
      </main>
      <Footer />

      <DonationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;