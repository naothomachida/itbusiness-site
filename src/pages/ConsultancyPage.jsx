import React from 'react';
import Layout from '../components/shared/Layout';
import SEOHead from '../components/shared/SEOHead';

const ConsultancyPage = () => {
  const services = [
    {
      title: "Transformação Digital",
      description: "Modernizamos seus processos e sistemas para a era digital",
      icon: (
        <svg className="w-12 h-12 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      ),
      benefits: ["Aumento da eficiência", "Redução de custos", "Melhoria na experiência do cliente"]
    },
    {
      title: "Estratégia de TI",
      description: "Planejamento estratégico de tecnologia alinhado aos seus objetivos",
      icon: (
        <svg className="w-12 h-12 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      benefits: ["ROI maximizado", "Alinhamento com negócio", "Roadmap tecnológico"]
    },
    {
      title: "Análise de Processos",
      description: "Identificamos gargalos e oportunidades de otimização",
      icon: (
        <svg className="w-12 h-12 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      benefits: ["Processos otimizados", "Produtividade aumentada", "Qualidade melhorada"]
    },
    {
      title: "Implementação de Soluções",
      description: "Executamos projetos de tecnologia do planejamento ao go-live",
      icon: (
        <svg className="w-12 h-12 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      benefits: ["Execução especializada", "Gestão de riscos", "Entrega no prazo"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Diagnóstico",
      description: "Análise completa da situação atual da sua empresa"
    },
    {
      step: "02",
      title: "Planejamento",
      description: "Desenvolvimento de estratégia personalizada"
    },
    {
      step: "03",
      title: "Execução",
      description: "Implementação das soluções com acompanhamento"
    },
    {
      step: "04",
      title: "Otimização",
      description: "Ajustes e melhorias contínuas"
    }
  ];

  return (
    <>
      <SEOHead
        title="Consultoria Digital - IT Business"
        description="Transforme sua empresa com nossa consultoria digital especializada. Estratégia de TI, transformação digital e implementação de soluções tecnológicas."
        keywords="consultoria digital, transformação digital, estratégia de TI, consultoria tecnológica, Sorocaba"
      />
      <Layout>
        <div className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-gray-900 to-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Consultoria <span className="text-primary-blue">Digital</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Transformamos sua empresa através da tecnologia. Nossa consultoria especializada
                  identifica oportunidades e implementa soluções que geram resultados reais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="btn-primary"
                  >
                    Solicitar Diagnóstico
                  </a>
                  <a
                    href="#servicos"
                    className="btn-secondary"
                  >
                    Nossos Serviços
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="servicos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nossos Serviços de Consultoria
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Oferecemos soluções completas para acelerar a transformação digital da sua empresa
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      {service.icon}
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nosso Processo de Consultoria
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Uma metodologia comprovada que garante resultados efetivos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {process.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-blue text-white rounded-full text-2xl font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Por que Escolher a IT Business?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Nossa experiência e metodologia garantem o sucesso do seu projeto
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Experiência Comprovada</h3>
                  <p className="text-gray-300">
                    Anos de experiência em transformação digital e consultoria empresarial
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Resultados Garantidos</h3>
                  <p className="text-gray-300">
                    Focamos em resultados mensuráveis e ROI positivo para sua empresa
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.002 2.002 0 0 0 18 7h-4c-.8 0-1.54.37-2 1l-3 4v6h2v7h1.5v-7H15v7h5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Suporte Completo</h3>
                  <p className="text-gray-300">
                    Acompanhamento desde o diagnóstico até a implementação e otimização
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Transformar sua Empresa?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como nossa consultoria digital
                pode acelerar o crescimento do seu negócio.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Solicitar Consultoria Gratuita
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ConsultancyPage;