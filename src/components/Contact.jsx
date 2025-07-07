import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <div className="w-6 h-6 bg-primary-yellow rounded-full"></div>,
      label: 'Email',
      value: 'contato@itbusiness.com',
      link: 'mailto:contato@itbusiness.com'
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>, 
      link: '#' 
    },
    { 
      name: 'Instagram', 
      icon: <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>, 
      link: '#' 
    },
    { 
      name: 'YouTube', 
      icon: <svg className="w-6 h-6 text-primary-yellow" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>, 
      link: '#' 
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Olá, </span>
            <span className="text-primary-yellow">Queremos Te Ouvir!</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vamos falar sobre seu projeto e como a IT Business pode impulsionar seu sucesso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 p-8 rounded-2xl border border-primary-yellow/20">
            <h3 className="text-2xl font-bold text-primary-yellow mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-primary-yellow/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow transition-colors duration-200"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-primary-yellow/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow transition-colors duration-200"
                  placeholder="seu.email@exemplo.com"
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-primary-yellow/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-yellow transition-colors duration-200 resize-none"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-primary-yellow/10 p-8 rounded-2xl border border-primary-yellow/20">
              <h3 className="text-2xl font-bold text-primary-yellow mb-6">
                Entre em Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center space-x-4 p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-colors duration-200 group"
                  >
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <p className="text-primary-yellow font-medium">{contact.label}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-200">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary-yellow/20">
                <p className="text-primary-yellow font-semibold mb-2">
                  Toque e entre em contato! →
                </p>
                <p className="text-gray-300 text-sm">
                  Responderemos em até 24 horas
                </p>
              </div>
            </div>


            {/* Social Links */}
            <div className="bg-primary-yellow/10 p-8 rounded-2xl border border-primary-yellow/20">
              <h3 className="text-2xl font-bold text-primary-yellow mb-6">
                Siga-nos
              </h3>
              
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="flex items-center justify-center w-12 h-12 bg-black/30 rounded-full hover:bg-black/50 transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;