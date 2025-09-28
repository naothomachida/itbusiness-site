import React from 'react';
import Layout from '../components/shared/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import SoftwareDevelopment from '../components/SoftwareDevelopment';
import AI from '../components/AI';
import Cybersecurity from '../components/Cybersecurity';
import StartupAcceleration from '../components/StartupAcceleration';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <SoftwareDevelopment />
      <AI />
      <Cybersecurity />
      <StartupAcceleration />
      <Contact />
    </Layout>
  );
};

export default HomePage;