# 🔧 Guide de Dépannage - Bois de Chauffage Barbe

## ❌ Erreur ChunkLoadError (Résolue)

### Symptômes
```
ChunkLoadError: Loading chunk app/layout failed.
(timeout: http://localhost:3000/_next/static/chunks/app/layout.js)
```

### ✅ Solutions disponibles

#### 1. Démarrage sécurisé (RECOMMANDÉ)
```bash
npm run dev-safe
```

#### 2. Démarrage avec nettoyage
```bash
npm run dev-clean
```

#### 3. Redémarrage rapide
```bash
npm run fresh-start
```

#### 4. Nettoyage manuel
```bash
./clean.sh
npm run dev
```

#### 5. Réinstallation complète (si problème persiste)
```bash
npm run reset
```

#### 4. Méthode manuelle
```bash
# Arrêter le serveur (Ctrl+C)
rm -rf .next
rm -rf node_modules/.cache
npm cache clean --force
npm run dev
```

## 🚀 Scripts disponibles

- `npm run dev` - Démarrer en développement (basique)
- `npm run dev-safe` - Démarrage sécurisé (RECOMMANDÉ)
- `npm run dev-clean` - Démarrage avec nettoyage automatique
- `npm run build` - Construire pour production
- `npm run clean` - Nettoyer les caches
- `npm run fresh-start` - Nettoyage + redémarrage
- `npm run reset` - Réinstallation complète
- `npm run deploy` - Déployer automatiquement

## 💡 Prévention

1. **Toujours arrêter proprement** le serveur avec `Ctrl+C`
2. **Fermer les onglets** localhost avant redémarrage
3. **Utiliser le script de nettoyage** en cas de problème
4. **Redémarrer VS Code** si les erreurs persistent

## 🌐 URLs importantes

- **Développement local :** http://localhost:3000
- **Site en production :** https://chauffagebois.netlify.app
- **Dashboard Netlify :** https://app.netlify.com/sites/chauffagebois

## ⚡ Commandes d'urgence

```bash
# Tout nettoyer et redémarrer
npm run fresh-start

# Si vraiment bloqué, réinstaller tout
npm run reset

# Déploiement rapide
./deploy.sh
```