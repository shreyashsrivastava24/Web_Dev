import React from 'react'
//ye krne se jb jb props change honge tb tb Navbar component re-render krega chahe app.jsx kitni bar v re-render ho
import { memo } from 'react'

//adjective as a prop
const Navbar = ({adjective,getAdjective}) => {
    //jb jb state change hoti hai to component re render hota hai, to console me ye message print hoga jitni bar state change hogi....thanks to memo iss jhjnjht se bacha liya
    console.log("Navbar rendered")
  return (
    <div>
      I am a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}
//yha ye krna hoga then
export default memo(Navbar)
