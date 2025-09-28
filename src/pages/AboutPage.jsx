import React from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';
import Ripple from '../components/ui/ripple';
import Meteors from '../components/ui/meteors';

const AboutPage = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Foco no Cliente',
      description: 'Cada decisão é tomada pensando no sucesso do nosso parceiro'
    },
    {
      icon: '⚡',
      title: 'Agilidade',
      description: 'Entregas rápidas sem comprometer a qualidade'
    },
    {
      icon: '🔒',
      title: 'Segurança',
      description: 'Proteção de dados e compliance em primeiro lugar'
    },
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Sempre utilizando as tecnologias mais avançadas'
    },
    {
      icon: '🤝',
      title: 'Transparência',
      description: 'Comunicação clara e honesta em todas as etapas'
    },
    {
      icon: '📈',
      title: 'Crescimento',
      description: 'Construímos soluções que escalam com seu negócio'
    }
  ];

  const team = [
    {
      name: 'Alexandre Santos',
      role: 'CEO & Founder',
      expertise: 'Estratégia de Negócios e IA',
      description: '15+ anos em transformação digital e liderança de equipes'
    },
    {
      name: 'Maria Silva',
      role: 'CTO',
      expertise: 'Arquitetura de Software',
      description: 'Especialista em sistemas escaláveis e cloud computing'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Head of Security',
      expertise: 'Cybersegurança',
      description: 'Certified Ethical Hacker e especialista em compliance'
    },
    {
      name: 'Ana Costa',
      role: 'Lead AI Engineer',
      expertise: 'Machine Learning',
      description: 'PhD em IA e experiência em projetos Fortune 500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Ripple className="absolute inset-0" />
        <Meteors number={20} className="absolute inset-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Conheça a </span>
            <span className="text-primary-blue">IT Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Somos mais que uma empresa de tecnologia. Somos seu parceiro estratégico
            na jornada de transformação digital.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossa História
            </h2>
            <p className="text-xl text-primary-blue font-semibold">
              Nascemos da paixão por tecnologia e inovação
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                A IT Business foi fundada em 2020 com uma missão clara: democratizar
                o acesso à tecnologia de ponta para empresas de todos os tamanhos.
                Começamos como uma pequena equipe de desenvolvedores apaixonados e
                hoje somos reconhecidos como parceiros estratégicos de confiança.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Nossa jornada é marcada por mais de 200 projetos entregues com sucesso,
                parcerias duradouras e a confiança de startups até grandes corporações.
                Cada cliente é único, e nossa abordagem personalizada reflete isso.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-2">200+</div>
                  <div className="text-gray-400">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-2">95%</div>
                  <div className="text-gray-400">Taxa de Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-2">50+</div>
                  <div className="text-gray-400">Parcerias Ativas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-2">24/7</div>
                  <div className="text-gray-400">Suporte Técnico</div>
                </div>
              </div>
            </div>

            <NeonGradientCard className="p-8">
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Transformar ideias em soluções tecnológicas inovadoras, capacitando
                empresas a alcançar seu máximo potencial através de parcerias
                estratégicas duradouras.
              </p>

              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                Nossa Visão
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ser reconhecida como a principal parceira de tecnologia do Brasil,
                conhecida pela excelência, inovação e compromisso com o sucesso
                dos nossos clientes.
              </p>
            </NeonGradientCard>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-300">
              Os princípios que guiam cada decisão e ação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <NeonGradientCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-300">
              Profissionais especializados e apaixonados por tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <NeonGradientCard key={index} className="p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-blue to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-blue font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-400 mb-3">
                  {member.expertise}
                </p>
                <p className="text-sm text-gray-300">
                  {member.description}
                </p>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Vamos construir algo incrível juntos?"
        subtitle="Nossa equipe está pronta para transformar suas ideias em realidade. Entre em contato e descubra como podemos ser seu parceiro estratégico."
        primaryButtonText="Começar Parceria"
        secondaryButtonText="Agendar Reunião"
      />
    </Layout>
  );
};

export default AboutPage;