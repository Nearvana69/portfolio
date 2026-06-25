import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Scolaris - Gestion d\'établissement scolaire',
      description: 'Plateforme complète pour la gestion des établissements scolaires.',
      image: 'image/Scolaris-portfolio.png',
      imagePosition: 'center 75%',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AgroFarm - Gestion de ferme',
      description: 'Plateforme de gestion des fermes et des produits agricoles.',
      image: 'image/agro.png',
      imagePosition: 'center 65%',
      tags: ['React', 'TypeScript', 'Recharts', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'E-vavaka - Application mobile de stockage de prières',
      description: 'Application mobile qui stocke les prières et les rend accessible à tout moment.',
      image: 'image/E-vavaka.jpeg',
      imagePosition: 'center 30%',
      tags: ['Flutter', 'Dart', 'shared preferences'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Mes Réalisations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projets Vedettes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus significatifs, démontrant mes compétences en développement full-stack et design d'interfaces.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous les projets
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
