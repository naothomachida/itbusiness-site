import React from 'react';

const StartupAcceleration = () => {
  const offers = [
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-yellow to-red-400 rounded-full"></div>,
      title: 'Mentoria Especializada',
      description: 'Acompanhamento personalizado com profissionais experientes do mercado. Sessões semanais de mentoria e workshops para desenvolvimento.'
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-yellow to-purple-400 rounded-lg"></div>,
      title: 'Network Estratégico',
      description: 'Acesso à rede de parceiros e investidores. Eventos exclusivos de networking e oportunidades de parcerias comerciais.'
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-yellow to-blue-400 rounded-full"></div>,
      title: 'Infraestrutura Completa',
      description: 'Espaço de coworking equipado com salas de reunião, auditório, laboratório e suporte técnico integral.'
    },
    {
      icon: <div className="w-8 h-8 bg-gradient-to-br from-primary-yellow to-green-400 rounded-lg"></div>,
      title: 'Desenvolvimento de Negócio',
      description: 'Suporte em estratégias de crescimento, planejamento, marketing, desenvolvimento de produto e preparação para investimentos.'
    }
  ];

  const stats = [
    { value: '50+', label: 'Startups Aceleradas' },
    { value: '80%', label: 'Taxa de Sucesso' },
    { value: '10+', label: 'Anos de Experiência' },
    { value: '100M+', label: 'Valor Gerado' }
  ];

  return (
    <section id="startups" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Impulsione sua </span>
            <span className="text-primary-yellow">Startup</span>
          </h2>
          <p className="text-xl text-primary-yellow font-semibold mb-8">
            para o Próximo Nível com a IT Business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Oferecemos muito mais que apenas <span className="text-primary-yellow font-semibold">investimento financeiro</span>. 
              Nossa experiência de mais de uma década no mercado tecnológico, combinada com uma extensa rede de 
              parceiros estratégicos e um programa estruturado de aceleração, pode transformar sua startup em um 
              <span className="text-primary-yellow font-semibold"> caso de sucesso</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Trabalhamos lado a lado com <span className="text-primary-yellow font-semibold">empreendedores visionários</span>, 
              fornecendo todo o suporte necessário para escalar negócios inovadores.
            </p>

            <div className="bg-primary-yellow/10 p-6 rounded-xl border border-primary-yellow/20">
              <p className="text-lg text-gray-300 leading-relaxed">
                Com um histórico comprovado de <span className="text-primary-yellow font-semibold">mais de 50 startups aceleradas</span> 
                e uma <span className="text-primary-yellow font-semibold">taxa de sucesso superior a 80%</span>, 
                nosso programa foi desenvolvido para maximizar suas chances de crescimento exponencial no mercado.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gray-800 p-6 rounded-xl border border-primary-yellow/20">
                <div className="text-3xl md:text-4xl font-bold text-primary-yellow mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offers.map((offer, index) => (
            <div key={index} className="group bg-gradient-to-br from-primary-yellow/10 to-primary-yellow/5 p-6 rounded-xl border border-primary-yellow/20 hover:border-primary-yellow/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {offer.icon}
              </div>
              <h3 className="text-primary-yellow font-bold text-lg mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Acceleration Journey */}
        <div className="bg-gradient-to-r from-primary-yellow/10 to-primary-yellow/5 rounded-2xl p-8 border border-primary-yellow/30">
          <h3 className="text-2xl font-bold text-primary-yellow mb-8 text-center">
            Jornada de Aceleração
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-full"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Seleção</h4>
              <p className="text-gray-300 text-sm">Processo rigoroso de seleção das startups mais promissoras</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-lg"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Programa</h4>
              <p className="text-gray-300 text-sm">3-6 meses de programa intensivo com mentoria especializada</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-full"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Investimento</h4>
              <p className="text-gray-300 text-sm">Oportunidades de investimento e acesso a fundos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-yellow/30 to-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary-yellow rounded-lg"></div>
              </div>
              <h4 className="text-primary-yellow font-semibold mb-2">Escala</h4>
              <p className="text-gray-300 text-sm">Suporte contínuo para crescimento e expansão</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="btn-primary text-lg px-8 py-4 inline-block">
              Inscreva sua Startup
            </a>
            <a href="#contato" className="btn-secondary text-lg px-8 py-4 inline-block">
              Conheça o Programa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupAcceleration;