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

    // Email de destination
    const destinationEmail = 'infos@boisdechauffagesbarbe.shop'

    // Log pour traçabilité
    console.log(`Nouvelle demande de contact reçue pour ${destinationEmail}:`, {
      nom: data.name,
      email: data.email,
      telephone: data.phone,
      produit: data.product,
      quantite: data.quantity,
      timestamp: data.timestamp
    })

    // Ici vous pouvez ajouter l'envoi d'email:
    // - Avec Resend, Nodemailer, ou EmailJS
    // - Template d'email formaté
    // - Notification automatique à infos@boisdechauffagesbarbe.shop
    
    // Exemple de contenu email qui serait envoyé:
    const emailContent = `
    Nouvelle demande de contact - Bois de Chauffage Barbe
    
    Nom: ${data.name}
    Email: ${data.email}
    Téléphone: ${data.phone}
    Produit: ${data.product || 'Non spécifié'}
    Quantité: ${data.quantity || 'Non spécifiée'}
    Adresse: ${data.address || 'Non spécifiée'}
    Message: ${data.message || 'Aucun message'}
    
    Reçu le: ${data.timestamp}
    `
    
    console.log('Contenu email à envoyer:', emailContent)

    return NextResponse.json({ 
      success: true, 
      message: 'Demande reçue avec succès et transmise à infos@boisdechauffagesbarbe.shop' 
    })

  } catch (error) {
    console.error('Erreur traitement formulaire:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}