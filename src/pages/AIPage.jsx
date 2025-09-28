import React from 'react';
import Layout from '../components/shared/Layout';
import CTASection from '../components/shared/CTASection';
import NeonGradientCard from '../components/ui/neon-gradient-card';
import Meteors from '../components/ui/meteors';
import FlickeringGrid from '../components/ui/flickering-grid';

const AIPage = () => {
  const businessSolutions = [
    {
      title: 'Sistemas Sob Medida com IA',
      description: 'Desenvolvemos software que se adapta ao SEU negócio, não o contrário',
      benefits: ['Processos personalizados', 'Automação inteligente', 'Decisões em tempo real', 'Escalabilidade garantida']
    },
    {
      title: 'Análise Empresarial Preditiva',
      description: 'Antecipe tendências, otimize recursos e maximize lucros',
      benefits: ['Previsão de vendas', 'Gestão de estoque', 'Análise de risco', 'Oportunidades de mercado']
    },
    {
      title: 'Automação de Processos Críticos',
      description: 'Elimine tarefas repetitivas e foque no que gera valor',
      benefits: ['Redução de custos', 'Eliminação de erros', 'Produtividade 24/7', 'Compliance automático']
    },
    {
      title: 'Inteligência de Dados Corporativos',
      description: 'Transforme dados dispersos em insights estratégicos',
      benefits: ['Dashboards inteligentes', 'Relatórios automáticos', 'Alertas proativos', 'KPIs em tempo real']
    }
  ];

  const discoveryProcess = [
    {
      step: '01',
      title: 'Visita Presencial',
      description: 'Nosso especialista vai até sua empresa para entender profundamente seus processos',
      duration: '1-2 dias'
    },
    {
      step: '02',
      title: 'Mapeamento Completo',
      description: 'Analisamos fluxos, gargalos, oportunidades e definimos onde a IA pode gerar mais valor',
      duration: '3-5 dias'
    },
    {
      step: '03',
      title: 'Proposta Personalizada',
      description: 'Apresentamos solução específica com ROI projetado e cronograma de implementação',
      duration: '2-3 dias'
    },
    {
      step: '04',
      title: 'Desenvolvimento Ágil',
      description: 'Criamos o software com IA integrada, com entregas semanais e feedback contínuo',
      duration: '4-12 semanas'
    }
  ];

  const teamExpertise = [
    {
      role: 'Especialista em IA Empresarial',
      expertise: 'Identifica oportunidades e define estratégia de implementação'
    },
    {
      role: 'Engenheiro de Machine Learning',
      expertise: 'Desenvolve e treina modelos específicos para seu negócio'
    },
    {
      role: 'Arquiteto de Soluções',
      expertise: 'Projeta infraestrutura escalável e integração com sistemas existentes'
    },
    {
      role: 'Analista de Processos',
      expertise: 'Mapeia e otimiza fluxos de trabalho com inteligência artificial'
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
            <span className="text-white">IA Empresarial que </span>
            <span className="text-primary-blue">Transforma Negócios</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Sua startup rodando com parceria e sociedade com uma empresa de tecnologia sólida.
            Desenvolvemos software sob medida que se adapta ao seu negócio, não o contrário.
          </p>
          <div className="bg-primary-blue/10 p-6 rounded-lg border border-primary-blue/30 mb-8">
            <p className="text-primary-blue font-semibold text-lg">
              "Não fazemos você se adaptar ao que existe. Criamos o que você precisa."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Agendar Discovery Presencial
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
              Parceria Estratégica para Transformação Digital
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
                    Combinamos a agilidade de startup com a experiência e estrutura de uma empresa estabelecida.
                    Você tem o melhor dos dois mundos.
                  </p>
                </div>
                <div className="bg-primary-blue/10 p-6 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="text-white font-semibold mb-2">Software Sob Medida</h4>
                  <p className="text-gray-300">
                    Não vendemos soluções prontas. Desenvolvemos exatamente o que seu negócio precisa,
                    do jeito que funciona para você.
                  </p>
                </div>
                <div className="bg-primary-blue/10 p-6 rounded-lg border-l-4 border-primary-blue">
                  <h4 className="text-white font-semibold mb-2">IA no Coração do Sistema</h4>
                  <p className="text-gray-300">
                    Cada software que criamos nasce inteligente. IA não é um complemento,
                    é a base que torna seu negócio competitivo.
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
        </div>
      </section>

      {/* Soluções de IA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              IA Empresarial que Gera Resultados Reais
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Desenvolvemos sistemas inteligentes que se integram perfeitamente aos seus processos,
              automatizam decisões e multiplicam sua capacidade de crescimento.
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

      {/* Processo Discovery */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Discovery Presencial: Entendemos Seu Negócio a Fundo
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Nosso especialista vai até sua empresa para mapear processos, identificar oportunidades
              e projetar a solução de IA perfeita para suas necessidades específicas.
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
              Por Que Fazemos Discovery Presencial?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-primary-blue font-bold text-lg mb-3">Compreensão Real</h4>
                <p className="text-gray-300 text-sm">
                  Vemos como as coisas realmente funcionam, não como deveriam funcionar no papel.
                </p>
              </div>
              <div>
                <h4 className="text-primary-blue font-bold text-lg mb-3">Identificação Precisa</h4>
                <p className="text-gray-300 text-sm">
                  Encontramos gargalos e oportunidades que só são visíveis presencialmente.
                </p>
              </div>
              <div>
                <h4 className="text-primary-blue font-bold text-lg mb-3">Solução Certeira</h4>
                <p className="text-gray-300 text-sm">
                  Projetamos IA que resolve problemas reais, não teóricos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI e Garantias */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Investimento que se Paga
            </h2>
            <p className="text-xl text-gray-300">
              IA empresarial não é custo, é multiplicador de resultados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <NeonGradientCard className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-4">6-12</div>
              <h3 className="text-xl font-bold text-white mb-3">Meses para ROI</h3>
              <p className="text-gray-300">Tempo médio para o investimento se pagar completamente</p>
            </NeonGradientCard>

            <NeonGradientCard className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-4">40%</div>
              <h3 className="text-xl font-bold text-white mb-3">Redução de Custos</h3>
              <p className="text-gray-300">Economia média em processos automatizados com IA</p>
            </NeonGradientCard>

            <NeonGradientCard className="p-8 text-center">
              <div className="text-4xl font-bold text-primary-blue mb-4">24/7</div>
              <h3 className="text-xl font-bold text-white mb-3">Operação Contínua</h3>
              <p className="text-gray-300">Sistemas que trabalham sem parar, gerando valor constante</p>
            </NeonGradientCard>
          </div>

          <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-12 border border-primary-blue/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Nossa Garantia de Resultados
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-4xl mx-auto">
              Se em 90 dias você não ver melhoria mensurável nos seus processos ou resultados,
              devolvemos 100% do investimento. Essa é nossa confiança na IA que desenvolvemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Agendar Discovery Gratuito
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Calcular ROI do Meu Negócio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Pronto para ter IA trabalhando no seu negócio?"
        subtitle="Nossa equipe de especialistas vai até sua empresa para mapear oportunidades e projetar a solução perfeita. Discovery presencial sem compromisso."
        primaryButtonText="Agendar Visita do Especialista"
        secondaryButtonText="Falar com Consultor"
      />
    </Layout>
  );
};

export default AIPage;