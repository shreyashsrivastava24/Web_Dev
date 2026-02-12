//rafc enter se ek functional component bnta hai
import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">
        {props.logoText}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      //Using footer component in navbar component
      <Footer/>
    </div>
  )
}

export default Navbar
