import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
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
                Contact
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Discutons de votre projet
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Vous avez une idée ou un projet en tête ? Je serais ravi de discuter de comment je peux vous aider.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </Layout>
  );
}
