# React Learning Journey - Complete Monorepo 🚀

A comprehensive, production-ready monorepo showcasing multiple React projects built sequentially from **beginner to advanced concepts**. This project demonstrates professional development practices including modular architecture, automated deployment, and version control.

**Live Demo:** [React Learning Hub](https://sandeep-003.github.io/react_learning/)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Projects Included](#projects-included)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [How It Works](#how-it-works)
- [Deployment Guide](#deployment-guide)
- [Issues We Faced & Solutions](#issues-we-faced--solutions)
- [Learning Path](#learning-path)
- [Contributing](#contributing)

---

## 🎯 Project Overview

**React Learning Journey** is a **monorepo** (single repository containing multiple projects) designed for learning React systematically. Each project builds upon the previous one, introducing new concepts while reinforcing fundamentals.

### Why This Approach?

✅ **Single Repository** - All learning projects in one place  
✅ **Progressive Learning** - Start simple, build complexity  
✅ **Professional Setup** - Uses industry-standard deployment practices  
✅ **Portfolio Ready** - Showcase multiple projects on one site  
✅ **Easy Maintenance** - Centralized version control and deployment  

---

## 📁 Repository Structure

```
react_learning/
├── 📋 README.md                          (This file - Main documentation)
├── 📋 package.json                       (Root project config)
├── 🔧 deploy.js                          (Automated build script)
├── 🔍 .gitignore                         (Git ignore rules)
│
├── 📂 public/
│   └── index.html                        (Hub page - links all projects)
│
├── 📂 projects/
│   ├── 📂 01-counter-app/                (Beginner - State Management)
│   │   ├── package.json
│   │   ├── public/
│   │   └── src/
│   │       ├── CounterApp.js
│   │       ├── CounterApp.css
│   │       ├── App.js
│   │       └── index.js
│   │
│   ├── 📂 02-todo-app/                   (Intermediate - Array State & CRUD)
│   │   ├── package.json
│   │   ├── public/
│   │   └── src/
│   │       ├── App.js
│   │       └── index.js
│   │
│   ├── 📂 03-weather-app/                (Intermediate - API Integration)
│   │   ├── package.json
│   │   ├── public/
│   │   └── src/
│   │       ├── App.js
│   │       └── index.js
│   │
│   └── 📂 04-movie-search/               (Intermediate+ - Advanced Filtering)
│       ├── package.json
│       ├── public/
│       └── src/
│           ├── App.js
│           └── index.js
│
└── 📂 build/                              (Generated after deployment - do not edit)
    ├── index.html                        (Hub page)
    ├── counter/                          (Counter app build)
    ├── todo/                             (Todo app build)
    ├── weather/                          (Weather app build)
    └── movie-search/                     (Movie search build)
```

---

## 📚 Projects Included

### **1️⃣ Counter App (Beginner) - 30 minutes**

**Live:** [https://sandeep-003.github.io/react_learning/counter](https://sandeep-003.github.io/react_learning/counter)

#### What You'll Build:
A simple counter application with increment, decrement, and reset buttons.

#### Concepts Learned:
| Concept | Explanation |
|---------|-------------|
| **Components** | Functions that return UI |
| **JSX** | HTML-like syntax in JavaScript |
| **useState Hook** | Managing state in functional components |
| **Event Handling** | Responding to user clicks |
| **Re-rendering** | How React updates the DOM |
| **CSS Styling** | Component-specific styling |

#### Implementation Details:
```javascript
// State Management
const [counter, setCounter] = useState(0);

// Event Handlers
const handleIncrement = () => setCounter(counter + 1);
const handleDecrement = () => setCounter(counter - 1);
const handleReset = () => setCounter(0);

// JSX Rendering
<button onClick={handleIncrement}>Increment</button>
```

#### Features:
- ✅ Increment counter by 1
- ✅ Decrement counter by 1
- ✅ Reset to 0
- ✅ Smooth animations
- ✅ Responsive design

#### Files:
- `CounterApp.js` - Main component with state logic
- `CounterApp.css` - Styling with animations
- `App.js` - Wrapper component
- `index.js` - React entry point

---

### **2️⃣ Todo App (Intermediate) - 2-3 hours**

**Status:** 🔜 Coming Soon

#### What You'll Build:
A full CRUD (Create, Read, Update, Delete) todo application.

#### Concepts Learned:
| Concept | Explanation |
|---------|-------------|
| **Array State** | Managing arrays of items with useState |
| **CRUD Operations** | Add, edit, delete todos |
| **Form Handling** | Controlled inputs and form submission |
| **Conditional Rendering** | Show/hide elements based on state |
| **List Rendering** | Mapping arrays to components |
| **Unique Keys** | Why keys matter in React lists |

#### Implementation Details:
```javascript
// Array State
const [todos, setTodos] = useState([]);

// Add Todo
const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text, completed: false }]);
};

// Delete Todo
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

// Toggle Completion
const toggleTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};
```

#### Features:
- ✅ Add new todos
- ✅ Delete todos
- ✅ Mark todos as complete
- ✅ Filter todos (all, active, completed)
- ✅ Clear completed todos
- ✅ Local storage persistence (bonus)

#### Concepts You'll Master:
- Destructuring objects and arrays
- Spread operator (`...`)
- Array methods (`map`, `filter`, `find`)
- Controlled components
- Form validation

---

### **3️⃣ Weather App (Intermediate) - 2-3 hours**

**Status:** 🔜 Coming Soon

#### What You'll Build:
A weather application that fetches data from a weather API.

#### Concepts Learned:
| Concept | Explanation |
|---------|-------------|
| **useEffect Hook** | Side effects and lifecycle methods |
| **API Integration** | Fetching data from external sources |
| **Async/Await** | Working with promises |
| **Loading States** | Showing loaders while fetching |
| **Error Handling** | Handling API errors gracefully |
| **Data Transformation** | Processing API responses |

#### Implementation Details:
```javascript
// useEffect for API calls
useEffect(() => {
  const fetchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.weather.com/...`);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  fetchWeather();
}, [city]); // Re-fetch when city changes

// Conditional Rendering
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
return <div>{/* Display weather */}</div>;
```

#### Features:
- ✅ Search cities
- ✅ Display current weather
- ✅ Show 5-day forecast
- ✅ Display weather icons
- ✅ Handle errors gracefully
- ✅ Loading spinner

#### API Used:
- **OpenWeatherMap API** or **Weather API** (free tier available)

---

### **4️⃣ Movie Search (Intermediate+) - 2-3 hours**

**Status:** 🔜 Coming Soon

#### What You'll Build:
An advanced movie search application with filtering and pagination.

#### Concepts Learned:
| Concept | Explanation |
|---------|-------------|
| **Search Functionality** | Real-time search filtering |
| **Pagination** | Showing results in pages |
| **Advanced Filtering** | Filter by genre, year, rating |
| **Debouncing** | Optimizing search performance |
| **Component Composition** | Breaking UI into smaller parts |
| **Performance Optimization** | Memoization and useCallback |

#### Implementation Details:
```javascript
// Debounced Search
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
  const timer = setTimeout(() => {
    // API call with search term
    fetchMovies(searchTerm);
  }, 500); // Wait 500ms before searching
  
  return () => clearTimeout(timer);
}, [searchTerm]);

// Filtering
const filteredMovies = movies.filter(movie => 
  movie.genre.includes(selectedGenre) &&
  movie.rating >= minRating
);
```

#### Features:
- ✅ Search movies in real-time
- ✅ Filter by genre
- ✅ Filter by rating
- ✅ Sort by popularity/rating
- ✅ Pagination
- ✅ Movie details modal

#### API Used:
- **TMDB (The Movie Database) API** (free with registration)

---

## 🛠 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Library | 18.2.0 |
| **React DOM** | DOM Rendering | 18.2.0 |
| **React Scripts** | Build & Dev Tools | 5.0.1 |
| **Node.js** | Runtime | 14+ |
| **npm** | Package Manager | 6+ |
| **GitHub Pages** | Hosting | Free |
| **Git** | Version Control | Latest |

---

## 📦 Installation & Setup

### Prerequisites

Before starting, ensure you have:

- **Node.js** (v14+) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **GitHub Account** - [Create free account](https://github.com)
- **VS Code** (optional but recommended) - [Download](https://code.visualstudio.com/)

### Step 1: Clone the Repository

```bash
# Clone this repo
git clone https://github.com/YOUR_USERNAME/react_learning.git

# Navigate to project
cd react_learning
```

### Step 2: Install Root Dependencies

```bash
npm install
```

This installs:
- `gh-pages` - For GitHub Pages deployment
- Development dependencies for the root script

### Step 3: Install Project Dependencies

```bash
# Install Counter App dependencies
cd projects/01-counter-app
npm install

# Install Todo App dependencies
cd ../02-todo-app
npm install

# Install Weather App dependencies
cd ../03-weather-app
npm install

# Install Movie Search dependencies
cd ../04-movie-search
npm install

# Return to root
cd ../..
```

### Step 4: Verify Installation

```bash
# Start the counter app
cd projects/01-counter-app
npm start

# Should open at http://localhost:3000
```

---

## 🚀 How It Works

### Development Workflow

#### **Local Development**

```bash
# Work on a specific project
cd projects/01-counter-app
npm start

# This:
# - Starts dev server at http://localhost:3000
# - Hot reloads on file changes
# - Shows errors in browser and console
```

#### **Building for Production**

```bash
# Build individual project
cd projects/01-counter-app
npm run build

# Creates optimized build/ folder with minified code
```

#### **Hub Page Navigation**

The `public/index.html` serves as a landing page that links to all projects:

```
https://sandeep-003.github.io/react_learning/
    ├── Links to Counter App
    ├── Links to Todo App
    ├── Links to Weather App
    └── Links to Movie Search
```

### How deploy.js Works

The `deploy.js` script automates the build and deployment process:

```javascript
// 1. Identifies all projects with correct folder names
const projectFolders = [
  { name: '01-counter-app', route: 'counter' },
  { name: '02-todo-app', route: 'todo' },
  // ... etc
];

// 2. Cleans previous build
// Removes old build/ folder

// 3. Copies hub page to build/
// Copies public/index.html to build/index.html

// 4. For each project:
//    - Builds the project (npm run build)
//    - Copies build/ folder to build/[route]/
//    - Example: projects/01-counter-app/build → build/counter/

// 5. Results in structure:
// build/
// ├── index.html (hub page)
// ├── counter/ (counter app)
// ├── todo/ (todo app)
// ├── weather/ (weather app)
// └── movie-search/ (movie search)
```

---

## 🌍 Deployment Guide

### Why GitHub Pages?

✅ **Free hosting** - No cost whatsoever  
✅ **Automatic updates** - Push code → Site updates  
✅ **HTTPS by default** - Secure connection  
✅ **Custom domain support** - Use your own domain  
✅ **Easy collaboration** - Share with team  

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New"** button
3. Create repository named `react_learning`
4. Make it **Public**
5. **Don't** initialize with README (you have code already)
6. Click **"Create repository"**

### Step 2: Link Local Repo to GitHub

```bash
cd react_learning

# Tell git where to push code
git remote add origin https://github.com/YOUR_USERNAME/react_learning.git

# Verify it worked
git remote -v
# Should show your GitHub URL
```

### Step 3: Update package.json Homepage

In **root** `package.json`, verify:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/react_learning"
}
```

In **each project's** `package.json`, verify:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/react_learning/counter"
}
```

⚠️ Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 4: Automatic Deployment Script

The `package.json` has pre-configured scripts:

```json
{
  "scripts": {
    "build-all": "node deploy.js",
    "predeploy": "npm run build-all",
    "deploy": "gh-pages -d build"
  }
}
```

**Flow when you run `npm run deploy`:**
```
npm run deploy
    ↓
