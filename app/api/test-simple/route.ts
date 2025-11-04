import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('🔥 API TEST BASIQUE APPELÉE')
  
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    
    console.log('✅ FormData reçue, nom:', name)
    console.log('🔑 Variables env:', {
      hasResendKey: !!process.env.RESEND_API_KEY,
      contactEmail: process.env.CONTACT_EMAIL
    })
    
    return NextResponse.json({
      success: true,
      message: 'API test fonctionne',
      receivedName: name,
      hasApiKey: !!process.env.RESEND_API_KEY
    })
    
  } catch (error) {
    console.error('❌ Erreur API test:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erreur inconnue'
    }, { status: 500 })
  }
}