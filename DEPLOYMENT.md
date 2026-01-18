# Deployment Instructions for Netlify

## Prerequisites

- GitHub account
- Netlify account (free tier available at netlify.com)

## Step-by-Step Deployment

### 1. Push Code to GitHub

```bash
# Create a new repository on GitHub (go to github.com/new)
# Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/vejeeta-defence-training.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Netlify

There are two methods:

#### Method A: Connect GitHub to Netlify (Recommended)

1. Go to [Netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the repository: `vejeeta-defence-training`
6. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

#### Method B: Deploy with Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Deploy the project
netlify deploy --prod
```

### 3. Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions from Netlify

## Features Deployed

✅ Modern Defence Training Website
✅ 6 Interactive Programs (NDA, SSC, AFCAT, CAPF, Police, Nursing)
✅ Clickable Program Cards
✅ Dedicated Program Detail Pages
✅ Comprehensive Faculty Information
✅ Schedule & Batch Details
✅ Success Stories
✅ Smooth Animations
✅ Responsive Design
✅ Animated Navigation
✅ Success Carousel

## Environment Variables

No environment variables required for this deployment. If needed, add them in Netlify:

1. Go to Site Settings → Build & Deploy → Environment
2. Add your variables
3. Redeploy

## Troubleshooting

- **Build fails**: Ensure all dependencies are in `package.json`
- **Pages not found**: Check `netlify.toml` redirect rule is present
- **Images not loading**: Verify images are in `/public` folder
- **Styling issues**: Clear Netlify cache and redeploy

## Post-Deployment

- Monitor site performance in Netlify Analytics
- Set up automatic deployments on git push
- Configure custom domain if needed
- Enable Netlify Forms for contact submissions

## Support

For issues with deployment, visit:

- Netlify Docs: https://docs.netlify.com
- GitHub: https://github.com/help
