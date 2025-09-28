import React from 'react';
import NeonGradientCard from '../ui/neon-gradient-card';

const CTASection = ({
  title = "Pronto para começar sua parceria?",
  subtitle = "Transforme suas ideias em realidade com nossa expertise técnica",
  primaryButtonText = "Iniciar Parceria",
  secondaryButtonText = "Consulta Gratuita"
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <NeonGradientCard className="p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="btn-primary text-lg px-8 py-4 inline-block smooth-scroll"
            >
              {primaryButtonText}
            </a>
            <a
              href="#contato"
              className="btn-secondary text-lg px-8 py-4 inline-block smooth-scroll"
            >
              {secondaryButtonText}
            </a>
          </div>
        </NeonGradientCard>
      </div>
    </section>
  );
};

export default CTASection;