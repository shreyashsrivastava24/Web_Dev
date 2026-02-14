# Tailwind CSS Setup in Vite + React (Step-by-Step Guide)

## 1️⃣ Install Tailwind Packages
Open terminal inside your Vite React project:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

This will create:
- tailwind.config.js
- postcss.config.js

---

## 2️⃣ Configure Tailwind
Open tailwind.config.js and update the content paths:

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

---

## 3️⃣ Add Tailwind Directives in CSS
Open src/index.css and add:

@tailwind base;
@tailwind components;
@tailwind utilities;

---

## 4️⃣ Import CSS in main.jsx
Check that src/main.jsx contains:

import './index.css'

---

## 5️⃣ Run the Project

npm run dev

---

## 6️⃣ Test Tailwind is Working
Inside App.jsx:

<h1 className="text-4xl font-bold text-red-500">
  Tailwind Working 🚀
</h1>

If the text appears styled, Tailwind is successfully installed.
