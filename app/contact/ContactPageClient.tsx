'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    address: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Validation côté client
      if (!formData.name || !formData.email || !formData.phone) {
        setError('Veuillez remplir tous les champs obligatoires.')
        setLoading(false)
        return
      }

      // Validation email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setError('Veuillez entrer une adresse email valide.')
        setLoading(false)
        return
      }

      // RESEND UNIQUEMENT - Désactiver Netlify Forms  
      let success = false // Force l'échec de Netlify pour utiliser Resend

      // Netlify Forms désactivé - utilisation de Resend uniquement
      /*
      console.log('📧 Tentative d\'envoi...')

      // Test avec API simple d'abord
      try {
        const apiFormData = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          apiFormData.append(key, value)
        })

        console.log('🧪 Test API simple...')
        const testResponse = await fetch('/api/test-simple', {
          method: 'POST',
          body: apiFormData,
        })
        
        const testResult = await testResponse.json()
        console.log('🔍 Résultat API test:', testResult)
        
        if (testResult.success) {
          console.log('✅ API test réussie! Variables env:', testResult)
          
          // Maintenant essayer Resend
          const resendResponse = await fetch('/api/contact-resend-only', {
            method: 'POST',
            body: apiFormData,
          })
          
          const resendResult = await resendResponse.json()
          console.log('🔍 Résultat Resend:', resendResult)
          
          if (resendResult.success) {
            console.log('✅ Email envoyé avec succès via Resend!')
          } else {
            console.log('❌ Échec Resend mais API fonctionne:', resendResult.error)
          }
        } else {
          console.log('❌ API test échouée:', testResult.error)
        }
      } catch (error) {
        console.error('❌ Erreur complète:', error)
      }

      // Toujours marquer comme succès pour le test
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        address: '',
        message: '',
      })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
      */

      // Si Netlify échoue, utiliser notre API
      if (!success) {
        const apiFormData = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          apiFormData.append(key, value)
        })

        // RESEND UNIQUEMENT - Test direct
        try {
          const resendOnlyResponse = await fetch('/api/contact-resend-only', {
            method: 'POST',
            body: apiFormData,
          })
          
          const resendResult = await resendOnlyResponse.json()
          console.log('🔍 Résultat Resend:', resendResult)
          
          if (resendResult.success) {
            success = true
            console.log('✅ Succès via Resend!')
          } else {
            console.log('❌ Échec Resend:', resendResult.error)
            setError(`Erreur d'envoi: ${resendResult.error || 'Service indisponible'}. Veuillez nous appeler au (450) 529-0479.`)
          }
        } catch (resendError) {
          console.log('❌ Erreur Resend:', resendError)
          setError('Erreur de connexion. Veuillez nous appeler directement au (450) 529-0479.')
        }
      }

      if (success) {
        setSubmitted(true)
        
        // Réinitialiser après 5 secondes
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            product: '',
            quantity: '',
            address: '',
            message: '',
          })
        }, 5000)
      } else {
        throw new Error('Aucun service de formulaire disponible')
      }
    } catch (error) {
      console.error('Error:', error)
      setError('Erreur lors de l\'envoi. Veuillez réessayer ou nous appeler directement au (450) 529-0479.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-forest-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">Contactez-nous</h1>
            <p className="section-subtitle mx-auto">
              Prêt à commander? Une question? Notre équipe est là pour vous aider!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info - Appears second on mobile, first on desktop */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <h2 className="text-2xl font-display font-bold text-primary-800 mb-6">
                  Nos Coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-forest-100 p-3 rounded-lg">
                      <FaPhone className="text-forest-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-1">Téléphone</h3>
                      <a href="tel:+14505290479" className="text-forest-600 hover:text-forest-700">
                        (450) 529-0479
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Ouvert 24h/24<br />
                        Service continu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-forest-100 p-3 rounded-lg">
                      <FaEnvelope className="text-forest-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-1">Courriel</h3>
                      <a href="mailto:info@boisdechauffagesbarbe.shop" className="text-forest-600 hover:text-forest-700">
                        info@boisdechauffagesbarbe.shop
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Réponse en moins de 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-forest-100 p-3 rounded-lg">
                      <FaMapMarkerAlt className="text-forest-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-1">Adresse</h3>
                      <p className="text-gray-700">
                        2840 Route 148<br />
                        Pontiac (Québec) J0X2G0<br />
                        Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-forest-100 p-3 rounded-lg">
                      <FaClock className="text-forest-700 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-800 mb-1">Heures d'ouverture</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Ouvert 24h/24</strong><br />
                        <strong>7 jours sur 7</strong><br />
                        <strong>Service continu</strong>
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-primary-800 mb-3">Suivez-nous</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-forest-100 p-3 rounded-lg text-forest-700 hover:bg-forest-200 transition-colors"
                      >
                        <FaFacebook className="text-xl" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-forest-100 p-3 rounded-lg text-forest-700 hover:bg-forest-200 transition-colors"
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Appears first on mobile, second on desktop */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="card">
                  <h2 className="text-2xl font-display font-bold text-primary-800 mb-6">
                    Formulaire de Commande / Contact
                  </h2>

                  {submitted && (
                    <div className="bg-forest-100 border-l-4 border-forest-600 text-forest-800 p-4 mb-6 rounded">
                      <p className="font-semibold">✅ Merci pour votre message!</p>
                      <p className="text-sm">Nous vous contacterons dans les plus brefs délais (sous 24h).</p>
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-100 border-l-4 border-red-600 text-red-800 p-4 mb-6 rounded">
                      <p className="font-semibold">❌ Erreur</p>
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
                          placeholder="Jean Tremblay"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
                          placeholder="(450) 529-0479"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Courriel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
                        placeholder="jean.tremblay@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
                          Produit désiré
                        </label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="erable">Érable Dur</option>
                          <option value="melange">Mélange Premium</option>
                          <option value="bouleau">Bouleau Jaune</option>
                          <option value="granules">Granulés Premium</option>
                          <option value="frene">Frêne Blanc</option>
                          <option value="allumage">Bois d'Allumage</option>
                          <option value="autre">Autre / Question</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                          Quantité
                        </label>
                        <select
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
                        >
                          <option value="">Sélectionnez...</option>
                          <option value="demi">Demi-corde (1/2)</option>
                          <option value="1">1 corde</option>
                          <option value="2">2 cordes</option>
                          <option value="3">3 cordes</option>
                          <option value="4+">4 cordes et plus</option>
                          <option value="1-pallet">1 pallet (granulés)</option>
                          <option value="2-pallet">2 pallets (granulés)</option>
                          <option value="3-pallet">3 pallets (granulés)</option>
                          <option value="4+-pallet">4 pallets et plus (granulés)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                        Adresse de livraison
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
                        placeholder="123 Rue Principale, Québec, QC"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message ou instructions spéciales
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors resize-none"
                        placeholder="Indiquez-nous toute information pertinente: date de livraison souhaitée, instructions d'accès, questions, etc."
                      />
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        className="mt-1 mr-2 h-4 w-4 text-forest-600 focus:ring-forest-500 border-gray-300 rounded"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        J'accepte d'être contacté par Bois de Chauffage Barbe concernant ma demande. 
                        Vos informations ne seront jamais partagées avec des tiers.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Envoi en cours...' : 'Envoyer la Demande'}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      Vous préférez appeler? <a href="tel:+14505290479" className="text-forest-600 font-semibold hover:text-forest-700">(450) 529-0479</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Google Maps */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary-800 mb-8 text-center">
              Notre Emplacement
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.8384579935756!2d-71.2149421!3d46.8138783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb895d7f1f3f9e5%3A0x5a7e3f7c8d2f3e8!2sQu%C3%A9bec%2C%20QC!5e0!3m2!1sfr!2sca!4v1698165432100!5m2!1sfr!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de l'emplacement de Bois de Chauffage Barbe"
                className="w-full"
              />
              
              {/* Info Bar Below Map */}
              <div className="p-6 bg-gradient-to-r from-forest-50 to-primary-50 border-t-4 border-forest-600">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-2xl text-forest-600" />
                    <div>
                      <h3 className="font-bold text-primary-800">2840 QC-148</h3>
                      <p className="text-sm text-gray-600">Pontiac, QC J0X 2G0</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir//2840+QC-148,+Pontiac,+QC+J0X+2G0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <FaMapMarkerAlt />
                    Obtenir l'itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
