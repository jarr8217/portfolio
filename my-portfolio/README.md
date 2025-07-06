# My Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS to showcase my skills, projects, and experience as a developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Dedicated section to display projects with technologies used
- **Contact Form**: Contact section for potential employers or collaborators

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 3.4.17
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint with React-specific rules

## 📂 Project Structure

```
my-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styles and navbar styling
│   ├── index.css        # Global styles and Tailwind imports
│   └── main.jsx         # Application entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── README.md
```

## 🎨 Current Implementation

### Navigation Bar
- Fixed navigation bar with custom styling
- Dark red background (`rgb(63, 3, 3)`)
- Responsive layout with flexbox
- Logo and navigation links

### Styling Approach
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Custom CSS**: Additional styles in `App.css` for specific components
- **Responsive Design**: Mobile-first approach with breakpoint considerations

### Key Components
- **Header/Navigation**: Fixed navbar with brand logo and navigation links
- **Main Content Area**: Centered layout with maximum width constraint
- **CSS Animations**: Smooth transitions and hover effects

## Development Progress

### Completed
- [x] Project setup with Vite and React
- [x] Tailwind CSS integration
- [x] Basic navigation bar structure
- [x] Responsive layout foundation
- [x] Custom styling for navbar

###  In Progress
- [ ] Hero section with introduction
- [ ] About section with personal information
- [ ] Skills section with technology showcase
- [ ] Projects section with portfolio pieces
- [ ] Contact form with validation
- [ ] Footer with social links
- [ ] Implement CRUD for future updates.

### Planned Features
- [ ] Dark/Light theme toggle
- [ ] Smooth scrolling navigation
- [ ] Project filtering by technology
- [ ] Contact form integration
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility improvements

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Design Goals

- **Professional**: Clean, modern design that reflects technical skills
- **User-Friendly**: Intuitive navigation and clear information hierarchy
- **Performance**: Fast loading times and smooth user experience
- **Accessibility**: WCAG compliant for inclusive design
- **Mobile-First**: Responsive design that works on all devices

## Technical Considerations

### CSS Architecture
- Utility first approach with Tailwind CSS
- Custom CSS for specific component styling
- Responsive design patterns
- CSS Grid and Flexbox for layout

