import React from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';

const CybersecurityPage = () => {
  const services = [
    {
      icon: '🛡️',
      title: 'Auditoria de Segurança',
      description: 'Avaliação completa da sua infraestrutura de segurança'
    },
    {
      icon: '🔒',
      title: 'Implementação Zero Trust',
      description: 'Arquitetura de segurança "nunca confie, sempre verifique"'
    },
    {
      icon: '🔍',
      title: 'Monitoramento 24/7',
      description: 'Detecção e resposta em tempo real a ameaças'
    },
    {
      icon: '📋',
      title: 'Compliance LGPD',
      description: 'Adequação completa à Lei Geral de Proteção de Dados'
    }
  ];

  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Cyber</span>
            <span className="text-primary-blue">segurança</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Proteja seu negócio com soluções de segurança de classe mundial
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <NeonGradientCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Proteja seu negócio hoje mesmo"
        subtitle="Nossa expertise em cybersegurança garante a proteção completa dos seus dados e sistemas."
        primaryButtonText="Auditoria Gratuita"
        secondaryButtonText="Falar com Especialista"
      />
    </Layout>
  );
};

export default CybersecurityPage;