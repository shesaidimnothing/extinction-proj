'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full -ml-48 -mb-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services</h2>
          <p className="text-dark max-w-3xl mx-auto">
            RCPC NUISIBLES propose des solutions efficaces et respectueuses de l'environnement pour éliminer tous types de nuisibles en Île-de-France.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Rats et Souris" 
            description="Élimination efficace des rongeurs avec des méthodes adaptées à votre environnement. Nous intervenons rapidement pour stopper l'infestation."
            icon={<RatIcon />}
            link="/services/rats-souris"
            delay={0.1}
          />
          <ServiceCard 
            title="Cafards" 
            description="Traitement complet contre les blattes et cafards dans les habitations et locaux professionnels. Élimination garantie des nids."
            icon={<CockroachIcon />}
            link="/services/cafards"
            delay={0.2}
          />
          <ServiceCard 
            title="Punaises de lit" 
            description="Détection et élimination des punaises de lit avec garantie d'efficacité. Traitement thermique et chimique selon la situation."
            icon={<BedBugIcon />}
            link="/services/punaises-lit"
            delay={0.3}
          />
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="bg-gradient-primary text-white px-8 py-4 rounded-md font-medium hover:opacity-90 transition-opacity inline-block shadow-md">
            Voir tous nos services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link,
  delay 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  link: string;
  delay: number;
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-primary"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-6 mx-auto">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-dark text-center">{title}</h3>
        <p className="text-dark mb-6 text-center">{description}</p>
        <div className="text-center">
          <Link 
            href={link} 
            className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity inline-block"
          >
            En savoir plus
          </Link>
        </div>
      </div>
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

export default Services; 