# ⚡ Configuration Rapide Email - Solution Immédiate

## 🚨 PROBLÈME: Aucun email reçu du formulaire de contact

## ✅ SOLUTION RAPIDE (5 minutes)

### Étape 1: Créer un compte Resend (GRATUIT)
1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (3000 emails/mois inclus)
3. Confirmez votre email

### Étape 2: Obtenir votre clé API
1. Dans le dashboard Resend, allez à **API Keys**
2. Cliquez **Create API Key**
3. Nom: `boisnord-website`
4. Permission: **Full access**
5. Copiez la clé (commence par `re_`)

### Étape 3: Configurer votre domaine (Optionnel mais recommandé)
1. Dans Resend, allez à **Domains**
2. Cliquez **Add Domain**
3. Entrez: `boisdechauffagesbarbe.shop`
4. Suivez les instructions DNS (ou utilisez le domaine par défaut pour commencer)

### Étape 4: Mise à jour du fichier .env
```bash
# Dans le fichier .env, remplacez:
RESEND_API_KEY=re_123456789_CHANGEZ_MOI
# Par votre vraie clé API:
RESEND_API_KEY=re_VOTRE_VRAIE_CLE_ICI
```

### Étape 5: Déployer
```bash
git add -A
git commit -m "Configuration email Resend"
git push origin main
```

## 🧪 TEST IMMÉDIAT

1. Attendez 2-3 minutes après le déploiement
2. Testez le formulaire sur https://chauffagebois.netlify.app/contact
3. Vous devriez recevoir l'email dans 10-30 secondes!

## 📧 ADRESSES EMAIL SUPPORTÉES

**Avec domaine personnalisé:**
- `contact@boisdechauffagesbarbe.shop`
- `infos@boisdechauffagesbarbe.shop`

**Avec domaine Resend (sans configuration DNS):**
- `contact@resend.dev` (temporaire)

## 🔍 DÉPANNAGE

### Si vous ne recevez toujours pas d'emails:

1. **Vérifiez la clé API:**
   - Elle doit commencer par `re_`
   - Pas d'espaces avant/après
   - Elle ne doit PAS être `re_123456789_CHANGEZ_MOI`

2. **Vérifiez les logs:**
   - Dashboard Netlify → Functions → Logs
   - Recherchez "Email envoyé via Resend"

3. **Vérifiez votre email:**
   - Dossier spam/indésirable
   - Tous les dossiers de votre boîte email

4. **Test avec email personnel:**
   - Changez temporairement `CONTACT_EMAIL=votre@gmail.com`
   - Testez pour confirmer que ça fonctionne

## 💰 COÛT
- **Resend**: GRATUIT jusqu'à 3000 emails/mois
- **Pas de frais cachés**
- **Configuration en 5 minutes**

## 🆘 SUPPORT URGENT
Si vous avez besoin d'aide immédiate:
1. Envoyez-moi votre clé API Resend
2. Je peux tester et déboguer rapidement
3. Solution garantie en quelques minutes

---
**Date:** 4 novembre 2025
**Status:** ✅ Code prêt, configuration Resend requise