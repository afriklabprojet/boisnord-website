'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

interface EmailJSFormData {
  [key: string]: string
  to_email: string
  from_name: string
  from_email: string
  phone: string
  product: string
  quantity: string
  address: string
  message: string
  timestamp: string
}

export default function EmailJSContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    address: '',
    message: '',
  })
  
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.phone) {
        throw new Error('Veuillez remplir tous les champs obligatoires')
      }

      // Préparer les données pour EmailJS
      const emailData: EmailJSFormData = {
        to_email: 'infos@boisdechauffagesbarbe.shop',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        product: formData.product || 'Non spécifié',
        quantity: formData.quantity || 'Non spécifiée',
        address: formData.address || 'Non spécifiée',
        message: formData.message || 'Aucun message',
        timestamp: new Date().toLocaleString('fr-CA')
      }

      console.log('📧 Envoi via EmailJS:', emailData)

      // Configuration EmailJS (ces clés seront configurées)
      const serviceId = 'service_boisnord'
      const templateId = 'template_contact'
      const publicKey = 'votre_public_key_emailjs'

      // Envoi via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        emailData as Record<string, unknown>,
        publicKey
      )

      console.log('✅ Email envoyé avec succès!')
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

    } catch (error: any) {
      console.error('❌ Erreur EmailJS:', error)
      setError(`Erreur lors de l'envoi: ${error.message}. Veuillez réessayer ou nous appeler au (450) 529-0479.`)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="card">
        <div className="bg-forest-100 border-l-4 border-forest-600 text-forest-800 p-6 rounded">
          <h2 className="text-xl font-bold mb-2">✅ Message envoyé avec succès!</h2>
          <p>Merci pour votre demande. Nous vous contacterons dans les plus brefs délais (sous 24h).</p>
          <p className="text-sm mt-2">Destinataire: infos@boisdechauffagesbarbe.shop</p>
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-display font-bold text-primary-800 mb-6">
        Formulaire de Contact - EmailJS
      </h2>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-600 text-red-800 p-4 mb-6 rounded">
          <p className="font-semibold">❌ Erreur</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
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

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Envoi en cours...' : 'Envoyer via EmailJS'}
        </button>

        <p className="text-sm text-gray-600 text-center">
          Destinataire: <strong>infos@boisdechauffagesbarbe.shop</strong><br/>
          Vous préférez appeler? <a href="tel:+14505290479" className="text-forest-600 font-semibold hover:text-forest-700">(450) 529-0479</a>
        </p>
      </form>
    </div>
  )
}