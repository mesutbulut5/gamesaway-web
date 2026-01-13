# GamesAway - Oyun Keşif Platformu

GamesAway, kullanıcılara on binlerce oyuna ücretsiz erişim imkanı sunan yenilikçi bir sosyal medya oyun platformudur.

## 🚀 Özellikler

- ✅ **On Binlerce Oyun**: Ücretsiz erişim ile sınırsız oyun deneyimi
- ✅ **Hızlı Keşif**: Oyun videolarını hızlıca izleyin, indirmeden deneyin
- ✅ **Kişisel Koleksiyon**: Favori oyunlarınızı kaydedin ve paylaşın
- ✅ **Basit Arayüz**: Sosyal medya benzeri kaydırma mekaniği
- ✅ **Dark/Light Mode**: Gece ve gündüz tema desteği
- ✅ **Çoklu Dil**: Türkçe ve İngilizce dil desteği
- ✅ **Responsive**: Mobil ve masaüstü uyumlu tasarım
- ✅ **Geliştirici Paneli**: Oyun yükleme ve analitik özellikleri

## 🛠️ Teknolojiler

- **Backend**: ASP.NET Core MVC (.NET 10.0)
- **Frontend**: HTML5, CSS3, JavaScript
- **UI Framework**: Custom CSS with animations
- **Icons**: Font Awesome 6.4.0

## 📦 Kurulum

### Gereksinimler
- .NET 10.0 SDK veya üzeri
- Modern web tarayıcı

### Adımlar

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/kullaniciadin/gamesaway.git
cd gamesaway
```

2. **Bağımlılıkları yükleyin:**
```bash
dotnet restore
```

3. **Projeyi çalıştırın:**
```bash
dotnet run
```

4. **Tarayıcıda açın:**
```
http://localhost:5123
```

## 📁 Proje Yapısı

```
GamesAway/
├── Controllers/          # MVC Controllers
│   ├── HomeController.cs
│   └── DashboardController.cs
├── Models/              # Data Models
├── Views/               # Razor Views
│   ├── Home/
│   │   ├── Index.cshtml
│   │   ├── Download.cshtml
│   │   ├── QuickStart.cshtml
│   │   ├── Blog.cshtml
│   │   ├── Contact.cshtml
│   │   ├── Privacy.cshtml
│   │   └── Terms.cshtml
│   ├── Dashboard/
│   └── Shared/
│       └── _Layout.cshtml
├── wwwroot/             # Static Files
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── assets/
│   └── lib/
├── Properties/
├── appsettings.json
├── Program.cs
└── GamesAway.csproj
```

## 🎨 Sayfalar

- **Ana Sayfa** (`/`): Platform tanıtımı ve özellikler
- **İndirme** (`/Home/Download`): Uygulama indirme linkleri
- **Hızlı Başlangıç** (`/Home/QuickStart`): Kullanım rehberi
- **Blog** (`/Home/Blog`): Haberler ve güncellemeler
- **İletişim** (`/Home/Contact`): İletişim formu
- **Gizlilik** (`/Home/Privacy`): Gizlilik politikası
- **Kullanım Şartları** (`/Home/Terms`): Hizmet şartları
- **Geliştirici Paneli** (`/Dashboard`): Oyun yönetimi (admin/1234)

## 🔧 Geliştirme

### Debug Modu
```bash
dotnet run --environment Development
```

### Production Build
```bash
dotnet publish -c Release -o ./publish
```

## 🌐 Deployment

### IIS
1. Publish klasörünü IIS'e kopyalayın
2. Application Pool'u .NET Core olarak ayarlayın
3. Web.config dosyasını kontrol edin

### Docker
```bash
docker build -t gamesaway .
docker run -p 5123:80 gamesaway
```

## 📝 Lisans

© 2025 4USGAME Oyun Yazılım ve Pazarlama A.Ş. Tüm hakları saklıdır.

## 📧 İletişim

- **E-posta**: contact@4usgames.com
- **Website**: https://www.4usgames.com
- **Şirket**: 4USGAME Oyun Yazılım ve Pazarlama A.Ş.
- **Konum**: İstanbul, Türkiye

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

**GamesAway** - Oyun Keşfetmenin Yeni Yolu 🎮
