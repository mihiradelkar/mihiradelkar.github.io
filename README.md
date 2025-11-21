# Mihir Adelkar - Portfolio Website

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ Single-page application with smooth scrolling
- ✅ Dark/Light mode toggle
- ✅ Fully responsive design
- ✅ TypeScript for type safety
- ✅ Professional ESLint + Prettier configuration
- ✅ Optimized performance with Vite
- ✅ Accessible UI with ARIA labels

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite with SWC
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Code Quality:** ESLint + Prettier

## 📦 Installation

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

## 🧹 Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting
npm run format:check

# Type check
npm run type-check
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/       # Reusable React components
│   ├── data/            # Portfolio content data
│   ├── types/           # TypeScript type definitions
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── .eslintrc.cjs        # ESLint configuration
├── .prettierrc          # Prettier configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/content.ts` to update:
- Personal info (name, email, location)
- Work experience
- Projects
- Skills

### Modify Styling

Tailwind CSS classes can be customized in component files. To change the theme colors, update the `tailwind.config.js` file.

## 🚀 Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

### Vercel/Netlify

Simply connect your GitHub repository and these platforms will auto-deploy on push.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email:** adelkar.mihir@gmail.com
- **LinkedIn:** [linkedin.com/in/mihir-adelkar](https://linkedin.com/in/mihir-adelkar)
- **GitHub:** [github.com/mihiradelkar](https://github.com/mihiradelkar)

---

Built with ❤️ by Mihir Adelkar