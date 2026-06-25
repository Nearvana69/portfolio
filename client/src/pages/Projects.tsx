import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Scolaris - Gestion d\'établissement scolaire',
      description: 'Plateforme complète pour la gestion des établissements scolaires.',
      image: 'image/Scolaris-portfolio.webp',
      imagePosition: 'center 50%',
      tags: ['React', 'NestJS', 'PostgreSQL', 'Tailwindcss'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/Scolaris1/',
    },
    {
      id: 2,
      title: 'AgroFarm - Gestion de ferme',
      description: 'Plateforme de gestion des fermes et des produits agricoles.',
      image: 'image/agro.webp',
      imagePosition: 'center 65%',
      tags: ['React', 'TypeScript', 'NestJs', 'TailwindCSS', 'PostgreSQL'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/projet-IHM-L3',
    },
    {
      id: 3,
      title: 'E-vavaka - Application mobile de stockage de prières',
      description: 'Application mobile qui stocke les prières et les rend accessible à tout moment.',
      image: 'image/E-vavaka.webp',
      imagePosition: 'center 30%',
      tags: ['Flutter', 'Dart', 'shared preferences'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Takombitsiky',
      description: 'Plateforme de gestion de compétition intercartier de collecte de fonds avec un système de classement et de suivi des performances.',
      image: 'image/takombitsiky_mock.webp',
      imagePosition: 'center 50%',
      tags: ['Java', 'JavaFx', 'PostgreSQL'],
      category: 'Desktop',
      liveUrl: '#',
      githubUrl: 'https://github.com/Nearvana69/takombitsiky',
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'Desktop', label: 'Desktop' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <Layout>
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
                Mes Réalisations
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Projets Vedettes
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Découvrez une sélection de mes projets les plus significatifs, démontrant mes compétences en développement full-stack et design d'interfaces.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
