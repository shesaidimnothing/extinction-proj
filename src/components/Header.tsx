'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary"
            >
              <span className="text-primary">RCPC NUISIBLES</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs text-gray-600 mt-1"
            >
              <span className="text-primary font-semibold">R</span>ats / 
              <span className="text-primary font-semibold">C</span>afards / 
              <span className="text-primary font-semibold">P</span>unaises / 
              <span className="text-primary font-semibold">C</span>ompétence
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/services">Nos Services</NavLink>
            <NavLink href="/nuisibles">Types de Nuisibles</NavLink>
            <NavLink href="/ile-de-france">Île-de-France</NavLink>
            <NavLink href="/a-propos">À Propos</NavLink>
          </nav>

          {/* Contact Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link href="/contact" className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              Demander un devis
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/services" onClick={toggleMenu}>Nos Services</MobileNavLink>
              <MobileNavLink href="/nuisibles" onClick={toggleMenu}>Types de Nuisibles</MobileNavLink>
              <MobileNavLink href="/ile-de-france" onClick={toggleMenu}>Île-de-France</MobileNavLink>
              <MobileNavLink href="/a-propos" onClick={toggleMenu}>À Propos</MobileNavLink>
              <Link 
                href="/contact" 
                className="bg-accent text-white px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors text-center"
                onClick={toggleMenu}
              >
                Demander un devis
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} className="text-dark hover:text-primary transition-colors">
      {children}
    </Link>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link href={href} className="text-dark hover:text-primary transition-colors block" onClick={onClick}>
      {children}
    </Link>
  );
};

export default Header; 