'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    location: 'Paris 15ème',
    text: 'Service impeccable et très professionnel. Intervention rapide pour un problème de souris dans mon appartement. Plus aucune trace depuis leur passage !',
    rating: 5,
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    location: 'Neuilly-sur-Seine',
    text: 'Excellente prestation pour l\'élimination de cafards dans notre restaurant. Équipe réactive et efficace. Je recommande vivement.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marie Leroy',
    location: 'Boulogne-Billancourt',
    text: 'Intervention rapide et efficace pour un problème de punaises de lit. Le technicien était très professionnel et nous a donné de bons conseils pour éviter une réinfestation.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Jean Moreau',
    location: 'Saint-Denis',
    text: 'Très satisfait du service. Ils ont résolu notre problème de rats dans notre local commercial en un temps record. Prix raisonnable pour la qualité du service.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ce que disent nos clients</h2>
          <p className="text-dark max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits de nos services de traitement contre les nuisibles en Île-de-France.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      filled={i < testimonials[currentIndex].rating} 
                    />
                  ))}
                </div>
                <p className="text-dark italic mb-6 text-lg">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <p className="font-semibold text-dark">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-gray-50 focus:outline-none"
            aria-label="Témoignage précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-gray-50 focus:outline-none"
            aria-label="Témoignage suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Star Icon Component
const StarIcon = ({ filled }: { filled: boolean }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className={`h-5 w-5 inline-block ${filled ? 'text-accent' : 'text-gray-300'}`}
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

export default Testimonials; 