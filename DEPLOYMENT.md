# Recipe Site GitHub Pages Deployment Guide

This guide will help you deploy your static recipe site to GitHub Pages and test it locally.

## 🚀 Quick Start

### Prerequisites
- GitHub account with a repository created
- Git installed on your system
- Basic familiarity with command line

## 📁 Step 1: Prepare Your Repository

1. **Create GitHub Repository**
   ```bash
   # If you haven't already, create a new repository on GitHub
   # Name it something like "recipe-site" or "my-recipes"
   ```

2. **Initialize Git (if not already done)**
   ```bash
   cd C:\Users\Matt\CascadeProjects\recipe-site
   git init
   git add .
   git commit -m "Initial commit - Recipe site with 8 recipes"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Step 2: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Navigate to Settings → Pages**
3. **Source**: Select "Deploy from a branch"
4. **Branch**: Choose "main"
5. **Save** - GitHub will provide you with a URL like:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
   ```

## 🧪 Step 3: Local Testing

### Option A: Python Server (Recommended)
```bash
cd C:\Users\Matt\CascadeProjects\recipe-site
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option B: Node.js Server
```bash
cd C:\Users\Matt\CascadeProjects\recipe-site
npx serve -s .
```
Then visit: `http://localhost:3000`

### Option C: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Visit the provided URL

### Option D: Simple File Open
Double-click `index.html` - works but has CORS limitations (no external recipe loading)

## 🔄 Step 4: Update and Deploy Workflow

### Making Changes
1. **Edit recipes locally**
   - Modify `recipes.json` to add/update recipes
   - Test changes with local server
   - Commit changes:
     ```bash
     git add recipes.json
     git commit -m "Add new recipe: [Recipe Name]"
     ```

2. **Deploy to GitHub Pages**
   ```bash
   git push origin main
   ```
   - GitHub Pages automatically updates within 1-2 minutes

## 📱 Step 5: Verify Deployment

1. **Visit your GitHub Pages URL**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
   ```

2. **Test all features**:
   - Recipe cards display correctly
   - Search functionality works
   - Recipe detail pages load properly
   - Serving adjustment works
   - Image placeholders handle broken links
   - Complexity ratings display (⭐⭐⭐☆☆☆)

## 🛠️ Troubleshooting

### Common Issues

**"Access to fetch blocked by CORS policy"**
- **Cause**: Opening `index.html` directly from file system
- **Solution**: Use a local server (Option A or B above)
- **Why**: Browsers block `file://` requests for security

**"Recipes not displaying"**
- **Cause**: `recipes.json` not loading due to CORS error
- **Solution**: Use local server or ensure JSON file is accessible

**"Images not loading"**
- **Cause**: Invalid URLs or network issues
- **Solution**: Check `recipes.json` URLs, ensure they start with `https://`

**"Complexity not showing"**
- **Cause**: Missing `complexity` field in recipe data
- **Solution**: Ensure each recipe has `"complexity": 1-5` field

## 📁 File Structure (What Gets Deployed)

```
recipe-site/
├── index.html          # Main recipe listing page
├── recipe.html         # Individual recipe detail page
├── styles.css          # All styling
├── app.js             # Main page functionality
├── recipe.js           # Recipe detail functionality
├── recipes.json        # Recipe data (single source of truth)
├── README.md           # Documentation
├── .gitignore          # Git ignore rules
└── DEPLOYMENT.md       # This guide
```

## 🎯 Best Practices

### Recipe Management
- **Single Source of Truth**: Only edit `recipes.json`
- **Consistent Format**: Follow existing recipe structure
- **Image URLs**: Use `https://` URLs for reliable loading
- **Complexity**: Always include 1-5 rating

### Git Workflow
```bash
# Regular development cycle
git add .
git commit -m "Update: [description]"
git push origin main

# For major changes
git tag -a v1.0.0
git push origin main --tags
```

### Performance Tips
- Images are lazy-loaded for better performance
- Search is case-insensitive
- Responsive design works on all screen sizes
- No build process needed - pure static files

## 🔗 GitHub Pages Features

**Automatic Deployment**: Changes pushed to `main` branch automatically deploy
**Custom Domain**: Can configure custom domain in repository settings
**HTTPS**: Free SSL certificate included
**No Limits**: Unlimited bandwidth and repositories (public repos)

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify `recipes.json` syntax (use JSON validator)
3. Ensure all files are in the repository root
4. Clear browser cache if needed

## 🎉 You're Ready!

Your recipe site is now ready for GitHub Pages deployment. Once deployed, anyone can access your recipes at the provided GitHub Pages URL, and you can update content simply by pushing changes to the `main` branch.

---

**Last Updated**: March 20, 2026  
**Compatible With**: All modern browsers, mobile devices
