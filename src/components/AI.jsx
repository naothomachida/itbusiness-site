import React from 'react';

const AI = () => {
  const businessBenefits = [
    {
      title: 'Redução de Custos Operacionais',
      description: 'IA automatiza tarefas repetitivas, reduzindo custos de mão de obra em até 40% e eliminando erros humanos.'
    },
    {
      title: 'Aumento da Receita',
      description: 'Análise preditiva identifica oportunidades de venda, personalizando ofertas e aumentando conversões em 35%.'
    },
    {
      title: 'Decisões Estratégicas Rápidas',
      description: 'Dashboards inteligentes processam dados em tempo real, permitindo decisões baseadas em dados, não intuição.'
    },
    {
      title: 'Vantagem Competitiva',
      description: 'Empresas com IA superam concorrentes em 73% dos casos, oferecendo serviços mais rápidos e personalizados.'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Atendimento ao Cliente 24/7',
      impact: 'Chatbots inteligentes reduzem tempo de resposta em 90%',
      roi: 'ROI de 300% em 12 meses'
    },
    {
      title: 'Previsão de Demanda',
      impact: 'Algoritmos preveem vendas com 95% de precisão',
      roi: 'Redução de 25% em estoque parado'
    },
    {
      title: 'Detecção de Fraudes',
      impact: 'IA identifica padrões suspeitos em tempo real',
      roi: 'Economia de R$ 50mil+ em perdas'
    },
    {
      title: 'Otimização de Preços',
      impact: 'Precificação dinâmica baseada em demanda e concorrência',
      roi: 'Aumento de 15% na margem de lucro'
    }
  ];

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Software com </span>
            <span className="text-primary-blue">IA no Coração</span>
          </h2>
          <p className="text-xl text-primary-blue font-semibold mb-4">
            Desenvolvemos Software Inteligente que Multiplica Resultados
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Enquanto seus concorrentes ainda fazem planilhas, você terá sistemas que pensam,
            aprendem e tomam decisões sozinhos. É a diferença entre liderar o mercado ou ficar para trás.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Por Que Empresários Inteligentes Escolhem IA?
            </h3>

            <div className="space-y-6">
              <div className="bg-primary-blue/10 p-4 rounded-lg border-l-4 border-primary-blue">
                <p className="text-primary-blue font-semibold text-lg mb-2">
                  "Enquanto você dorme, sua IA trabalha"
                </p>
                <p className="text-gray-300">
                  Sistemas que operam 24/7, processam pedidos, respondem clientes e otimizam operações
                  sem descanso, férias ou aumentos salariais.
                </p>
              </div>

              <div className="bg-primary-blue/10 p-4 rounded-lg border-l-4 border-primary-blue">
                <p className="text-primary-blue font-semibold text-lg mb-2">
                  "Decisões baseadas em dados, não achismos"
                </p>
                <p className="text-gray-300">
                  Pare de tomar decisões no escuro. IA analisa padrões que humanos não conseguem ver,
                  prevendo tendências e oportunidades antes da concorrência.
                </p>
              </div>

              <div className="bg-primary-blue/10 p-4 rounded-lg border-l-4 border-primary-blue">
                <p className="text-primary-blue font-semibold text-lg mb-2">
                  "Escala sem dor de cabeça"
                </p>
                <p className="text-gray-300">
                  Atenda 10x mais clientes sem contratar 10x mais funcionários.
                  IA cresce junto com seu negócio, sem aumentar sua folha de pagamento.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="btn-primary text-lg px-8 py-4">
                Quero IA no Meu Negócio
              </button>
            </div>
          </div>

          {/* Neural Network Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-8 border border-primary-blue/30">
              <svg viewBox="0 0 400 300" className="w-full h-64">
                {/* Neural Network Nodes */}
                <g>
                  {/* Input Layer */}
                  <circle cx="50" cy="75" r="8" fill="#4169E1" opacity="0.8"/>
                  <circle cx="50" cy="125" r="8" fill="#4169E1" opacity="0.8"/>
                  <circle cx="50" cy="175" r="8" fill="#4169E1" opacity="0.8"/>
                  <circle cx="50" cy="225" r="8" fill="#4169E1" opacity="0.8"/>
                  
                  {/* Hidden Layer 1 */}
                  <circle cx="150" cy="60" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="150" cy="100" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="150" cy="140" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="150" cy="180" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="150" cy="220" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="150" cy="260" r="8" fill="#4169E1" opacity="0.6"/>
                  
                  {/* Hidden Layer 2 */}
                  <circle cx="250" cy="75" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="250" cy="125" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="250" cy="175" r="8" fill="#4169E1" opacity="0.6"/>
                  <circle cx="250" cy="225" r="8" fill="#4169E1" opacity="0.6"/>
                  
                  {/* Output Layer */}
                  <circle cx="350" cy="125" r="8" fill="#4169E1" opacity="0.8"/>
                  <circle cx="350" cy="175" r="8" fill="#4169E1" opacity="0.8"/>
                  
                  {/* Connections */}
                  <g stroke="#4169E1" strokeWidth="1" opacity="0.3">
                    {/* Input to Hidden 1 */}
                    <line x1="50" y1="75" x2="150" y2="60"/>
                    <line x1="50" y1="75" x2="150" y2="100"/>
                    <line x1="50" y1="125" x2="150" y2="140"/>
                    <line x1="50" y1="175" x2="150" y2="180"/>
                    <line x1="50" y1="225" x2="150" y2="220"/>
                    
                    {/* Hidden 1 to Hidden 2 */}
                    <line x1="150" y1="100" x2="250" y2="75"/>
                    <line x1="150" y1="140" x2="250" y2="125"/>
                    <line x1="150" y1="180" x2="250" y2="175"/>
                    <line x1="150" y1="220" x2="250" y2="225"/>
                    
                    {/* Hidden 2 to Output */}
                    <line x1="250" y1="125" x2="350" y2="125"/>
                    <line x1="250" y1="175" x2="350" y2="175"/>
                  </g>
                </g>
              </svg>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-blue-light/20 to-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tl from-cyan-500/10 to-primary-blue-light/15 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Business Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {businessBenefits.map((benefit, index) => (
            <div key={index} className="group bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 p-8 rounded-xl border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-primary-blue font-bold text-xl mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-12 border border-primary-blue/30 mb-16">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            IA que Gera Resultados Reais para Seu Negócio
          </h3>
          <p className="text-gray-300 text-center mb-12 max-w-4xl mx-auto text-lg">
            Não vendemos tecnologia pela tecnologia. Desenvolvemos soluções de IA que resolvem problemas reais
            e geram retorno financeiro comprovado para empresários como você.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-xl border border-primary-blue/20 text-center">
                <h4 className="text-primary-blue font-bold text-lg mb-3">
                  {capability.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {capability.impact}
                </p>
                <div className="bg-primary-blue/20 px-4 py-2 rounded-lg">
                  <span className="text-primary-blue font-semibold text-sm">
                    {capability.roi}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose AI Now */}
        <div className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-2xl p-12 border border-primary-blue/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            O Momento é Agora: IA Não é Mais Futuro, é Presente
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-black/30 p-6 rounded-lg">
              <h4 className="text-primary-blue font-bold text-xl mb-3">Seus Concorrentes Já Estão Usando</h4>
              <p className="text-gray-300">
                Empresas que adotaram IA estão crescendo 2x mais rápido.
                Cada mês que você espera é vantagem que entrega para eles.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg">
              <h4 className="text-primary-blue font-bold text-xl mb-3">Clientes Esperam Mais</h4>
              <p className="text-gray-300">
                Atendimento instantâneo, personalização total, experiências perfeitas.
                IA é o que separa empresas modernas das ultrapassadas.
              </p>
            </div>

            <div className="bg-black/30 p-6 rounded-lg">
              <h4 className="text-primary-blue font-bold text-xl mb-3">ROI Comprovado</h4>
              <p className="text-gray-300">
                Não é gasto, é investimento. IA se paga em 6-12 meses e
                continua gerando economia e receita por anos.
              </p>
            </div>
          </div>

          <div className="bg-black/50 p-8 rounded-xl border border-primary-blue/20 mb-8">
            <h4 className="text-2xl font-bold text-primary-blue mb-4">
              Transforme Seu Negócio com IA em 90 Dias
            </h4>
            <p className="text-gray-300 text-lg mb-6">
              Não espere anos para ver resultados. Nossos sistemas de IA são desenvolvidos
              para gerar impacto imediato no seu faturamento e eficiência operacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Quero uma Demonstração
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Calcular ROI da IA
              </button>
            </div>
          </div>

          <p className="text-gray-400 text-sm">
            <strong>Garantia:</strong> Se em 90 dias você não ver melhoria mensurável nos seus processos,
            devolvemos 100% do investimento. Essa é nossa confiança na IA que desenvolvemos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI;