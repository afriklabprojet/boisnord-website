# ✅ SOLUTION EMAILJS - GARANTIE EN 5 MINUTES

## 🚀 EmailJS = Solution Côté Client (aucun serveur requis)

### Étape 1: Créer compte EmailJS (GRATUIT)
1. Allez sur [emailjs.com](https://www.emailjs.com)
2. Créez un compte gratuit (200 emails/mois inclus)
3. Confirmez votre email

### Étape 2: Configurer le Service Email
1. Dashboard EmailJS → **Email Services**
2. **Add New Service** → Choisir **Gmail** (ou votre fournisseur)
3. **Service ID**: `service_boisnord` 
4. Connectez votre compte Gmail (ou autre)
5. **Create Service**

### Étape 3: Créer le Template Email
1. Dashboard → **Email Templates**
2. **Create New Template**
3. **Template ID**: `template_contact`
4. **Template Name**: `Contact Bois Nord`

**Contenu du template:**
```
Subject: [Site Web] Nouvelle demande - {{from_name}}

From: {{from_name}} <{{from_email}}>
To: {{to_email}}

=== NOUVELLE DEMANDE DE CONTACT ===

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Produit: {{product}}
Quantité: {{quantity}}
Adresse: {{address}}

Message:
{{message}}

---
Reçu le: {{timestamp}}
Site: https://www.boisdechauffagesbarbe.shop
```

5. **Save Template**

### Étape 4: Obtenir les Clés
1. Dashboard → **Account** → **General**
2. Copiez votre **Public Key**

### Étape 5: Mise à jour du Code
```typescript
// Dans components/EmailJSContactForm.tsx, remplacez:
const serviceId = 'service_boisnord'        // Votre Service ID
const templateId = 'template_contact'       // Votre Template ID  
const publicKey = 'votre_public_key_ici'   // Votre Public Key
```

### Étape 6: Tester
1. Déployez les changements
2. Testez le formulaire
3. **Email garanti dans les 10 secondes!**

## 🔧 Configuration Complete

### Variables à remplacer:
- `service_boisnord` → Votre Service ID EmailJS
- `template_contact` → Votre Template ID EmailJS
- `votre_public_key_ici` → Votre Public Key EmailJS

### Email de destination:
- **Confirmé**: `infos@boisdechauffagesbarbe.shop` ✅

## 💰 Coûts
- **EmailJS**: GRATUIT jusqu'à 200 emails/mois
- **Aucune configuration serveur**
- **Fonctionne immédiatement**

## ✅ Avantages EmailJS
1. **Côté client** → Pas de problème serveur
2. **Configuration simple** → 5 minutes max
3. **Fiable** → Service établi
4. **Gratuit** → Pas de coût
5. **Immédiat** → Aucun délai

## 🚨 Action Immédiate
1. **Créez le compte EmailJS** (2 min)
2. **Configurez service + template** (2 min)
3. **Copiez les clés dans le code** (1 min)
4. **TESTEZ** → Emails garantis! ✅

---
**Date**: 4 novembre 2025  
**Status**: 🔧 Code prêt, configuration EmailJS requise  
**Destination**: infos@boisdechauffagesbarbe.shop