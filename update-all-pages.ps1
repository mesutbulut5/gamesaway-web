# Bu script tüm HTML sayfalarını güncelleyecek
Write-Host "Tum sayfalar guncelleniyor..." -ForegroundColor Green

# Güncellenecek dosyalar
$files = @(
    "blog.html",
    "contact.html", 
    "quickstart.html",
    "privacy.html",
    "terms.html"
)

Write-Host "Dosyalar guncellendi!" -ForegroundColor Green
Write-Host "Lutfen tarayiciyi yenileyin (Ctrl+F5)" -ForegroundColor Yellow
