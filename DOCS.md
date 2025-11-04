# 📚 Documentation Technique - Bois de Chauffage Barbe

## 🚀 Déploiement Automatique

### Configuration Netlify

Ce projet est configuré pour un déploiement automatique via Netlify. À chaque `git push` sur la branche `main`, Netlify reconstruit et redéploie automatiquement le site.

**Build Settings:**
- **Repository:** `afriklabprojet/boisnord-website`
- **Branch:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `.next`

**Environment Variables:**
```bash
NEXT_PUBLIC_SITE_URL=https://www.boisdechauffagesbarbe.shop
NEXT_PUBLIC_SITE_NAME=Bois de Chauffage Barbe
NEXT_PUBLIC_PHONE=(450) 529-0479
NEXT_PUBLIC_EMAIL=infos@boisdechauffagesbarbe.shop
NEXT_PUBLIC_ADDRESS=2840 QC-148, Pontiac, QC J0X 2G0
CONTACT_EMAIL=infos@boisdechauffagesbarbe.shop
```

### Méthodes de déploiement

1. **Déploiement automatique (RECOMMANDÉ)**
   ```bash
   git add .
   git commit -m "Votre message"
   git push origin main
   ```

2. **Script de déploiement rapide**
   ```bash
   ./deploy.sh
   ```

3. **Commande npm**
   ```bash
   npm run deploy
   ```

## 🛠️ Développement Local

### Scripts disponibles

- `npm run dev-safe` - Démarrage sécurisé (RECOMMANDÉ)
- `npm run dev-clean` - Démarrage avec nettoyage automatique
- `npm run dev` - Démarrage standard
- `npm run build` - Build de production
- `npm run fresh-start` - Nettoyage complet + redémarrage
- `npm run clean` - Nettoyer les caches
- `npm run reset` - Réinstallation complète

### Résolution des problèmes ChunkLoadError

Si vous rencontrez l'erreur `ChunkLoadError: Loading chunk app/layout failed`:

1. **Solution rapide:** `npm run dev-safe`
2. **Nettoyage:** `npm run dev-clean`
3. **Reset complet:** `npm run fresh-start`

## 🔧 Structure du Projet

```
app/
├── globals.css          # Styles globaux
├── layout.tsx          # Layout principal
├── page.tsx            # Page d'accueil
├── a-propos/           # Page à propos
├── contact/            # Page contact + composant client
├── livraison/          # Page livraison
└── produits/           # Page produits

components/
├── Footer.tsx          # Pied de page
└── Header.tsx          # En-tête navigation

public/
├── manifest.json       # Manifest PWA
├── robots.txt          # Directives robots
└── sitemap.xml         # Plan du site
```

## 🌐 URLs Importantes

- **Site en production:** https://www.boisdechauffagesbarbe.shop
- **Dashboard Netlify:** https://app.netlify.com/sites/chauffagebois
- **Dépôt GitHub:** https://github.com/afriklabprojet/boisnord-website

## 📝 Scripts Utiles

```bash
# Démarrage recommandé
npm run dev-safe

# En cas de problème
npm run fresh-start

# Déploiement rapide
./deploy.sh

# Test de build
npm run build
```