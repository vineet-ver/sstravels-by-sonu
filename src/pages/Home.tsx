import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import AppPromotion from '../components/AppPromotion';
import AreaCoverage from '../components/AreaCoverage';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Fleet />
      <About />
      <Testimonials />
      <AppPromotion />
      <AreaCoverage />
      <Contact />
    </>
  );
};

export default Home;