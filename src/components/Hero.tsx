'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Services de lutte antiparasitaire en Île-de-France
            </h1>
            <p className="text-lg text-dark mb-8">
              Nous proposons des services professionnels de lutte contre les nuisibles pour les particuliers et les entreprises. Nos experts interviennent rapidement pour éliminer rats, souris, cafards, punaises de lit et autres nuisibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors block text-center">
                  Demander un devis gratuit
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors block text-center">
                  Découvrir nos services
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {/* Pest Icons */}
                  <PestCard 
                    title="Rats & Souris" 
                    icon={<RatIcon />} 
                    delay={0.3}
                  />
                  <PestCard 
                    title="Cafards" 
                    icon={<CockroachIcon />} 
                    delay={0.4}
                  />
                  <PestCard 
                    title="Punaises de lit" 
                    icon={<BedBugIcon />} 
                    delay={0.5}
                  />
                  <PestCard 
                    title="Autres nuisibles" 
                    icon={<OtherPestsIcon />} 
                    delay={0.6}
                  />
                </div>
                <motion.div 
                  className="mt-6 bg-primary text-white p-4 rounded-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <p className="font-semibold">Intervention rapide en Île-de-France</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Pest Card Component
const PestCard = ({ title, icon, delay }: { title: string; icon: React.ReactNode; delay: number }) => {
  return (
    <motion.div 
      className="bg-secondary p-4 rounded-md flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <div className="text-primary mb-2">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-dark">{title}</h3>
    </motion.div>
  );
};

// Icons
const RatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7.8a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5v-7.8A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7.8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.3V4.5Zm6.854 3.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L6.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
  </svg>
);

const CockroachIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4ZM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7.5-5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Zm-10 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Z"/>
  </svg>
);

const BedBugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M2 6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6Z"/>
  </svg>
);

const OtherPestsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
  </svg>
);

export default Hero; 