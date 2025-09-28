import React from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';

const StartupsPage = () => {
  const services = [
    {
      icon: '🚀',
      title: 'MVP em 4 Semanas',
      description: 'Desenvolvimento rápido para validação de mercado'
    },
    {
      icon: '💡',
      title: 'Consultoria Estratégica',
      description: 'Orientação técnica e de negócios para crescimento'
    },
    {
      icon: '📈',
      title: 'Escalabilidade',
      description: 'Arquitetura preparada para crescimento exponencial'
    },
    {
      icon: '💰',
      title: 'Pitch Deck Técnico',
      description: 'Apresentações que conquistam investidores'
    }
  ];

  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Aceleração de </span>
            <span className="text-primary-blue">Startups</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforme sua ideia em um negócio escalável e pronto para investimento
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
        title="Pronto para acelerar sua startup?"
        subtitle="Junte-se às startups que já transformaram suas ideias em negócios de sucesso conosco."
        primaryButtonText="Acelerar Agora"
        secondaryButtonText="Ver Success Stories"
      />
    </Layout>
  );
};

export default StartupsPage;