import Link from 'next/link'
import { FaFire, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À propos */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-forest-600 p-2 rounded-lg">
                <FaFire className="text-xl" />
              </div>
              <div>
                <span className="text-xl font-display font-bold">BARBE</span>
                <span className="text-xs text-gray-300 block -mt-1">Bois & Matériaux</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Commerce de détail de bois et matériaux de construction. Achat de bois en longueur, transformation et vente de bois de chauffage depuis 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-forest-400 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-forest-400 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-forest-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/produits" className="text-gray-300 hover:text-forest-400 transition-colors">
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link href="/livraison" className="text-gray-300 hover:text-forest-400 transition-colors">
                  Livraison
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-forest-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-forest-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>✓ Livraison rapide</li>
              <li>✓ Bois séché AAA</li>
              <li>✓ Bois fendu prêt à brûler</li>
              <li>✓ Conseils gratuits</li>
              <li>✓ Commande maintenant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contactez-nous</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-forest-400 mt-1 flex-shrink-0" />
                <span>2840 QC-148<br />Pontiac, QC J0X 2G0</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-forest-400 flex-shrink-0" />
                <a href="tel:+14505290479" className="hover:text-forest-400 transition-colors">
                  (450) 529-0479
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-forest-400 flex-shrink-0" />
                <a href="mailto:info@boisdechauffagesbarbe.shop" className="hover:text-forest-400 transition-colors">
                  info@boisdechauffagesbarbe.shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} BOIS DE CHAUFFAGE BARBE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/politique-confidentialite" className="hover:text-forest-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/conditions" className="hover:text-forest-400 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
