import React from 'react';
import Meteors from './ui/meteors';
import NeonGradientCard from './ui/neon-gradient-card';
import AuroraText from './ui/aurora-text';
import FlickeringGrid from './ui/flickering-grid';

const Hero = () => {
  const metrics = [
    { value: '50+', label: 'Soluções Desenvolvidas' },
    { value: '30+', label: 'Parcerias Ativas' },
    { value: '24/7', label: 'Suporte Técnico' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Magic Background Effects */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#4169E1"
        flickerChance={0.1}
        width={1920}
        height={1080}
      />
      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-black/80 z-5"></div>
      <Meteors number={30} className="absolute inset-0 z-10" />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-gradient-to-br from-primary-blue-light/30 via-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 via-pink-500/15 to-primary-blue-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/12 via-primary-blue-light/15 to-orange-500/12 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-lg md:text-xl text-primary-blue font-semibold mb-4 tracking-wider">
              SEU MVP AINDA NÃO SAIU DO PAPEL?
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-300">Parceiro de Tecnologia para</span>
              <br />
              <span className="text-blue-600 font-bold">
                Produção de Software
              </span>
              <br />
              <span className="text-blue-300">e Soluções com</span>
              <br />
              <span className="text-blue-600 font-bold">
                Inteligência Artificial
              </span>
            </h1>
          </div>

          <NeonGradientCard className="mb-8 p-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              <span className="text-primary-blue font-bold text-2xl md:text-3xl block mb-4">
                Lançamos produtos em semanas, não em meses.
              </span>
            </p>
          </NeonGradientCard>

          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Transformamos ideias em MVPs funcionais através de nossa parceria especializada em desenvolvimento ágil,
            cybersegurança e consultoria estratégica em IA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#software" className="btn-primary text-lg px-8 py-4 inline-block">
              Iniciar Parceria
            </a>
            <a href="#contato" className="btn-secondary text-lg px-8 py-4 inline-block">
              Consulta Gratuita
            </a>
          </div>

          {/* Metrics */}
          <div className="flex justify-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 leading-tight">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <NeonGradientCard className="mt-12 p-6">
            <h3 className="text-primary-blue font-semibold mb-4 text-xl">Nossas Especialidades</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-primary-blue font-semibold mb-2">Desenvolvimento</div>
                <p className="text-gray-300">MVPs e produtos escaláveis</p>
              </div>
              <div className="text-center">
                <div className="text-primary-blue font-semibold mb-2">Cybersegurança</div>
                <p className="text-gray-300">Proteção e auditoria</p>
              </div>
              <div className="text-center">
                <div className="text-primary-blue font-semibold mb-2">IA & Consultoria</div>
                <p className="text-gray-300">Soluções inteligentes</p>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </div>

    </section>
  );
};

export default Hero;