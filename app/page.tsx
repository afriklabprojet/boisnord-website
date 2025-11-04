import Link from 'next/link'
import { FaFire, FaCheckCircle, FaTruck, FaLeaf, FaShieldAlt, FaStar, FaPhone, FaClipboardList, FaCalendarAlt, FaUniversity } from 'react-icons/fa'

export default function HomePage() {
  const products = [
    {
      name: 'Érable Dur',
      description: 'Le champion du chauffage ! Pouvoir calorifique exceptionnel avec des braises qui durent toute la nuit.',
      price: '150$/la corde',
      unit: 'la corde',
      icon: '🍁',
      popular: true,
    },
    {
      name: 'Mélange Premium',
      description: 'Mélange sélectionné de bois francs pour une combustion optimale et économique.',
      price: '125$/la corde',
      unit: 'la corde',
      icon: '🔥',
      popular: false,
    },
    {
      name: 'Bouleau Jaune',
      description: 'L\'équilibre parfait entre chaleur intense et combustion durable. Facile à allumer.',
      price: '120$/la corde',
      unit: 'la corde',
      icon: '🌳',
      popular: false,
    },
    {
      name: 'Frêne Blanc',
      description: 'Chaleur immédiate et constante. Idéal pour démarrer vos feux rapidement.',
      price: '115$/la corde',
      unit: 'la corde',
      icon: '🪵',
      popular: false,
    },
    {
      name: 'Granulés Premium',
      description: 'Granulés de bois 100% naturels. Combustion propre et efficace pour poêles à granulés.',
      price: '250$/pallet',
      unit: 'le pallet',
      icon: '🌾',
      popular: false,
    },
  ]

  const advantages = [
    {
      icon: <FaClipboardList className="text-4xl" />,
      title: '1. Commander',
      description: 'Remplissez notre formulaire en ligne simple et rapide. Choisissez votre type de bois et quantité.',
    },
    {
      icon: <FaCalendarAlt className="text-4xl" />,
      title: '2. Planifier',
      description: 'Nous vous contactons pour confirmer la commande et planifier la livraison selon vos disponibilités.',
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: '3. Livraison Express',
      description: 'Livré chez vous en 48h maximum. Service professionnel et ponctuel garanti.',
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: '4. Satisfaction Garantie',
      description: 'Qualité irréprochable ou argent remis. Votre satisfaction est notre engagement.',
    },
  ]

  const testimonials = [
    {
      name: 'Marie Tremblay',
      location: 'Sainte-Foy',
      rating: 5,
      text: 'Service exceptionnel ! Le bois d\'érable brûle parfaitement, bien sec et fendu avec précision. Livraison rapide et cordage impeccable. Je recommande sans hésiter !',
    },
    {
      name: 'Jean-François Bouchard',
      location: 'Beauport',
      rating: 5,
      text: 'Client fidèle depuis 3 ans. Le bois d\'érable produit une chaleur intense et durable. Rapport qualité-prix imbattable dans la région !',
    },
    {
      name: 'Sophie Gagnon',
      location: 'Cap-Rouge',
      rating: 5,
      text: 'Service professionnel remarquable ! Le livreur a même pris le temps de bien corler le bois dans mon cabanon. Excellence du service à la clientèle !',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1574271143515-fb71e1f4edf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`
          }}
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🔥</div>
          <div className="absolute bottom-20 right-20 text-9xl">🪵</div>
          <div className="absolute top-1/2 left-1/4 text-7xl">🍁</div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6 shadow-lg">
              <FaFire className="mr-2" />
              <span className="font-semibold text-sm">Commerce de bois et matériaux • Transformation • Vente depuis 2010</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
              BOIS DE CHAUFFAGE <span className="text-orange-400">BARBE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Commerce de détail de bois et matériaux de construction. Achat de bois en longueur, transformation et vente de bois de chauffage premium à Québec.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/produits" className="btn-primary-orange w-full sm:w-auto">
                Commandez dès maintenant
              </Link>
              <Link href="/produits" className="btn-outline-white w-full sm:w-auto">
                <FaLeaf className="inline mr-2" />
                Découvrir nos produits
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="hero-stat-card">
                <div className="text-3xl font-bold text-orange-400">15+</div>
                <div className="text-sm text-gray-200">Années d'expérience</div>
              </div>
              <div className="hero-stat-card">
                <div className="text-3xl font-bold text-orange-400">2000+</div>
                <div className="text-sm text-gray-200">Clients satisfaits</div>
              </div>
              <div className="hero-stat-card">
                <div className="text-3xl font-bold text-orange-400">24h</div>
                <div className="text-sm text-gray-200">Service continu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Notre Sélection Premium</h2>
            <p className="section-subtitle mx-auto">
              Bois franc d'exception, séché naturellement et livré prêt à brûler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className={`card relative ${product.popular ? 'ring-2 ring-forest-500' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-3 -right-3 bg-forest-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Populaire
                  </div>
                )}
                
                <div className="text-6xl mb-4 text-center">{product.icon}</div>
                
                <h3 className="text-2xl font-display font-bold text-primary-800 mb-2 text-center">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-center min-h-[3rem]">
                  {product.description}
                </p>
                
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-forest-700">{product.price}</span>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-forest-600 mr-2 flex-shrink-0" />
                    Fendu et prêt à brûler
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-forest-600 mr-2 flex-shrink-0" />
                    Séché 12-18 mois
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-forest-600 mr-2 flex-shrink-0" />
                    Livraison incluse
                  </li>
                </ul>

                <Link
                  href="/produits"
                  className={product.popular ? 'btn-primary w-full text-center block' : 'btn-outline w-full text-center block'}
                >
                  Commander
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/produits" className="btn-secondary">
              Découvrir toute notre gamme
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest-50 to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Comment Ça Marche?</h2>
            <p className="section-subtitle mx-auto">
              Un processus simple et efficace pour commander votre bois de chauffage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 text-forest-700 rounded-full mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-primary-800 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Témoignages de Nos Clients</h2>
            <p className="section-subtitle mx-auto">
              La confiance et la satisfaction de nos clients font notre fierté
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-primary-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-forest-700 to-forest-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Commandez Dès Maintenant Votre Bois Premium
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous par téléphone ou en ligne. Livraison rapide garantie dans toute la région !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produits" className="bg-white text-forest-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
              <FaPhone className="inline mr-2" />
              Commandez maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
