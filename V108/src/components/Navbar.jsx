import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
  // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  // Example of Cleanup Function
  // Jab bhi component unmount (remove) hoga, tab cleanup function chalega

  useEffect(() => {
    // Ye first render (component mount) par run hoga
    alert("Hey welcome to my page. This is the first render of app.jsx")

    // return wala function cleanup function hota hai
    // Ye tab run hota hai jab component unmount hota hai
    return () => {
      alert("Component was unmounted")
    }
  }, [])

  return (
    <div>
      I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar