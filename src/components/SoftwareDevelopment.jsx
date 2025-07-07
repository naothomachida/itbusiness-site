import React from 'react';

const SoftwareDevelopment = () => {
  const phases = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Análise de Sistema',
      description: 'Onde é feito o levantamento de requisitos e as regras de negócio são entendidas profundamente.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Arquitetura & UX',
      description: 'Criação da arquitetura técnica e experiência do usuário com foco na usabilidade.',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Development',
      subtitle: 'Desenvolvimento Ágil',
      description: 'Implementação utilizando metodologias ágeis com entregas incrementais.',
      icon: '⚡'
    },
    {
      number: '04',
      title: 'Deployment',
      subtitle: 'Entrega & Otimização',
      description: 'Deploy seguro e otimização contínua baseada em feedback real de usuários.',
      icon: '🚀'
    }
  ];

  return (
    <section id="software" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Desenvolvimento de </span>
            <span className="text-primary-yellow">Software</span>
          </h2>
          <p className="text-xl text-primary-yellow font-semibold mb-4">
            Metodologia Ágil e Foco em Valor
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Processos bem definidos em 4 fases, orientados a resultados e eficiência.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-yellow/30"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-800 p-6 rounded-xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300">
                    <div className="mb-4">
                      <div className="mb-3">
                        <span className="text-primary-yellow font-bold text-sm">{phase.number}</span>
                        <h3 className="text-white text-xl font-bold">{phase.title}</h3>
                        <p className="text-primary-yellow text-sm font-semibold">{phase.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-yellow rounded-full border-4 border-black"></div>
              </div>
            ))}
          </div>
        </div>

        {/* MVP Methodology */}
        <div className="bg-gradient-to-br from-primary-yellow/10 to-primary-yellow/5 rounded-2xl p-8 border border-primary-yellow/30 mb-16">
          <h3 className="text-3xl font-bold text-primary-yellow mb-6 text-center">
            Metodologia MVP (Mínima Versão Possível)
          </h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed text-center max-w-4xl mx-auto">
            Focamos na entrega de uma versão inicial com as funções essenciais, 
            <span className="text-primary-yellow font-semibold"> minimizando investimentos</span> e 
            <span className="text-primary-yellow font-semibold"> acelerando o tempo de execução</span>. 
            Nossa abordagem escalável permite crescimento orgânico conforme seu projeto ganha tração no mercado.
          </p>
          
          <div className="bg-black/50 p-6 rounded-lg border-l-4 border-primary-yellow mb-8">
            <p className="text-gray-300 italic text-lg">
              "Se você não sente vergonha da primeira versão do seu produto, então ele foi lançado depois da hora."
            </p>
            <p className="text-primary-yellow font-semibold mt-3 text-right">
              - Reid Hoffman, Criador do LinkedIn
            </p>
          </div>

          {/* MVP Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-full"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Entrega Rápida</h4>
              <p className="text-gray-300 text-sm">Lançamento em 30-90 dias com funcionalidades essenciais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-lg"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Investimento Otimizado</h4>
              <p className="text-gray-300 text-sm">Validação de mercado com menor investimento inicial</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-full"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Escalabilidade</h4>
              <p className="text-gray-300 text-sm">Evolução contínua baseada no feedback real dos usuários</p>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            Planos de <span className="text-primary-yellow">Desenvolvimento</span>
          </h3>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Duas opções estratégicas para atender desde projetos iniciais até soluções corporativas complexas
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Initial Project Plan */}
            <div className="bg-gradient-to-br from-primary-yellow/20 to-primary-yellow/5 p-8 rounded-xl border-2 border-primary-yellow/40 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-yellow text-black px-4 py-1 rounded-full text-xs font-bold">
                PROJETO INICIAL
              </div>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-primary-yellow mb-2">Projeto Inicial</h4>
                <div className="mb-2">
                  <div className="text-sm text-gray-400 mb-1">A partir de</div>
                  <div className="text-4xl font-bold text-white">R$ 4.700</div>
                </div>
                <p className="text-gray-400">Solução de entrada para startups e pequenas empresas</p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800 p-8 rounded-xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-primary-yellow mb-2">Enterprise</h4>
                <div className="mb-2">
                  <div className="text-sm text-gray-400 mb-1">A partir de</div>
                  <div className="text-4xl font-bold text-white">R$ 320.000</div>
                </div>
                <p className="text-gray-400">Soluções Corporativas Complexas</p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Todos os planos incluem: Suporte técnico, Documentação completa, Treinamento da equipe
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span className="flex items-center">
                <span className="text-primary-yellow mr-2">✓</span>
                Suporte especializado
              </span>
              <span className="flex items-center">
                <span className="text-primary-yellow mr-2">✓</span>
                Pagamento parcelado disponível
              </span>
              <span className="flex items-center">
                <span className="text-primary-yellow mr-2">✓</span>
                Acompanhamento pós-entrega
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;