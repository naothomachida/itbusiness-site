import React, { useEffect } from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';

const StartupsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businessResults = [
    {
      title: 'Validação Rápida de Mercado',
      description: 'Desenvolva e teste suas hipóteses de negócio em semanas, não meses, reduzindo custos e riscos'
    },
    {
      title: 'Preparação para Investimento',
      description: 'Estruture sua startup com as métricas e documentação que investidores realmente valorizam'
    },
    {
      title: 'Escalabilidade Desde o Início',
      description: 'Construa uma base tecnológica que suporte o crescimento exponencial do seu negócio'
    },
    {
      title: 'Time-to-Market Otimizado',
      description: 'Lance mais rápido que a concorrência e capture market share com estratégia inteligente'
    }
  ];

  const discoverySteps = [
    {
      step: '01',
      title: 'Análise de Viabilidade',
      description: 'Avaliamos o potencial de mercado, modelo de negócio e viabilidade técnica da sua ideia',
      duration: '1 semana'
    },
    {
      step: '02',
      title: 'MVP Strategy',
      description: 'Definimos o escopo mínimo viável para validação rápida e eficiente no mercado',
      duration: '1 semana'
    },
    {
      step: '03',
      title: 'Roadmap de Crescimento',
      description: 'Criamos um plano estruturado para evolução do produto e captação de recursos',
      duration: '1 semana'
    },
    {
      step: '04',
      title: 'Execução e Mentoria',
      description: 'Desenvolvemos o MVP e fornecemos mentoria contínua para as próximas fases',
      duration: '4-8 semanas'
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
            Transforme sua ideia em um negócio escalável e pronto para atrair investidores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Análise Gratuita da Ideia
            </button>
            <button className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Falar com Mentor
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que acelerar com a <span className="text-primary-blue">Terragon Labs</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Não é apenas sobre construir um produto. É sobre construir um negócio que cresce, escala e atrai investimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessResults.map((result, index) => (
              <NeonGradientCard key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-primary-blue mb-4">
                  {result.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {result.description}
                </p>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nosso Processo de <span className="text-primary-blue">Aceleração</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma metodologia comprovada para transformar ideias em startups investíveis em tempo recorde.
            </p>
          </div>

          <div className="space-y-8">
            {discoverySteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-blue flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <span className="text-primary-blue font-semibold">Duração: {step.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para uma <span className="text-primary-blue">Jornada de Aceleração</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Não aceleramos apenas produtos. Aceleramos sonhos, ambições e o futuro do empreendedorismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Iniciar Aceleração
            </button>
            <button className="border border-gray-600 text-gray-300 hover:border-primary-blue hover:text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Conhecer Cases de Sucesso
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Sua startup começa com uma conversa conosco"
        subtitle="Vamos descobrir juntos como acelerar sua ideia e construir o negócio dos seus sonhos."
        primaryButtonText="Agendar Mentoria"
        secondaryButtonText="WhatsApp Direto"
      />
    </Layout>
  );
};

export default StartupsPage;