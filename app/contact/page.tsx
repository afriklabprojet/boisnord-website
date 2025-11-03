import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contactez-nous - Commandez Votre Bois | Bois de Chauffage Barbe',
  description: 'Contactez Bois de Chauffage Barbe pour commander votre bois de chauffage ou poser vos questions. Téléphone: (450) 529-0479. Formulaire en ligne disponible 24/7.',
}

export default function ContactPage() {
  return <ContactPageClient />
}
