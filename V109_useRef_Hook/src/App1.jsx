import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // 🔹 useState:
  // jab bhi state (count) change hoti hai -> component re-render hota hai

  // 🔹 useRef:
  // agar hume value store karni ho bina re-render trigger kiye,
  // to useRef use karte hain.
  // ye ek mutable object deta hai jisme `.current` property hoti hai.
  // iski value re-renders ke baad bhi persist rehti hai.
  const a = useRef(0)

  // 🔹 useEffect:
  // ye har render ke baad chalega (kyunki dependency array nahi di).
  // yaha hum ref ki value increase kar rahe hain taaki
  // pata chale kitni baar render hua.
  useEffect(() => {
    a.current = a.current + 1
    console.log("Re-render hua, value of a:", a.current)
  })
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        {/* 🔹 Button click -> count update -> re-render trigger */}
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