predeploy runs → npm run build-all
    ↓
deploy.js builds each project
    ↓
deploy script uploads build/ to GitHub
    ↓
GitHub Pages serves the site
```

### Step 5: Deploy

```bash
cd react_learning

# First time setup - install gh-pages
npm install --save-dev gh-pages

# Build and deploy everything
npm run deploy

# This:
# - Builds all projects with deploy.js
# - Uploads to gh-pages branch
# - Site goes live!
```

### Step 6: Push Your Code

```bash
# Add all files
git add .

# Create commit
git commit -m "Initial React Learning projects setup"

# Push to GitHub
git push -u origin main

# Push deployment branch
git push origin gh-pages
```

### Step 7: Verify Deployment

1. Go to your repo settings
2. Scroll to **"GitHub Pages"** section
3. Verify branch is set to `gh-pages`
4. Wait 1-2 minutes
5. Visit: `https://YOUR_USERNAME.github.io/react_learning/`

### Updating After Changes

```bash
# Make changes to your code

# Deploy again
npm run deploy

# Push updates
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

---

## 🐛 Issues We Faced & Solutions

### **Issue 1: react-scripts not found**

**Error Message:**
```
'react-scripts' is not recognized as an internal or external command
```

**Cause:** Dependencies weren't installed in project folders.

**Solution:**
```bash
# Go to each project and reinstall
cd projects/01-counter-app
npm install  # This installs react-scripts

