# Mihir Adelkar - Portfolio Website

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features filterable project showcase, dark/light mode, and comprehensive analytics tracking.

🌐 **Live Site:** [mihiradelkar.github.io](https://mihiradelkar.github.io)

## 🚀 Features

### Core Features
- ✅ Single-page application with smooth scrolling navigation
- ✅ Dark/Light mode toggle with persistent preferences
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ TypeScript for type safety and better developer experience
- ✅ Professional ESLint + Prettier configuration
- ✅ Optimized performance with Vite + SWC
- ✅ Accessible UI with ARIA labels and semantic HTML

### Project Showcase
- ✅ **Filterable Projects Grid** - 8 category filters (AI/ML, Cloud, Mobile/IoT, etc.)
- ✅ **Expandable Cards** - Click to view full project details
- ✅ **12 Projects** - Featured projects and complete portfolio
- ✅ **Smart Layout** - 3-column grid with responsive breakpoints

### Analytics & Tracking
- ✅ **Google Analytics 4** integration
- ✅ Custom event tracking for:
  - Section views (Home, About, Experience, Projects, Skills, Contact)
  - Project interactions (expand, filter, view)
  - External link clicks (GitHub, LinkedIn, Email)
  - Traffic sources and UTM parameters

### CI/CD Pipeline
- ✅ **GitHub Actions** automated deployment
- ✅ Automatic linting and type checking on push
- ✅ Zero-downtime deployments to GitHub Pages
- ✅ Build optimization and artifact caching

## 🛠️ Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite with SWC compiler
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Analytics:** Google Analytics 4 (react-ga4)
- **Code Quality:** ESLint + Prettier
- **Deployment:** GitHub Actions + GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/mihiradelkar/mihiradelkar.github.io.git
cd mihiradelkar.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**For GitHub Actions deployment**, add `GA_MEASUREMENT_ID` as a repository secret:
1. Go to Settings → Secrets and variables → Actions
2. Add `GA_MEASUREMENT_ID` with your Google Analytics ID

### Google Analytics Setup

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `.env` file or GitHub Secrets
4. Analytics will automatically track:
   - Page views and session duration
   - User demographics and device types
   - Traffic sources (LinkedIn, GitHub, direct)
   - Project engagement and filter usage
   - External link clicks

## 🧹 Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without changes
npm run format:check

# TypeScript type checking
npm run type-check
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline configuration
├── src/
│   ├── components/           # Reusable React components
│   │   └── ProjectsSection.tsx
│   ├── data/                 # Portfolio content data
│   │   └── content.ts        # Experience, projects, skills, personal info
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/                # Utility functions
│   │   └── analytics.ts      # Google Analytics tracking
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles with Tailwind
├── public/                   # Static assets
├── .eslintrc.cjs             # ESLint configuration
├── .prettierrc               # Prettier configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/content.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  location: 'Your Location',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
}
```

### Add Projects

```typescript
export const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tech: ['React', 'Node.js', 'AWS'],
    highlights: ['Built X', 'Achieved Y', 'Improved Z'],
    github: 'https://github.com/...',
    live: 'https://...',
    category: ['Frontend', 'Cloud'],
    featured: true,
  },
  // ... more projects
];
```

### Modify Styling

Tailwind CSS classes can be customized in:
- Component files for specific styling
- `tailwind.config.js` for theme colors and extensions
- `src/index.css` for global styles

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

Every push to `main` branch automatically:
1. Runs linting and type checks
2. Builds the production bundle
3. Deploys to GitHub Pages

**Setup:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Add `GA_MEASUREMENT_ID` to repository secrets
4. Push to main branch

### Manual Deployment

```bash
npm run build
npm run deploy
# The built files are in the dist/ folder
# Deploy dist/ to your hosting platform
```

### Custom Domain (Optional)

1. Add a `CNAME` file to `public/` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## 📊 Analytics & Tracking

### UTM Parameters for Job Applications

When sharing your portfolio, use UTM parameters to track sources:

```
https://mihiradelkar.github.io/?utm_source=linkedin&utm_medium=profile&utm_campaign=job_search
https://mihiradelkar.github.io/?utm_source=resume&utm_medium=pdf&utm_campaign=apple_application
```

### Custom Events Tracked

- **Section Views:** Automatically tracks which sections users visit
- **Project Filters:** Tracks which project categories are viewed most
- **Project Expansions:** Tracks which projects users want to learn more about
- **External Links:** Tracks clicks to GitHub, LinkedIn, and email
- **Device & Location:** Automatic tracking of user demographics

## 🔒 Privacy

- IP anonymization enabled in Google Analytics
- No personal data collected beyond standard web analytics
- GDPR compliant configuration

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

- **Email:** adelkar.mihir@gmail.com
- **LinkedIn:** [linkedin.com/in/mihir-adelkar](https://linkedin.com/in/mihir-adelkar)
- **GitHub:** [github.com/mihiradelkar](https://github.com/mihiradelkar)
- **Portfolio:** [mihiradelkar.github.io](https://mihiradelkar.github.io)

---

Built with ❤️ by Mihir Adelkar | Last Updated: December 2024