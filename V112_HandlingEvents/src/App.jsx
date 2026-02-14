import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const [name, setname] = useState("Sherry")
  //const [form, setForm] = useState({email:"",phone:""})
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("Hey I was clicked")
  }
  const handleMouseOver = () => {
    alert("Hey I am a MouseOver")
  }
  // handleChange function tab call hota hai jab input ki value change hoti hai
  // e ek event object hai jo browser automatically deta hai
  // isme input se related info hoti hai (jaise kis input me change hua aur kya value hai)
  const handleChange = (e) => {
    // e.target.value ka matlab hai input box me jo current text likha hai
    // setname se hum state ko new value se update karte hain
    //setname(e.target.value)

    //form object ko as it is rhne do bss ye kr do [e.target.name]:e.target.value
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div> */}

      {/*onchange agr nhi lgaya to change nhi kr paunga text ko */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}

      {/* ek hi handleChange function se multiple i/p handle */}
      <input type="text" name='email' value={form.email} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone} onChange={handleChange} />

      {/* form ko empty object declare kiya to error aaeyga as form.email hai hi nhi so we handled it like this */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
