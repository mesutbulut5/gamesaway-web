@echo off
echo ========================================
echo GitHub'a GamesAway Sitesi Yukleniyor...
echo ========================================
echo.

cd gamesaway-deploy

git init
git add .
git commit -m "GamesAway website ilk yukleme"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/gamesaway.git
git push -u origin main

echo.
echo ========================================
echo YUKLEME TAMAMLANDI!
echo Simdi GitHub'da Settings > Pages'i ac
echo ========================================
pause
