import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 🔥 Ek bahut bada array create kiya hai (30 million objects)
// Har object ka structure: { index: number, isMagical: boolean }
// Sirf ek object magical hai (index === 29_000_000)
const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  }
})

function App() {
  // ⚡ React me jab bhi koi state change hoti hai, pura component re-render hota hai
  const [count, setCount] = useState(0)
  const [numbers, setNumbers] = useState(nums)

  // ❌ Ye expensive computation hai:
  // numbers array me se wo object find karna jiska isMagical true ho
  // Agar normal find use karenge to har re-render pe ye heavy calculation chalegi
  // const magical = numbers.find(item=>item.isMagical===true)

  // ✅ useMemo ka use:
  // Expensive computation ko memoize karne ke liye
  // Matlab ek baar calculate karke value save kar lo
  // Fir jab tak dependency change na ho, cached value use karo
  // Isse unnecessary computation, lag aur performance issues avoid hote hain
  //const magical = useMemo(() => numbers.find(item => item.isMagical === true), [])

  // ⚠️ Empty dependency array ka matlab:
  // Ye sirf FIRST render pe chalega, baad me kabhi recompute nahi hoga
  // Chahe numbers change ho ya nahi

  // ✅ Correct approach:
  // numbers ko dependency array me add karna chahiye
  // Taaki jab numbers change ho tabhi expensive computation dobara chale
  //👉 useMemo FIRST render pe hamesha run hota hai, chahe dependency array me kuch bhi ho.
  // Phir uske baad:
  // numbers change 👉 ✅ dobara run
  // numbers same 👉 ❌ run nahi hoga (cached value milegi)
  const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers])

  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => {
          // count state update → component re-render
          setCount((count) => count + 1);

          // 👉 Jab count == 10 ho jata hai:
          // numbers ko ek naye bade array se replace karte hain (10 million objects)
          // Sirf ek object magical hoga (index === 9_000_000)
          // numbers change hote hi useMemo fir se run karega
          if (count == 10) {
            setNumbers(new Array(10_000_000).fill(0).map((_, i) => {
              return {
                index: i,
                isMagical: i === 9_000_000
              }
            }))
          }

        }}>
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
