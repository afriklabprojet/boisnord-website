// Exemple d'intégration avec Resend pour envoyer les emails
// Installer: npm install resend

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(data: any) {
  const destinationEmail = 'infos@boisdechauffagesbarbe.shop'
  
  try {
    const emailResult = await resend.emails.send({
      from: 'contact@boisdechauffagesbarbe.shop', // Domaine vérifié
      to: [destinationEmail],
      subject: `Nouvelle demande - ${data.name} (${data.product || 'Contact général'})`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>Produit:</strong> ${data.product || 'Non spécifié'}</p>
        <p><strong>Quantité:</strong> ${data.quantity || 'Non spécifiée'}</p>
        <p><strong>Adresse de livraison:</strong> ${data.address || 'Non spécifiée'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || 'Aucun message additionnel'}</p>
        <hr>
        <p><small>Reçu le: ${new Date(data.timestamp).toLocaleString('fr-CA')}</small></p>
      `,
      text: `
        Nouvelle demande de contact
        
        Nom: ${data.name}
        Email: ${data.email}
        Téléphone: ${data.phone}
        Produit: ${data.product || 'Non spécifié'}
        Quantité: ${data.quantity || 'Non spécifiée'}
        Adresse: ${data.address || 'Non spécifiée'}
        Message: ${data.message || 'Aucun message'}
        
        Reçu le: ${new Date(data.timestamp).toLocaleString('fr-CA')}
      `
    })

    console.log('Email envoyé avec succès à', destinationEmail, emailResult)
    return { success: true, id: emailResult.data?.id }
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return { success: false, error }
  }
}

// Exemple d'utilisation dans app/api/contact/route.ts:
/*
import { sendContactEmail } from './email-service'

// Dans la fonction POST:
const emailSent = await sendContactEmail(data)
if (emailSent.success) {
  console.log('Email envoyé à infos@boisdechauffagesbarbe.shop')
}
*/