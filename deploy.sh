#!/bin/bash

# 🚀 Script de déploiement rapide pour Bois de Chauffage Barbe
# Ce script automatise le processus de déploiement

echo "🪵 Déploiement automatique - Bois de Chauffage Barbe"
echo "=================================================="

# Vérifier si on est dans un dépôt git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Erreur: Ce répertoire n'est pas un dépôt Git"
    exit 1
fi

# Vérifier s'il y a des changements
if git diff-index --quiet HEAD --; then
    echo "ℹ️  Aucun changement détecté"
    echo "📄 Statut du déploiement: https://app.netlify.com/sites/chauffagebois"
    exit 0
fi

# Demander un message de commit
echo -n "📝 Message de commit (ou Entrée pour 'Update site'): "
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update site"
fi

# Ajouter tous les fichiers
echo "📁 Ajout des fichiers..."
git add .

# Committer
echo "💾 Commit: $commit_message"
git commit -m "$commit_message"

# Pousser vers GitHub
echo "🚀 Push vers GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Déploiement déclenché avec succès!"
    echo "🌐 Site: https://chauffagebois.netlify.app"
    echo "📊 Suivi: https://app.netlify.com/sites/chauffagebois/deploys"
    echo "⏱️  Le déploiement prendra environ 2-3 minutes"
else
    echo "❌ Erreur lors du push vers GitHub"
    exit 1
fi