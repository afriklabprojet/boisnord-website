import EmailJSContactForm from '@/components/EmailJSContactForm'

export default function TestEmailJSPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Test EmailJS - Solution Email Garantie
          </h1>
          
          <div className="bg-blue-100 border-l-4 border-blue-600 text-blue-800 p-4 mb-6 rounded">
            <h2 className="font-semibold">📧 Test EmailJS</h2>
            <p className="text-sm">
              Cette version utilise EmailJS pour envoyer directement vers <strong>infos@boisdechauffagesbarbe.shop</strong>
            </p>
          </div>

          <EmailJSContactForm />
          
          <div className="mt-8 p-4 bg-gray-100 rounded">
            <h3 className="font-semibold mb-2">🔧 Configuration requise:</h3>
            <ol className="text-sm space-y-1">
              <li>1. Créer compte sur emailjs.com</li>
              <li>2. Configurer service Gmail</li>
              <li>3. Créer template email</li>
              <li>4. Copier les clés dans le code</li>
              <li>5. Tester → Emails garantis!</li>
            </ol>
            <p className="text-xs mt-2 text-gray-600">
              Voir SOLUTION-EMAILJS.md pour les instructions détaillées
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}