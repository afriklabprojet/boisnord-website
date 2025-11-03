# Configuration Email pour le Formulaire de Contact

## Services Email Recommandés

### 1. EmailJS (Gratuit jusqu'à 200 emails/mois)
- Site: https://www.emailjs.com/
- Avantages: Frontend uniquement, facile à intégrer
- Configuration dans ContactPageClient.tsx

### 2. Resend (Simple et moderne)
- Site: https://resend.com/
- Avantages: API simple, bonne délivrabilité
- Utilisation dans app/api/contact/route.ts

### 3. Nodemailer avec Gmail/SMTP
- Gratuit avec Gmail
- Configuration dans app/api/contact/route.ts

## Variables d'Environnement Nécessaires

Créer un fichier `.env.local` avec:

```
# Pour Resend
RESEND_API_KEY=re_xxxxxxxxxx

# Pour SMTP/Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=votre@email.com
SMTP_PASS=motdepasse

# Email de destination
CONTACT_EMAIL=infos@boisdechauffagesbarbe.shop
```

## Déploiement

### Netlify
Le formulaire est déjà configuré pour Netlify Forms.
Les soumissions apparaîtront dans votre dashboard Netlify.

### Vercel/Autres
Utilisez l'API route `/api/contact` qui est déjà configurée.

## Test du Formulaire

1. En développement: `npm run dev`
2. Remplir le formulaire sur http://localhost:3000/contact
3. Vérifier les logs dans la console pour voir les données reçues