'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white mb-4"
            >
              RCPC NUISIBLES
            </motion.div>
            <p className="text-white opacity-90 mb-4">
              Spécialiste du traitement contre les nuisibles en Île-de-France. Nous proposons des solutions efficaces et respectueuses de l'environnement.
            </p>
            <div className="text-xs text-white opacity-80 mb-4">
              <span className="font-semibold">R</span>ats / 
              <span className="font-semibold">C</span>afards / 
              <span className="font-semibold">P</span>unaises / 
              <span className="font-semibold">C</span>ompétence
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Nos Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services">Tous nos services</FooterLink>
              <FooterLink href="/services/rats-souris">Rats et Souris</FooterLink>
              <FooterLink href="/services/cafards">Cafards</FooterLink>
              <FooterLink href="/services/punaises-lit">Punaises de Lit</FooterLink>
              <FooterLink href="/nuisibles">Types de Nuisibles</FooterLink>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Zones d'intervention</h3>
            <ul className="space-y-2">
              <FooterLink href="/ile-de-france">Île-de-France</FooterLink>
              <FooterLink href="/ile-de-france?area=paris">Paris</FooterLink>
              <FooterLink href="/ile-de-france?area=hauts-de-seine">Hauts-de-Seine</FooterLink>
              <FooterLink href="/ile-de-france?area=seine-saint-denis">Seine-Saint-Denis</FooterLink>
              <FooterLink href="/ile-de-france?area=val-de-marne">Val-de-Marne</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic text-white opacity-90">
              <p className="mb-2">123 Avenue de Paris</p>
              <p className="mb-2">75001 Paris</p>
              <p className="mb-2">Tél: 07 69 77 75 36</p>
              <p className="mb-4">Email: rspcnuisibles@gmail.com</p>
              <Link href="/contact" className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors inline-block">
                Demander un devis
              </Link>
            </address>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center text-white text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} RCPC NUISIBLES. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <Link href="/mentions-legales" className="hover:text-accent transition-colors">Mentions Légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-accent transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Footer Link Component
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="text-white opacity-90 hover:opacity-100 hover:text-accent transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer; 