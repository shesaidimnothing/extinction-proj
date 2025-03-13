'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const pests = [
  {
    id: 'rats-souris',
    title: 'Rats et Souris',
    description: 'Les rats et les souris sont des rongeurs qui peuvent causer des dommages considérables à votre propriété et présenter des risques pour la santé. Ils peuvent contaminer la nourriture, endommager les structures et les câbles électriques, et transmettre des maladies.',
    signs: [
      'Excréments de petite taille',
      'Bruits de grattement dans les murs ou les plafonds',
      'Traces de grignotage sur les emballages alimentaires',
      'Nids faits de matériaux déchiquetés',
    ],
    risks: [
      'Transmission de maladies comme la leptospirose',
      'Risques d\'incendie dus aux câbles rongés',
      'Contamination des aliments',
      'Dégâts structurels',
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
    description: 'Les cafards sont des insectes nocturnes qui se reproduisent rapidement et peuvent contaminer votre nourriture et vos surfaces. Ils sont connus pour leur résistance et leur capacité à survivre dans des conditions difficiles.',
    signs: [
      'Présence d\'insectes vivants, surtout la nuit',
      'Excréments ressemblant à des grains de poivre',
      'Odeur désagréable et persistante',
      'Mues (exosquelettes vides)',
    ],
    risks: [
      'Contamination des aliments et des surfaces',
      'Transmission de bactéries pathogènes',
      'Déclenchement d\'allergies et d\'asthme',
      'Dégradation de la qualité de vie',
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
    description: 'Les punaises de lit sont des parasites nocturnes qui se nourrissent de sang humain. Elles se cachent dans les matelas, sommiers, et meubles à proximité des lits. Leur élimination nécessite une expertise particulière.',
    signs: [
      'Piqûres en ligne sur la peau, souvent sur les parties découvertes',
      'Petites taches de sang sur les draps',
      'Présence d\'insectes de couleur brune et de forme aplatie',
      'Petites taches noires (excréments) sur le matelas ou le sommier',
    ],
    risks: [
      'Réactions allergiques aux piqûres',
      'Troubles du sommeil et anxiété',
      'Infections cutanées dues au grattage',
      'Propagation rapide à d\'autres pièces ou logements',
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
    description: 'Les fourmis vivent en colonies et peuvent envahir votre maison ou votre entreprise en grand nombre. Elles sont attirées par la nourriture, en particulier les aliments sucrés, et peuvent être difficiles à éliminer sans traiter la colonie entière.',
    signs: [
      'Lignes de fourmis se déplaçant vers une source de nourriture',
      'Petits tas de terre ou de sciure (nids)',
      'Présence de fourmis ailées (reproducteurs)',
      'Bruits dans les murs ou les planchers',
    ],
    risks: [
      'Contamination des aliments',
      'Dégâts structurels (certaines espèces)',
      'Piqûres douloureuses (selon les espèces)',
      'Stress et inconfort',
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
    description: 'Les guêpes et les frelons construisent des nids dans ou autour des bâtiments. Ils peuvent représenter un danger sérieux, surtout pour les personnes allergiques. Ne tentez pas de retirer un nid vous-même.',
    signs: [
      'Présence d\'insectes volants rayés jaune et noir',
      'Nids en papier mâché dans les combles, sous les toits ou dans le jardin',
      'Activité accrue en été et début d\'automne',
      'Bourdonnement audible près du nid',
    ],
    risks: [
      'Piqûres douloureuses, potentiellement dangereuses',
      'Réactions allergiques graves (choc anaphylactique)',
      'Stress et anxiété',
      'Perturbation des activités extérieures',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
        <path d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
      </svg>
    ),
  },
  {
    id: 'mites',
    title: 'Mites',
    description: 'Les mites sont de petits insectes qui peuvent endommager les textiles, les aliments secs et d\'autres matériaux. Il existe différentes espèces de mites, chacune avec ses préférences alimentaires spécifiques.',
    signs: [
      'Petits trous dans les vêtements, en particulier ceux en laine',
      'Présence de petits papillons volant de manière erratique',
      'Toiles soyeuses dans les aliments secs',
      'Larves blanches dans les placards ou les textiles',
    ],
    risks: [
      'Dommages aux vêtements et textiles',
      'Contamination des aliments secs',
      'Réactions allergiques (poussière de mites)',
      'Coûts de remplacement des articles endommagés',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="currentColor" viewBox="0 0 16 16">
        <path d="M10.943 4H5.057L5 6h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v6.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V4.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"/>
        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
      </svg>
    ),
  },
];

export default function Nuisibles() {
  return (
    <div className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Types de Nuisibles</h1>
          <p className="text-dark max-w-3xl mx-auto">
            Découvrez les différents types de nuisibles que nous traitons et apprenez à reconnaître les signes d'infestation. Une détection précoce permet une élimination plus efficace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pests.map((pest, index) => (
            <motion.div 
              key={pest.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">
                    {pest.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-dark">{pest.title}</h2>
                </div>
                <p className="text-dark mb-4">{pest.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Signes d'infestation</h3>
                    <ul className="space-y-2">
                      {pest.signs.map((sign, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-dark">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Risques potentiels</h3>
                    <ul className="space-y-2">
                      {pest.risks.map((risk, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="text-dark">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Link 
                  href={`/services/${pest.id}`}
                  className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
                >
                  Solutions de traitement
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
              <h2 className="text-2xl font-semibold mb-2">Vous avez un problème de nuisibles ?</h2>
              <p className="text-white/90">
                N'attendez pas que la situation s'aggrave. Nos experts interviennent rapidement en Île-de-France pour éliminer tous types de nuisibles.
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