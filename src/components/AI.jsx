import React from 'react';

const AI = () => {
  const aiFeatures = [
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-purple-400 rounded-full"></div>,
      title: 'Automação Cognitiva',
      description: 'Sistemas inteligentes que automatizam processos complexos e tomam decisões baseadas em dados.'
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-blue-400 rounded-lg"></div>,
      title: 'Análise Preditiva',
      description: 'Algoritmos avançados para prever tendências e comportamentos futuros do seu negócio.'
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-orange-400 rounded-full"></div>,
      title: 'Otimização de Processos',
      description: 'IA que identifica gargalos e otimiza fluxos de trabalho para máxima eficiência.'
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-blue to-green-400 rounded-lg"></div>,
      title: 'Insights Estratégicos',
      description: 'Análise profunda de dados para gerar insights acionáveis e vantagem competitiva.'
    }
  ];

  return (
    <section id="ai" className="py-20 bg-gradient-to-br from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary-blue">Inteligência Artificial</span>
          </h2>
          <p className="text-xl text-white font-semibold mb-8">
            Transformando o Futuro dos Negócios
          </p>

          {/* AI Warning */}
          <div className="bg-gradient-to-r from-purple-900/60 to-blue-900/60 border border-purple-400/50 rounded-lg p-6 max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-3">
              <span className="text-3xl mr-3">🤖</span>
              <h3 className="text-xl font-bold text-purple-300">
                Sem IA, você já está obsoleto
              </h3>
            </div>
            <p className="text-purple-200 text-center">
              <span className="font-semibold">Empresas sem automação inteligente</span> perdem competitividade a cada segundo.
              <br className="hidden md:block" />
              O futuro pertence a quem abraça a <span className="text-blue-300 font-semibold">revolução da IA - não fique para trás.</span>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Na IT Business, a <span className="text-primary-blue font-semibold">inteligência artificial</span> é 
              o coração de nossas soluções de alta escala. Desenvolvemos sistemas inteligentes que 
              <span className="text-primary-blue font-semibold"> automatizam processos</span>, 
              <span className="text-primary-blue font-semibold"> otimizam decisões</span> e 
              <span className="text-primary-blue font-semibold"> geram insights poderosos</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Impulsionamos a eficiência e a inovação para nossos clientes high-ticket. 
              Desde automação cognitiva até análise preditiva avançada, nossas soluções de IA são 
              projetadas para entregar <span className="text-primary-blue font-semibold">valor mensurável</span> e 
              <span className="text-primary-blue font-semibold"> vantagem competitiva</span>.
            </p>

            <button className="btn-primary">
              Explorar Soluções de IA
            </button>
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

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="group bg-black/50 p-6 rounded-xl border border-primary-blue/20 hover:border-primary-blue/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-primary-blue font-bold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Data Flow Animation */}
        <div className="mt-16 bg-primary-blue/5 rounded-2xl p-12 border border-primary-blue/20">
          <h3 className="text-3xl font-bold text-primary-blue mb-4 text-center">
            Fluxo de Dados Inteligente
          </h3>
          <p className="text-gray-300 text-center mb-12 max-w-4xl mx-auto text-lg">
            Nossa arquitetura de IA processa milhões de pontos de dados em tempo real, 
            transformando informações brutas em inteligência estratégica para seu negócio.
          </p>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue/30 to-primary-blue/10 rounded-xl flex items-center justify-center mb-4 border border-primary-blue/20">
                <svg className="w-10 h-10 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h7v2H7v-2zm0 4h10v2H7v-2z"/>
                </svg>
              </div>
              <h4 className="text-primary-blue font-semibold mb-1">Coleta</h4>
              <p className="text-gray-300 text-sm text-center">Sensores IoT, APIs, Bancos de dados</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-primary-blue/30 relative">
                <div className="absolute top-0 left-0 h-full bg-primary-blue animate-pulse rounded" style={{width: '100%'}}></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue/30 to-primary-blue/10 rounded-xl flex items-center justify-center mb-4 border border-primary-blue/20">
                <svg className="w-10 h-10 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h4 className="text-primary-blue font-semibold mb-1">Processamento</h4>
              <p className="text-gray-300 text-sm text-center">ML, Deep Learning, NLP</p>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-0.5 bg-primary-blue/30 relative">
                <div className="absolute top-0 left-0 h-full bg-primary-blue animate-pulse rounded delay-1000" style={{width: '100%'}}></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-blue/30 to-primary-blue/10 rounded-xl flex items-center justify-center mb-4 border border-primary-blue/20">
                <svg className="w-10 h-10 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h4 className="text-primary-blue font-semibold mb-1">Inteligência</h4>
              <p className="text-gray-300 text-sm text-center">Dashboards, Alertas, Previsões</p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 p-6 rounded-lg border border-primary-blue/10">
              <h5 className="text-primary-blue font-semibold mb-3">Velocidade de Processamento</h5>
              <p className="text-gray-300 text-sm">Análise de terabytes de dados em segundos, com respostas em tempo real para tomada de decisões críticas.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-primary-blue/10">
              <h5 className="text-primary-blue font-semibold mb-3">Precisão Algorítmica</h5>
              <p className="text-gray-300 text-sm">Modelos de IA com 99.7% de precisão, treinados com milhões de padrões de dados empresariais.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-lg border border-primary-blue/10">
              <h5 className="text-primary-blue font-semibold mb-3">Escalabilidade Infinita</h5>
              <p className="text-gray-300 text-sm">Infraestrutura cloud que escala automaticamente conforme o volume de dados do seu negócio cresce.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI;