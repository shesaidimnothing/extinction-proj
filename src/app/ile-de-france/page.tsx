'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const areas = [
  {
    id: 'paris',
    name: 'Paris',
    description: 'Nos équipes interviennent dans tous les arrondissements de Paris pour éliminer rats, souris, cafards, punaises de lit et autres nuisibles. La densité urbaine de Paris favorise la prolifération des nuisibles, d\'où l\'importance d\'une intervention rapide et efficace.',
    districts: ['Paris 1er', 'Paris 2ème', 'Paris 3ème', 'Paris 4ème', 'Paris 5ème', 'Paris 6ème', 'Paris 7ème', 'Paris 8ème', 'Paris 9ème', 'Paris 10ème', 'Paris 11ème', 'Paris 12ème', 'Paris 13ème', 'Paris 14ème', 'Paris 15ème', 'Paris 16ème', 'Paris 17ème', 'Paris 18ème', 'Paris 19ème', 'Paris 20ème'],
  },
  {
    id: 'hauts-de-seine',
    name: 'Hauts-de-Seine (92)',
    description: 'Le département des Hauts-de-Seine bénéficie de nos services de lutte antiparasitaire pour les particuliers et les professionnels. Nos techniciens interviennent rapidement dans toutes les communes du 92.',
    districts: ['Antony', 'Asnières-sur-Seine', 'Bagneux', 'Bois-Colombes', 'Boulogne-Billancourt', 'Bourg-la-Reine', 'Châtenay-Malabry', 'Châtillon', 'Clamart', 'Clichy', 'Colombes', 'Courbevoie', 'Fontenay-aux-Roses', 'Garches', 'La Garenne-Colombes', 'Gennevilliers', 'Issy-les-Moulineaux', 'Levallois-Perret', 'Malakoff', 'Marnes-la-Coquette', 'Meudon', 'Montrouge', 'Nanterre', 'Neuilly-sur-Seine', 'Le Plessis-Robinson', 'Puteaux', 'Rueil-Malmaison', 'Saint-Cloud', 'Sceaux', 'Sèvres', 'Suresnes', 'Vanves', 'Vaucresson', 'Ville-d\'Avray', 'Villeneuve-la-Garenne'],
  },
  {
    id: 'seine-saint-denis',
    name: 'Seine-Saint-Denis (93)',
    description: 'Nos services de désinsectisation et dératisation sont disponibles dans tout le département de la Seine-Saint-Denis. Nous intervenons aussi bien chez les particuliers que dans les entreprises, commerces et collectivités.',
    districts: ['Aubervilliers', 'Aulnay-sous-Bois', 'Bagnolet', 'Le Blanc-Mesnil', 'Bobigny', 'Bondy', 'Le Bourget', 'Clichy-sous-Bois', 'Coubron', 'La Courneuve', 'Drancy', 'Dugny', 'Épinay-sur-Seine', 'Gagny', 'Gournay-sur-Marne', 'L\'Île-Saint-Denis', 'Les Lilas', 'Livry-Gargan', 'Montfermeil', 'Montreuil', 'Neuilly-Plaisance', 'Neuilly-sur-Marne', 'Noisy-le-Grand', 'Noisy-le-Sec', 'Pantin', 'Les Pavillons-sous-Bois', 'Pierrefitte-sur-Seine', 'Le Pré-Saint-Gervais', 'Le Raincy', 'Romainville', 'Rosny-sous-Bois', 'Saint-Denis', 'Saint-Ouen', 'Sevran', 'Stains', 'Tremblay-en-France', 'Vaujours', 'Villemomble', 'Villepinte', 'Villetaneuse'],
  },
  {
    id: 'val-de-marne',
    name: 'Val-de-Marne (94)',
    description: 'Le Val-de-Marne est couvert par nos équipes de techniciens qualifiés pour tous vos problèmes de nuisibles. Nous proposons des solutions adaptées à chaque situation, que ce soit pour les rats, souris, cafards, punaises de lit ou autres.',
    districts: ['Ablon-sur-Seine', 'Alfortville', 'Arcueil', 'Boissy-Saint-Léger', 'Bonneuil-sur-Marne', 'Bry-sur-Marne', 'Cachan', 'Champigny-sur-Marne', 'Charenton-le-Pont', 'Chennevières-sur-Marne', 'Chevilly-Larue', 'Choisy-le-Roi', 'Créteil', 'Fontenay-sous-Bois', 'Fresnes', 'Gentilly', 'L\'Haÿ-les-Roses', 'Ivry-sur-Seine', 'Joinville-le-Pont', 'Le Kremlin-Bicêtre', 'Limeil-Brévannes', 'Maisons-Alfort', 'Mandres-les-Roses', 'Marolles-en-Brie', 'Nogent-sur-Marne', 'Noiseau', 'Orly', 'Ormesson-sur-Marne', 'Périgny', 'Le Perreux-sur-Marne', 'Le Plessis-Trévise', 'La Queue-en-Brie', 'Rungis', 'Saint-Mandé', 'Saint-Maur-des-Fossés', 'Saint-Maurice', 'Santeny', 'Sucy-en-Brie', 'Thiais', 'Valenton', 'Villecresnes', 'Villejuif', 'Villeneuve-le-Roi', 'Villeneuve-Saint-Georges', 'Villiers-sur-Marne', 'Vincennes', 'Vitry-sur-Seine'],
  },
  {
    id: 'seine-et-marne',
    name: 'Seine-et-Marne (77)',
    description: 'Nous intervenons dans les principales villes de Seine-et-Marne pour tous vos problèmes de nuisibles. Nos techniciens se déplacent rapidement pour vous proposer des solutions efficaces et durables.',
    districts: ['Chelles', 'Meaux', 'Melun', 'Pontault-Combault', 'Bussy-Saint-Georges', 'Savigny-le-Temple', 'Torcy', 'Lagny-sur-Marne', 'Combs-la-Ville', 'Ozoir-la-Ferrière', 'Dammarie-les-Lys', 'Villeparisis', 'Mitry-Mory', 'Roissy-en-Brie', 'Vaires-sur-Marne', 'Avon', 'Noisiel', 'Le Mée-sur-Seine', 'Nemours', 'Fontainebleau'],
  },
  {
    id: 'yvelines',
    name: 'Yvelines (78)',
    description: 'Les Yvelines bénéficient de nos services de lutte antiparasitaire professionnels. Nous intervenons dans les principales villes du département pour éliminer tous types de nuisibles.',
    districts: ['Versailles', 'Saint-Germain-en-Laye', 'Sartrouville', 'Mantes-la-Jolie', 'Conflans-Sainte-Honorine', 'Poissy', 'Plaisir', 'Montigny-le-Bretonneux', 'Houilles', 'Élancourt', 'Les Mureaux', 'Trappes', 'Rambouillet', 'Chatou', 'Carrières-sous-Poissy', 'Vélizy-Villacoublay', 'Le Chesnay', 'Guyancourt', 'Mantes-la-Ville', 'Maisons-Laffitte'],
  },
];

// Component that uses useSearchParams
function AreaList() {
  const searchParams = useSearchParams();
  const areaRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    const areaParam = searchParams.get('area');
    if (areaParam && areaRefs.current[areaParam]) {
      setTimeout(() => {
        areaRefs.current[areaParam]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, [searchParams]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {areas.map((area, index) => (
        <motion.div 
          key={area.id}
          ref={(el) => { areaRefs.current[area.id] = el; }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-primary mb-3">{area.name}</h2>
            <p className="text-dark mb-4">{area.description}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-dark mb-2">Villes desservies :</h3>
              <div className="flex flex-wrap gap-2">
                {area.districts.slice(0, 8).map((district, i) => (
                  <span key={i} className="bg-secondary text-dark px-3 py-1 rounded-full text-sm">
                    {district}
                  </span>
                ))}
                {area.districts.length > 8 && (
                  <span className="bg-secondary text-dark px-3 py-1 rounded-full text-sm">
                    +{area.districts.length - 8} autres
                  </span>
                )}
              </div>
            </div>
            <Link 
              href={`/contact?area=${area.id}`}
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block"
            >
              Demander un devis
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function IleDeFrance() {
  return (
    <div className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos services en Île-de-France</h1>
          <p className="text-dark max-w-3xl mx-auto">
            Rentokil intervient dans toute l'Île-de-France pour éliminer tous types de nuisibles. Nos techniciens se déplacent rapidement pour vous proposer des solutions efficaces et durables.
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">Pourquoi choisir Rentokil en Île-de-France ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Intervention rapide</h3>
                <p className="text-dark">Nos techniciens interviennent sous 24 à 48h dans toute l'Île-de-France pour traiter votre problème de nuisibles.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Techniciens certifiés</h3>
                <p className="text-dark">Nos techniciens sont formés et certifiés pour utiliser les méthodes les plus efficaces et respectueuses de l'environnement.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Service personnalisé</h3>
                <p className="text-dark">Nous adaptons nos solutions à votre situation spécifique, que vous soyez un particulier ou une entreprise.</p>
              </div>
            </div>
          </motion.div>

          <Suspense fallback={<div className="p-8 text-center bg-white rounded-lg shadow-md">Chargement des zones d'intervention...</div>}>
            <AreaList />
          </Suspense>
        </div>

        <motion.div 
          className="bg-primary text-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-semibold mb-2">Besoin d'une intervention urgente ?</h2>
              <p className="text-white/90">
                Nos équipes sont disponibles pour intervenir rapidement dans toute l'Île-de-France. Contactez-nous dès maintenant pour prendre rendez-vous.
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
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 