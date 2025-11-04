import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(request: NextRequest) {
  try {
    // Vérifications de base
    const hasApiKey = !!process.env.RESEND_API_KEY
    const apiKeyValue = process.env.RESEND_API_KEY
    const isTestKey = apiKeyValue === 're_123456789_CHANGEZ_MOI'
    
    console.log('=== DIAGNOSTIC RESEND ===')
    console.log('API Key présente:', hasApiKey)
    console.log('API Key value:', apiKeyValue ? `${apiKeyValue.substring(0, 8)}...` : 'MANQUANTE')
    console.log('Est-ce la clé de test?:', isTestKey)
    
    if (!hasApiKey || isTestKey) {
      return NextResponse.json({
        status: 'ERREUR',
        problem: 'Clé API Resend manquante ou invalide',
        solution: 'Configurez RESEND_API_KEY avec une vraie clé de resend.com',
        hasApiKey,
        isTestKey,
        apiKeyPreview: apiKeyValue ? `${apiKeyValue.substring(0, 8)}...` : 'AUCUNE'
      })
    }

    // Test de la connexion Resend
    const resend = new Resend(apiKeyValue!)
    
    try {
      // Test d'envoi vers une adresse de test
      const result = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['delivered@resend.dev'], // Adresse de test de Resend
        subject: 'Test Bois de Chauffage Barbe',
        html: '<h1>Test de configuration Resend</h1><p>Si vous recevez cet email, Resend fonctionne!</p>',
      })

      console.log('✅ Test Resend réussi:', result)

      return NextResponse.json({
        status: 'SUCCÈS',
        message: 'Resend fonctionne parfaitement!',
        testResult: result,
        solution: 'Resend est configuré. Le problème pourrait être l\'adresse de destination.'
      })

    } catch (resendError: any) {
      console.error('❌ Erreur test Resend:', resendError)
      
      return NextResponse.json({
        status: 'ERREUR_RESEND',
        error: resendError.message || 'Erreur inconnue',
        details: resendError,
        solution: 'Vérifiez votre clé API Resend ou le domaine configuré'
      })
    }

  } catch (error: any) {
    console.error('Erreur diagnostic Resend:', error)
    return NextResponse.json({
      status: 'ERREUR_GENERALE',
      error: error.message,
      solution: 'Erreur inattendue dans le diagnostic'
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { testEmail } = await request.json()
    
    if (!testEmail) {
      return NextResponse.json({ error: 'Email de test requis' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY!)
    
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [testEmail],
      subject: 'Test Formulaire - Bois de Chauffage Barbe',
      html: `
        <h2>🧪 Test de Configuration Email</h2>
        <p>Si vous recevez cet email, la configuration Resend fonctionne parfaitement!</p>
        <p><strong>Destinataire testé:</strong> ${testEmail}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <hr>
        <p>Vous pouvez maintenant utiliser le formulaire de contact en toute confiance.</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: `Email de test envoyé à ${testEmail}`,
      result
    })

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error
    }, { status: 500 })
  }
}