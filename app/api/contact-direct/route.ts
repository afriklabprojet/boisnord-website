import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    const destinationEmail = process.env.CONTACT_EMAIL || 'infos@boisdechauffagesbarbe.shop'

    console.log('=== TEST EMAIL DIRECT ===')
    console.log('Destination:', destinationEmail)
    console.log('Data reçue:', data)

    // Configuration SMTP simple (Gmail par exemple)
    let emailSent = false
    
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        })

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: destinationEmail,
          subject: `[Site Web] Nouvelle demande - ${data.name}`,
          html: `
            <h2>Nouvelle demande de contact</h2>
            <p><strong>Nom:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Téléphone:</strong> ${data.phone}</p>
            <p><strong>Produit:</strong> ${data.product || 'Non spécifié'}</p>
            <p><strong>Quantité:</strong> ${data.quantity || 'Non spécifiée'}</p>
            <p><strong>Adresse:</strong> ${data.address || 'Non spécifiée'}</p>
            <p><strong>Message:</strong> ${data.message || 'Aucun message'}</p>
            <hr>
            <p>Reçu le: ${data.timestamp}</p>
          `,
          replyTo: data.email as string
        })

        emailSent = true
        console.log('✅ Email envoyé via SMTP avec succès')
      } catch (smtpError) {
        console.error('❌ Erreur SMTP:', smtpError)
      }
    }

    // Log pour debugging manuel
    console.log('=== EMAIL CONTENT (pour copier-coller) ===')
    console.log(`
Nouvelle demande de contact - Bois de Chauffage Barbe

Nom: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone}
Produit: ${data.product || 'Non spécifié'}
Quantité: ${data.quantity || 'Non spécifiée'}
Adresse: ${data.address || 'Non spécifiée'}
Message: ${data.message || 'Aucun message'}

Reçu le: ${data.timestamp}
Site: https://chauffagebois.netlify.app
    `)
    console.log('=== FIN EMAIL CONTENT ===')

    return NextResponse.json({ 
      success: true, 
      message: emailSent ? 'Email envoyé avec succès!' : 'Demande reçue et loggée. Vérifiez les logs Netlify.',
      emailSent,
      loggedData: data
    })

  } catch (error) {
    console.error('Erreur API contact direct:', error)
    return NextResponse.json(
      { error: 'Erreur serveur', details: error },
      { status: 500 }
    )
  }
}