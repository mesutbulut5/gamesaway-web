# GamesAway Deployment Guide

## 🚀 Deployment Options

### Option 1: Railway.app (Recommended - Easiest)

1. **Create Account**: Go to [Railway.app](https://railway.app)
2. **New Project**: Click "Start a New Project"
3. **Deploy from GitHub**: Select your GitHub repository
4. **Auto Deploy**: Railway automatically detects .NET and deploys
5. **Get URL**: Your app will be live at `your-app.up.railway.app`

**Environment Variables (Optional):**
- `ASPNETCORE_ENVIRONMENT=Production`
- `ASPNETCORE_URLS=http://+:8080`

---

### Option 2: Azure App Service

```bash
# Install Azure CLI
# https://aka.ms/installazurecli

# Login
az login

# Create resource group
az group create --name gamesaway-rg --location westeurope

# Create app service plan (Free tier)
az appservice plan create --name gamesaway-plan --resource-group gamesaway-rg --sku F1

# Create web app
az webapp create --name gamesaway-app --resource-group gamesaway-rg --plan gamesaway-plan --runtime "DOTNET|10.0"

# Publish and deploy
dotnet publish -c Release
cd bin/Release/net10.0/publish
az webapp deploy --resource-group gamesaway-rg --name gamesaway-app --src-path .
```

**Your URL**: `https://gamesaway-app.azurewebsites.net`

---

### Option 3: Render.com

1. Go to [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `dotnet publish -c Release -o out`
   - **Start Command**: `dotnet out/GamesAway.dll`
   - **Environment**: `ASPNETCORE_ENVIRONMENT=Production`
5. Deploy!

---

### Option 4: Docker (Any Platform)

```bash
# Build Docker image
docker build -t gamesaway .

# Run locally
docker run -p 8080:8080 gamesaway

# Deploy to any Docker hosting (DigitalOcean, AWS, etc.)
```

---

## 📝 Pre-Deployment Checklist

- [x] Database configured (SQLite for dev, PostgreSQL for production)
- [x] `.gitignore` updated (no sensitive files)
- [x] `Dockerfile` created
- [x] `railway.json` configured
- [x] Environment variables set
- [x] HTTPS enabled (automatic on most platforms)

---

## 🔄 Switching to PostgreSQL (Production)

1. **Install Package**:
```bash
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

2. **Update Program.cs**:
```csharp
// Replace SQLite with PostgreSQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
```

3. **Update Connection String** (in Railway/Azure/Render):
```
Host=your-db-host;Database=gamesaway;Username=postgres;Password=your-password
```

4. **Run Migrations**:
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

---

## 🌐 Custom Domain

### Railway:
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records

### Azure:
```bash
az webapp config hostname add --webapp-name gamesaway-app --resource-group gamesaway-rg --hostname yourdomain.com
```

---

## 📊 Monitoring

- **Railway**: Built-in logs and metrics
- **Azure**: Application Insights
- **Render**: Real-time logs

---

## 🔒 Security

- HTTPS is automatic on all platforms
- Database credentials in environment variables
- No sensitive data in GitHub

---

## 💰 Costs

- **Railway**: $5/month free credit (enough for small apps)
- **Azure**: F1 tier is free (limited resources)
- **Render**: Free tier available (sleeps after inactivity)

---

## 🆘 Troubleshooting

**App not starting?**
- Check logs in platform dashboard
- Verify .NET 10.0 runtime is selected
- Ensure port 8080 is exposed

**Database errors?**
- Check connection string
- Verify database is created
- Run migrations

**404 errors?**
- Check routing in Program.cs
- Verify static files are included

---

## 📞 Support

For deployment issues, check:
- Railway Docs: https://docs.railway.app
- Azure Docs: https://docs.microsoft.com/azure
- Render Docs: https://render.com/docs
