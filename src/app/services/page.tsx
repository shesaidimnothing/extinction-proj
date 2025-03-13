'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'rats-souris',
    title: 'Rats et Souris',
    description: 'Les rats et les souris peuvent causer des dommages considérables à votre propriété et présenter des risques pour la santé. Nos experts utilisent des méthodes efficaces et humaines pour éliminer ces rongeurs et prévenir leur retour.',
    features: [
      'Inspection complète pour identifier les points d\'entrée',
      'Élimination des rongeurs avec des méthodes adaptées',
      'Conseils de prévention pour éviter une réinfestation',
      'Solutions respectueuses de l\'environnement',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7.8a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5v-7.8A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7.8a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.3V4.5Zm6.854 3.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L6.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
      </svg>
    ),
  },
  {
    id: 'cafards',
    title: 'Cafards',
    description: 'Les cafards sont des nuisibles tenaces qui peuvent se reproduire rapidement et contaminer votre nourriture. Notre approche de traitement contre les cafards combine plusieurs méthodes pour une élimination complète et durable.',
    features: [
      'Identification des espèces de cafards présentes',
      'Traitement ciblé des zones infestées',
      'Élimination des œufs et des nymphes',
      'Suivi post-traitement pour garantir l\'efficacité',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v.634l.549-.317a.5.5 0 1 1 .5.866L9 6l.549.317a.5.5 0 1 1-.5.866L8.5 6.866V7.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L7 6l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V4.5A.5.5 0 0 1 8 4ZM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7.5-5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Zm-10 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5Z"/>
      </svg>
    ),
  },
  {
    id: 'punaises-lit',
    title: 'Punaises de lit',
    description: 'Les punaises de lit sont des parasites nocturnes qui se nourrissent de sang humain. Leur élimination nécessite une expertise particulière. Nos techniciens sont formés aux dernières techniques de détection et d\'élimination des punaises de lit.',
    features: [
      'Inspection minutieuse avec des méthodes de détection avancées',
      'Traitement thermique et/ou chimique selon la situation',
      'Élimination des œufs et des nymphes',
      'Conseils pour éviter une réinfestation',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2 6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h2V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6Z"/>
      </svg>
    ),
  },
  {
    id: 'fourmis',
    title: 'Fourmis',
    description: 'Les fourmis peuvent envahir votre maison ou votre entreprise en grand nombre. Notre approche de lutte contre les fourmis vise à éliminer la colonie entière, pas seulement les fourmis visibles.',
    features: [
      'Identification des espèces de fourmis',
      'Localisation des nids et des colonies',
      'Traitement ciblé avec des appâts spécifiques',
      'Mesures préventives pour éviter les futures invasions',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
      </svg>
    ),
  },
  {
    id: 'guepes-frelons',
    title: 'Guêpes et Frelons',
    description: 'Les guêpes et les frelons peuvent représenter un danger sérieux, surtout pour les personnes allergiques. Ne tentez pas de retirer un nid vous-même. Nos techniciens sont équipés pour éliminer ces insectes en toute sécurité.',
    features: [
      'Intervention rapide et sécurisée',
      'Élimination complète des nids',
      'Équipement de protection adapté',
      'Conseils pour éviter l\'installation de nouveaux nids',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    ),
  },
  {
    id: 'autres-nuisibles',
    title: 'Autres Nuisibles',
    description: 'Nous traitons également d\'autres types de nuisibles comme les mites, les poissons d\'argent, les cloportes, et plus encore. Quel que soit votre problème de nuisibles, nous avons une solution adaptée.',
    features: [
      'Identification précise des nuisibles',
      'Traitements personnalisés selon le type de nuisible',
      'Approche respectueuse de l\'environnement',
      'Conseils de prévention spécifiques',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services</h1>
          <p className="text-dark max-w-3xl mx-auto">
            Rentokil propose une gamme complète de services de lutte antiparasitaire pour éliminer efficacement tous types de nuisibles. Nos experts interviennent rapidement en Île-de-France.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-dark">{service.title}</h2>
                </div>
                <p className="text-dark mb-4">{service.description}</p>
                <h3 className="text-lg font-semibold text-primary mb-2">Nos solutions :</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/services/${service.id}`}
                  className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="bg-primary text-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-semibold mb-2">Besoin d'un service sur mesure ?</h2>
              <p className="text-white/90">
                Contactez-nous pour discuter de vos besoins spécifiques. Nos experts vous proposeront une solution adaptée à votre situation.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact" 
                className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block whitespace-nowrap"
              >
                Demander un devis gratuit
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 