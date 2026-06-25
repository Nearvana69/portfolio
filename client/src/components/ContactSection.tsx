import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

// ─── Validation Schema ────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(3, 'Le sujet doit contenir au moins 3 caractères'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── EmailJS config (variables d'environnement Vite) ──────────────────────────
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Pancrace',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pancracetardis@gmail.com',
      href: 'mailto:pancracetardis@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+261 32 97 123 97',
      href: 'tel:+26132971239',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+261 38 55 278 37',
      href: 'tel:+261385527837',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Fianarantsoa, Madagascar',
      href: 'https://maps.google.com/?q=Fianarantsoa,Madagascar',
    },
  ];

  const socials = [
    { icon: Github, name: 'GitHub', url: 'https://github.com/Nearvana69' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/pancrace-tardis' },
  ];

  // ── Input base classes ──
  const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-white dark:bg-gray-800/60 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none transition-all duration-200 focus:ring-2';
  const inputNormal =
    'border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-100 dark:focus:border-blue-500 dark:focus:ring-blue-900/30';
  const inputError =
    'border-red-400 dark:border-red-500 focus:border-red-400 focus:ring-red-100 dark:focus:ring-red-900/30';

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container mx-auto px-4">

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* ── Left: Info ── */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Mes Coordonnées
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                N'hésitez pas à me contacter pour toute question ou collaboration.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/10 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/30 transition-all group"
                    whileHover={{ x: 6 }}
                  >
                    <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{info.label}</p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700/50">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-4 uppercase tracking-wide">
                Suivez-moi
              </p>
              <div className="flex gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-11 h-11 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            className="bg-white dark:bg-gray-800/40 rounded-2xl p-8 shadow-xl shadow-gray-200/60 dark:shadow-gray-900/40 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              Envoyez-moi un message
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Je vous répondrai dans les plus brefs délais.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Votre nom"
                  {...register('name')}
                  className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Adresse email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="votre@email.com"
                  {...register('email')}
                  className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Sujet de votre message"
                  {...register('subject')}
                  className={`${inputBase} ${errors.subject ? inputError : inputNormal}`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows={5}
                  {...register('message')}
                  className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                id="contact-submit"
                type="submit"
                disabled={submitStatus === 'loading' || submitStatus === 'success'}
                className="w-full px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-800 text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/20"
                whileHover={{ scale: submitStatus === 'idle' ? 1.01 : 1 }}
                whileTap={{ scale: submitStatus === 'idle' ? 0.98 : 1 }}
              >
                {submitStatus === 'loading' && (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                )}
                {submitStatus === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message envoyé !
                  </>
                )}
                {(submitStatus === 'idle' || submitStatus === 'error') && (
                  <>
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Status Feedback */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    key="success"
                    className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 rounded-xl"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-700 dark:text-green-400 text-sm">
                        Message envoyé avec succès !
                      </p>
                      <p className="text-green-600 dark:text-green-500 text-xs mt-0.5">
                        Merci ! Je vous répondrai dans les meilleurs délais.
                      </p>
                    </div>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    key="error"
                    className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-600 dark:text-red-400 text-sm">
                        Échec de l'envoi
                      </p>
                      <p className="text-red-500 dark:text-red-500 text-xs mt-0.5">
                        Une erreur est survenue. Vérifiez vos identifiants EmailJS ou contactez-moi directement par email.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
