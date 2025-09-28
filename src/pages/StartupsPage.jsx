import React, { useEffect } from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';
import Meteors from '../components/ui/meteors';
import FlickeringGrid from '../components/ui/flickering-grid';

const StartupsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businessSolutions = [
    {
      title: 'MVP em Tempo Recorde',
      description: 'Desenvolvemos seu produto mínimo viável em 4-6 semanas para validação rápida no mercado',
      benefits: ['Validação acelerada', 'Feedback real de usuários', 'Prototipagem funcional', 'Testes de mercado']
    },
    {
      title: 'Pitch Deck Técnico Profissional',
      description: 'Criamos apresentações que conquistam investidores com dados sólidos e visão técnica clara',
      benefits: ['Métricas convincentes', 'Roadmap detalhado', 'Análise competitiva', 'Projeções realistas']
    },
    {
      title: 'Arquitetura Escalável',
      description: 'Construímos a base tecnológica preparada para crescimento exponencial desde o primeiro dia',
      benefits: ['Infraestrutura elástica', 'Integração facilitada', 'Performance otimizada', 'Segurança empresarial']
    },
    {
      title: 'Mentoria Empresarial Contínua',
      description: 'Acompanhamento estratégico para tomada de decisões técnicas e de negócio assertivas',
      benefits: ['Decisões orientadas', 'Networking qualificado', 'Experiência aplicada', 'Crescimento acelerado']
    }
  ];

  const discoveryProcess = [
    {
      step: '01',
      title: 'Análise de Mercado',
      description: 'Avaliamos o potencial da sua ideia, concorrência e oportunidades de diferenciação no mercado',
      duration: '3-5 dias'
    },
    {
      step: '02',
      title: 'MVP Definition',
      description: 'Definimos o escopo mínimo viável com máximo valor para validação rápida e eficiente',
      duration: '2-3 dias'
    },
    {
      step: '03',
      title: 'Tech Strategy',
      description: 'Projetamos arquitetura tecnológica escalável e stack ideal para seu modelo de negócio',
      duration: '3-4 dias'
    },
    {
      step: '04',
      title: 'Desenvolvimento Ágil',
      description: 'Executamos o desenvolvimento com entregas semanais e feedback contínuo do mercado',
      duration: '4-12 semanas'
    }
  ];

  const teamExpertise = [
    {
      role: 'Product Owner Estratégico',
      expertise: 'Define roadmap de produto baseado em métricas e feedback do mercado'
    },
    {
      role: 'Tech Lead Sênior',
      expertise: 'Arquiteta soluções escaláveis e lidera desenvolvimento técnico'
    },
    {
      role: 'Business Mentor',
      expertise: 'Orienta decisões estratégicas e conecta com investidores'
    },
    {
      role: 'UX/UI Specialist',
      expertise: 'Cria experiências que convertem visitantes em usuários engajados'
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Sociedade Tecnológica',
      description: 'Sua startup ganha um sócio tecnológico com experiência comprovada em escalar negócios'
    },
    {
      title: 'Investimento Compartilhado',
      description: 'Dividimos riscos e investimentos, acelerando desenvolvimento sem comprometer seu equity'
    },
    {
      title: 'Network de Investidores',
      description: 'Acesso direto à nossa rede de investidores e mentores do ecossistema de inovação'
    },
    {
      title: 'Suporte Técnico Contínuo',
      description: 'Equipe técnica dedicada disponível 24/7 para evolução e manutenção da plataforma'
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
            <span className="text-white">Aceleração de Startups que </span>
            <span className="text-primary-blue">Conquistam Investidores</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Sua startup rodando com parceria e sociedade com IT BUSINESS.
            Transformamos ideias em negócios escaláveis e prontos para investimento.
          </p>
          <div className="bg-primary-blue/10 p-6 rounded-lg border border-primary-blue/30 mb-8">
            <p className="text-primary-blue font-semibold text-lg">
              "Não apenas desenvolvemos seu produto. Construímos seu sucesso como parceiros."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Agendar Análise da Ideia
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Conhecer Nossa Equipe
            </button>
          </div>
        </div>
      </section>

      {/* Parceria e Sociedade */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Parceria Estratégica para Transformação de Ideias
            </h2>
            <p className="text-xl text-gray-300">
              Sua startup ganha a solidez de uma empresa de tecnologia consolidada
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                Por Que Escolher Nossa Parceria?
              </h3>
              <div className="space-y-6">
                <div className="bg-primary-blue/10 p-6 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="text-white font-semibold mb-2">Sociedade Tecnológica Sólida</h4>
                  <p className="text-gray-300">
                    Combinamos a agilidade empreendedora com a experiência e estrutura da IT BUSINESS.
                    Você tem o melhor dos dois mundos para acelerar seu crescimento.
                  </p>
                </div>
                <div className="bg-primary-blue/10 p-6 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="text-white font-semibold mb-2">MVP Sob Medida</h4>
                  <p className="text-gray-300">
                    Não seguimos templates. Desenvolvemos exatamente o que seu mercado precisa,
                    do jeito que gera mais valor para seus usuários.
                  </p>
                </div>
                <div className="bg-primary-blue/10 p-6 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="text-white font-semibold mb-2">Investimento Compartilhado</h4>
                  <p className="text-gray-300">
                    Dividimos riscos e recursos. Sua startup cresce mais rápido sem comprometer
                    equity desnecessariamente com desenvolvimento.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-8 border border-primary-blue/30">
              <h4 className="text-2xl font-bold text-white mb-6 text-center">
                Nossa Equipe de Especialistas
              </h4>
              <div className="space-y-4">
                {teamExpertise.map((member, index) => (
                  <div key={index} className="bg-black/30 p-4 rounded-lg">
                    <h5 className="text-primary-blue font-semibold mb-2">{member.role}</h5>
                    <p className="text-gray-300 text-sm">{member.expertise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <NeonGradientCard key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-bold text-primary-blue mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Soluções para Startups */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Aceleração que Gera Resultados Reais
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Desenvolvemos startups completas que se integram perfeitamente ao mercado,
              conquistam usuários e multiplicam sua capacidade de crescimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessSolutions.map((solution, index) => (
              <NeonGradientCard key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-primary-blue mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {solution.description}
                </p>
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefícios:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Aceleração */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Metodologia de Aceleração: Do Conceito ao Mercado
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Nossa abordagem comprovada transforma ideias em startups investíveis
              com metodologia ágil e foco em resultados mensuráveis.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {discoveryProcess.map((step, index) => (
              <NeonGradientCard key={index} className="p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-primary-blue mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {step.description}
                </p>
                <div className="bg-primary-blue/20 px-3 py-1 rounded-full">
                  <span className="text-primary-blue font-semibold text-xs">
                    {step.duration}
                  </span>
                </div>
              </NeonGradientCard>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-12 border border-primary-blue/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Por Que Nossa Metodologia Funciona?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-primary-blue font-bold text-lg mb-3">Validação Real</h4>
                <p className="text-gray-300 text-sm">
                  Testamos com usuários reais desde o primeiro protótipo, não apenas teorias.
                </p>
              </div>
              <div>
                <h4 className="text-primary-blue font-bold text-lg mb-3">Agilidade Extrema</h4>
                <p className="text-gray-300 text-sm">
                  Entregas semanais permitem ajustes rápidos baseados em feedback do mercado.
                </p>
              </div>
              <div>
                <h4 className="text-primary-blue font-bold text-lg mb-3">Foco em Tração</h4>
                <p className="text-gray-300 text-sm">
                  Cada feature desenvolvida tem objetivo claro de gerar usuários e receita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investimento e ROI */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Investimento Inteligente em Crescimento
            </h2>
            <p className="text-xl text-gray-300">
              Aceleração de startups não é custo, é investimento em seu futuro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <NeonGradientCard className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-4">4-8</div>
              <h3 className="text-xl font-bold text-white mb-3">Semanas para MVP</h3>
              <p className="text-gray-300">Tempo médio para ter produto funcional no mercado</p>
            </NeonGradientCard>

            <NeonGradientCard className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-4">70%</div>
              <h3 className="text-xl font-bold text-white mb-3">Redução de Custos</h3>
              <p className="text-gray-300">Economia comparada a desenvolvimento tradicional</p>
            </NeonGradientCard>

            <NeonGradientCard className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-4">24/7</div>
              <h3 className="text-xl font-bold text-white mb-3">Suporte Contínuo</h3>
              <p className="text-gray-300">Equipe disponível para evolução e manutenção</p>
            </NeonGradientCard>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-12 border border-primary-blue/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Nossa Garantia de Sucesso
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto">
              Se em 90 dias seu MVP não estiver atraindo usuários ou validando hipóteses,
              ajustamos a estratégia sem custo adicional. Nosso sucesso está conectado ao seu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Agendar Análise Gratuita
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Calcular Investimento
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Startups que Conquistaram o Mercado
            </h2>
            <p className="text-xl text-gray-300">
              Conheça algumas startups que aceleramos e hoje são referência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <NeonGradientCard className="p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-blue mb-2">+200%</div>
                <h4 className="text-white font-semibold">Crescimento em 6 meses</h4>
              </div>
              <p className="text-gray-300 text-center text-sm">
                Startup de logística que automatizou operações e triplicou a base de clientes
              </p>
            </NeonGradientCard>

            <NeonGradientCard className="p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-blue mb-2">R$ 2M</div>
                <h4 className="text-white font-semibold">Rodada seed levantada</h4>
              </div>
              <p className="text-gray-300 text-center text-sm">
                Fintech que desenvolvemos conseguiu investimento em 4 meses de operação
              </p>
            </NeonGradientCard>

            <NeonGradientCard className="p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-blue mb-2">50K</div>
                <h4 className="text-white font-semibold">Usuários ativos</h4>
              </div>
              <p className="text-gray-300 text-center text-sm">
                Plataforma educacional que atingiu 50 mil usuários em 8 meses
              </p>
            </NeonGradientCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Pronto para acelerar sua startup?"
        subtitle="Nossa equipe de especialistas vai analisar sua ideia e projetar o caminho mais rápido para o mercado. Análise gratuita e sem compromisso."
        primaryButtonText="Agendar Análise da Ideia"
        secondaryButtonText="Falar com Especialista"
      />
    </Layout>
  );
};

export default StartupsPage;