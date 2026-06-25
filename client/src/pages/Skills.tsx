import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'NestJs', 'PostgreSQL', 'REST API'],
    },
    {
      category: 'Mobile & Cross-Platform',
      skills: ['Flutter','Dart'],
    },
    {
      category: 'Outils',
      skills: [ 'Git', 'Github'],
    },
    {
      category: 'Design & UX',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

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
                Compétences
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Mes Stacks
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Une palette complète de technologies modernes pour créer des solutions web&mobile robustes et scalables.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    {category.category}
                  </h3>

                  <motion.div
                    className="space-y-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center gap-2"
                        variants={itemVariants}
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proficiency Levels */}
        <section className="py-20 bg-slate-100/10 dark:bg-slate-900/10 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Niveau de Maîtrise
              </h2>

              <div className="space-y-8">
                {[
                  { label: 'React & JavaScript', level: 75 },
                  { label: 'NestJs & Backend', level: 80 },
                  { label: 'Design & UX', level: 65 },
                  { label: 'Flutter & Dart', level: 75 },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{skill.label}</span>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
