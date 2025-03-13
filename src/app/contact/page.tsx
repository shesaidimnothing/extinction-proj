'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

// Create a component that uses useSearchParams
function ContactForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    area: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const areaParam = searchParams.get('area');
    if (areaParam) {
      setFormData(prev => ({ ...prev, area: areaParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: '',
        area: '',
        message: '',
      });
    }, 1500);
  };

  // Map area IDs to readable names
  const getAreaName = (areaId: string) => {
    const areaMap: {[key: string]: string} = {
      'paris': 'Paris',
      'hauts-de-seine': 'Hauts-de-Seine (92)',
      'seine-saint-denis': 'Seine-Saint-Denis (93)',
      'val-de-marne': 'Val-de-Marne (94)',
      'seine-et-marne': 'Seine-et-Marne (77)',
      'yvelines': 'Yvelines (78)',
    };
    return areaMap[areaId] || areaId;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 md:p-8">
        {isSubmitted ? (
          <motion.div 
            className="text-center py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-dark mb-2">Demande envoyée avec succès !</h2>
            <p className="text-dark mb-6">
              Nous avons bien reçu votre demande de devis. Un de nos experts vous contactera dans les plus brefs délais.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              Envoyer une nouvelle demande
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-dark font-medium mb-2">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-dark font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-dark font-medium mb-2">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-dark font-medium mb-2">Adresse *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-dark font-medium mb-2">Type de nuisible *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez un type de nuisible</option>
                  <option value="rats-souris">Rats et Souris</option>
                  <option value="cafards">Cafards</option>
                  <option value="punaises-lit">Punaises de lit</option>
                  <option value="fourmis">Fourmis</option>
                  <option value="guepes-frelons">Guêpes et Frelons</option>
                  <option value="autres">Autres nuisibles</option>
                </select>
              </div>
              <div>
                <label htmlFor="area" className="block text-dark font-medium mb-2">Zone d'intervention</label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Sélectionnez une zone</option>
                  <option value="paris">Paris</option>
                  <option value="hauts-de-seine">Hauts-de-Seine (92)</option>
                  <option value="seine-saint-denis">Seine-Saint-Denis (93)</option>
                  <option value="val-de-marne">Val-de-Marne (94)</option>
                  <option value="seine-et-marne">Seine-et-Marne (77)</option>
                  <option value="yvelines">Yvelines (78)</option>
                </select>
                {formData.area && (
                  <p className="text-sm text-primary mt-1">
                    Zone sélectionnée : {getAreaName(formData.area)}
                  </p>
                )}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-dark font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Décrivez votre problème de nuisibles..."
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                type="submit"
                className="bg-accent text-white w-full px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  "Demander un devis gratuit"
                )}
              </motion.button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contactez-nous</h1>
          <p className="text-dark max-w-3xl mx-auto">
            Vous avez un problème de nuisibles ? Remplissez le formulaire ci-dessous pour obtenir un devis gratuit et sans engagement.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="p-8 text-center">Chargement du formulaire...</div>}>
            <ContactForm />
          </Suspense>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Téléphone</h3>
              <p className="text-dark">01 23 45 67 89</p>
              <p className="text-gray-500 text-sm mt-1">Lun-Ven: 8h-19h | Sam: 9h-17h</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Email</h3>
              <p className="text-dark">contact@rentokil.fr</p>
              <p className="text-gray-500 text-sm mt-1">Nous répondons sous 24h</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Adresse</h3>
              <p className="text-dark">123 Avenue de Paris</p>
              <p className="text-dark">75001 Paris</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 