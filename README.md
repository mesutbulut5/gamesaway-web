# GamesAway - Oyun Keşfetme Platformu

GamesAway, kullanıcılara on binlerce oyuna ücretsiz erişim imkanı sunan yenilikçi bir sosyal medya oyun platformudur.

## 🎮 Özellikler

- **On Binlerce Oyun**: Ücretsiz erişim ile sınırsız oyun deneyimi
- **Hızlı Keşif**: Oyun videolarını hızlıca izleyin, indirmeden deneyin
- **Kişisel Koleksiyon**: Favori oyunlarınızı kaydedin ve paylaşın
- **Basit Arayüz**: Sosyal medya benzeri kaydırma mekaniği
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Geliştiriciler İçin**: CPI, retention ve engagement metrikleri

## 📁 Proje Yapısı

```
gamesaway/
├── index.html              # Ana sayfa
├── download.html           # İndirme sayfası
├── quickstart.html         # Hızlı başlangıç rehberi
├── blog.html              # Blog sayfası
├── contact.html           # İletişim sayfası
├── privacy.html           # Gizlilik politikası
├── terms.html             # Kullanım şartları
├── css/
│   └── style.css          # Ana stil dosyası
├── js/
│   └── main.js            # JavaScript dosyası
└── README.md              # Bu dosya
```

## 🚀 Kurulum

1. Projeyi bilgisayarınıza indirin
2. Herhangi bir web tarayıcısında `index.html` dosyasını açın
3. Veya bir web sunucusunda yayınlayın

## 🌐 Ücretsiz Hosting Seçenekleri

### 1. GitHub Pages (Önerilen)
**Avantajlar**: Ücretsiz, hızlı, SSL sertifikası dahil

**Adımlar**:
1. GitHub hesabı oluşturun (github.com)
2. Yeni bir repository oluşturun (örn: `gamesaway-website`)
3. Tüm dosyaları repository'ye yükleyin
4. Settings → Pages → Source: `main` branch seçin
5. Siteniz `https://kullaniciadi.github.io/gamesaway-website/` adresinde yayında!

### 2. Netlify
**Avantajlar**: Kolay deployment, otomatik SSL, form desteği

**Adımlar**:
1. netlify.com'a gidin ve ücretsiz hesap oluşturun
2. "Add new site" → "Deploy manually" seçin
3. Proje klasörünü sürükle-bırak yapın
4. Otomatik olarak yayınlanır!
5. Özel domain bağlayabilirsiniz

### 3. Vercel
**Avantajlar**: Hızlı, otomatik deployment, ücretsiz SSL

**Adımlar**:
1. vercel.com'a gidin ve GitHub ile giriş yapın
2. "New Project" → Repository'nizi seçin
3. Deploy butonuna tıklayın
4. Dakikalar içinde yayında!

### 4. Render
**Avantajlar**: Ücretsiz static site hosting, SSL dahil

**Adımlar**:
1. render.com'a gidin
2. "New Static Site" seçin
3. GitHub repository'nizi bağlayın
4. Otomatik deploy edilir

### 5. Firebase Hosting
**Avantajlar**: Google altyapısı, hızlı, güvenilir

**Adımlar**:
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📱 Responsive Tasarım

Site, aşağıdaki cihazlarda mükemmel çalışır:
- 📱 Mobil telefonlar (320px+)
- 📱 Tabletler (768px+)
- 💻 Dizüstü bilgisayarlar (1024px+)
- 🖥️ Masaüstü bilgisayarlar (1200px+)

## 🎨 Özelleştirme

### Renkleri Değiştirme
`css/style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #6C5CE7;
    --secondary-color: #00B894;
    --dark-color: #2D3436;
    /* ... */
}
```

### İçerik Güncelleme
- HTML dosyalarındaki metinleri düzenleyin
- Sosyal medya linklerini güncelleyin
- İletişim bilgilerini değiştirin

## 📧 İletişim

- **E-posta**: contact@4usgames.com
- **Şirket**: 4USGAME Oyun Yazılım ve Pazarlama A.Ş.
- **Konum**: İstanbul, Türkiye

## 📄 Lisans

© 2025 GamesAway. Tüm hakları saklıdır.

## 🔧 Teknik Detaylar

- **HTML5**: Semantik ve erişilebilir markup
- **CSS3**: Modern stil özellikleri, flexbox, grid
- **JavaScript**: Vanilla JS, modern ES6+ özellikleri
- **Font Awesome**: İkonlar için
- **Responsive**: Mobile-first yaklaşım

## 🚀 Performans

- Hafif dosya boyutları
- Optimize edilmiş görseller
- Hızlı yükleme süreleri
- SEO dostu yapı

## 📝 Notlar

- Bu ilk versiyon statik bir web sitesidir
- Veritabanı entegrasyonu sonraki aşamada eklenecektir
- Form gönderimler şu anda console'a yazdırılmaktadır
- Gerçek API entegrasyonu için backend gereklidir
