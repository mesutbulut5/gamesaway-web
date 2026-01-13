# 🚀 Azure App Service Deployment (100% ÜCRETSİZ)

## ✅ Neden Azure App Service F1?
- ✅ **Tamamen ücretsiz** (F1 tier)
- ✅ **Hiç uyumaz** (7/24 açık)
- ✅ **1 GB RAM, 1 GB disk**
- ✅ **Kalıcı database** (SQLite dosyası silinmez)
- ✅ **HTTPS otomatik**
- ✅ **GitHub Actions ile otomatik deploy**

---

## 📋 Adım Adım Kurulum

### 1️⃣ Azure Portal'a Git
1. Tarayıcıda aç: **https://portal.azure.com**
2. Microsoft hesabınla giriş yap (yoksa ücretsiz oluştur)
3. Kredi kartı isteyebilir ama **ücret almaz** (doğrulama için)

### 2️⃣ App Service Oluştur

1. **"Create a resource"** tıkla
2. **"Web App"** ara ve seç
3. **"Create"** tıkla

**Ayarlar:**
```
Subscription: Free Trial veya Pay-As-You-Go
Resource Group: Yeni oluştur → "gamesaway-rg"
Name: gamesaway-app (benzersiz olmalı, değiştir)
Publish: Code
Runtime stack: .NET 8 (LTS)
Operating System: Linux
Region: West Europe (Türkiye'ye yakın)

Pricing Plan:
- "Change size" tıkla
- "Dev/Test" sekmesi
- "F1" seç (100% FREE)
- "Apply" tıkla
```

4. **"Review + create"** tıkla
5. **"Create"** tıkla (2-3 dakika bekle)

### 3️⃣ Publish Profile İndir

1. App Service oluştuktan sonra **"Go to resource"** tıkla
2. Sol menüden **"Deployment Center"** seç
3. Üstte **"Manage publish profile"** tıkla
4. **"Download publish profile"** tıkla
5. İndirilen `.PublishSettings` dosyasını aç (Notepad ile)
6. **Tüm içeriği kopyala** (Ctrl+A, Ctrl+C)

### 4️⃣ GitHub Secret Ekle

1. GitHub'da repo'na git: **https://github.com/mesutbulut5/gamesaway-web**
2. **Settings** → **Secrets and variables** → **Actions**
3. **"New repository secret"** tıkla
4. Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
5. Value: Kopyaladığın publish profile içeriğini yapıştır
6. **"Add secret"** tıkla

### 5️⃣ GitHub Actions'ı Tetikle

1. Repo'da **"Actions"** sekmesine git
2. **"Deploy to Azure App Service"** workflow'u göreceksin
3. **"Run workflow"** → **"Run workflow"** tıkla
4. Deploy başlayacak (5-10 dakika)
5. ✅ Yeşil tik görünce hazır!

### 6️⃣ Siteyi Aç

URL: **https://gamesaway-app.azurewebsites.net**

(Eğer farklı isim seçtiysen: `https://SENIN-ISMIN.azurewebsites.net`)

---

## 🔄 Otomatik Deploy

Artık GitHub'a her `git push` yaptığında:
1. GitHub Actions otomatik çalışır
2. Kodu build eder
3. Azure'a deploy eder
4. 5 dakika içinde canlıya alır

---

## 🗄️ Database (SQLite)

SQLite dosyası Azure'da kalıcı olarak saklanır:
- `/home/site/wwwroot/gamesaway.db`
- Her deploy'da **SİLİNMEZ**
- Kullanıcılar kaybolmaz

---

## 📊 Monitoring

Azure Portal'da:
1. App Service'e git
2. **"Log stream"** → Canlı logları gör
3. **"Metrics"** → CPU, RAM kullanımı
4. **"Diagnose and solve problems"** → Hata analizi

---

## 🌐 Custom Domain (Opsiyonel)

Kendi domain'ini eklemek için:
1. App Service → **"Custom domains"**
2. **"Add custom domain"** tıkla
3. Domain'ini gir (örn: `gamesaway.com`)
4. DNS kayıtlarını güncelle
5. SSL sertifikası otomatik oluşur

---

## 💡 Önemli Notlar

### F1 Tier Limitleri:
- 1 GB RAM
- 1 GB disk
- 60 dakika/gün CPU
- 165 MB/gün network
- **Günlük kullanım için yeterli!**

### Upgrade Gerekirse:
- B1 tier: $13/ay (daha fazla kaynak)
- Ama F1 senin için yeterli

---

## 🆘 Sorun Giderme

### "App name already exists"
→ Farklı isim dene: `gamesaway-mesut`, `gamesaway-tr`, vb.

### "Deployment failed"
→ GitHub Actions logs'a bak, hata mesajını oku

### "Site açılmıyor"
→ Azure Portal → App Service → "Restart" tıkla

### "Database error"
→ İlk çalıştırmada database oluşur, 1-2 dakika bekle

---

## ✅ Deploy Sonrası Checklist

- [ ] Site açılıyor: `https://gamesaway-app.azurewebsites.net`
- [ ] Ana sayfa yükleniyor
- [ ] Login çalışıyor
- [ ] Register ile kayıt olunuyor
- [ ] Dashboard açılıyor
- [ ] Dark mode çalışıyor
- [ ] Dil değiştirme (TR/EN) çalışıyor

---

## 🎉 Tebrikler!

Siteniz artık **7/24 canlı** ve **tamamen ücretsiz**! 🚀

**URL'nizi paylaş:**
- Arkadaşlarınla
- Sosyal medyada
- Portfolio'nda

**Sıradaki Adımlar:**
1. Custom domain ekle (opsiyonel)
2. Google Analytics ekle
3. SEO optimize et
4. Daha fazla özellik ekle

---

## 📞 Yardım

Takıldığın yer olursa:
- Azure Docs: https://docs.microsoft.com/azure
- GitHub Actions: https://docs.github.com/actions
- Bana sor! 😊
