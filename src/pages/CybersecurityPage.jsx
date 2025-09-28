import React, { useEffect } from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';

const CybersecurityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businessResults = [
    {
      title: 'Redução de Riscos',
      description: 'Identifique e mitigue vulnerabilidades antes que se tornem problemas reais para seu negócio'
    },
    {
      title: 'Conformidade Regulatória',
      description: 'Garanta adequação à LGPD e outras normas, evitando multas e protegendo sua reputação'
    },
    {
      title: 'Continuidade Operacional',
      description: 'Mantenha suas operações seguras e funcionando, mesmo diante de ameaças cibernéticas'
    },
    {
      title: 'Confiança do Cliente',
      description: 'Demonstre proteção de dados e fortaleça a confiança dos seus clientes na sua marca'
    }
  ];

  const discoverySteps = [
    {
      step: '01',
      title: 'Diagnóstico de Segurança',
      description: 'Mapeamos sua infraestrutura atual e identificamos pontos de vulnerabilidade',
      duration: '1-2 semanas'
    },
    {
      step: '02',
      title: 'Análise de Riscos',
      description: 'Avaliamos os riscos específicos do seu setor e modelamos cenários de ameaças',
      duration: '1 semana'
    },
    {
      step: '03',
      title: 'Estratégia Personalizada',
      description: 'Desenvolvemos um plano de segurança alinhado aos seus objetivos de negócio',
      duration: '1 semana'
    },
    {
      step: '04',
      title: 'Implementação Gradual',
      description: 'Executamos a estratégia de forma escalonada, minimizando impactos operacionais',
      duration: '4-12 semanas'
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
            Proteja seu negócio e construa confiança com seus clientes através de uma segurança robusta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Diagnóstico Gratuito
            </button>
            <button className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Agendar Conversa
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que investir em <span className="text-primary-blue">Cybersegurança</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Não é apenas sobre proteção técnica. É sobre garantir a continuidade e crescimento do seu negócio.
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
              Nosso Processo de <span className="text-primary-blue">Descoberta</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma abordagem estruturada para entender suas necessidades e construir a melhor estratégia de segurança.
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
            Pronto para uma <span className="text-primary-blue">Parceria Estratégica</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Não vendemos apenas segurança. Construímos uma parceria para proteger e impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Iniciar Diagnóstico
            </button>
            <button className="border border-gray-600 text-gray-300 hover:border-primary-blue hover:text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300">
              Conhecer Nossa Abordagem
            </button>
          </div>
        </div>
      </section>

      <CTASection
        title="Sua segurança começa com uma conversa"
        subtitle="Vamos descobrir juntos como proteger e acelerar o crescimento do seu negócio."
        primaryButtonText="Agendar Conversa"
        secondaryButtonText="WhatsApp Direto"
      />
    </Layout>
  );
};

export default CybersecurityPage;