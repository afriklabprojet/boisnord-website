import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  console.log('🚨🚨🚨 API CONTACT-RESEND-ONLY APPELÉE 🚨🚨🚨')
  console.log('Timestamp:', new Date().toISOString())
  
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

    // Utiliser le domaine vérifié pour l'envoi
    const destinationEmail = process.env.CONTACT_EMAIL || 'infos@boisdechauffagesbarbe.shop'

    console.log('=== TEST RESEND UNIQUEMENT ===')
    console.log('Destination:', destinationEmail)
    console.log('RESEND_API_KEY présente:', !!process.env.RESEND_API_KEY)
    console.log('RESEND_API_KEY preview:', process.env.RESEND_API_KEY?.substring(0, 10))

    let emailSent = false
    let errorDetails = null

    // Test UNIQUEMENT Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        console.log('🔄 Tentative envoi Resend...')
        
        const result = await resend.emails.send({
          from: 'noreply@boisdechauffagesbarbe.shop', // Utiliser votre domaine vérifié
          to: [destinationEmail],
          subject: `[Bois Barbe] Nouvelle demande - ${data.name}`,
          html: `
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
            <p><small>Site: https://www.boisdechauffagesbarbe.shop</small></p>
          `,
          replyTo: data.email as string,
        })

        emailSent = true
        console.log('✅ SUCCESS! Email envoyé via Resend')
        console.log('Resend Result:', JSON.stringify(result, null, 2))

      } catch (resendError: any) {
        console.error('❌ ERREUR RESEND DÉTAILLÉE:', resendError)
        console.error('Type d\'erreur:', typeof resendError)
        console.error('Message:', resendError.message)
        console.error('Code:', resendError.code)
        console.error('Status:', resendError.status)
        console.error('Stack:', resendError.stack)
        
        errorDetails = {
          message: resendError.message,
          code: resendError.code,
          status: resendError.status,
          name: resendError.name,
          full: JSON.stringify(resendError, null, 2)
        }
      }
    } else {
      console.log('❌ Pas de clé API Resend')
      errorDetails = { message: 'RESEND_API_KEY manquante' }
    }

    // Log du contenu pour référence manuelle
    console.log('=== CONTENU EMAIL (référence) ===')
    console.log(`
Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone}
Produit: ${data.product || 'Non spécifié'}
Quantité: ${data.quantity || 'Non spécifiée'}
Adresse: ${data.address || 'Non spécifiée'}
Message: ${data.message || 'Aucun message'}
Timestamp: ${data.timestamp}
    `)
    console.log('=== FIN CONTENU ===')

    return NextResponse.json({ 
      success: emailSent,
      message: emailSent 
        ? '🎉 Email envoyé avec succès via Resend!' 
        : '❌ Échec envoi Resend - voir errorDetails',
      emailSent,
      errorDetails,
      loggedData: data,
      testInfo: {
        destination: destinationEmail,
        hasApiKey: !!process.env.RESEND_API_KEY,
        apiKeyPreview: process.env.RESEND_API_KEY?.substring(0, 10)
      }
    })

  } catch (error: any) {
    console.error('Erreur générale API Resend-only:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Erreur serveur', 
        details: error.message,
        stack: error.stack 
      },
      { status: 500 }
    )
  }
}