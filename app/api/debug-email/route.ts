import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const logs = {
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'NON CONFIGURÉ',
      RESEND_API_KEY: process.env.RESEND_API_KEY ? 
        `Configuré (${process.env.RESEND_API_KEY.substring(0, 8)}...)` : 
        'NON CONFIGURÉ',
      NETLIFY: process.env.NETLIFY || 'false',
    },
    formStatus: 'API active et fonctionnelle',
    instructions: {
      step1: 'Créer compte sur resend.com',
      step2: 'Obtenir clé API',
      step3: 'Mettre à jour RESEND_API_KEY dans .env',
      step4: 'Déployer avec git push',
      step5: 'Tester le formulaire'
    }
  }

  return NextResponse.json(logs, { 
    headers: { 'Content-Type': 'application/json' },
    status: 200 
  })
}