import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const servicesItems = [
    {
      name: 'Desenvolvimento de Software',
      href: '/software',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      )
    },
    {
      name: 'Inteligência Artificial',
      href: '/ai',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      name: 'Cybersegurança',
      href: '/cybersecurity',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      )
    },
    {
      name: 'Aceleração de Startups',
      href: '/startups',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
  ];

  const navItems = [
    {
      name: 'Início',
      href: '/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    {
      name: 'Sobre Nós',
      href: '/about',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.002 2.002 0 0 0 18 7h-4c-.8 0-1.54.37-2 1l-3 4v6h2v7h1.5v-7H15v7h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-2C4.01 7 3 8.01 3 9v6h1.5v7h2v-7H8V9c0-.99-.99-2-1.5-2z"/>
        </svg>
      )
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      )
    },
    {
      name: 'Contato',
      href: '/contact',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
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
                      <span className="mr-3">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navItems.filter(item => ['Blog'].includes(item.name)).map((item) => (
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
        <>
          {/* Background Overlay */}
          <div className="lg:hidden fixed inset-0 z-40 bg-black/90" />

          {/* Menu Content */}
          <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 bg-black">
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
          <div className="flex flex-col justify-center items-center min-h-screen px-6 space-y-6 pt-16 pb-20">
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
                <span className="group-hover:scale-110 transition-transform duration-300">
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
                  <span className="group-hover:scale-110 transition-transform duration-300">
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
        </>
      )}
    </header>
  );
};

export default Header;