#!/bin/bash

# 🧹 Script de nettoyage pour résoudre les erreurs de cache Next.js

echo "🧹 Nettoyage du cache Next.js et des dépendances..."
echo "=================================================="

# Arrêter tous les processus Node.js en cours
echo "⏹️  Arrêt des processus Node.js..."
pkill -f "next dev" 2>/dev/null || true

# Nettoyer les caches
echo "🗑️  Suppression du cache .next..."
rm -rf .next

echo "🗑️  Suppression du cache node_modules..."
rm -rf node_modules/.cache

echo "🗑️  Suppression du cache npm..."
npm cache clean --force

# Réinstaller les dépendances (optionnel)
if [ "$1" = "--reinstall" ]; then
    echo "📦 Réinstallation des dépendances..."
    rm -rf node_modules
    rm -f package-lock.json
    npm install
fi

echo ""
echo "✅ Nettoyage terminé!"
echo "🚀 Vous pouvez maintenant redémarrer avec: npm run dev"
echo ""
echo "💡 Conseils pour éviter ce problème:"
echo "   - Utilisez toujours Ctrl+C pour arrêter le serveur"
echo "   - Fermez tous les onglets localhost avant de redémarrer"
echo "   - En cas de problème, relancez ce script"