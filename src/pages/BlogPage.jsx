import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import NeonGradientCard from '../components/ui/neon-gradient-card';
import { blogArticles } from '../data/blogArticles';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', 'Desenvolvimento', 'Inteligência Artificial', 'Cybersegurança', 'Startups'];

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = blogArticles.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="text-white">Blog </span>
            <span className="text-primary-blue">IT Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Insights, tutoriais e tendências em tecnologia para impulsionar seu negócio
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border border-primary-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors"
              />
              <svg className="absolute right-4 top-4 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <NeonGradientCard key={article.id} className="p-6 text-left hover:scale-105 transition-transform duration-300">
                <div className="text-sm text-primary-blue font-semibold mb-2">
                  {article.category} • {article.readTime}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {new Date(article.publishDate).toLocaleDateString('pt-BR')}
                  </span>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="text-primary-blue hover:text-primary-blue/80 font-semibold text-sm"
                  >
                    Ler mais →
                  </Link>
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-blue text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <NeonGradientCard key={article.id} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-blue font-semibold">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-primary-blue/20 text-primary-blue px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <div>{article.author}</div>
                    <div>{new Date(article.publishDate).toLocaleDateString('pt-BR')}</div>
                  </div>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="bg-primary-blue hover:bg-primary-blue/80 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Ler artigo
                  </Link>
                </div>
              </NeonGradientCard>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Nenhum artigo encontrado
              </h3>
              <p className="text-gray-300">
                Tente ajustar os filtros ou termo de busca
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <NeonGradientCard className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Receba nossos insights por email
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Fique por dentro das últimas tendências em tecnologia e receba conteúdo exclusivo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-primary-blue/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue"
              />
              <button className="btn-primary px-6 py-3">
                Inscrever-se
              </button>
            </div>
          </NeonGradientCard>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;