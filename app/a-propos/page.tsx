import type { Metadata } from 'next'
import Link from 'next/link'
import { FaHeart, FaLeaf, FaUsers, FaAward, FaHandshake, FaTree, FaUniversity, FaShieldAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'À Propos - BOIS DE CHAUFFAGE BARBE | Commerce de Bois et Matériaux',
  description: 'BOIS DE CHAUFFAGE BARBE - Commerce de détail de bois et matériaux de construction depuis 2010. Achat de bois en longueur, transformation et vente de bois de chauffage.',
}

export default function AProposPage() {
  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: 'Passion',
      description: 'Le bois de chauffage, c\'est notre métier et notre passion. Nous aimons ce que nous faisons et ça paraît dans la qualité de nos produits.',
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: 'Écologie',
      description: 'Nous utilisons uniquement du bois local, issu de forêts gérées de manière durable. Aucun traitement chimique, 100% naturel.',
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Honnêteté',
      description: 'Transparence totale sur nos produits et nos prix. Pas de surprises, que du bois de qualité AAA garanti.',
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: 'Excellence',
      description: 'Nous ne faisons aucun compromis sur la qualité. Chaque corde est inspectée pour garantir votre satisfaction.',
    },
  ]

  const team = [
    {
      name: 'Michel Boisvert',
      role: 'Fondateur & Propriétaire',
      description: 'Avec plus de 30 ans d\'expérience dans l\'industrie forestière, Michel a fondé Bois de Chauffage Barbe pour offrir du bois de chauffage de qualité supérieure aux Québécois.',
    },
    {
      name: 'Sophie Tremblay',
      role: 'Service à la Clientèle',
      description: 'Sophie s\'assure que chaque client reçoive un service personnalisé et professionnel. C\'est votre contact principal pour toutes vos questions.',
    },
    {
      name: 'Jean-François Gagnon',
      role: 'Responsable Livraison',
      description: 'JF coordonne toutes nos livraisons avec soin et professionnalisme. Il s\'assure que votre bois arrive à temps et en parfait état.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-forest-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">À Propos de BOIS DE CHAUFFAGE BARBE</h1>
            <p className="section-subtitle mx-auto">
              Commerce de détail de bois et matériaux de construction depuis 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-800 mb-6">
                  Notre Histoire
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bois de Chauffage Barbe a vu le jour en 2010 quand Michel Boisvert, fort de ses 30 années 
                    d'expérience dans l'industrie forestière, a décidé de mettre son expertise au 
                    service des familles québécoises.
                  </p>
                  <p>
                    Frustré par le manque de qualité et de professionnalisme dans l'industrie du bois 
                    de chauffage, Michel a fondé Bois de Chauffage Barbe avec une mission simple: offrir le meilleur 
                    bois de chauffage au Québec, accompagné d'un service irréprochable.
                  </p>
                  <p>
                    Aujourd'hui, plus de 15 ans plus tard, Bois de Chauffage Barbe est devenu la référence en matière 
                    de bois de chauffage dans la région de Québec, avec plus de 2000 clients satisfaits 
                    qui nous font confiance année après année.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-forest-100 to-primary-100 rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <FaTree className="text-6xl text-forest-700 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary-800">Notre Mission</h3>
                  </div>
                  <p className="text-gray-700 text-center italic">
                    "Fournir du bois de chauffage de qualité supérieure tout en offrant un service 
                    client exceptionnel et en respectant notre environnement."
                  </p>
                  <div className="mt-6 pt-6 border-t border-primary-200">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-forest-700">15+</div>
                        <div className="text-sm text-gray-600">Ans d'expérience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-forest-700">2000+</div>
                        <div className="text-sm text-gray-600">Clients fidèles</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ce qui guide nos actions au quotidien et fait la différence Bois de Chauffage Barbe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-forest-100 text-forest-700 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-primary-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des personnes passionnées et dévouées à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-forest-100 to-primary-100 rounded-full mb-4 text-4xl">
                  <FaUsers className="text-forest-700" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-forest-600 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-forest-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-8 text-center">
              Notre Engagement Envers Vous
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start mb-3">
                  <div className="bg-forest-100 p-2 rounded-lg mr-3">
                    <FaLeaf className="text-forest-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Qualité Garantie</h3>
                    <p className="text-sm text-gray-600">
                      Chaque corde est inspectée. Si vous n'êtes pas satisfait, nous reprenons le bois, point final.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start mb-3">
                  <div className="bg-forest-100 p-2 rounded-lg mr-3">
                    <FaHandshake className="text-forest-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Service Personnalisé</h3>
                    <p className="text-sm text-gray-600">
                      Vous parlez directement avec nous, pas avec un système automatisé. Service humain garanti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start mb-3">
                  <div className="bg-forest-100 p-2 rounded-lg mr-3">
                    <FaTree className="text-forest-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Approvisionnement Local</h3>
                    <p className="text-sm text-gray-600">
                      Notre bois provient de forêts québécoises gérées de manière responsable et durable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start mb-3">
                  <div className="bg-forest-100 p-2 rounded-lg mr-3">
                    <FaAward className="text-forest-700 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Prix Honnêtes</h3>
                    <p className="text-sm text-gray-600">
                      Tarifs transparents, sans frais cachés. Vous savez exactement ce que vous payez.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Modes de Paiement</h2>
            <p className="section-subtitle mx-auto">
              Plusieurs options de paiement pour votre commodité
            </p>
          </div>

          <div className="flex justify-center">
            {/* Virement Interac */}
            <div className="card text-center hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 max-w-md">
              <div className="mb-6">
                <div className="bg-orange-100 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <FaUniversity className="text-3xl text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Virement Interac</h3>
              <p className="text-gray-600 mb-4">
                Paiement sécurisé par virement électronique
              </p>
              <div className="bg-orange-50 rounded-lg p-3">
                <span className="text-orange-700 font-medium">Recommandé</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                <FaShieldAlt className="inline text-green-600 mr-2" />
                Paiement Sécurisé Garanti
              </h3>
              <p className="text-gray-600">
                Toutes nos transactions sont sécurisées. Nous acceptons les paiements avant ou à la livraison selon votre préférence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-forest-700 to-forest-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Rejoignez Notre Famille de Clients Satisfaits
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Découvrez pourquoi plus de 2000 familles nous font confiance pour leur bois de chauffage!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produits" className="bg-white text-forest-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Voir nos Produits
            </Link>
            <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
