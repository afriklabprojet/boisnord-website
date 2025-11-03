import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheckCircle, FaFire, FaTree, FaLeaf } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Nos Produits - Bois de Chauffage AAA | Bois de Chauffage Barbe',
  description: 'Découvrez notre sélection de bois de chauffage premium: érable dur, bouleau jaune, frêne blanc. Bois séché 12-18 mois, fendu et prêt à brûler. Livraison à Québec.',
}

export default function ProduitsPage() {
  const products = [
    {
      name: 'Érable Dur (Sugar Maple)',
      price: '150$',
      description: 'Le roi incontesté du bois de chauffage! L\'érable dur offre le meilleur pouvoir calorifique et produit des braises durables.',
      icon: '🍁',
      features: [
        'Pouvoir calorifique: 24,0 millions BTU/corde',
        'Braises durables et chaleur constante',
        'Excellente combustion, peu de fumée',
        'Idéal pour chauffage principal',
        'Séché 18 mois minimum',
      ],
      popular: true,
    },
    {
      name: 'Mélange Premium',
      price: '125$',
      description: 'Mélange soigneusement sélectionné de bois francs pour une combustion optimale et économique.',
      icon: '🔥',
      features: [
        'Mélange d\'érable, bouleau et frêne',
        'Pouvoir calorifique élevé',
        'Combustion équilibrée',
        'Excellent rapport qualité-prix',
        'Séché 12-15 mois',
      ],
      popular: false,
    },
    {
      name: 'Granulés Premium',
      price: '250$',
      description: 'Granulés de bois 100% naturels de première qualité. Combustion propre et efficace pour poêles à granulés.',
      icon: '🌾',
      features: [
        'Granulés 100% résineux certifiés',
        'Pouvoir calorifique: 4,8 kWh/kg',
        'Taux de cendres < 0,7%',
        'Combustion propre et uniforme',
        'Sacs de 15kg faciles à manipuler',
      ],
      popular: false,
    },
    {
      name: 'Bouleau Jaune',
      price: '120$',
      description: 'Excellent équilibre entre chaleur intense et durée de combustion. Populaire et économique.',
      icon: '🌳',
      features: [
        'Pouvoir calorifique: 21,8 millions BTU/corde',
        'Allumage facile et rapide',
        'Flammes vives et chaleur agréable',
        'Excellent rapport qualité-prix',
        'Séché 12-15 mois',
      ],
      popular: false,
    },
    {
      name: 'Frêne Blanc',
      price: '115$',
      description: 'Excellente chaleur, peut même brûler légèrement vert. Parfait pour usage d\'urgence ou immédiat.',
      icon: '🪵',
      features: [
        'Pouvoir calorifique: 23,6 millions BTU/corde',
        'Brûle bien même légèrement humide',
        'Faible production de fumée',
        'Idéal pour usage immédiat',
        'Séché 12 mois',
      ],
      popular: false,
    },
    {
      name: 'Bois d\'Allumage',
      price: '45$',
      description: 'Petits morceaux de bois franc parfaits pour démarrer votre feu rapidement. Sac de 40 lbs.',
      icon: '🔥',
      features: [
        'Morceaux de 8-12 pouces',
        'Bois franc sec',
        'Allumage ultra-rapide',
        'Sac de 40 lbs',
        'Parfait complément',
      ],
      popular: false,
    },
    {
      name: 'Copeaux/Rabotures',
      price: '35$',
      description: 'Idéal pour allumer vos feux. Sac de 30 lbs de copeaux secs.',
      icon: '✨',
      features: [
        '100% naturel, sans additifs',
        'Séché et prêt à l\'emploi',
        'Parfait avec bois d\'allumage',
        'Sac de 30 lbs',
        'Économique',
      ],
      popular: false,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-forest-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">Nos Produits</h1>
            <p className="section-subtitle mx-auto">
              Bois de chauffage premium, séché naturellement, fendu à la main et prêt à brûler. 
              Tous nos produits sont garantis AAA et livrés dans toute la région de Québec.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className={`card relative flex flex-col ${product.popular ? 'ring-2 ring-forest-500' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-3 -right-3 bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg z-10">
                    ⭐ Choix Populaire
                  </div>
                )}

                <div className="text-6xl mb-4 text-center">{product.icon}</div>

                <h3 className="text-2xl font-display font-bold text-primary-800 mb-2 text-center">
                  {product.name}
                </h3>

                <p className="text-gray-600 mb-4 text-center flex-grow">
                  {product.description}
                </p>

                                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-forest-700">{product.price}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <FaCheckCircle className="text-forest-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-auto ${product.popular ? 'btn-primary' : 'btn-outline'} w-full text-center block`}
                >
                  Commander
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-8 text-center">
              Informations Importantes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaFire className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Qu'est-ce qu'une corde?</h3>
                </div>
                <p className="text-gray-700">
                  Une corde standard mesure 4 pieds de haut x 8 pieds de long x 16-18 pouces de profondeur. 
                  Cela équivaut à environ 128 pieds cubes de bois fendu et cordé.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaTree className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Taux d'humidité</h3>
                </div>
                <p className="text-gray-700">
                  Tout notre bois est séché naturellement entre 12 et 18 mois. Le taux d'humidité est 
                  inférieur à 20%, garantissant une combustion optimale et un minimum de fumée.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaLeaf className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">100% Naturel</h3>
                </div>
                <p className="text-gray-700">
                  Aucun traitement chimique, aucun additif. Seulement du bois franc naturel, 
                  coupé, fendu et séché avec soin pour votre confort et votre sécurité.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaCheckCircle className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Livraison Incluse</h3>
                </div>
                <p className="text-gray-700">
                  La livraison est incluse dans un rayon de 30 km de Québec. 
                  Nous pouvons également corder votre bois sur demande (frais additionnels).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-forest-700 to-forest-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Prêt à Commander?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour commander ou pour toute question. Notre équipe se fera un plaisir de vous conseiller!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-forest-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Commandez en Ligne
            </Link>
            <a href="tel:+14185551234" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              (418) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
