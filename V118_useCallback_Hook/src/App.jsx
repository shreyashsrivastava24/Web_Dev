import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [adjective, setadjective] = useState("good")

  //  js me agr same function do bar v likh diya to dono alg hi functions consider honge
  //   const getAdjective = () => {
  //     return "another"
  //   }
  // undefined
  // const getAdjective2 = () => {
  //     return "another"
  //   }
  // undefined
  // getAdjective === getAdjective
  // true
  // getAdjective === getAdjective2
  // false

  // 🔴 IMPORTANT:
  // Function ka NAME same hone se function SAME nahi hota.
  // Jab bhi App.jsx re-render hota hai, pura function dobara run hota hai
  // aur getAdjective ka NEW function reference create hota hai.
  // Matlab previous render wala function !== new render wala function.

  // to jb jb app.jsx re-render hoga to getAdjective function bhi re render hoga,
  // yaha "re-render" ka matlab actually NEW FUNCTION BANNA hai (reference change hota hai)

  // React.memo shallow compare karta hai props ko.
  // adjective string same hai ✔️
  // but getAdjective ka reference har render pe new ho jata hai ❌
  // isliye Navbar ko lagta hai props change hue hain aur wo re-render karta hai.

  // const getAdjective = () => {
  //   return "another"
  // }



  // useCallback hook se hum function ko "memoize" kar sakte hain.
  // useCallback ke andar jo function pass karte hain, wo tab tak SAME reference return karta hai
  // jab tak uske dependencies change nahi hoti.
  //usecallback hmare function ko freez kr deta hai, to wo function reference same hi rahega jab tak dependencies change nahi hoti
  // const getAdjective = useCallback(() => {
  //   return "another"
  // }, []) // empty dependency array means "getAdjective" ka reference kabhi change nahi hoga



  //ab fn chnage ho rha hai jb count change ho rha hai so navbar rerender ho rha hai
  // const getAdjective = () => {
  //   return "another" + count
  // } // empty dependency array means "getAdjective" ka reference kabhi change nahi hoga



  //mai kh rha ki function as it is rhne do agle rerender pr change n hone do
  //ab na navbar rerendner hoga na hi fn change hoga 
  //usecallback fn ko memoise kr deta hai usememo variable ko
  // const getAdjective = useCallback(() => {
  //   return "another" + count
  // }, []) 



  //count change ho to kr do kuch aur change ho to mt krna
  //iss fn ko freeze kr do jb tk count change na ho, count change hote hi fn ko update kr do
  // const getAdjective = useCallback(() => {
  //   return "another" + count
  // }, [count])

  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
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
        {/* state change -> App re-render -> getAdjective new banega -> Navbar re-render */}
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
