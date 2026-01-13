# 🚀 Hızlı Deployment Adımları

## 1️⃣ GitHub'a Push

```bash
# Git başlat (eğer başlatmadıysan)
git init

# Tüm dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit - GamesAway v1.0"

# GitHub'da yeni repo oluştur (https://github.com/new)
# Sonra bağla:
git remote add origin https://github.com/KULLANICI_ADIN/gamesaway.git
git branch -M main
git push -u origin main
```

---

## 2️⃣ Railway.app ile Deploy (EN KOLAY)

### Adım 1: Railway'e Git
- [Railway.app](https://railway.app) aç
- GitHub ile giriş yap

### Adım 2: Yeni Proje
- "Start a New Project" tıkla
- "Deploy from GitHub repo" seç
- `gamesaway` repo'nu seç

### Adım 3: Otomatik Deploy
- Railway otomatik .NET'i algılar
- 2-3 dakika bekle
- ✅ Deploy tamamlandı!

### Adım 4: URL Al
- Settings → Domains
- "Generate Domain" tıkla
- URL'ni kopyala: `gamesaway-production.up.railway.app`

### Adım 5: Test Et
- URL'i tarayıcıda aç
- Login/Register test et
- Dashboard'u kontrol et

---

## 3️⃣ Azure ile Deploy (Microsoft Servisi)

### Önce Azure CLI Kur
Windows:
```bash
winget install Microsoft.AzureCLI
```

Mac:
```bash
brew install azure-cli
```

### Deploy Komutları
```bash
# Login
az login

# Resource group oluştur
az group create --name gamesaway-rg --location westeurope

# App Service plan (Ücretsiz)
az appservice plan create --name gamesaway-plan --resource-group gamesaway-rg --sku F1 --is-linux

# Web app oluştur
az webapp create --name gamesaway-mesut --resource-group gamesaway-rg --plan gamesaway-plan --runtime "DOTNETCORE:10.0"

# GitHub'dan otomatik deploy
az webapp deployment source config --name gamesaway-mesut --resource-group gamesaway-rg --repo-url https://github.com/KULLANICI_ADIN/gamesaway --branch main --manual-integration

# URL: https://gamesaway-mesut.azurewebsites.net
```

---

## 4️⃣ Render.com ile Deploy

### Adım 1: Render'a Git
- [Render.com](https://render.com) aç
- GitHub ile giriş yap

### Adım 2: Web Service Oluştur
- "New +" → "Web Service"
- GitHub repo'nu seç

### Adım 3: Ayarları Yap
```
Name: gamesaway
Environment: Docker
Region: Frankfurt (EU)
Branch: main
```

### Adım 4: Deploy
- "Create Web Service" tıkla
- 5-10 dakika bekle
- ✅ Hazır!

---

## 🔄 Güncelleme Yapmak

### Railway/Render (Otomatik)
```bash
# Kod değişikliği yap
git add .
git commit -m "Update: yeni özellik"
git push

# Railway/Render otomatik yeniden deploy eder!
```

### Azure (Manuel)
```bash
# Publish yap
dotnet publish -c Release

# Deploy et
az webapp deploy --resource-group gamesaway-rg --name gamesaway-mesut --src-path bin/Release/net10.0/publish
```

---

## 📊 Hangi Platformu Seçmeliyim?

| Platform | Ücretsiz | Kolay | Hız | Önerilen |
|----------|----------|-------|-----|----------|
| **Railway** | ✅ $5/ay | ⭐⭐⭐⭐⭐ | ⚡⚡⚡ | ✅ EN İYİ |
| **Azure** | ✅ F1 | ⭐⭐⭐ | ⚡⚡ | Kurumsal |
| **Render** | ✅ | ⭐⭐⭐⭐ | ⚡⚡ | İyi |
| **Heroku** | ❌ $7/ay | ⭐⭐⭐⭐ | ⚡⚡⚡ | Ücretli |

**Önerim:** Railway.app - En kolay ve hızlı! 🚀

---

## ⚠️ Önemli Notlar

1. **Veritabanı**: SQLite development için yeterli. Production'da PostgreSQL kullan.

2. **Environment Variables**: 
   - Railway'de otomatik ayarlanır
   - Azure'da App Settings'den ekle

3. **HTTPS**: Tüm platformlarda otomatik!

4. **Custom Domain**: 
   - Railway: Settings → Domains
   - Azure: Custom domains → Add
   - Render: Settings → Custom Domain

5. **Logs**: 
   - Railway: Deployments → Logs
   - Azure: Log stream
   - Render: Logs tab

---

## 🆘 Sorun mu Var?

### "Build failed"
- .NET 10.0 runtime seçili mi kontrol et
- `dotnet build` local'de çalışıyor mu?

### "Database error"
- Connection string doğru mu?
- Database oluşturuldu mu?

### "404 Not Found"
- URL doğru mu?
- App başladı mı? (Logs'a bak)

---

## ✅ Deploy Sonrası Checklist

- [ ] Site açılıyor mu?
- [ ] Login çalışıyor mu?
- [ ] Register çalışıyor mu?
- [ ] Dashboard görünüyor mu?
- [ ] Dark mode çalışıyor mu?
- [ ] Dil değiştirme çalışıyor mu?
- [ ] Footer düzgün mü?

---

## 🎉 Başarılı Deploy!

Tebrikler! Siteniz artık canlı! 🚀

**Sıradaki Adımlar:**
1. Custom domain ekle
2. PostgreSQL'e geç (opsiyonel)
3. Analytics ekle (Google Analytics)
4. SEO optimize et
5. Sosyal medyada paylaş!
