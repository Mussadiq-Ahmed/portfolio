# 🚀 Deployment Guide for www.musadiq31.com

Your portfolio is now ready to deploy! Choose one of these options:

---

## ⭐ RECOMMENDED: Netlify (Easiest with Custom Domain)

### Steps:

1. **Push your code to GitHub** (if not already):
   ```powershell
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://www.netlify.com/) and sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository: `Mussadiq-Ahmed/portfolio`
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

3. **Add Custom Domain**:
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `www.musadiq31.com`
   - Follow DNS configuration instructions:
     - Add CNAME record: `www` → `[your-site].netlify.app`
     - Or use Netlify DNS for automatic setup

4. **SSL Certificate**: Automatically provisioned by Netlify (free)

---

## 🔷 Option 2: Vercel

### Steps:

1. **Push your code to GitHub** (if not already)

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com/) and sign in with GitHub
   - Click "Add New Project"
   - Import your `portfolio` repository
   - Vercel will auto-detect Angular settings
   - Click "Deploy"

3. **Add Custom Domain**:
   - Go to Project Settings → Domains
   - Add `www.musadiq31.com`
   - Configure DNS:
     - Add CNAME: `www` → `cname.vercel-dns.com`

---

## 🟢 Option 3: GitHub Pages

### Steps:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Source: "GitHub Actions"

2. **Push code** (workflow will auto-deploy):
   ```powershell
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

3. **Add Custom Domain**:
   - In GitHub Pages settings, add `www.musadiq31.com`
   - Configure DNS:
     - Add CNAME: `www` → `mussadiq-ahmed.github.io`
     - Add A records for apex domain:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`

---

## 📋 Domain Configuration Summary

At your domain registrar (e.g., GoDaddy, Namecheap, Google Domains):

### For Netlify/Vercel:
```
Type    Name    Value
CNAME   www     [your-site].netlify.app  (or cname.vercel-dns.com)
```

### For apex domain (musadiq31.com → www.musadiq31.com redirect):
```
Type    Name    Value
A       @       [IP from hosting provider]
```

---

## ✅ Verification

After deployment, your site will be live at:
- ✨ **https://www.musadiq31.com/** (after DNS propagation, 5-48 hours)

Test the deployment URL first:
- Netlify: `https://[random-name].netlify.app`
- Vercel: `https://[project-name].vercel.app`
- GitHub Pages: `https://mussadiq-ahmed.github.io/portfolio/`

---

## 🏗️ Local Production Build Test

Before deploying, test the production build locally:

```powershell
npm run build
npx http-server dist/developer-portfolio -p 8080
```

Then visit: `http://localhost:8080`

---

## 🔄 Automatic Deployments

All platforms support automatic deployments:
- Any push to `main` branch will automatically rebuild and deploy
- Changes are live in 1-3 minutes

---

**Recommendation**: Start with **Netlify** - it's the most user-friendly and includes free SSL, automatic deployments, and easy custom domain setup.
