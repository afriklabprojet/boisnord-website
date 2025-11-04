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
      RESEND_IS_TEST_KEY: process.env.RESEND_API_KEY === 're_123456789_CHANGEZ_MOI',
      NETLIFY: process.env.NETLIFY || 'false',
      SMTP_USER: process.env.SMTP_USER || 'NON CONFIGURÉ',
      SMTP_CONFIGURED: !!(process.env.SMTP_USER && process.env.SMTP_PASS)
    },
    diagnostics: {
      resendStatus: process.env.RESEND_API_KEY 
        ? (process.env.RESEND_API_KEY === 're_123456789_CHANGEZ_MOI' ? 'CLÉ DE TEST' : 'CONFIGURÉ')
        : 'NON CONFIGURÉ',
      emailDestination: process.env.CONTACT_EMAIL || 'infos@boisdechauffagesbarbe.shop',
      formStatus: 'API active et fonctionnelle'
    },
    tests: {
      resendTest: 'GET /api/test-resend',
      directTest: 'POST /api/contact-direct', 
      simpleTest: 'POST /api/contact-simple'
    },
    instructions: {
      step1: 'Créer compte sur resend.com',
      step2: 'Obtenir clé API (re_...)',
      step3: 'Mettre à jour RESEND_API_KEY dans .env',
      step4: 'Déployer avec git push',
      step5: 'Tester avec GET /api/test-resend'
    }
  }

  return NextResponse.json(logs, { 
    headers: { 'Content-Type': 'application/json' },
    status: 200 
  })
}