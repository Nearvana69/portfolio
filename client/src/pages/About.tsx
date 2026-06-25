import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import {
  ArrowRight, Code2, Layers, Cpu, GraduationCap, MapPin, Calendar,
  Sparkles, Rocket, Users
} from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const stats = [
    { label: 'Année', value: 'L3', icon: GraduationCap },
    { label: 'Localisation', value: 'Fianarantsoa', icon: MapPin },
    { label: 'Spécialité', value: 'Full-Stack', icon: Code2 },
    { label: 'Disponible', value: 'Du 1er Septembre au 20 Novembre 2026', icon: Calendar },
  ];

  const values = [
    {
      title: 'Excellence',
      description: "Je m'engage à livrer du code de qualité, bien testé et maintenable.",
      icon: Sparkles,
    },
    {
      title: 'Innovation',
      description: "J'aime explorer les dernières technologies et trouver des solutions créatives.",
      icon: Rocket,
    },
    {
      title: 'Collaboration',
      description: "Je crois au pouvoir du travail d'équipe et de la communication claire.",
      icon: Users,
    },
  ];

  return (
    <Layout>
      <main className="pt-32 pb-20 flex flex-col">

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={itemVariants}
                className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4"
              >
                À Propos de Moi
              </motion.span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                Développeur Passionné par l'Innovation
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                Je m'appelle JAOMILA Pancrace, je suis étudiant à l'ENI de Fianarantsoa, je passe mes journées entre les cours, le code et les bugs que je n'aurais pas dû créer. Je vise à devenir développeur full-stack — pas pour impressionner, mais pour construire des choses qui servent vraiment.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Story + Values — même fond, même bloc */}
        <section className="bg-slate-100/10 dark:bg-slate-900/10 backdrop-blur-md">

          {/* Parcours */}
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Texte */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Mon Parcours</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Tout a commencé par curiosité — comprendre comment une page web prend vie, comment une idée devient une application. À l'ENI, cette curiosité est devenue une discipline.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aujourd'hui, je travaille sur des projets concrets qui couvrent l'ensemble de la stack : des interfaces React et Next.js jusqu'aux API Nest.js, en passant par les app mobile en Flutter ainsi que les bases de données et le déploiement. Chaque projet est une occasion d'apprendre quelque chose que je ne savais pas la veille.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Ce qui me motive, c'est moins la technologie en elle-même que ce qu'elle permet de résoudre — et j'ai encore beaucoup à apprendre, ce qui me convient très bien.
                  </p>
                </motion.div>

                {/* Carte identité */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl p-8 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 mb-8">
                      <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 mb-4">
                        <span className="text-3xl font-bold text-white">JP</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Pancrace</h3>
                      <p className="text-blue-200 text-sm mt-1">Étudiant · Développeur Full-Stack</p>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-3">
                      {stats.map(({ label, value, icon: Icon }, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <Icon className="w-4 h-4 text-blue-200 mb-2" />
                          <p className="text-white font-semibold text-sm">{value}</p>
                          <p className="text-blue-300 text-xs mt-0.5">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
                  >
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">Full-Stack</span>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
                  >
                    <Cpu className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">ENI Fianar</span>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="container mx-auto px-4">
            <div className="border-t border-gray-200/30 dark:border-gray-700/30" />
          </div>

          {/* Valeurs — dans le même fond */}
          <div className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mes Valeurs</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                  Ces principes guident chacun de mes projets et interactions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map(({ title, description, icon: Icon }, index) => (
                  <motion.div
                    key={index}
                    className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </section>

{/* CTA Section */}
<section className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 flex-1 min-h-[60vh]">
  <div className="container mx-auto px-4 text-center py-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-6">Prêt à Collaborer ?</h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Je suis toujours intéressé par de nouveaux projets et opportunités de collaboration.
      </p>
      <motion.a
        href="/#contact"
        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Commençons
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </motion.div>
  </div>
</section>

      </main>
    </Layout>
  );
}