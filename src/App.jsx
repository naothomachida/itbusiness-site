import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SoftwarePage from './pages/SoftwarePage';
import AIPage from './pages/AIPage';
import CybersecurityPage from './pages/CybersecurityPage';
import StartupsPage from './pages/StartupsPage';
import ConsultancyPage from './pages/ConsultancyPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/blog/BlogArticlePage';
import Contact from './components/Contact';
import Layout from './components/shared/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/contact" element={
          <Layout>
            <div className="pt-20">
              <Contact />
            </div>
          </Layout>
        } />
        <Route path="/portfolio" element={
          <Layout>
            <div className="pt-20 min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold text-primary-blue">Portfólio - Em Breve</h1>
            </div>
          </Layout>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;