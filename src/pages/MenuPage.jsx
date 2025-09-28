import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlickeringGrid from '../components/ui/flickering-grid';
import Meteors from '../components/ui/meteors';

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const servicesItems = [
    {
      name: 'Desenvolvimento de Software',
      href: '/software',
      description: 'Soluções sob medida para seu negócio',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      )
    },
    {
      name: 'Inteligência Artificial',
      href: '/ai',
      description: 'IA empresarial que transforma negócios',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'Cybersegurança',
      href: '/cybersecurity',
      description: 'Proteção completa para seus dados',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      )
    },
    {
      name: 'Aceleração de Startups',
      href: '/startups',
      description: 'Transforme sua ideia em negócio',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
  ];

  const navItems = [
    {
      name: 'Sobre Nós',
      href: '/about',
      description: 'Conheça nossa história e missão',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.002 2.002 0 0 0 18 7h-4c-.8 0-1.54.37-2 1l-3 4v6h2v7h1.5v-7H15v7h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-2C4.01 7 3 8.01 3 9v6h1.5v7h2v-7H8V9c0-.99-.99-2-1.5-2z"/>
        </svg>
      )
    },
    {
      name: 'Blog',
      href: '/blog',
      description: 'Insights e tendências em tecnologia',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    },
    {
      name: 'Contato',
      href: '/contact',
      description: 'Vamos conversar sobre seu projeto',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#4169E1"
        flickerChance={0.1}
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/80 z-5"></div>
      <Meteors number={20} className="absolute inset-0 z-10" />

      {/* Header */}
      <div className="relative z-20 flex justify-between items-center h-16 px-4 border-b border-primary-blue/20">
        <Link to="/" className="text-2xl font-bold text-primary-blue">
          IT Business
        </Link>
        <Link
          to="/"
          className="text-white hover:text-primary-blue transition-colors duration-200 p-2"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-6 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Bem-vindo à </span>
            <span className="text-primary-blue">IT Business</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Navegue e descubra nossas soluções tecnológicas
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 text-center">
            Nossos Serviços
          </h2>
          <div className="space-y-4">
            {servicesItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="group block bg-gradient-to-r from-primary-blue/10 to-primary-blue/5 border border-primary-blue/20 rounded-xl p-6 hover:border-primary-blue/40 transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-primary-blue group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg group-hover:text-primary-blue transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-primary-blue transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary-blue mb-6 text-center">
            Navegação
          </h2>
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="group block bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-primary-blue/40 transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${(servicesItems.length + index) * 0.1}s both`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-gray-400 group-hover:text-primary-blue transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg group-hover:text-primary-blue transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-gray-400 group-hover:text-primary-blue transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-primary-blue/20 to-primary-blue/10 border border-primary-blue/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-6">
              Vamos conversar sobre como podemos ajudar seu negócio a crescer
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Iniciar Parceria
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 IT Business. Todos os direitos reservados.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;