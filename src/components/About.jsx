import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Somos a </span>
            <span className="text-primary-yellow">IT Business</span>
          </h2>
          <p className="text-xl text-primary-yellow font-semibold mb-8">
            Paixão por Inovação e Resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Na IT Business, somos apaixonados por transformar ideias em realidade digital. 
              Trabalhamos com base em <span className="text-primary-yellow font-semibold">conceitos sólidos</span>, 
              <span className="text-primary-yellow font-semibold"> estratégia aplicada</span> e 
              <span className="text-primary-yellow font-semibold"> execução criativa</span> para entregar 
              experiências digitais únicas.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Combinamos <span className="text-primary-yellow font-semibold">design</span>, 
              <span className="text-primary-yellow font-semibold"> tecnologia</span> e 
              <span className="text-primary-yellow font-semibold"> posicionamento digital</span> para criar 
              soluções que geram autoridade, atraem os clientes certos e impulsionam sua marca rumo ao sucesso real.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Incluímos um braço dedicado a <span className="text-primary-yellow font-semibold">Business Solutions</span>, 
              oferecendo soluções estratégicas para otimizar e escalar operações.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 rounded-2xl p-8 border border-primary-yellow/30">
              <div className="grid grid-cols-2 gap-4 h-64">
                {/* Abstract visual elements representing collaboration and innovation */}
                <div className="space-y-4">
                  <div className="bg-primary-yellow/20 rounded-lg h-16 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-yellow rounded-full opacity-60"></div>
                  </div>
                  <div className="bg-primary-yellow/10 rounded-lg h-20 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-yellow rounded-sm opacity-40"></div>
                  </div>
                  <div className="bg-primary-yellow/20 rounded-lg h-12 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-yellow rounded-full opacity-80"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary-yellow/10 rounded-lg h-20 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-yellow rounded-sm opacity-60"></div>
                  </div>
                  <div className="bg-primary-yellow/20 rounded-lg h-16 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-yellow rounded-full opacity-40"></div>
                  </div>
                  <div className="bg-primary-yellow/15 rounded-lg h-16 flex items-center justify-center">
                    <div className="w-5 h-5 bg-primary-yellow rounded-sm opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-yellow/15 to-pink-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tl from-purple-500/8 to-primary-yellow/12 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-primary-yellow/10 p-6 rounded-xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300">
            <h3 className="text-primary-yellow font-bold text-lg mb-2">
              Sistemas de Alto Valor
            </h3>
            <p className="text-gray-300 text-sm">
              Desenvolvemos arquiteturas robustas e escaláveis para empresas que precisam de soluções tecnológicas de alta performance.
            </p>
          </div>

          <div className="bg-primary-yellow/10 p-6 rounded-xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300">
            <h3 className="text-primary-yellow font-bold text-lg mb-2">
              Inteligência Artificial Avançada
            </h3>
            <p className="text-gray-300 text-sm">
              Implementamos soluções de IA que automatizam processos complexos e geram insights estratégicos para seu negócio.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-primary-yellow/20 to-primary-yellow/10 p-6 rounded-xl border border-primary-yellow/30 hover:border-primary-yellow/50 transition-all duration-300">
            <h3 className="text-primary-yellow font-bold text-lg mb-2">
              Localização Estratégica
            </h3>
            <p className="text-white font-semibold mb-1">
              Alphaville Commercial Center
            </p>
            <p className="text-gray-300 text-sm">
              Calçada Flôr de Lótus, 78 - Alphaville Comercial
            </p>
            <p className="text-gray-300 text-sm">
              Barueri - SP, 06453-016
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;