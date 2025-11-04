import type { Metadata } from 'next'
import Link from 'next/link'
import { FaTruck, FaMapMarkedAlt, FaClock, FaDollarSign, FaBoxes, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Livraison de Bois de Chauffage à Québec | Bois de Chauffage Barbe',
  description: 'Livraison rapide de bois de chauffage dans toute la région de Québec. Service 48h, zones de livraison, tarifs et modalités. Commandez dès maintenant!',
}

export default function LivraisonPage() {
  const zones = [
    {
      name: 'Zone 1 - Gratuit',
      areas: ['Ville de Québec', 'Sainte-Foy', 'Sillery', 'Cap-Rouge', 'L\'Ancienne-Lorette', 'Saint-Augustin'],
      fee: 'Inclus',
      color: 'forest',
    },
    {
      name: 'Zone 2',
      areas: ['Beauport', 'Charlesbourg', 'Boischatel', 'L\'Ange-Gardien', 'Château-Richer', 'Wendake'],
      fee: '25$',
      color: 'primary',
    },
    {
      name: 'Zone 3',
      areas: ['Stoneham', 'Lac-Beauport', 'Shannon', 'Fossambault', 'Neuville', 'Donnacona'],
      fee: '50$',
      color: 'gray',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-forest-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">Livraison Rapide</h1>
            <p className="section-subtitle mx-auto">
              Nous livrons votre bois de chauffage partout dans la région de Québec. 
              Service rapide, professionnel et courtois garanti!
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-primary-800 mb-12 text-center">
            Comment Ça Fonctionne?
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 text-forest-700 rounded-full mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Commandez</h3>
                <p className="text-gray-600">
                  Formulaire en ligne ou courriel
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 text-forest-700 rounded-full mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Planifiez</h3>
                <p className="text-gray-600">
                  Nous vous contactons pour confirmer la commande
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 text-forest-700 rounded-full mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Recevez</h3>
                <p className="text-gray-600">
                  Notre équipe livre et décharge votre bois
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 text-forest-700 rounded-full mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Profitez!</h3>
                <p className="text-gray-600">
                  Bois prêt à brûler pour votre confort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-primary-800 mb-4 text-center">
            Zones de Livraison
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nous desservons toute la région métropolitaine de Québec. Votre secteur n'est pas listé? 
            Contactez-nous, nous pouvons probablement vous accommoder!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {zones.map((zone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className={`inline-flex items-center bg-${zone.color}-100 text-${zone.color}-700 px-4 py-2 rounded-full mb-4`}>
                  <FaMapMarkedAlt className="mr-2" />
                  <span className="font-semibold">{zone.name}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {zone.areas.map((area, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-forest-600 mr-2 text-sm flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    {zone.fee === 'Inclus' ? (
                      <span className="text-2xl font-bold text-primary-800">{zone.fee}</span>
                    ) : (
                      <>
                        <span className="text-2xl font-bold text-primary-800">{zone.fee}</span>
                        <span className="text-gray-600 text-sm ml-1">/ livraison</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              * Frais de livraison additionnels pour les zones plus éloignées. Contactez-nous pour une soumission.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-12 text-center">
              Informations Pratiques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaClock className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Délai de Livraison</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Livraison généralement dans les <strong>48 heures</strong> suivant votre commande.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Livraison du lundi au samedi</li>
                  <li>• Plages horaires: 8h-12h ou 13h-17h</li>
                  <li>• Appel 30 minutes avant l'arrivée</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaTruck className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Modalités de Livraison</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Nous déchargeons le bois à l'endroit de votre choix (accessible au camion).
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Déchargement standard inclus</li>
                  <li>• Cordage disponible</li>
                  <li>• Accès camion requis</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaDollarSign className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Modes de Paiement</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  options de paiement pour votre commodité.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Virement Interac</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <FaBoxes className="text-3xl text-forest-600 mr-3" />
                  <h3 className="text-xl font-semibold text-primary-800">Services Additionnels</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Options supplémentaires pour faciliter votre vie.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cordage professionnel</li>
                  <li>• Livraison dans cabanon</li>
                  <li>• Commandes récurrentes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-forest-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-12 text-center">
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Dois-je être présent lors de la livraison?
                </h3>
                <p className="text-gray-700">
                  C'est préférable mais pas obligatoire. Indiquez-nous simplement où déposer le bois 
                  et nous nous occupons du reste. Le paiement peut se faire par virement à l'avance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Quelle quantité dois-je commander?
                </h3>
                <p className="text-gray-700">
                  Pour un usage résidentiel normal (chauffage d'appoint), comptez 2 à 3 cordes par saison. 
                  Pour un chauffage principal, prévoyez 4 à 6 cordes. Nous pouvons vous conseiller selon votre situation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Livrez-vous en hiver?
                </h3>
                <p className="text-gray-700">
                  Oui! Nous livrons à l'année. Cependant, nous recommandons de commander à l'automne 
                  pour éviter la haute demande hivernale et garantir une livraison rapide.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Puis-je annuler ou modifier ma commande?
                </h3>
                <p className="text-gray-700">
                  Oui, tant que le bois n'est pas en route. Contactez-nous le plus tôt possible 
                  si vous devez modifier votre commande.
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
            Prêt à Recevoir Votre Bois?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Commandez maintenant et profitez d'une livraison rapide dans votre secteur!
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-white text-forest-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Commandez maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
