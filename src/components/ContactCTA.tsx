'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Un problème de nuisibles ? RSPC NUISIBLES intervient rapidement !
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Nos experts interviennent rapidement en Île-de-France pour éliminer rats, cafards et punaises de lit. Demandez un devis gratuit et sans engagement.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-3">Intervention rapide sous 24 à 48h</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-3">Devis gratuit et sans engagement</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-3">Techniciens certifiés et expérimentés</span>
              </li>
              <li className="flex items-center">
                <CheckIcon />
                <span className="ml-3">Garantie d'élimination complète des nuisibles</span>
              </li>
            </ul>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/contact" 
                className="bg-accent text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity shadow-lg inline-flex items-center"
              >
                <PhoneIconWhite className="mr-2" />
                Demander un devis gratuit
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/3 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-accent">
              <h3 className="text-primary text-xl font-semibold mb-6 text-center">
                Contactez-nous
              </h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center text-dark">
                  <PhoneIcon />
                  <span className="ml-3 font-medium">07 69 77 75 36</span>
                </div>
                <div className="flex items-center text-dark">
                  <EmailIcon />
                  <span className="ml-3 font-medium">rspcnuisibles@gmail.com</span>
                </div>
                <div className="flex items-center text-dark">
                  <LocationIcon />
                  <span className="ml-3 font-medium">Île-de-France</span>
                </div>
                <div className="flex items-center text-dark">
                  <ClockIcon />
                  <span className="ml-3 font-medium">Lun-Sam: 8h-19h</span>
                </div>
              </div>
              
              <div className="bg-secondary p-4 rounded-md">
                <p className="text-primary text-center font-medium">
                  Intervention d'urgence possible 7j/7
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const PhoneIconWhite = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9l-4.9 4.9-4.9-4.9a7 7 0 010-9.9zM10 6.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" clipRule="evenodd" />
  </svg>
);

export default ContactCTA; 