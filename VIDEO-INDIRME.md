# 🎥 GamesAway Tanıtım Videosu İndirme Rehberi

## Video Kaynağı
**URL:** https://www.4usgames.com/kopyas%C4%B1-4us-world

## Yöntem 1: Tarayıcı Geliştirici Araçları (En Kolay)

### Adım 1: Sayfayı Açın
1. Chrome veya Firefox tarayıcısında sayfayı açın
2. **F12** tuşuna basın (Geliştirici Araçları)

### Adım 2: Network Sekmesi
1. "Network" sekmesine tıklayın
2. Filtre kutusuna "mp4" veya "video" yazın
3. Sayfayı yenileyin (F5)

### Adım 3: Videoyu Bulun
1. Video oynatılmaya başladığında Network sekmesinde görünecek
2. Video dosyasına sağ tıklayın
3. "Open in new tab" seçin
4. Yeni sekmede sağ tıklayıp "Save video as..." seçin

---

## Yöntem 2: Video İndirme Eklentileri

### Chrome için:
1. **Video DownloadHelper** eklentisini yükleyin
2. Sayfayı açın ve videoyu oynatın
3. Eklenti ikonuna tıklayın
4. Videoyu indirin

### Firefox için:
1. **Video DownloadHelper** eklentisini yükleyin
2. Aynı adımları takip edin

---

## Yöntem 3: Online Video İndirici

### Siteler:
- **SaveFrom.net**
- **Y2Mate.com**
- **KeepVid.pro**

### Kullanım:
1. Sayfa URL'sini kopyalayın
2. İndirici siteye yapıştırın
3. Videoyu indirin

---

## Yöntem 4: youtube-dl (İleri Seviye)

```bash
# youtube-dl kurulumu
pip install youtube-dl

# Videoyu indirin
youtube-dl "https://www.4usgames.com/kopyas%C4%B1-4us-world"
```

---

## Yöntem 5: FFmpeg ile (Profesyonel)

```bash
# Video URL'sini bulun (Network sekmesinden)
ffmpeg -i "VIDEO_URL" -c copy gamesaway-demo.mp4
```

---

## Video Yerleştirme

### Adım 1: Assets Klasörü Oluşturun
```bash
mkdir assets
```

### Adım 2: Videoyu Taşıyın
İndirdiğiniz videoyu `assets/gamesaway-demo.mp4` olarak kaydedin

### Adım 3: HTML'de Kullanın
Video zaten index.html'de hazır:
```html
<video autoplay muted loop playsinline class="hero-video">
    <source src="assets/gamesaway-demo.mp4" type="video/mp4">
</video>
```

---

## Video Optimizasyonu (İsteğe Bağlı)

### FFmpeg ile Sıkıştırma:
```bash
# Dosya boyutunu küçültün
ffmpeg -i gamesaway-demo.mp4 -vcodec h264 -acodec aac -b:v 1M gamesaway-demo-compressed.mp4

# Mobil için optimize edin
ffmpeg -i gamesaway-demo.mp4 -vf scale=720:-1 -b:v 500k gamesaway-demo-mobile.mp4
```

### Online Araçlar:
- **CloudConvert.com** - Video dönüştürme
- **Compressor.io** - Video sıkıştırma
- **HandBrake** - Masaüstü uygulama

---

## Alternatif: Video Yerine GIF

Eğer video bulamazsanız, GIF kullanabilirsiniz:

```html
<img src="assets/gamesaway-demo.gif" alt="GamesAway Demo" class="hero-video">
```

### GIF Oluşturma:
```bash
# Video'dan GIF oluşturun
ffmpeg -i gamesaway-demo.mp4 -vf "fps=10,scale=400:-1:flags=lanczos" -c:v gif gamesaway-demo.gif
```

---

## Alternatif: YouTube Embed

Eğer video YouTube'da varsa:

```html
<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen>
    </iframe>
</div>
```

---

## Önemli Notlar

1. **Telif Hakları**: Videoyu kullanmadan önce izin aldığınızdan emin olun
2. **Dosya Boyutu**: Video 5MB'dan küçük olmalı (web için)
3. **Format**: MP4 (H.264) en uyumlu format
4. **Boyut**: 720p veya 1080p yeterli
5. **Süre**: 10-30 saniye ideal

---

## Video Bulunamazsa

Eğer video bulamazsanız, şu alternatifleri kullanabilirsiniz:

### 1. Placeholder Video
```html
<div class="phone-mockup">
    <i class="fas fa-mobile-alt"></i>
</div>
```

### 2. Animasyonlu SVG
```html
<div class="animated-mockup">
    <!-- SVG animasyon -->
</div>
```

### 3. Ekran Görüntüsü
Uygulamanın ekran görüntüsünü kullanın

---

## Destek

Video indirme konusunda sorun yaşarsanız:
- E-posta: contact@4usgames.com
- Video sahibiyle iletişime geçin

---

**Not:** Video şu anda `index.html` dosyasında placeholder olarak hazır. Videoyu indirip `assets/gamesaway-demo.mp4` olarak kaydettiğinizde otomatik olarak çalışacak!
