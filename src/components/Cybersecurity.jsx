import React from 'react';
import NeonGradientCard from './ui/neon-gradient-card';
import ShineBorder from './ui/shine-border';
import Marquee from './ui/marquee';

const Cybersecurity = () => {
  const services = [
    {
      title: "Auditoria de Segurança",
      description: "Análise completa de vulnerabilidades e compliance",
      icon: "🔍"
    },
    {
      title: "Penetration Testing",
      description: "Testes de invasão para identificar falhas críticas",
      icon: "🛡️"
    },
    {
      title: "Consultoria SOC",
      description: "Implementação de centros de operações de segurança",
      icon: "👥"
    },
    {
      title: "Compliance & LGPD",
      description: "Adequação às regulamentações de proteção de dados",
      icon: "📋"
    }
  ];

  const certifications = [
    "ISO 27001",
    "OWASP Top 10",
    "NIST Framework",
    "PCI DSS",
    "LGPD Compliance",
    "SOC 2",
  ];

  return (
    <section id="cybersecurity" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ShineBorder className="mx-auto mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              🔒 Cybersegurança & Consultoria
            </h2>
          </ShineBorder>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protegemos seus ativos digitais com soluções de segurança de classe mundial
            e consultoria estratégica para transformação digital segura.
          </p>

          {/* Urgency Warning */}
          <div className="bg-gradient-to-r from-red-900/60 to-yellow-900/60 border border-red-400/50 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <span className="text-3xl mr-3">⏰</span>
              <h3 className="text-xl font-bold text-red-300">
                Cada dia sem proteção é um risco multiplicado
              </h3>
            </div>
            <p className="text-red-200 text-center">
              <span className="font-semibold">Hosting antigo sem cybersegurança</span> é uma porta aberta para invasores.
              <br className="hidden md:block" />
              O futuro digital exige proteção moderna - <span className="text-yellow-300 font-semibold">não fique para trás.</span>
            </p>
          </div>
        </div>

        {/* Certifications Marquee */}
        <div className="mb-16">
          <h3 className="text-center text-primary-blue font-semibold mb-6 text-lg">
            Certificações e Frameworks
          </h3>
          <Marquee className="py-4" pauseOnHover>
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="mx-4 px-6 py-3 bg-primary-blue/10 border border-primary-blue/30 rounded-lg text-primary-blue font-medium whitespace-nowrap"
              >
                {cert}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <NeonGradientCard key={index} className="p-6 h-full">
              <div className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </NeonGradientCard>
          ))}
        </div>

        {/* Security Approach */}
        <NeonGradientCard className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-blue mb-4">
                Abordagem Zero Trust
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Implementamos estratégias de segurança baseadas no princípio de
                "nunca confie, sempre verifique", garantindo proteção máxima
                em todos os níveis da sua infraestrutura.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✅ Monitoramento 24/7</li>
                <li>✅ Resposta a incidentes automatizada</li>
                <li>✅ Análise comportamental por IA</li>
                <li>✅ Proteção multicamadas</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <div className="text-primary-blue font-bold text-xl mb-2">
                Proteção Proativa
              </div>
              <p className="text-gray-400 text-sm">
                Prevenção, detecção e resposta integradas
              </p>
            </div>
          </div>
        </NeonGradientCard>
      </div>
    </section>
  );
};

export default Cybersecurity;