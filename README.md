# Samuel Finatto - Portfolio

A professional portfolio website showcasing my experience as a Senior Tech Lead Software Engineer.

## 🚀 Built With

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with modern features

## 📋 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Fast loading and smooth interactions
- **SEO Friendly** - Proper meta tags and semantic HTML

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit [`src/App.tsx`](src/App.tsx) to update:
- Your name and title
- Professional summary
- Work experience details
- Skills and expertise
- Projects and achievements
- Contact information

### 2. Add Your Profile Photo

Replace the placeholder at `public/profile.jpeg` with your professional photo:
- Recommended size: 500x500px or larger (square)
- Format: JPG or PNG
- Keep file size under 500KB for optimal performance

### 3. Update LinkedIn and Social Links

In [`src/App.tsx`](src/App.tsx), update the URLs:
```tsx
// Hero section
<a href="https://www.linkedin.com/in/samuel-finatto/" ...>

// Contact section
<a href="https://www.linkedin.com/in/samuel-finatto/" ...>
<a href="https://github.com/samuelfinatto" ...>
<a href="mailto:your.email@example.com" ...>
```

### 4. Customize Colors

Edit CSS variables in [`src/App.css`](src/App.css):
```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  /* ... other colors */
}
```

### 5. Update Meta Tags

Edit [`index.html`](index.html) to update:
- Page title
- Meta description
- Open Graph tags for social media sharing
- Your website URL

## 🌐 Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Update [`vite.config.ts`](vite.config.ts) with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (using gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

## 📱 Sections Overview

1. **Hero Section** - Introduction with name, title, and call-to-action
2. **Experience** - Professional work history with timeline
3. **Skills** - Technical expertise organized by category
4. **Projects** - Featured projects and achievements
5. **Contact** - Social links and contact information

## 🎨 Design Features

- **Gradient Hero** - Eye-catching purple gradient background
- **Smooth Animations** - Fade-in and hover effects
- **Card-based Layout** - Modern card design for content sections
- **Timeline View** - Visual timeline for work experience
- **Responsive Grid** - Adaptive layouts for all screen sizes

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Note**: Remember to replace all placeholder content with your actual information from your LinkedIn profile and professional experience.
