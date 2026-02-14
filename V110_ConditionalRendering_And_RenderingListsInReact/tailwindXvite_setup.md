# Here’s the correct and latest way to add Tailwind CSS in a Vite + React app 👇

## ✅ 1️⃣ Install Tailwind packages
Open terminal inside your Vite React project:

npm install -D tailwindcss@3 postcss autoprefixer 
npx tailwindcss init -p  

This creates:

tailwind.config.js  
postcss.config.js  

---

## ✅ 2️⃣ Configure Tailwind
Open tailwind.config.js and modify content:

/** @type {import('tailwindcss').Config} */
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

## ✅ 3️⃣ Add Tailwind directives in CSS
Open your main CSS file:  
👉 usually src/index.css  

Remove old CSS and add:

@tailwind base;  
@tailwind components;  
@tailwind utilities;  

---

## ✅ 4️⃣ Import CSS in main.jsx
Check src/main.jsx:

import './index.css'

(Already hota hai normally Vite me.)

---

## ✅ 5️⃣ Run your project

npm run dev

---

## ✅ 6️⃣ Test Tailwind working or not
Inside App.jsx:

<h1 className="text-4xl font-bold text-red-500">
  Tailwind Working 🚀
</h1>
