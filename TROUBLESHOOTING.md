# 🔧 Guide de Dépannage - Bois de Chauffage Barbe

## ❌ Erreur ChunkLoadError (Solution rapide)

### Symptômes
```
ChunkLoadError: Loading chunk app/layout failed.
(timeout: http://localhost:3000/_next/static/chunks/app/layout.js)
```

### ✅ Solutions rapides

1. **Démarrage sécurisé (RECOMMANDÉ)**
   ```bash
   npm run dev-safe
   ```

2. **Démarrage avec nettoyage**
   ```bash
   npm run dev-clean
   ```

3. **Reset complet**
   ```bash
   npm run fresh-start
   ```

## 📚 Documentation Complète

Pour plus d'informations sur le déploiement, les scripts et la configuration, consultez [DOCS.md](./DOCS.md).

## 💡 Prévention

1. **Toujours arrêter proprement** le serveur avec `Ctrl+C`
2. **Utiliser les scripts sécurisés** : `npm run dev-safe`
3. **Fermer les onglets** localhost avant redémarrage
4. **En cas de doute** : `npm run fresh-start`