# Verify it worked
ls node_modules | grep react-scripts
```

**Prevention:** Always run `npm install` in each project folder after cloning.

---

### **Issue 2: Missing react-dom dependency**

**Error Message:**
```
Module not found: Error: Can't resolve 'react-dom/client'
```

**Cause:** `package.json` was missing dependencies section.

**Solution:** Ensure `package.json` has:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  }
}
```

Then run `npm install`.

---

### **Issue 3: Deploy script doesn't find projects**

**Error Message:**
```
❌ Error building 01-counter-app: Command failed: npx react-scripts build
```

**Cause:** Folder names in deploy.js didn't match actual folder names.

**Solution:** Updated `deploy.js` to map folder names correctly:
```javascript
const projectFolders = [
  { name: '01-counter-app', route: 'counter' },  // Maps folder to URL path
  { name: '02-todo-app', route: 'todo' },
  // etc
];
```

**Prevention:** Keep folder names consistent with deploy.js mappings.

---

### **Issue 4: Changes not showing on deployed site**

**Cause:** Build folder wasn't updated before deployment.

**Solution:** 
```bash
# Clean build completely
Remove-Item -Path "build" -Recurse -Force

# Rebuild
npm run build-all

# Deploy again
npm run deploy
```

---

### **Issue 5: Homepage URL incorrect in package.json**

