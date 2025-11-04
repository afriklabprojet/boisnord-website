# Configuration des Notifications Email - Netlify Forms

## Problème
Vous ne recevez pas les emails des formulaires de contact soumis sur le site.

## Solution : Configuration Netlify Forms

### Étape 1: Accéder au Dashboard Netlify
1. Connectez-vous à [netlify.com](https://netlify.com)
2. Sélectionnez votre site `chauffagebois.netlify.app`

### Étape 2: Configurer les Notifications de Formulaire
1. Dans le dashboard, allez à **Site settings**
2. Cliquez sur **Forms** dans le menu de gauche
3. Scrollez vers **Form notifications**
4. Cliquez sur **Add notification**

### Étape 3: Paramètres de Notification Email
Configurez comme suit :
- **Notification type**: Email notification
- **Event to listen for**: New form submission
- **Form**: `contact` (nom du formulaire)
- **Email to notify**: `infos@boisdechauffagesbarbe.shop`
- **Email subject**: `[Site Web] Nouvelle demande de contact`

### Étape 4: Vérification
1. Testez en soumettant le formulaire sur le site
2. Vérifiez vos emails (y compris le dossier spam)
3. Les emails devraient arriver dans les 2-5 minutes

## Alternative : Configuration Manuel depuis Netlify

### Option A: Via l'interface Netlify
1. Site Settings → Forms → Form notifications
2. Add notification → Email notification
3. Formulaire: "contact"
4. Email: infos@boisdechauffagesbarbe.shop

### Option B: Configuration par fichier (déjà fait)
Le fichier `netlify.toml` contient déjà:
```toml
[forms]
  [forms.contact]
    notification = "infos@boisdechauffagesbarbe.shop"
```

## Vérifications Supplémentaires

### 1. Vérifier que le formulaire fonctionne
- Allez sur https://chauffagebois.netlify.app/contact
- Remplissez et soumettez le formulaire
- Un message de confirmation devrait s'afficher

### 2. Vérifier dans Netlify Dashboard
- Site Settings → Forms
- Vous devriez voir les soumissions dans l'onglet "Active forms"

### 3. Vérifier l'email de destination
- Assurez-vous que `infos@boisdechauffagesbarbe.shop` existe et fonctionne
- Vérifiez le dossier spam/courrier indésirable

## Support
Si les emails n'arrivent toujours pas après ces étapes:
1. Vérifiez les logs dans Netlify Dashboard → Functions
2. Contactez le support Netlify
3. Considérez utiliser un service email externe (Resend, SendGrid)

## Services Email Alternatifs
Si Netlify Forms ne fonctionne pas, nous pouvons configurer:
- **Resend** (recommandé, gratuit jusqu'à 3000 emails/mois)
- **SendGrid** 
- **SMTP Gmail**

Date de création: 4 novembre 2025