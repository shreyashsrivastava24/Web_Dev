import React from 'react'
//Navbar me count display krne k liye 
import { useSelector,useDispatch } from 'react-redux'

const Navbar = () => {
  //aur ye line add krna hoga taki hm redux store se count le ske
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      I am a navbar and counter is at {count}
    </div>
  )
}

export default Navbar