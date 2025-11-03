# Configuration Email - infos@boisdechauffagesbarbe.shop

## 📧 Destination des Messages
Tous les messages du formulaire de contact sont dirigés vers:
**infos@boisdechauffagesbarbe.shop**

## 🔧 Configuration Netlify (Actuelle)
- Les formulaires Netlify envoient automatiquement les soumissions dans votre dashboard Netlify
- Vous pouvez configurer des notifications email dans les paramètres Netlify

### Étapes pour configurer les notifications Netlify:
1. Aller sur https://app.netlify.com
2. Sélectionner votre site
3. Settings > Forms > Form notifications
4. Ajouter "Email notification"
5. Entrer: infos@boisdechauffagesbarbe.shop

## 📧 Services Email Recommandés (Optionnel)

### 1. Resend (Recommandé)
```bash
npm install resend
```
Variables d'environnement:
```
RESEND_API_KEY=re_xxxxxxxxxx
```

### 2. Configuration Gmail SMTP
Variables d'environnement:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votrecompte@gmail.com
SMTP_PASS=motdepasseapp
```

### 3. EmailJS (Frontend uniquement)
- Gratuit jusqu'à 200 emails/mois
- Configuration directe dans le composant React

## 🚀 Déploiement
Le formulaire est configuré pour envoyer à **infos@boisdechauffagesbarbe.shop**

### Netlify (Recommandé)
- Formulaires traités automatiquement
- Notifications configurables dans le dashboard

### Autres plateformes
- API route configurée: `/api/contact`
- Logs dans la console serveur
- Prêt pour intégration email

## 📞 Contact de Secours
Le formulaire affiche également le numéro de téléphone: (450) 529-0479