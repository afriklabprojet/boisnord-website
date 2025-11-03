#!/bin/bash

# 🚀 Script de démarrage robuste pour éviter les erreurs ChunkLoadError

echo "🪵 Démarrage robuste - Bois de Chauffage Barbe"
echo "=============================================="

# Fonction pour nettoyer les processus
cleanup() {
    echo "🧹 Nettoyage en cours..."
    pkill -f "next dev" 2>/dev/null || true
    exit 0
}

# Piéger les signaux pour nettoyer proprement
trap cleanup SIGINT SIGTERM

# Vérifier si le port 3000 est libre
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 3000 occupé, nettoyage..."
    pkill -f "next dev" 2>/dev/null || true
    sleep 2
fi

# Nettoyer les caches si demandé
if [ "$1" = "--clean" ]; then
    echo "🗑️  Nettoyage des caches..."
    rm -rf .next
    rm -rf node_modules/.cache
fi

# Démarrer le serveur
echo "🚀 Démarrage du serveur de développement..."
npm run dev

# Cette ligne ne devrait jamais être atteinte, mais au cas où
cleanup