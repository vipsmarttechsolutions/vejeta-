# 🚀 Netlify Deployment Quick Reference

## One-Click Deployment Option

### Using Netlify's Git Integration (EASIEST)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/repository-name.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Authorize GitHub
   - Select your repository
   - Configure:
     - Base directory: (leave blank)
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Done!** Your site is live 🎉

---

## Command-Line Deployment

### Using Netlify CLI

```bash
# Install Netlify CLI (one-time)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy --prod

# Your site will be published!
```

---

## What Gets Deployed

✅ All React components
✅ All animations and styles
✅ 6 interactive programs
✅ Success carousel
✅ Navigation system
✅ Images and assets

---

## After Deployment

### Configuration in Netlify Dashboard

1. **Site Settings** → Domain management
   - Add custom domain (optional)
   - SSL certificate (auto-generated)

2. **Build & Deploy** → Environment
   - Add environment variables if needed
   - Configure build settings

3. **Analytics** (Optional)
   - Enable to track visits
   - Monitor performance

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Check `npm run build` works locally |
| Routes don't work | `netlify.toml` has redirect rule |
| Images missing | Verify in `/public` folder |
| Styles broken | Clear cache → redeploy |
| Domain not working | Check DNS settings |

---

## Environment Variables (if needed)

```bash
# In Netlify Dashboard:
# Site Settings → Build & Deploy → Environment

KEY=value
ANOTHER_KEY=another_value
```

---

## Automatic Deployments

Netlify automatically deploys when you push to GitHub:
1. Make changes locally
2. Commit: `git commit -m "Update"`
3. Push: `git push origin main`
4. Netlify rebuilds and deploys automatically!

---

## Rollback to Previous Version

1. Netlify Dashboard → Deployments
2. Click on previous deployment
3. Click "Publish deploy"

---

## View Deployment Logs

```bash
# Via CLI
netlify deploy --build

# Or in Dashboard: Deploys → Select deploy → View logs
```

---

## Custom Domain Setup

1. **In Netlify**: Site settings → Domain management
2. **Update DNS**: Point your domain to Netlify
3. **Enable HTTPS**: Automatic with Let's Encrypt
4. **Configure**: Add www redirect if needed

---

## Performance Optimization (Already Done)
- ✅ Code minification
- ✅ Image optimization needed (future)
- ✅ Gzip compression enabled
- ✅ Lazy loading available
- ✅ Production build: ~120 KB gzip

---

## Support Links

- **Netlify Docs**: https://docs.netlify.com
- **Build Settings**: https://docs.netlify.com/configure-builds/get-started/
- **Deployment Options**: https://docs.netlify.com/site-deploys/overview/

---

## Summary Command

Everything in one command:
```bash
# From project directory
git remote add origin YOUR_GITHUB_URL
git push -u origin main
# Then in Netlify: New site from Git → Select repo → Deploy
```

**Total time to deploy: < 5 minutes!**

---

*Project: Vejeeta Defence Training Website*
*Status: ✅ Ready for Deployment*