**Error:** Links on GitHub Pages point to wrong location.

**Cause:** `homepage` field didn't include `/react_learning` in path.

**Solution:** Set correct homepage URLs:
```json
{
  // Root package.json
  "homepage": "https://sandeep-003.github.io/react_learning",
  
  // Each project package.json
  "homepage": "https://sandeep-003.github.io/react_learning/counter"
}
```

---

### **Issue 6: GitHub Pages not updating after deploy**

**Cause:** GitHub needs time to rebuild and serve new content.

**Solution:**
```bash
# Wait 1-2 minutes after npm run deploy

# Then:
# 1. Hard refresh browser (Ctrl+Shift+R on Windows)
# 2. Clear browser cache
# 3. Try in incognito/private window
# 4. Check GitHub Pages settings in repo
```

---

### **Troubleshooting Checklist**

When things don't work:

- [ ] Did you run `npm install` in each project folder?
- [ ] Are dependencies in `package.json`?
- [ ] Is `homepage` URL correct in all `package.json` files?
- [ ] Did you run `npm run deploy`?
- [ ] Did you wait 1-2 minutes for GitHub Pages to update?
- [ ] Did you hard refresh the browser?
- [ ] Check console for errors (F12)
- [ ] Check GitHub Actions tab for deployment status

---

## 📖 Learning Path

### **Week 1: React Fundamentals** (Counter App)

**Objective:** Understand React basics

**Daily Progress:**
- **Day 1:** Install Node.js, create project, understand folder structure
- **Day 2:** Learn JSX, components, and how React renders
- **Day 3:** Implement useState, understand state changes
- **Day 4:** Add event handlers and click events
- **Day 5:** Add CSS styling and animations
- **Day 6:** Deploy to GitHub Pages
- **Day 7:** Review and practice variations

**What You'll Know:**
- How React components work
- What JSX is and why it's useful
- How state management works
- How React re-renders on state changes
- How to handle user events
- How to style React components

---

### **Week 2-3: Intermediate Concepts** (Todo App)

**Objective:** Master array state and CRUD operations

**Topics:**
- Managing arrays in state
- Adding items to arrays
- Removing items from arrays
- Updating items in arrays
- Form handling and validation
- Conditional rendering

**What You'll Build:**
- Todo item component
- Add todo form
- Delete button
- Edit functionality
- Filter todos

---

### **Week 3-4: API Integration** (Weather App)

**Objective:** Learn to fetch and display external data

**Topics:**
- useEffect hook
- Async/await
- Promises
- API calls
- Error handling
- Loading states

**What You'll Build:**
- Search input
- API integration
- Data display
- Error messages
- Loading spinner

---

### **Week 4-5: Advanced Patterns** (Movie Search)

**Objective:** Build scalable, performant React apps

**Topics:**
- Performance optimization
- Memoization (React.memo)
- useCallback hook
- Debouncing
- Complex filtering
- Pagination

**What You'll Build:**
- Advanced search
- Multi-filter system
- Pagination logic
- Optimized re-renders
- Modal windows

---

### **Next Steps (Phase 2)**

After completing these projects:

1. **State Management:**
   - Context API
   - Redux (if needed)

2. **Advanced Patterns:**
   - Custom hooks
   - Higher-order components
   - Render props

3. **Full Stack Integration:**
   - Backend with Node.js/Express
   - Database with MongoDB
   - Authentication

4. **Deployment:**
   - Deploy backend to Heroku/Railway
   - Connect frontend to backend
   - Environment variables

---

## 🤝 Contributing

### How to Add New Projects

1. **Create new project folder:**
   ```bash
   mkdir projects/05-new-project
   cd projects/05-new-project
   npm init -y
   ```

2. **Add folder structure:**
   ```bash
   mkdir public src
   ```

