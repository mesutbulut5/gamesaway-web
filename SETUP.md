# GamesAway - Hızlı Kurulum Rehberi

Bu rehber, GamesAway web sitesini 5 dakikada yayınlamanız için hazırlanmıştır.

## ⚡ En Hızlı Yöntem (5 Dakika)

### Netlify ile Anında Yayınlama

1. **Netlify'a Gidin**
   - [netlify.com](https://netlify.com) adresine gidin
   - "Sign up" butonuna tıklayın
   - E-posta veya GitHub ile kayıt olun

2. **Siteyi Yükleyin**
   - Dashboard'da "Sites" sekmesine gidin
   - Proje klasörünü tarayıcıya sürükle-bırak yapın
   - Otomatik olarak yayınlanır!

3. **Siteniz Hazır!**
   - Netlify size otomatik bir URL verir: `random-name.netlify.app`
   - Bu URL'yi hemen kullanabilirsiniz
   - İsterseniz özel domain bağlayabilirsiniz

**Tamamlandı! Siteniz artık canlı! 🎉**

---

## 🔧 Özelleştirme (İsteğe Bağlı)

### 1. Site Adını Değiştirin
Netlify'da:
- Site settings → General → Site details
- "Change site name" butonuna tıklayın
- Örnek: `gamesaway.netlify.app`

### 2. İletişim Bilgilerini Güncelleyin
`contact.html` dosyasını düzenleyin:
```html
<p>contact@4usgames.com</p>
<!-- Kendi e-postanızı yazın -->
```

### 3. Sosyal Medya Linklerini Ekleyin
Tüm HTML dosyalarındaki footer bölümünde:
```html
<a href="https://facebook.com/gamesaway">
<a href="https://twitter.com/gamesaway">
<a href="https://instagram.com/gamesaway">
```

### 4. Renkleri Değiştirin
`css/style.css` dosyasında:
```css
:root {
    --primary-color: #6C5CE7;  /* Ana renk */
    --secondary-color: #00B894; /* İkincil renk */
}
```

---

## 📱 Mobil Test

Sitenizi mobilde test edin:
1. Telefonunuzdan site URL'sini açın
2. Tüm sayfaları kontrol edin
3. Menü çalışıyor mu?
4. Formlar düzgün görünüyor mu?

---

## 🎯 Sonraki Adımlar

### Kısa Vadeli (1 Hafta)
- [ ] Gerçek logo ekleyin
- [ ] Favicon ekleyin (site ikonu)
- [ ] Google Analytics ekleyin
- [ ] Sosyal medya hesapları oluşturun
- [ ] İletişim formu backend'i bağlayın

### Orta Vadeli (1 Ay)
- [ ] Blog yazıları ekleyin
- [ ] SEO optimizasyonu yapın
- [ ] Özel domain alın
- [ ] E-posta bülteni sistemi kurun
- [ ] Kullanıcı geri bildirimleri toplayın

### Uzun Vadeli (3 Ay)
- [ ] Veritabanı entegrasyonu
- [ ] Kullanıcı kayıt sistemi
- [ ] Oyun API'si entegrasyonu
- [ ] Admin paneli
- [ ] Mobil uygulama geliştirme

---

## 🆘 Sorun Giderme

### Site Yüklenmiyor
- Tarayıcı cache'ini temizleyin (Ctrl+Shift+Delete)
- Farklı bir tarayıcıda deneyin
- Netlify dashboard'da "Deploys" sekmesini kontrol edin

### Mobilde Düzgün Görünmüyor
- Tarayıcı geliştirici araçlarını açın (F12)
- Responsive mod'a geçin
- Farklı cihaz boyutlarını test edin

### Form Çalışmıyor
- Form şu anda sadece console'a yazdırıyor
- Backend entegrasyonu için:
  - Netlify Forms (ücretsiz)
  - Formspree (ücretsiz)
  - EmailJS (ücretsiz)

---

## 💡 Faydalı Linkler

### Ücretsiz Kaynaklar
- **İkonlar**: [fontawesome.com](https://fontawesome.com)
- **Görseller**: [unsplash.com](https://unsplash.com)
- **Renkler**: [coolors.co](https://coolors.co)
- **Fontlar**: [fonts.google.com](https://fonts.google.com)

### Öğrenme Kaynakları
- **HTML/CSS**: [w3schools.com](https://w3schools.com)
- **JavaScript**: [javascript.info](https://javascript.info)
- **Responsive**: [css-tricks.com](https://css-tricks.com)

### Araçlar
- **SEO Test**: [seobility.net](https://seobility.net)
- **Hız Testi**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **Mobil Test**: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

---

## 📞 Destek

Yardıma mı ihtiyacınız var?

1. **README.md** dosyasını okuyun
2. **DEPLOYMENT.md** dosyasına bakın
3. E-posta gönderin: contact@4usgames.com

---

## ✅ Checklist

Yayınlamadan önce:

- [ ] Tüm sayfalar açılıyor
- [ ] Linkler çalışıyor
- [ ] Mobilde düzgün görünüyor
- [ ] İletişim bilgileri doğru
- [ ] Sosyal medya linkleri eklendi
- [ ] Gizlilik politikası okundu
- [ ] Kullanım şartları okundu

---

## 🎉 Tebrikler!

Siteniz artık yayında! Başarılar dileriz! 🚀

**GamesAway Ekibi**
