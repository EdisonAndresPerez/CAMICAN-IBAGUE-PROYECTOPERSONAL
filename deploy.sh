#!/bin/bash

# Script de deploy para CamiCan
# Ejecuta: bash deploy.sh

echo "🚀 Preparando deploy de CamiCan..."

# Verificar que estamos en la rama correcta
echo "📋 Verificando rama..."
git branch --show-current

# Agregar todos los cambios
echo "📦 Agregando cambios..."
git add .

# Pedir mensaje de commit
echo "💬 Ingresa el mensaje del commit:"
read commit_message

if [ -z "$commit_message" ]; then
  commit_message="Update: Cambios para deploy"
fi

# Hacer commit
echo "✅ Haciendo commit..."
git commit -m "$commit_message"

# Push
echo "⬆️  Subiendo a GitHub..."
git push origin main

echo ""
echo "✨ ¡Listo! Tu código está en GitHub."
echo ""
echo "🔗 Ahora ve a https://vercel.com para hacer el deploy:"
echo "   1. Login con GitHub"
echo "   2. Import repository: CAM_IBG"
echo "   3. Click Deploy"
echo ""
echo "⏱️  El deploy tomará 2-3 minutos"
