git config user.email "praveennethsith06@gmail.com"
git config user.name "Praveen061215"

git add package.json package-lock.json tailwind.config.js postcss.config.js
git commit -m "chore: update dependencies and configuration files"

git add public/Praveen_Gunarathna_CV.pdf public/startup.mp4 "src/assets/G.A.M. Praveen N. Gunarathna's CV.pdf" src/assets/half.png src/assets/half1.png src/assets/profile1.jpg src/assets/profile3.png src/assets/profile.jpg profile.jpg
git commit -m "assets: add CVs, images, and startup video"

git add src/App.css src/App.jsx src/index.css
git commit -m "feat: update App layout and global styles"

git add src/components/About.css src/components/About.jsx src/components/Hero.css src/components/Hero.jsx
git commit -m "feat(components): update Hero and About sections"

git add src/components/Navbar.css src/components/Navbar.jsx src/components/Contact.jsx src/components/Skills.jsx src/components/Experience.jsx src/components/Projects.jsx
git commit -m "feat(components): update Navbar, Contact, Skills, Experience, and Projects"

git add src/components/Testimonials.css src/components/Testimonials.jsx src/components/Startup.css src/components/Startup.jsx src/components/ThemeToggle.css src/components/ThemeToggle.jsx src/components/SectionDivider.css src/components/SectionDivider.jsx src/components/SectionDesign.css
git commit -m "feat(components): add Testimonials, Startup, ThemeToggle, and Section components"

git add src/components/TechBackground.css src/components/TechBackground.jsx src/components/BinaryBackground.jsx src/animations/ src/data/ src/utils/
git commit -m "feat: add backgrounds, animations, data, and utilities"

git add .
git commit -m "chore: commit any remaining changes"

git push origin main
