import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/shared/Layout';
import NeonGradientCard from '../../components/ui/neon-gradient-card';
import CTASection from '../../components/shared/CTASection';
import SEOHead from '../../components/shared/SEOHead';
import { blogArticles } from '../../data/blogArticles';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // Scroll to top when component mounts or slug changes
    window.scrollTo(0, 0);

    const foundArticle = blogArticles.find(a => a.slug === slug);
    setArticle(foundArticle);

    if (foundArticle) {
      // Find related articles by category or tags
      const related = blogArticles
        .filter(a => a.id !== foundArticle.id && (
          a.category === foundArticle.category ||
          a.tags.some(tag => foundArticle.tags.includes(tag))
        ))
        .slice(0, 3);
      setRelatedArticles(related);

      // Set page title and meta description for SEO
      document.title = `${foundArticle.title} | Blog IT Business`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', foundArticle.metaDescription);
      }
    }
  }, [slug]);

  if (!article) {
    return (
      <Layout>
        <div className="pt-32 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Artigo não encontrado</h1>
            <Link to="/blog" className="text-primary-blue hover:underline">
              Voltar ao blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {article && (
        <SEOHead
          title={`${article.title} | Blog IT Business`}
          description={article.metaDescription}
          keywords={article.seoKeywords}
          author={article.author}
          publishDate={article.publishDate}
          category={article.category}
          readTime={article.readTime}
          canonicalUrl={`${window.location.origin}/blog/${article.slug}`}
          ogImage={article.image}
        />
      )}
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-primary-blue">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-primary-blue">Blog</Link>
              <span>/</span>
              <span className="text-primary-blue">{article.category}</span>
            </div>
          </nav>

          {/* Article Meta */}
          <div className="mb-6">
            <span className="inline-block bg-primary-blue/20 text-primary-blue px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4 text-gray-400">
              <div className="flex items-center space-x-4">
                <span>Por <strong className="text-white">{article.author}</strong></span>
                <span>•</span>
                <span>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</span>
                <span>•</span>
                <span>{article.readTime} de leitura</span>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                  </svg>
                </button>
                <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-700 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NeonGradientCard className="p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {article.excerpt}
              </p>

              {/* Dynamic content would be loaded here based on article ID */}
              <div className="space-y-6 text-gray-300">
                <h2 className="text-2xl font-bold text-white">Introdução</h2>
                <p>
                  Este artigo apresenta um guia completo sobre <strong>{article.title.toLowerCase()}</strong>.
                  Abordaremos desde conceitos fundamentais até implementações práticas, fornecendo insights
                  valiosos para profissionais de tecnologia e gestores.
                </p>

                <h2 className="text-2xl font-bold text-white">Por que isso é importante?</h2>
                <p>
                  No cenário tecnológico atual, entender e aplicar esses conceitos é fundamental para
                  o sucesso de qualquer projeto. As tendências do mercado mostram que empresas que
                  adotam essas práticas têm uma vantagem competitiva significativa.
                </p>

                <blockquote className="border-l-4 border-primary-blue pl-6 italic text-gray-400">
                  "A tecnologia não é apenas uma ferramenta, é um diferencial estratégico que pode
                  transformar completamente a forma como fazemos negócios."
                </blockquote>

                <h2 className="text-2xl font-bold text-white">Implementação Prática</h2>
                <p>
                  Para implementar essas soluções em sua empresa, recomendamos seguir uma abordagem
                  estruturada:
                </p>

                <ol className="list-decimal list-inside space-y-2">
                  <li>Análise dos requisitos e objetivos</li>
                  <li>Planejamento da arquitetura e recursos necessários</li>
                  <li>Desenvolvimento iterativo com feedback contínuo</li>
                  <li>Testes e validação em ambiente controlado</li>
                  <li>Deploy gradual e monitoramento</li>
                </ol>

                <h2 className="text-2xl font-bold text-white">Benefícios e Resultados</h2>
                <p>
                  A implementação correta dessas práticas pode resultar em:
                </p>

                <ul className="list-disc list-inside space-y-2">
                  <li>Redução significativa de custos operacionais</li>
                  <li>Melhoria na experiência do usuário</li>
                  <li>Aumento da produtividade da equipe</li>
                  <li>Maior escalabilidade dos sistemas</li>
                  <li>Competitividade no mercado</li>
                </ul>

                <h2 className="text-2xl font-bold text-white">Conclusão</h2>
                <p>
                  As tendências tecnológicas continuam evoluindo rapidamente, e é essencial manter-se
                  atualizado com as melhores práticas. A parceria com especialistas pode acelerar
                  significativamente seus resultados e garantir implementações de qualidade.
                </p>

                <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold text-primary-blue mb-3">
                    Precisa de ajuda com implementação?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Nossa equipe de especialistas pode ajudar você a implementar essas soluções
                    de forma eficiente e segura.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-primary-blue hover:bg-primary-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Falar com Especialista
                  </Link>
                </div>
              </div>
            </div>
          </NeonGradientCard>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <NeonGradientCard key={relatedArticle.id} className="p-6 hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                    <span className="text-sm text-primary-blue font-semibold">
                      {relatedArticle.category}
                    </span>
                    <Link to={`/blog/${relatedArticle.slug}`} onClick={() => window.scrollTo(0, 0)}>
                      <h3 className="text-xl font-bold text-white mt-2 mb-3 line-clamp-2 hover:text-primary-blue transition-colors cursor-pointer">
                        {relatedArticle.title}
                      </h3>
                    </Link>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {relatedArticle.readTime}
                    </span>
                    <Link
                      to={`/blog/${relatedArticle.slug}`}
                      className="text-primary-blue hover:text-primary-blue/80 font-semibold text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Ler mais →
                    </Link>
                  </div>
                </NeonGradientCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection
        title="Transforme suas ideias em realidade"
        subtitle="Nossa equipe está pronta para ajudar você a implementar as melhores soluções tecnológicas para seu negócio."
        primaryButtonText="Iniciar Projeto"
        secondaryButtonText="Agendar Consulta"
      />
    </Layout>
  );
};

export default BlogArticlePage;