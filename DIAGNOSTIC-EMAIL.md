# 🚨 DIAGNOSTIC EMAIL - INSTRUCTIONS URGENTES

## Problème: Toujours aucun email reçu

## ✅ SOLUTION IMMÉDIATE: Vérifier les logs

### 1. Accéder aux logs Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez-vous et sélectionnez `chauffagebois.netlify.app`
3. Cliquez sur **Functions** dans le menu
4. Cliquez sur **Function log** ou **View function logs**

### 2. Tester le formulaire MAINTENANT
1. Allez sur https://chauffagebois.netlify.app/contact
2. Remplissez et soumettez le formulaire  
3. Immédiatement après, rafraîchissez les logs Netlify

### 3. Chercher dans les logs:
- `=== NOUVELLE DEMANDE DE CONTACT ===`
- `Email envoyé via Resend avec succès`
- `Erreur Resend:`

## 🔍 DIAGNOSTIC RAPIDE

### API de debug:
https://chauffagebois.netlify.app/api/debug-email

### Tests API directs:
- https://chauffagebois.netlify.app/api/contact (API principale)
- https://chauffagebois.netlify.app/api/contact-simple (API backup)

## 🚨 SI TOUJOURS RIEN:

### Option A: Email manuel (immédiat)
Les logs vont afficher EXACTEMENT le contenu à envoyer manuellement à `infos@boisdechauffagesbarbe.shop`

### Option B: Alternative EmailJS (5 min)
Si Resend ne fonctionne pas, on peut configurer EmailJS qui fonctionne côté client.

### Option C: SMTP Gmail (10 min)  
Configuration SMTP directe avec votre Gmail.

## 📞 ACTIONS IMMÉDIATES:

1. **TESTEZ LE FORMULAIRE MAINTENANT**
2. **VÉRIFIEZ LES LOGS NETLIFY** 
3. **Envoyez-moi ce que vous voyez dans les logs**
4. **Je diagnostique et corrige en 2 minutes**

## 🎯 GARANTIE:
Une fois qu'on voit les logs, la solution est garantie en moins de 5 minutes.

---
**Status:** 🔧 Diagnostic en cours
**Prochaine étape:** Vérifier logs Netlify après test du formulaire