# 3D Developer Portfolio Website

A modern, immersive developer portfolio website built with React, Three.js, and Framer Motion. Features a stunning space theme with interactive 3D elements, smooth animations, and responsive design.

## ✨ Features

- **Full-Screen 3D Space Theme** - Immersive dark background with animated particles and stars
- **Interactive 3D Elements** - Floating planets, rotating objects, and orbiting skill icons
- **Smooth Animations** - Powered by Framer Motion for premium transitions and parallax effects
- **Glassmorphism Design** - Modern glass-effect UI components with backdrop blur
- **Responsive Layout** - Fully responsive design that works on mobile, tablet, and desktop
- **Performance Optimized** - Lazy loading, low-poly models, and efficient rendering
- **Multiple Sections**:
  - Hero section with typing effect and 3D rotating planet
  - About section with statistics and achievements
  - Skills section with 3D orbiting elements
  - Projects showcase with interactive cards
  - Contact form with social links

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type safety and better DX
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Steps

1. **Clone or download the project**
   ```bash
   cd Portfolio_webpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:5173`

## 🛠️ Development

### Available Commands

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint
```

### Project Structure

```
portfolio-webpage/
├── src/
│   ├── components/
│   │   ├── 3D/
│   │   │   ├── Scene.tsx           # Canvas and lighting setup
│   │   │   ├── Particles.tsx       # Starfield background
│   │   │   ├── FloatingPlanet.tsx  # 3D planet component
│   │   │   └── SkillsOrbit.tsx     # Orbiting skills visualization
│   │   ├── Navigation.tsx          # Top navigation bar
│   │   ├── ScrollProgress.tsx      # Scroll progress indicator
│   │   ├── Hero.tsx                # Hero section with 3D scene
│   │   ├── About.tsx               # About section
│   │   ├── Skills.tsx              # Skills section
│   │   ├── Projects.tsx            # Projects showcase
│   │   └── Contact.tsx             # Contact form and links
│   ├── utils/
│   │   ├── constants.ts            # Content and configuration
│   │   └── animations.ts           # Framer Motion variants
│   ├── App.tsx                     # Main app component
│   ├── main.tsx                    # React entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── package.json                    # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit `src/utils/constants.ts`:

```typescript
export const DEVELOPER_NAME = "Your Name"
export const DEVELOPER_ROLE = "Your Title"
export const DEVELOPER_INTRO = "Your introduction text"

export const SKILLS = [
  { name: "Skill Name", icon: "📱", color: "#color" },
  // Add more skills
]

export const PROJECTS = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description",
    tags: ["Tag1", "Tag2"],
    image: "📱",
    link: "https://project-link.com",
  },
  // Add more projects
]

export const SOCIAL_LINKS = [
  { name: "GitHub", icon: "Github", url: "https://github.com/yourprofile" },
  // Add more social links
]
```

### Customize Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'nebula': '#your-color',
      'nebula-light': '#your-light-color',
    },
  },
}
```

### Modify 3D Elements

- **Hero Planet**: Edit `src/components/Hero.tsx` - adjust size, color, and position
- **Skills Orbit**: Edit `src/components/Skills.tsx` - change orbit count and appearance
- **Particles**: Edit `src/components/3D/Particles.tsx` - adjust count and size

## 🚄 Performance Optimization

- **Lazy Loading**: 3D components use Suspense for code splitting
- **Low Poly Models**: Particles and simple geometries for fast rendering
- **Responsive dpr**: Device pixel ratio adapts to screen quality
- **Viewport Detection**: Animations trigger only when visible

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:
- **Mobile** (320px - 640px)
- **Tablet** (641px - 1024px)
- **Desktop** (1025px+)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to Vercel
3. Vercel automatically builds and deploys

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to Cloud Providers

```bash
# Build for production
npm run build

# The 'dist' folder contains the optimized build
# Deploy this folder to your hosting provider
```

## 🎯 Tips for Best Results

1. **Update favicon**: Replace `public/vite.svg` with your own
2. **Optimize images**: Use optimized image formats (WebP)
3. **Test on mobile**: Use Chrome DevTools to test responsiveness
4. **Performance**: Check Lighthouse score and optimize as needed
5. **SEO**: Update title and meta tags in `index.html`

## 🐛 Troubleshooting

### Building takes too long
- Try: `npm run build -- --minify=false` for debugging
- Check terminal for specific errors

### 3D elements not rendering
- Ensure WebGL is supported in your browser
- Check console for Three.js errors
- Try disabling hardware acceleration temporarily

### Animations stuttering on mobile
- Reduce particle count in `src/components/3D/Particles.tsx`
- Disable some Framer Motion animations on mobile
- Use `prefers-reduced-motion` for accessibility

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects!

## 📞 Support

For issues or questions, please refer to the documentation or create an issue in the repository.

---

**Made with ❤️ and 3D magic ✨**
