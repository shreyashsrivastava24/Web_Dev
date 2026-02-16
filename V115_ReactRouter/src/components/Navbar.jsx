import React from 'react'

//ye facility react router hme deta hai jis se page reload n ho wrna hm simply anchor tag use kr lete but we want to avoid page reload
//import { Link } from 'react-router-dom'

//Navlink se ye fayda hai ki hm isme classname lga skte
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
  return (
    //runtime me link anchor tag me hi convert hota
    // <div>
    //   <nav>
    //     <Link to="/"><li>Home</li></Link>
    //     <Link to="/about"><li>About</li></Link>
    //     <Link to="/login"><li>Login</li></Link>
    //   </nav>
    // </div>

    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar