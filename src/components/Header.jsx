import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const servicesItems = [
    { name: 'Desenvolvimento de Software', href: '/software', icon: '💻' },
    { name: 'Inteligência Artificial', href: '/ai', icon: '🤖' },
    { name: 'Cybersegurança', href: '/cybersecurity', icon: '🔒' },
    { name: 'Aceleração de Startups', href: '/startups', icon: '🚀' },
  ];

  const navItems = [
    { name: 'Início', href: '/', icon: '🏠' },
    { name: 'Sobre Nós', href: '/about', icon: '👥' },
    { name: 'Portfólio', href: '/portfolio', icon: '📁' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Contato', href: '/contact', icon: '📞' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-primary-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-blue hover:text-primary-blue/90 transition-colors duration-200">
              IT Business
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-white hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
            >
              Sobre Nós
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                className="text-white hover:text-primary-blue transition-colors duration-200 text-sm font-medium flex items-center"
              >
                Serviços
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-primary-blue/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center px-4 py-3 text-white hover:text-primary-blue hover:bg-primary-blue/10 transition-colors duration-200 border-b border-gray-700 last:border-b-0"
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.filter(item => ['Portfólio', 'Blog'].includes(item.name)).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn-primary">
              Fale Conosco
            </Link>
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
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center space-x-4 text-white hover:text-primary-blue transition-all duration-300 text-xl font-medium transform hover:scale-105"
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
              </Link>
            ))}

            {/* Services in Mobile */}
            <div className="w-full border-t border-primary-blue/20 pt-6">
              <h3 className="text-primary-blue font-semibold mb-4 text-center">Serviços</h3>
              {servicesItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center space-x-4 text-white hover:text-primary-blue transition-all duration-300 text-lg font-medium transform hover:scale-105 mb-4"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${(navItems.length + index) * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out both'
                  }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-4 inline-block transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${(navItems.length + servicesItems.length) * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out both'
                }}
              >
                Iniciar Parceria
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;