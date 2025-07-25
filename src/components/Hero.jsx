import React from 'react';

const Hero = () => {
  const metrics = [
    { value: '10+', label: 'Clientes Atendidos' },
    { value: '20+', label: 'Projetos de Alto Valor' },
    { value: '11+', label: 'Anos de Experiência' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Magic Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-gradient-to-br from-primary-yellow/30 via-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 via-pink-500/15 to-primary-yellow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/12 via-primary-yellow/15 to-orange-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-bl from-green-500/15 via-primary-yellow/15 to-teal-500/15 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-indigo-500/15 via-primary-yellow/18 to-violet-500/15 rounded-full blur-2xl animate-pulse delay-4000"></div>
        <div className="absolute top-40 left-1/3 w-64 h-64 bg-gradient-to-br from-red-500/10 via-primary-yellow/12 to-yellow-500/10 rounded-full blur-xl animate-pulse delay-5000"></div>
        <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-gradient-to-tl from-emerald-500/12 via-primary-yellow/10 to-blue-400/12 rounded-full blur-xl animate-pulse delay-6000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">IT Business</span>
            <br />
            <span className="text-primary-yellow">Impulsionando Inovação</span>
            <br />
            <span className="text-white">de Alta Escala com</span>
            <br />
            <span className="text-primary-yellow">Inteligência Artificial</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos projetos de TI de alto valor, transformando desafios complexos em soluções estratégicas e escaláveis. 
            <span className="text-primary-yellow font-semibold"> Sistemas inteligentes que impulsionam o futuro do seu negócio.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#software" className="btn-primary text-lg px-8 py-4 inline-block">
              Descubra Nossas Soluções
            </a>
            <a href="#contato" className="btn-secondary text-lg px-8 py-4 inline-block">
              Fale Conosco
            </a>
          </div>

          {/* Metrics */}
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-yellow mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Presence */}
          <div className="mt-12 p-6 bg-primary-yellow/5 rounded-xl border border-primary-yellow/20">
            <h3 className="text-primary-yellow font-semibold mb-2">Base Operacional</h3>
            <p className="text-gray-300">
              Sede no <span className="text-primary-yellow font-semibold">Alphaville Commercial Center</span> - <span className="text-primary-yellow font-semibold">Calçada Flôr de Lótus, 78, Barueri - SP</span> com <span className="text-primary-yellow font-semibold">rede de parceiros estratégicos</span> em todo o Brasil
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;