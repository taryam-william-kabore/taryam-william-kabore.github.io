# William Rodrigue Kabore — Portfolio

Personal portfolio site built with **React + Vite**, deployed on **GitHub Pages**.

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 🌐 Deploy to GitHub Pages

```bash
# 1. Build the project
npm run build

# 2. The output is in /dist folder
# 3. Push /dist contents to your GitHub repo
#    OR use gh-pages package (see below)
```

### Using gh-pages package (easiest)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Nav.jsx        ← Navigation bar
│   ├── Hero.jsx       ← Landing section with stat cards
│   ├── About.jsx      ← About me section
│   ├── Skills.jsx     ← Tech stack grid
│   ├── Project.jsx    ← Capstone project showcase
│   ├── Sectors.jsx    ← Target industry sectors
│   ├── Education.jsx  ← Academic background
│   ├── Contact.jsx    ← Contact form & links
│   └── Footer.jsx     ← Footer
├── App.jsx            ← Root component
├── main.jsx           ← Entry point
└── index.css          ← Global styles & CSS variables
```

## ✏️ Customize

Update your personal info in these files:
- **`src/components/Nav.jsx`** — email in hire me button
- **`src/components/Hero.jsx`** — your headline text
- **`src/components/About.jsx`** — your bio & details
- **`src/components/Contact.jsx`** — your email, LinkedIn, GitHub, phone
- **`src/components/Project.jsx`** — your GitHub URL
