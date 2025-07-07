import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SoftwareDevelopment from './components/SoftwareDevelopment';
import AI from './components/AI';
import StartupAcceleration from './components/StartupAcceleration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <SoftwareDevelopment />
        <AI />
        <StartupAcceleration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;