3. **Create package.json with dependencies**

4. **Update deploy.js:**
   ```javascript
   const projectFolders = [
     // ... existing
     { name: '05-new-project', route: 'new-project' }
   ];
   ```

5. **Update hub page** (`public/index.html`) with link

6. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## 📚 Resources & Documentation

### Official Documentation
- [React Official Docs](https://react.dev)
- [Create React App Docs](https://create-react-app.dev)
- [GitHub Pages Docs](https://pages.github.com)

### Learning Resources
- [React Tutorial (Scrimba)](https://scrimba.com/learn/learnreact)
- [MDN React Guide](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [Full Stack Development Course (Angel Wu)](https://www.angelwu.io)

### API Resources
- [OpenWeatherMap API](https://openweathermap.org/api)
- [TMDB Movie API](https://www.themoviedb.org/settings/api)
- [JSONPlaceholder (Fake API)](https://jsonplaceholder.typicode.com/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [React DevTools Extension](https://chrome.google.com/webstore)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

## 📞 Support & FAQ

### Q: How do I start working on a specific project?

A:
```bash
cd projects/01-counter-app
npm start
```

### Q: How do I add a new feature to a project?

A:
1. Make changes in the project folder
2. Test with `npm start`
3. Rebuild and deploy:
   ```bash
   npm run deploy
   git add .
   git commit -m "Add feature: [description]"
   git push origin main
   ```

### Q: How do I troubleshoot build errors?

A:
1. Check console errors: `npm start`
2. Check package.json dependencies
3. Reinstall: `npm install`
4. Clear cache: `npm cache clean --force`
5. Delete node_modules and reinstall

### Q: Can I use this repo as a template?

A: Yes! Fork it or use it as reference for your own learning projects.

### Q: How often should I deploy?

A: Deploy after:
- Completing a feature
- Fixing a bug
- Making significant changes

---

## 📊 Project Statistics

| Project | Difficulty | Time | Concepts | Status |
|---------|-----------|------|----------|--------|
| Counter | Beginner | 30 min | State, JSX, Events | ✅ Complete |
| Todo | Intermediate | 2-3 hrs | Arrays, CRUD, Forms | 🔜 Soon |
| Weather | Intermediate | 2-3 hrs | useEffect, API, Async | 🔜 Soon |
| Movie | Intermediate+ | 2-3 hrs | Advanced Filters, Pagination | 🔜 Soon |

---

## 📈 Learning Progress

Track your progress:

- [ ] Understand React components
- [ ] Master useState hook
- [ ] Learn useEffect hook
- [ ] Understand array state operations
- [ ] Integrate with APIs
- [ ] Deploy to GitHub Pages
- [ ] Optimize component performance
- [ ] Build full-featured applications

---

## 📝 Notes for Learners

### Best Practices You'll Learn

1. **Component Organization** - Keep components focused and reusable
2. **State Management** - Lift state up, keep it close to where it's used
3. **Naming Conventions** - Use clear, descriptive names
4. **Code Splitting** - Break large components into smaller ones
5. **Error Handling** - Always handle errors gracefully
6. **Performance** - Optimize renders and API calls
7. **Deployment** - Automate builds and deployment
8. **Version Control** - Commit often with meaningful messages

### Common Mistakes to Avoid

❌ Mutating state directly  
❌ Fetching data without useEffect  
❌ Missing dependencies in useEffect  
❌ Creating new objects/arrays in every render  
❌ Not handling API errors  
❌ Forgetting to cleanup in useEffect  
❌ Over-complicating component structure  

---

## 🎓 Certificate of Completion

After completing all projects, you'll have:

✅ Strong understanding of React fundamentals  
✅ Ability to build interactive web applications  
✅ Experience with API integration  
✅ Knowledge of professional deployment practices  
✅ Portfolio of working projects  
✅ Foundation for full-stack development  

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your_username](https://github.com/your_username)
- Portfolio: [your-portfolio.com](your-portfolio.com)

---

## 🙏 Acknowledgments

- **Angel Wu** - Full Stack Development Course inspiration
- **React Team** - For the amazing React library
- **GitHub Pages** - For free hosting
- **Open Source Community** - For countless resources and tools

---

## 🚀 Ready to Start?

1. **Clone the repo:** `git clone https://github.com/your-username/react_learning.git`
2. **Install dependencies:** `npm install && cd projects/01-counter-app && npm install`
3. **Start learning:** `npm start`
4. **Deploy your version:** `npm run deploy`

**Happy Coding! 💻**

---

*Last Updated: July 19, 2026*  
*Course: Angel Wu's Full Stack Development*  
*Learning Status: In Progress 🚀*
