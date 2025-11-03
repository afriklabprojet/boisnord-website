# 🚀 Guide de Déploiement Automatique

## Configuration Netlify

### 1. Connexion GitHub ↔ Netlify

Ce projet est configuré pour un déploiement automatique via Netlify. À chaque `git push` sur la branche `main`, Netlify reconstruit et redéploie automatiquement le site.

### 2. Configuration requise dans Netlify

**Build Settings:**
- **Repository:** `afriklabprojet/boisnord-website`
- **Branch:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**Environment Variables:**
```bash
NEXT_PUBLIC_SITE_URL=https://chauffagebois.netlify.app
NEXT_PUBLIC_SITE_NAME=Bois de Chauffage Barbe
NEXT_PUBLIC_PHONE=(450) 529-0479
NEXT_PUBLIC_EMAIL=infos@boisdechauffagesbarbe.shop
NEXT_PUBLIC_ADDRESS=2840 QC-148, Pontiac, QC J0X 2G0
CONTACT_EMAIL=infos@boisdechauffagesbarbe.shop
```

### 3. Workflow de développement

1. **Faire des modifications localement**
2. **Tester en local :** `npm run dev`
3. **Committer les changements :** `git add . && git commit -m "Description des changements"`
4. **Pousser vers GitHub :** `git push origin main`
5. **Netlify déploie automatiquement** ⚡

### 4. Surveillance du déploiement

- **URL du site :** https://chauffagebois.netlify.app
- **Dashboard Netlify :** https://app.netlify.com/sites/chauffagebois
- **Logs de build :** Visibles dans l'interface Netlify

### 5. Dépannage

Si le déploiement échoue :
1. Vérifiez les logs de build dans Netlify
2. Assurez-vous que `npm run build` fonctionne localement
3. Vérifiez que toutes les variables d'environnement sont définies
4. Vérifiez la configuration dans `netlify.toml`

## 📁 Fichiers de configuration

- `netlify.toml` - Configuration Netlify
- `next.config.js` - Configuration Next.js optimisée pour Netlify
- `.env` - Variables d'environnement (local uniquement)
- `package.json` - Dépendances et scripts