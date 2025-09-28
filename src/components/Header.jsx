import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', href: '#home', icon: '🏠' },
    { name: 'Sobre Nós', href: '#sobre', icon: '👥' },
    { name: 'Desenvolvimento de Software', href: '#software', icon: '💻' },
    { name: 'Inteligência Artificial', href: '#ai', icon: '🤖' },
    { name: 'Cybersegurança', href: '#cybersecurity', icon: '🔒' },
    { name: 'Aceleração de Startups', href: '#startups', icon: '🚀' },
    { name: 'Portfólio', href: '#portfolio', icon: '📁' },
    { name: 'Blog', href: '#blog', icon: '📝' },
    { name: 'Contato', href: '#contato', icon: '📞' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary-blue hover:text-primary-blue/90 transition-colors duration-200 smooth-scroll">
              IT Business
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.filter(item => ['Sobre Nós', 'Desenvolvimento de Software', 'Inteligência Artificial', 'Aceleração de Startups'].includes(item.name)).map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-primary-blue transition-colors duration-200 text-sm font-medium smooth-scroll"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#contato" className="btn-primary smooth-scroll">
              Fale Conosco
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-blue transition-colors duration-200 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
          {/* Header with close button */}
          <div className="flex justify-between items-center h-16 px-4 border-b border-primary-blue/20">
            <div className="text-2xl font-bold text-primary-blue">
              IT Business
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-primary-blue transition-colors duration-200 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col justify-center items-center h-full px-6 space-y-6 pb-20">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-4 text-white hover:text-primary-blue transition-all duration-300 text-xl font-medium smooth-scroll transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out both'
                }}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </a>
            ))}

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contato"
                className="btn-primary text-lg px-8 py-4 inline-block smooth-scroll transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${navItems.length * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out both'
                }}
              >
                Iniciar Parceria
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;