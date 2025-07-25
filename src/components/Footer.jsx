import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Soluções': [
      { name: 'Desenvolvimento de Software', href: '#software' },
      { name: 'Inteligência Artificial', href: '#ai' },
      { name: 'Consultoria Digital', href: '#solucoes' },
      { name: 'Aceleração de Startups', href: '#startups' }
    ],
    'Empresa': [
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Nosso Time', href: '#sobre' },
      { name: 'Carreiras', href: '#contato' },
      { name: 'Parceiros', href: '#contato' }
    ],
    'Recursos': [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    'Suporte': [
      { name: 'Contato', href: '#contato' },
      { name: 'FAQ', href: '#' },
      { name: 'Documentação', href: '#' },
      { name: 'Status do Sistema', href: '#' }
    ]
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, 
      href: '#' 
    },
    { 
      name: 'Instagram', 
      icon: <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
      href: '#' 
    },
    { 
      name: 'YouTube', 
      icon: <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, 
      href: '#' 
    }
  ];

  return (
    <footer className="bg-black border-t border-primary-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-yellow mb-4">IT Business</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando ideias em realidade digital através de soluções inovadoras em 
              inteligência artificial, desenvolvimento de software e aceleração de startups.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p>Base Operacional</p>
              <p>Alphaville Commercial Center</p>
              <p>Calçada Flôr de Lótus, 78 - Alphaville Comercial</p>
              <p>Barueri - SP, 06453-016</p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-primary-yellow mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-yellow transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="py-8 border-t border-primary-yellow/20">
          <div className="flex justify-center">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary-yellow mb-4">
                Siga-nos
              </h4>
              <div className="flex gap-6 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 bg-primary-yellow/10 rounded-full hover:bg-primary-yellow/20 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-yellow/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} IT Business. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-yellow transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-yellow transition-colors duration-200">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-primary-yellow transition-colors duration-200">
                Prazos e Condições
              </a>
              <a href="#" className="hover:text-primary-yellow transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="py-4 border-t border-primary-yellow/10">
          <div className="text-center text-xs text-gray-500">
            Desenvolvido com <span className="text-primary-yellow">❤️</span> pela IT Business
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;