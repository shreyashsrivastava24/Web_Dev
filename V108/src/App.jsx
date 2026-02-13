import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  // usestate enter
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)
  const [color, setColor] = useState(0)

// 🔔 ALERT FLOW (Order of execution)

// ✅ First Page Load (Initial Render)
// 1️⃣ Navbar → "Hey I will run on every render"
// 2️⃣ Navbar → "Hey welcome to my page. This is the first render"
// 3️⃣ Navbar → "Hey I am running because color was changed"
// 4️⃣ Navbar → "Hey welcome to my page. This is the first render of app.jsx"
// 5️⃣ App → "Count was changed"   (phir color +1 hoga → Navbar re-render)

// ✅ Navbar Re-render (because color changed)
// 6️⃣ Navbar → "Hey I will run on every render"
// 7️⃣ Navbar → "Hey I am running because color was changed"

// ✅ Jab count button click karoge
// 8️⃣ App → "Count was changed"   (color again +1)
// 9️⃣ Navbar → "Hey I will run on every render"
// 🔟 Navbar → "Hey I am running because color was changed"

// ✅ Jab Navbar unmount hoga
// 1️⃣1️⃣ Navbar → "Component was unmounted" (cleanup function)


  useEffect(() => {
    alert("Count was changed")
    setColor(color + 1)
  }, [count])


  return (
    <>
      {/* agr mai navbar ko hta du to cleanup function chlega */}
      <Navbar color={"navy " + "blue" + color} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App