import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
//koi v global change krne k liye index.html me change kr skte hain, jaise title change krna ho to index.html me title tag ke andar change kr dena hai.
 
function App() {

  // Overall Summary (State, Hook, useState)
  // State = component ka data jo time ke saath change ho sakta hai. State change → component re-render → UI update.
  // Hook = React ki special functions jo functional components me features (state, lifecycle, etc.) add karti hain.
  // useState = ek Hook hai jo state banane aur update karne ke liye use hota hai.
  // Ye 2 values deta hai:
  // Current state value (count)
  // Update function (setCount)
  // Example idea: count state ki initial value 10 ho sakti hai aur setCount usse change karega.

  const [count, setCount] = useState(10)

  return (
    <>
      <div>
        {/* javascript curly braces me likhni hai */}
        The count is: {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

export default App
