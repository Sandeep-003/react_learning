const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectFolders = [
  { name: '01-counter-app', route: 'counter' },
  { name: '02-todo-app', route: 'todo' },
  { name: '03-weather-app', route: 'weather' },
  { name: '04-movie-search', route: 'movie-search' }
];
const buildDir = path.join(__dirname, 'build');

// Clean build directory
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true });
}
fs.mkdirSync(buildDir);

// Copy public hub to build
fs.cpSync(path.join(__dirname, 'public'), buildDir, { recursive: true });

// Build each project and copy to build folder
projectFolders.forEach(({ name, route }) => {
  const projectDir = path.join(__dirname, 'projects', name);
  
  if (fs.existsSync(projectDir)) {
    console.log(`\n📦 Building ${name}...`);
    
    try {
      // Build project using npx to find local react-scripts
      execSync('npx react-scripts build', { cwd: projectDir, stdio: 'inherit' });
      
      // Copy build folder to main build directory
      const projectBuild = path.join(projectDir, 'build');
      const destDir = path.join(buildDir, route);
      
      if (fs.existsSync(projectBuild)) {
        fs.cpSync(projectBuild, destDir, { recursive: true });
        console.log(`✅ ${name} copied to build/${route}`);
      }
    } catch (error) {
      console.error(`❌ Error building ${name}:`, error.message);
    }
  }
});

console.log('\n✨ All projects built successfully!');
console.log('📁 Build folder ready for deployment');