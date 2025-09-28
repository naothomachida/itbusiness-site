import React from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';
import Meteors from '../components/ui/meteors';

const AIPage = () => {
  const aiServices = [
    {
      icon: '🤖',
      title: 'Chatbots Inteligentes',
      description: 'Assistentes virtuais com processamento de linguagem natural',
      applications: ['Atendimento ao cliente', 'Suporte técnico', 'Vendas automatizadas', 'FAQ inteligente']
    },
    {
      icon: '📊',
      title: 'Análise Preditiva',
      description: 'Machine Learning para previsões e insights de negócio',
      applications: ['Previsão de demanda', 'Análise de risco', 'Otimização de preços', 'Detecção de fraudes']
    },
    {
      icon: '👁️',
      title: 'Visão Computacional',
      description: 'Processamento e análise automatizada de imagens',
      applications: ['Reconhecimento facial', 'Controle de qualidade', 'Análise médica', 'Segurança industrial']
    },
    {
      icon: '🧠',
      title: 'Automação Inteligente',
      description: 'RPA com capacidades cognitivas avançadas',
      applications: ['Processamento de documentos', 'Automação de processos', 'Extração de dados', 'Workflow inteligente']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Meteors number={40} className="absolute inset-0 z-10" />
        <div className="absolute inset-0 bg-black/80 z-5"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Inteligência </span>
            <span className="text-primary-blue">Artificial</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Potencialize seu negócio com soluções de IA que automatizam processos,
            geram insights e criam experiências personalizadas.
          </p>
        </div>
      </section>

      {/* Serviços de IA */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Soluções de IA
            </h2>
            <p className="text-xl text-gray-300">
              Transforme dados em inteligência acionável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <NeonGradientCard key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary-blue mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {service.description}
                </p>
                <div>
                  <h4 className="text-white font-semibold mb-3">Aplicações:</h4>
                  <ul className="space-y-2">
                    {service.applications.map((app, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Pronto para implementar IA no seu negócio?"
        subtitle="Nossa expertise em Inteligência Artificial pode revolucionar seus processos e resultados."
        primaryButtonText="Consulta em IA"
        secondaryButtonText="Ver Demonstração"
      />
    </Layout>
  );
};

export default AIPage;