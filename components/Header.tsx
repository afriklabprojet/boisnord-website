'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaFire, FaBars, FaTimes, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Produits', href: '/produits' },
    { name: 'Livraison', href: '/livraison' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-forest-600 p-2 rounded-lg group-hover:bg-forest-700 transition-colors">
              <FaFire className="text-2xl text-white" />
            </div>
            <div>
              <span className="text-xl md:text-2xl font-display font-bold text-primary-800">
                BARBE
              </span>
              <span className="text-xs md:text-sm text-forest-600 block -mt-1">
                Bois & Matériaux
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-forest-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+14505290479" className="flex items-center space-x-2 text-forest-700 hover:text-forest-800 font-semibold">
              <FaPhone className="text-lg" />
              <span>(450) 529-0479</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Commandez
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-forest-600 font-medium py-2 px-4 rounded-lg hover:bg-forest-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+14505290479"
                className="flex items-center space-x-2 text-forest-700 font-semibold py-2 px-4"
              >
                <FaPhone />
                <span>(450) 529-0479</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-center"
              >
                Commandez Maintenant
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
