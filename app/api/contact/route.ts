import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialisation de Resend si la clé API est configurée
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      product: formData.get('product'),
      quantity: formData.get('quantity'),
      address: formData.get('address'),
      message: formData.get('message'),
      timestamp: new Date().toISOString(),
    }

    // Validation basique
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      )
    }

    // Email de destination
    const destinationEmail = process.env.CONTACT_EMAIL || 'infos@boisdechauffagesbarbe.shop'

    // Log pour traçabilité
    console.log(`Nouvelle demande de contact reçue pour ${destinationEmail}:`, {
      nom: data.name,
      email: data.email,
      telephone: data.phone,
      produit: data.product,
      quantite: data.quantity,
      timestamp: data.timestamp
    })

    // Contenu de l'email
    const emailContent = `
    <h2>Nouvelle demande de contact - Bois de Chauffage Barbe</h2>
    
    <h3>Informations du client:</h3>
    <ul>
      <li><strong>Nom:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Téléphone:</strong> ${data.phone}</li>
      <li><strong>Produit:</strong> ${data.product || 'Non spécifié'}</li>
      <li><strong>Quantité:</strong> ${data.quantity || 'Non spécifiée'}</li>
      <li><strong>Adresse:</strong> ${data.address || 'Non spécifiée'}</li>
    </ul>
    
    <h3>Message:</h3>
    <p>${data.message || 'Aucun message spécifique'}</p>
    
    <hr>
    <p><small>Reçu le: ${data.timestamp}</small></p>
    <p><small>Site: https://chauffagebois.netlify.app</small></p>
    `

    let emailSent = false

    // Tentative d'envoi via Resend
    if (resend && process.env.RESEND_API_KEY !== 're_123456789_CHANGEZ_MOI') {
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev', // Utilise l'adresse par défaut de Resend
          to: [destinationEmail],
          subject: `[Site Web] Nouvelle demande - ${data.name}`,
          html: emailContent,
          replyTo: data.email as string,
        })
        emailSent = true
        console.log('Email envoyé via Resend avec succès')
      } catch (resendError) {
        console.error('Erreur Resend:', resendError)
        console.log('Détails erreur:', JSON.stringify(resendError, null, 2))
      }
    }

    // Si Resend échoue, fallback vers notification simple
    if (!emailSent) {
      console.log('=== EMAIL NON ENVOYÉ - CONFIGURATION REQUISE ===')
      console.log('Contenu email qui devrait être envoyé:')
      console.log(emailContent)
      console.log('=== FIN DU CONTENU EMAIL ===')
    }

    return NextResponse.json({ 
      success: true, 
      message: emailSent 
        ? 'Demande envoyée avec succès!' 
        : 'Demande reçue et sera traitée manuellement. Configuration email requise.',
      emailSent
    })

  } catch (error) {
    console.error('Erreur traitement formulaire:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}