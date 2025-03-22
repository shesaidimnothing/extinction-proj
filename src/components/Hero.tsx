'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-secondary py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2300A651\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-16 h-16 text-primary opacity-20 z-0"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.71,7.29a1,1,0,0,0-1.42,0L18,9.59V4a1,1,0,0,0-2,0v5.59l-2.29-2.3a1,1,0,1,0-1.42,1.42l4,4a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4A1,1,0,0,0,21.71,7.29ZM10.72,16a1,1,0,0,0-1.43,0l-4,4a1,1,0,0,0,1.43,1.43L9,19.14V24a1,1,0,0,0,2,0V19.14l2.29,2.29a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.43Z"/>
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 w-20 h-20 text-accent opacity-20 z-0"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,7H18V6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,6v9a1,1,0,0,0,1,1H4v3a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V10A3,3,0,0,0,19,7ZM4,14V6A1,1,0,0,1,5,5H15a1,1,0,0,1,1,1V14ZM20,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16H19a1,1,0,0,0,1-1V9h0a1,1,0,0,1,1,1Z"/>
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                RSPC NUISIBLES
              </h1>
              <div className="text-sm text-dark mb-2 flex items-center">
                <span className="text-primary font-semibold mr-1">R</span>ats / 
                <span className="text-primary font-semibold mx-1">C</span>afards / 
                <span className="text-primary font-semibold mx-1">P</span>unaises / 
                <span className="text-primary font-semibold ml-1">C</span>ompétence
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
              Services de lutte antiparasitaire en Île-de-France
            </h2>
            <p className="text-lg text-dark mb-8">
              Nous proposons des services professionnels de lutte contre les nuisibles pour les particuliers et les entreprises. Nos experts interviennent rapidement pour éliminer rats, souris, cafards, punaises de lit et autres nuisibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-gradient-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors block text-center">
                  Demander un devis gratuit
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/services" className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors block text-center">
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
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
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
                  className="mt-6 bg-gradient-primary text-white p-4 rounded-md text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <p className="font-semibold">Intervention rapide en Île-de-France</p>
                  <p className="text-sm mt-1">Tél: 07 69 77 75 36</p>
                </motion.div>
              </div>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent rounded-full opacity-20 z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Features Section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <FeatureCard 
            icon={<ClockIcon />}
            title="Intervention rapide"
            description="Nos techniciens interviennent sous 24 à 48h dans toute l'Île-de-France."
          />
          <FeatureCard 
            icon={<ShieldIcon />}
            title="Garantie de résultat"
            description="Nous garantissons l'élimination complète des nuisibles."
          />
          <FeatureCard 
            icon={<LeafIcon />}
            title="Solutions écologiques"
            description="Nous privilégions des méthodes respectueuses de l'environnement."
          />
        </motion.div>
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
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-primary mb-2">
        {icon}
      </div>
      <h3 className="text-sm font-medium text-dark">{title}</h3>
    </motion.div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary"
      whileHover={{ y: -5 }}
    >
      <div className="text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-dark mb-2">{title}</h3>
      <p className="text-dark">{description}</p>
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

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  </svg>
);

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
    <path d="M8 4.5a.5.5 0 0 1 .5.5v2.5H11a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V8.5H5a.5.5 0 0 1 0-1h2.5V5a.5.5 0 0 1 .5-.5z"/>
  </svg>
);

export default Hero; 