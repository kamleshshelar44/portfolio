# Kamlesh Shelar - Portfolio Website

A modern, fully responsive personal portfolio website built with React.js, Vite, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and showcases professional experience, projects, and skills.

## 🌟 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Components**:
  - Typewriter effect in hero section
  - Smooth scroll navigation
  - Project filtering system
  - Timeline animations
  - Hover effects and micro-interactions
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Technologies Used

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Sections

1. **Hero Section**: Name, title, typewriter effect, CTA buttons
2. **About Me**: Professional summary and stats
3. **Skills**: Technical skills with filtering by category
4. **Experience**: Timeline-based work experience
5. **Projects**: Portfolio showcase with filtering
6. **Education**: Academic background and certifications
7. **Contact**: Contact form and information
8. **Footer**: Social links and quick navigation

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Button.jsx     # Reusable button components
│   │   ├── Card.jsx       # Reusable card components
│   │   ├── Contact.jsx    # Contact section
│   │   ├── Education.jsx  # Education section
│   │   ├── Experience.jsx # Experience timeline
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section with typewriter
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Projects.jsx   # Projects showcase
│   │   └── Skills.jsx     # Skills section
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles and Tailwind
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## ⚙️ Configuration

### Tailwind CSS Configuration

The `tailwind.config.js` file includes:

- Custom color scheme (primary and secondary colors)
- Dark mode support
- Custom animations (fade-in, slide-up, typewriter, etc.)
- Extended theme configuration

### Vite Configuration

Standard Vite configuration for React with JavaScript support.

## 🎨 Customization

### Personal Information

Update your personal details in the following components:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Name, titles, contact information

2. **About Section** (`src/components/About.jsx`):
   - Professional summary, stats

3. **Experience Section** (`src/components/Experience.jsx`):
   - Work experience, achievements

4. **Projects Section** (`src/components/Projects.jsx`):
   - Project details, links, technologies

5. **Education Section** (`src/components/Education.jsx`):
   - Academic background, certifications

6. **Contact Section** (`src/components/Contact.jsx`):
   - Contact information, form details

7. **Footer** (`src/components/Footer.jsx`):
   - Social media links

### Colors and Styling

Modify the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      secondary: { /* your secondary colors */ }
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Add a navigation link in `Navbar.jsx`
4. Update the smooth scroll behavior if needed

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's `dark:` variants. Users can toggle between themes using the button in the navigation bar.

## 📊 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Bundle size optimized with Vite
- Lazy loading for images
- Code splitting ready

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your repository to Vercel
2. Vercel will auto-detect the settings
3. Deploy!

### GitHub Pages

1. Run `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Kamlesh S. Shelar
- Email: kamleshshelar44@gmail.com
- Phone: +91-7020674054
- LinkedIn: linkedin.com/in/kamlesh-shelar-3653a2203

---

⭐ If you find this template helpful, please give it a star!