'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    location: 'Paris 15ème',
    text: 'Service impeccable et très professionnel. Intervention rapide pour un problème de souris dans mon appartement. RSPC NUISIBLES a résolu mon problème en une seule visite !',
    rating: 5,
    service: 'Traitement anti-rongeurs',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    location: 'Neuilly-sur-Seine',
    text: 'Excellente prestation pour l\'élimination de cafards dans notre restaurant. Équipe réactive et efficace. Je recommande vivement RSPC NUISIBLES pour les professionnels.',
    rating: 5,
    service: 'Désinsectisation',
  },
  {
    id: 3,
    name: 'Marie Leroy',
    location: 'Boulogne-Billancourt',
    text: 'Intervention rapide et efficace pour un problème de punaises de lit. Le technicien était très professionnel et nous a donné de bons conseils pour éviter une réinfestation.',
    rating: 4,
    service: 'Traitement punaises de lit',
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
    <section className="py-16 bg-gradient-to-b from-secondary to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ce que disent nos clients</h2>
          <p className="text-dark max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits des services de RSPC NUISIBLES en Île-de-France.
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
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary"
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
                <div className="mb-6">
                  <QuoteIcon />
                </div>
                <p className="text-lg text-dark mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-dark">
                    {testimonials[currentIndex].location}
                  </p>
                  <span className="mt-2 bg-secondary text-primary text-sm px-3 py-1 rounded-full">
                    {testimonials[currentIndex].service}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="bg-white p-3 rounded-full shadow-md text-primary hover:bg-secondary transition-colors"
              aria-label="Témoignage précédent"
            >
              <ArrowLeftIcon />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Voir témoignage ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-white p-3 rounded-full shadow-md text-primary hover:bg-secondary transition-colors"
              aria-label="Témoignage suivant"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="tel:0769777536" 
            className="bg-gradient-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity inline-flex items-center shadow-md"
          >
            <PhoneIcon className="mr-2" />
            Contactez-nous au 07 69 77 75 36
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Icons
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill={filled ? '#00A651' : 'none'}
    stroke={filled ? 'none' : '#00A651'}
    strokeWidth="1.5"
    className="inline-block mx-0.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="#00A651"
    className="opacity-20"
    viewBox="0 0 16 16"
  >
    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path
      d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
    />
  </svg>
);

export default Testimonials; 