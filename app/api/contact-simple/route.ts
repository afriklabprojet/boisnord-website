import { NextRequest, NextResponse } from 'next/server'

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

    // Log complet de la demande
    console.log('=== NOUVELLE DEMANDE DE CONTACT ===')
    console.log('Timestamp:', data.timestamp)
    console.log('Nom:', data.name)
    console.log('Email:', data.email) 
    console.log('Téléphone:', data.phone)
    console.log('Produit:', data.product || 'Non spécifié')
    console.log('Quantité:', data.quantity || 'Non spécifiée')
    console.log('Adresse:', data.address || 'Non spécifiée')
    console.log('Message:', data.message || 'Aucun message')
    console.log('=== FIN DEMANDE ===')

    // Format email pour copier-coller
    const emailText = `
NOUVELLE DEMANDE DE CONTACT - BOIS DE CHAUFFAGE BARBE

Client: ${data.name}
Email: ${data.email}
Téléphone: ${data.phone}
Produit: ${data.product || 'Non spécifié'}
Quantité: ${data.quantity || 'Non spécifiée'}  
Adresse: ${data.address || 'Non spécifiée'}
Message: ${data.message || 'Aucun message'}

Reçu le: ${data.timestamp}
Site: https://chauffagebois.netlify.app
    `

    console.log('EMAIL À ENVOYER MANUELLEMENT:')
    console.log(emailText)

    return NextResponse.json({ 
      success: true, 
      message: 'Demande reçue et loggée avec succès. Vérifiez les logs Netlify.',
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        timestamp: data.timestamp
      }
    })

  } catch (error) {
    console.error('Erreur traitement formulaire:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}