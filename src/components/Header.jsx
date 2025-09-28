import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
              onClick={() => window.scrollTo(0, 0)}
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
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              className="text-white hover:text-primary-blue transition-colors duration-200 text-sm font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact" className="btn-primary" onClick={() => window.scrollTo(0, 0)}>
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Link
              to="/menu"
              className="text-white hover:text-primary-blue transition-colors duration-200 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;