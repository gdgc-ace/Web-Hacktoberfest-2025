# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based web application for GDGC ACE's Hacktoberfest 2025 event. It serves as a community portal with multiple pages showcasing the Google Developer Groups on Campus community.

## Development Commands

### Setup and Installation
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Git Workflow
```bash
# Create feature branch
git checkout -b your-feature-name

# Add and commit changes
git add .
git commit -m "✨ Brief description of your change"

# Push changes
git push origin your-feature-name
```

## Architecture Overview

### Project Structure
- **Single Page Application (SPA)** using React Router for client-side routing
- **Component-based architecture** with functional components and hooks
- **CSS Modules approach** with separate stylesheets for each component/page
- **Standard Create React App** setup with React Scripts

### Key Components & Pages
- **App.jsx** - Main application component with routing configuration
- **components/Navbar.jsx** - Navigation bar with React Router NavLinks
- **pages/** - Route-specific page components:
  - `Home.jsx` - Landing page with hero section and image carousel
  - `Members.jsx` - Team members grid display
  - `Guidelines.jsx` - Contribution guidelines
  - `LeaderBoard.jsx` - Leaderboard (currently showing "Coming Soon")

### Routing Structure
- `/` - Home page
- `/members` - Team members page
- `/guidelines` - Contribution guidelines
- `/leaderboard` - Leaderboard page

### Styling Approach
- Component-specific CSS files in `src/styles/` directory
- Each component imports its corresponding CSS file
- No CSS framework dependencies (vanilla CSS)

## Common Issues & Development Notes

### Known Issues
- **Home page carousel**: Missing image assets in `public/assets/` folder
  - Currently references `event1.jpg`, `event2.jpg`, etc. that don't exist
  - Consider adding placeholder images or updating references

### File Organization
- Components in `src/components/`
- Pages in `src/pages/`
- Styles in `src/styles/`
- Static assets should go in `public/assets/`

### Development Best Practices
- Use functional components with hooks (existing pattern)
- Import CSS files at component level
- Use descriptive branch names for features/fixes
- Test changes locally with `npm start` before committing