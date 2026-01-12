# GamesAway - Deployment Rehberi

Bu rehber, GamesAway web sitesini ücretsiz olarak yayınlamak için adım adım talimatlar içerir.

## 🎯 En Hızlı Yöntem: GitHub Pages

### Adım 1: GitHub Hesabı Oluşturun
1. [github.com](https://github.com) adresine gidin
2. "Sign up" butonuna tıklayın
3. E-posta, kullanıcı adı ve şifre belirleyin
4. Hesabınızı doğrulayın

### Adım 2: Repository Oluşturun
1. GitHub'da oturum açın
2. Sağ üst köşedeki "+" işaretine tıklayın
3. "New repository" seçin
4. Repository adı: `gamesaway-website`
5. Public seçin (ücretsiz hosting için gerekli)
6. "Create repository" butonuna tıklayın

### Adım 3: Dosyaları Yükleyin

**Yöntem A: Web Arayüzü ile (Kolay)**
1. Repository sayfasında "uploading an existing file" linkine tıklayın
2. Tüm proje dosyalarını sürükle-bırak yapın
3. "Commit changes" butonuna tıklayın

**Yöntem B: Git ile (İleri Seviye)**
```bash
git init
git add .
git commit -m "İlk commit"
git branch -M main
git remote add origin https://github.com/KULLANICIADI/gamesaway-website.git
git push -u origin main
```

### Adım 4: GitHub Pages'i Aktifleştirin
1. Repository'nizde "Settings" sekmesine gidin
2. Sol menüden "Pages" seçin
3. Source: "Deploy from a branch" seçin
4. Branch: "main" ve folder: "/ (root)" seçin
5. "Save" butonuna tıklayın
6. 2-3 dakika bekleyin

### Adım 5: Sitenizi Ziyaret Edin
Siteniz şu adreste yayında olacak:
```
https://KULLANICIADI.github.io/gamesaway-website/
```

---

## 🚀 Alternatif: Netlify (Çok Kolay)

### Adım 1: Netlify Hesabı
1. [netlify.com](https://netlify.com) adresine gidin
2. "Sign up" ile ücretsiz hesap oluşturun
3. GitHub, GitLab veya e-posta ile kayıt olun

### Adım 2: Site Deploy Edin
1. Dashboard'da "Add new site" butonuna tıklayın
2. "Deploy manually" seçin
3. Proje klasörünü sürükle-bırak yapın
4. Otomatik olarak deploy edilir!

### Adım 3: Özel Domain (İsteğe Bağlı)
1. Site settings → Domain management
2. "Add custom domain" tıklayın
3. Domain sağlayıcınızda DNS ayarlarını yapın

**Netlify Avantajları**:
- Anında deployment
- Otomatik SSL sertifikası
- Form handling desteği
- Ücretsiz subdomain: `sitename.netlify.app`

---

## ⚡ Alternatif: Vercel (Hızlı)

### Adım 1: Vercel Hesabı
1. [vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" ile GitHub hesabınızla giriş yapın

### Adım 2: Import Project
1. "New Project" butonuna tıklayın
2. GitHub repository'nizi seçin
3. "Deploy" butonuna tıklayın
4. Dakikalar içinde yayında!

**Vercel Avantajları**:
- Çok hızlı deployment
- Otomatik SSL
- Global CDN
- Ücretsiz subdomain: `sitename.vercel.app`

---

## 🔥 Alternatif: Firebase Hosting

### Adım 1: Firebase Projesi Oluşturun
1. [console.firebase.google.com](https://console.firebase.google.com) adresine gidin
2. "Add project" ile yeni proje oluşturun
3. Proje adı: "GamesAway"

### Adım 2: Firebase CLI Kurulumu
```bash
# Node.js yüklü olmalı
npm install -g firebase-tools

# Firebase'e giriş yapın
firebase login

# Projeyi başlatın
firebase init hosting

# Deploy edin
firebase deploy
```

### Adım 3: Ayarlar
- Public directory: `.` (root)
- Single-page app: `No`
- Automatic builds: `No`

**Firebase Avantajları**:
- Google altyapısı
- Çok hızlı
- Ücretsiz SSL
- Subdomain: `projectname.web.app`

---

## 🌍 Alternatif: Render

### Adım 1: Render Hesabı
1. [render.com](https://render.com) adresine gidin
2. GitHub ile giriş yapın

### Adım 2: Static Site Oluşturun
1. "New +" → "Static Site" seçin
2. GitHub repository'nizi bağlayın
3. Build command: boş bırakın
4. Publish directory: `.`
5. "Create Static Site" tıklayın

**Render Avantajları**:
- Ücretsiz SSL
- Otomatik deployment
- Custom domain desteği

---

## 📋 Deployment Checklist

Yayınlamadan önce kontrol edin:

- [ ] Tüm linkler çalışıyor mu?
- [ ] Sosyal medya linkleri güncellendi mi?
- [ ] İletişim bilgileri doğru mu?
- [ ] Mobil görünüm test edildi mi?
- [ ] Tüm sayfalar yükleniyor mu?
- [ ] Form gönderimi çalışıyor mu? (Backend gerekli)
- [ ] SEO meta tagları eksiksiz mi?
- [ ] Favicon eklendi mi?

---

## 🔧 Özel Domain Bağlama

### GitHub Pages için:
1. Domain sağlayıcınızda A record ekleyin:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
2. Repository Settings → Pages → Custom domain
3. Domain adınızı girin ve kaydedin

### Netlify için:
1. Site settings → Domain management
2. "Add custom domain" tıklayın
3. DNS ayarlarını yapın (otomatik talimatlar verilir)

### Vercel için:
1. Project settings → Domains
2. "Add" butonuna tıklayın
3. Domain adınızı girin
4. DNS ayarlarını yapın

---

## 🎨 Sonraki Adımlar

1. **Analytics Ekleyin**: Google Analytics veya Plausible
2. **SEO Optimize Edin**: Meta taglar, sitemap.xml
3. **Favicon Ekleyin**: Site ikonu
4. **Backend Entegrasyonu**: Form gönderimi için
5. **Database Bağlantısı**: Dinamik içerik için
6. **CDN Kullanın**: Daha hızlı yükleme için

---

## 📞 Destek

Sorun yaşarsanız:
- GitHub Issues: Repository'nizde issue açın
- E-posta: contact@4usgames.com
- Dokümantasyon: Her platform kendi dokümantasyonuna sahip

---

## 💡 İpuçları

1. **GitHub Pages**: En basit ve ücretsiz, ancak build process yok
2. **Netlify**: En kullanıcı dostu, form desteği var
3. **Vercel**: En hızlı, otomatik optimizasyon
4. **Firebase**: Google altyapısı, güvenilir
5. **Render**: Basit ve etkili

**Önerimiz**: Başlangıç için GitHub Pages veya Netlify kullanın!

---

## 🔒 Güvenlik

- HTTPS otomatik olarak aktif (tüm platformlarda)
- Environment variables için platform ayarlarını kullanın
- API anahtarlarını asla kodda saklamayın
- CORS ayarlarını backend'de yapın

---

## 📊 Performans İzleme

Ücretsiz araçlar:
- Google PageSpeed Insights
- GTmetrix
- Lighthouse (Chrome DevTools)
- WebPageTest

Hedef:
- Yükleme süresi < 3 saniye
- Mobile score > 90
- Desktop score > 95

---

**Başarılar! 🎉**

Siteniz artık dünya çapında erişilebilir!
