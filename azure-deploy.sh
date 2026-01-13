#!/bin/bash

# Azure CLI ile ücretsiz deployment

# 1. Login
az login

# 2. Resource group oluştur
az group create --name gamesaway-rg --location westeurope

# 3. App Service plan (F1 - ÜCRETSIZ)
az appservice plan create \
  --name gamesaway-plan \
  --resource-group gamesaway-rg \
  --sku F1 \
  --is-linux

# 4. Web app oluştur
az webapp create \
  --name gamesaway-app \
  --resource-group gamesaway-rg \
  --plan gamesaway-plan \
  --runtime "DOTNET:10.0"

# 5. GitHub'dan otomatik deploy
az webapp deployment source config \
  --name gamesaway-app \
  --resource-group gamesaway-rg \
  --repo-url https://github.com/mesutbulut5/gamesaway-web \
  --branch main \
  --manual-integration

echo "✅ Deploy tamamlandı!"
echo "URL: https://gamesaway-app.azurewebsites.net"
