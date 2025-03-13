'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un problème de nuisibles ? Contactez-nous dès maintenant !
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Nos experts interviennent rapidement en Île-de-France pour éliminer tous types de nuisibles. Demandez un devis gratuit et sans engagement.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Intervention rapide sous 24 à 48h</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Devis gratuit et sans engagement</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Techniciens certifiés et expérimentés</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-2">Solutions respectueuses de l'environnement</span>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="md:w-1/3 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-primary text-xl font-semibold mb-4 text-center">
                Contactez-nous
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-dark">
                  <PhoneIcon />
                  <span className="ml-3">01 23 45 67 89</span>
                </div>
                <div className="flex items-center text-dark">
                  <EmailIcon />
                  <span className="ml-3">contact@rentokil.fr</span>
                </div>
                <div className="flex items-center text-dark">
                  <ClockIcon />
                  <span className="ml-3">Lun-Ven: 8h-19h | Sam: 9h-17h</span>
                </div>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link 
                  href="/contact" 
                  className="block w-full bg-accent text-white text-center py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  Demander un devis gratuit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

export default ContactCTA; 