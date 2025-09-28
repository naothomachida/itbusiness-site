import React from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';
import FlickeringGrid from '../components/ui/flickering-grid';
import Meteors from '../components/ui/meteors';

const SoftwarePage = () => {
  const services = [
    {
      icon: '🚀',
      title: 'MVP Development',
      description: 'Validação rápida de ideias com produtos mínimos viáveis',
      features: ['Prototipagem rápida', 'Validação de mercado', 'Feedback contínuo', 'Iteração ágil']
    },
    {
      icon: '📱',
      title: 'Aplicativos Mobile',
      description: 'Apps nativos e híbridos para iOS e Android',
      features: ['React Native', 'Flutter', 'Progressive Web Apps', 'App Store Publishing']
    },
    {
      icon: '💻',
      title: 'Sistemas Web',
      description: 'Plataformas web escaláveis e responsivas',
      features: ['React/Vue.js', 'Node.js', 'Cloud Architecture', 'API Development']
    },
    {
      icon: '🏢',
      title: 'Software Empresarial',
      description: 'Soluções corporativas sob medida',
      features: ['ERP/CRM', 'Integração de sistemas', 'Business Intelligence', 'Automação de processos']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Migração e otimização para nuvem',
      features: ['AWS/Azure/GCP', 'Microserviços', 'DevOps', 'Monitoramento 24/7']
    },
    {
      icon: '🔧',
      title: 'Modernização',
      description: 'Atualização de sistemas legados',
      features: ['Refatoração de código', 'Migração de dados', 'Novas tecnologias', 'Performance']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Kubernetes', category: 'DevOps', icon: '⚙️' },
    { name: 'GraphQL', category: 'API', icon: '📊' },
    { name: 'Flutter', category: 'Mobile', icon: '📱' }
  ];

  const process = [
    {
      step: '01',
      title: 'Descoberta',
      description: 'Entendemos seu negócio, objetivos e desafios através de workshops e análises detalhadas.',
      duration: '1-2 semanas'
    },
    {
      step: '02',
      title: 'Planejamento',
      description: 'Criamos roadmap detalhado, arquitetura do sistema e definimos tecnologias.',
      duration: '1 semana'
    },
    {
      step: '03',
      title: 'Desenvolvimento',
      description: 'Desenvolvimento ágil com entregas semanais e feedback contínuo.',
      duration: '4-12 semanas'
    },
    {
      step: '04',
      title: 'Testes',
      description: 'Testes automatizados, validação de qualidade e preparação para produção.',
      duration: '1-2 semanas'
    },
    {
      step: '05',
      title: 'Deploy',
      description: 'Lançamento em produção com monitoramento e suporte completo.',
      duration: '1 semana'
    },
    {
      step: '06',
      title: 'Evolução',
      description: 'Suporte contínuo, melhorias e novas funcionalidades conforme necessário.',
      duration: 'Contínuo'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce B2B',
      client: 'TechCorp Solutions',
      challenge: 'Modernizar plataforma legada de vendas',
      solution: 'Sistema completo com React, Node.js e AWS',
      results: ['300% aumento nas vendas', '50% redução no tempo de resposta', '99.9% uptime']
    },
    {
      title: 'App de Delivery',
      client: 'FoodFast',
      challenge: 'Criar MVP para validação de mercado',
      solution: 'App React Native com backend escalável',
      results: ['10k downloads em 30 dias', 'Investimento de R$ 2M', 'Expansão para 5 cidades']
    },
    {
      title: 'Sistema de Gestão',
      client: 'MedClinic',
      challenge: 'Digitalizar processos clínicos',
      solution: 'Plataforma web com IA para diagnósticos',
      results: ['80% redução em papel', '40% mais eficiência', 'Conformidade LGPD']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={6}
          color="#4169E1"
          flickerChance={0.1}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/80 z-5"></div>
        <Meteors number={30} className="absolute inset-0 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Desenvolvimento de </span>
            <span className="text-primary-blue">Software</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transformamos suas ideias em soluções tecnológicas robustas, escaláveis e inovadoras.
            Do MVP ao produto final, estamos com você em cada etapa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">200+</div>
              <div className="text-gray-400">Projetos Entregues</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">2-8</div>
              <div className="text-gray-400">Semanas para MVP</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-blue mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Garantido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-300">
              Cobertura completa para todas suas necessidades de software
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <NeonGradientCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Tecnologias que Dominamos
            </h2>
            <p className="text-xl text-gray-300">
              Stack moderno para projetos de alta performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <NeonGradientCard key={index} className="p-4 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-primary-blue">
                  {tech.category}
                </p>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-300">
              Metodologia ágil e transparente para resultados consistentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <NeonGradientCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary-blue mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {step.description}
                </p>
                <div className="text-sm text-primary-blue font-semibold">
                  Duração: {step.duration}
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Cases de Sucesso
            </h2>
            <p className="text-xl text-gray-300">
              Projetos que transformaram negócios
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <NeonGradientCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-primary-blue mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-4 font-semibold">
                  {study.client}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Desafio:</h4>
                  <p className="text-gray-300 text-sm">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solução:</h4>
                  <p className="text-gray-300 text-sm">
                    {study.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Resultados:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
                        {result}
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
        title="Pronto para transformar sua ideia em realidade?"
        subtitle="Nossa equipe de especialistas está pronta para desenvolver a solução perfeita para seu negócio. Vamos começar hoje mesmo!"
        primaryButtonText="Iniciar Projeto"
        secondaryButtonText="Ver Mais Cases"
      />
    </Layout>
  );
};

export default SoftwarePage;