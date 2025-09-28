import React from 'react';
import NeonGradientCard from './ui/neon-gradient-card';
import Ripple from './ui/ripple';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-black to-gray-800 relative overflow-hidden">
      <Ripple className="absolute inset-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Sociedade </span>
            <span className="text-primary-blue">sob Conduta</span>
          </h2>
          <p className="text-xl text-primary-blue font-semibold mb-8">
            Transformação Digital com Responsabilidade
          </p>
        </div>

        <NeonGradientCard className="mb-12 p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-blue mb-6">
              Nossa Filosofia de Trabalho
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Operamos como uma <span className="text-primary-blue font-semibold">sociedade ética e transparente</span>,
              onde cada projeto é conduzido com <span className="text-primary-blue font-semibold">responsabilidade integral</span>
              e <span className="text-primary-blue font-semibold">compromisso com resultados sustentáveis</span>.
              Nossos valores direcionam cada decisão técnica e estratégica.
            </p>
          </div>
        </NeonGradientCard>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Modelo de Sociedade</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Estabelecemos <span className="text-primary-blue font-semibold">parcerias estratégicas</span>
              baseadas em transparência total, onde seus objetivos se tornam nossos objetivos.
              Trabalhamos com <span className="text-primary-blue font-semibold">metodologias ágeis</span>
              e <span className="text-primary-blue font-semibold">governança rigorosa</span>
              para garantir entregas de valor desde o primeiro sprint.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Nossa estrutura operacional combina <span className="text-primary-blue font-semibold">expertise técnica avançada</span>,
              <span className="text-primary-blue font-semibold"> segurança de classe mundial</span> e
              <span className="text-primary-blue font-semibold"> inovação em IA</span> para criar
              ecossistemas digitais que escalam com segurança e eficiência.
            </p>

            <div className="bg-primary-blue/10 p-4 rounded-lg border-l-4 border-primary-blue">
              <p className="text-primary-blue font-semibold">
                "Conduta ética e excelência técnica são nossos pilares fundamentais."
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 rounded-2xl p-8 border border-primary-blue/30">
              <div className="grid grid-cols-2 gap-4 h-64">
                {/* Abstract visual elements representing collaboration and innovation */}
                <div className="space-y-4">
                  <div className="bg-primary-blue/20 rounded-lg h-16 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-blue rounded-full opacity-60"></div>
                  </div>
                  <div className="bg-primary-blue/10 rounded-lg h-20 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-blue rounded-sm opacity-40"></div>
                  </div>
                  <div className="bg-primary-blue/20 rounded-lg h-12 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-blue rounded-full opacity-80"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary-blue/10 rounded-lg h-20 flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-blue rounded-sm opacity-60"></div>
                  </div>
                  <div className="bg-primary-blue/20 rounded-lg h-16 flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary-blue rounded-full opacity-40"></div>
                  </div>
                  <div className="bg-primary-blue/15 rounded-lg h-16 flex items-center justify-center">
                    <div className="w-5 h-5 bg-primary-blue rounded-sm opacity-70"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-blue-light/15 to-pink-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tl from-purple-500/8 to-primary-blue-light/12 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <NeonGradientCard className="p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-primary-blue font-bold text-lg mb-2">
              🤝 Parcerias Estratégicas
            </h3>
            <p className="text-gray-300 text-sm">
              Formamos sociedades de longo prazo baseadas em confiança mútua, transparência total e objetivos compartilhados.
            </p>
          </NeonGradientCard>

          <NeonGradientCard className="p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-primary-blue font-bold text-lg mb-2">
              ⚡ Execução Ágil
            </h3>
            <p className="text-gray-300 text-sm">
              Metodologias ágeis com entregas incrementais, feedback contínuo e adaptação rápida às mudanças do mercado.
            </p>
          </NeonGradientCard>

          <NeonGradientCard className="p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-primary-blue font-bold text-lg mb-2">
              🛡️ Segurança Integral
            </h3>
            <p className="text-gray-300 text-sm">
              Proteção de dados, compliance regulatório e governança de segurança em todos os níveis de desenvolvimento.
            </p>
          </NeonGradientCard>
        </div>
      </div>
    </section>
  );
};

export default About;