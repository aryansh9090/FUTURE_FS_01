# Aryan Sharma - Developer Portfolio

![Portfolio Preview](./src/assets/hero.png) **(Note: Replace with a screenshot of your actual portfolio if you have one)*

Welcome to the source code for my personal developer portfolio! This project is a modern, responsive, and animated single-page application built to showcase my engineering skills, projects, and professional identity. 

## 🚀 Live Demo
*Add your live hosted link here once deployed (e.g., Vercel, Netlify, or GitHub Pages)*

## ✨ Features
- **Premium Dark Aesthetics:** A bespoke black and dark-gold color scheme tailored for a sleek, modern visual experience.
- **Scroll Animations:** Integrated with `framer-motion` for fluid, staggered fade-in and slide-up animations that make the UI feel intentional and effortless.
- **Dynamic Routing & Scrolling:** Smooth scroll behaviors with glowing transition effects when navigating via the sticky Navbar.
- **Fully Responsive:** Carefully crafted CSS to ensure the portfolio looks impeccable on desktops, tablets, and mobile devices.
- **Component-Driven Architecture:** Built with React.js using clean, maintainable, and reusable components.

## 🛠️ Tech Stack
- **Frontend Framework:** React.js
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables, Flexbox, CSS Grid)
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## 📂 Project Structure
```text
src/
├── assets/         # Images, PDFs (resume), and SVG icons
├── components/     # Reusable UI components
│   ├── Navbar.jsx  # Sticky top navigation
│   ├── Hero.jsx    # Introduction and CTA
│   ├── About.jsx   # Personal philosophy & hobbies
│   ├── Education.jsx # Academic background
│   ├── Skills.jsx  # Technical proficiencies
│   ├── Projects.jsx# Showcase of selected work
│   └── Contact.jsx # Links and ways to get in touch
├── App.jsx         # Main application layout
├── index.css       # Global styles and CSS variables
└── main.jsx        # Application entry point
```

## ⚙️ Running Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/aryansh9090/FUTURE_FS_01.git
   cd FUTURE_FS_01
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📫 Get In Touch
I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
- **Email:** shrmaaryan.77@gmail.com
- **Phone:** +91 7644004689
- **LinkedIn:** [Aryan Sharma](https://linkedin.com/in/aryan-sharma-a02111402)
- **GitHub:** [aryansh9090](https://github.com/aryansh9090)

---
*Designed & Built by Aryan Sharma*

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
