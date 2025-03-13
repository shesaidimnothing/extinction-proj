'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <div className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">À Propos de Rentokil</h1>
          <p className="text-dark max-w-3xl mx-auto">
            Depuis plus de 90 ans, Rentokil est le leader mondial dans la lutte antiparasitaire, offrant des solutions efficaces et durables pour protéger les foyers et les entreprises.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Notre Histoire</h2>
              <p className="text-dark mb-4">
                Fondée en 1927 au Royaume-Uni, Rentokil s'est développée pour devenir une référence mondiale dans le domaine de la lutte antiparasitaire. Notre expertise s'est construite au fil des décennies, nous permettant d'offrir aujourd'hui des services de qualité supérieure dans plus de 80 pays.
              </p>
              <p className="text-dark mb-4">
                En France, Rentokil est présente depuis plus de 50 ans et dispose d'un réseau d'agences couvrant l'ensemble du territoire. Notre équipe en Île-de-France est composée de techniciens certifiés, formés aux dernières techniques de lutte contre les nuisibles.
              </p>
              <p className="text-dark">
                Notre mission est simple : protéger les personnes et préserver les biens contre les nuisibles, tout en respectant l'environnement.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Nos Valeurs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Excellence</h3>
                  <p className="text-dark">
                    Nous nous engageons à fournir un service de la plus haute qualité, en utilisant des méthodes éprouvées et des produits efficaces.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Innovation</h3>
                  <p className="text-dark">
                    Nous investissons continuellement dans la recherche et le développement pour offrir des solutions toujours plus efficaces et respectueuses de l'environnement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Responsabilité</h3>
                  <p className="text-dark">
                    Nous prenons très au sérieux notre impact sur l'environnement et travaillons à minimiser notre empreinte écologique.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">Service client</h3>
                  <p className="text-dark">
                    Nous plaçons la satisfaction de nos clients au cœur de notre activité, en offrant un service personnalisé et réactif.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">Notre Approche</h2>
              <p className="text-dark mb-6">
                Chez Rentokil, nous suivons une méthodologie rigoureuse pour garantir l'élimination efficace des nuisibles :
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mr-4">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Inspection</h3>
                    <p className="text-dark">
                      Nos techniciens réalisent une inspection complète de votre propriété pour identifier les nuisibles présents et les points d'entrée potentiels.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mr-4">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Diagnostic</h3>
                    <p className="text-dark">
                      Nous établissons un diagnostic précis de l'infestation et élaborons un plan de traitement adapté à votre situation spécifique.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mr-4">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Traitement</h3>
                    <p className="text-dark">
                      Nous mettons en œuvre le traitement le plus approprié, en privilégiant les méthodes les moins invasives et les plus respectueuses de l'environnement.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mr-4">
                    <span className="font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Prévention</h3>
                    <p className="text-dark">
                      Nous vous conseillons sur les mesures préventives à adopter pour éviter toute réinfestation et proposons des solutions de protection à long terme.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mr-4">
                    <span className="font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Suivi</h3>
                    <p className="text-dark">
                      Nous effectuons des visites de suivi pour s'assurer de l'efficacité du traitement et ajuster notre approche si nécessaire.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-primary text-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-semibold mb-2">Prêt à éliminer vos nuisibles ?</h2>
                <p className="text-white/90">
                  Contactez-nous dès aujourd'hui pour bénéficier de l'expertise Rentokil et retrouver un environnement sain.
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
                  Demander un devis
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 