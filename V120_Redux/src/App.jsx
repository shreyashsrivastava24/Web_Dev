import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//imports
import Navbar from './components/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,multiply } from './redux/counter/counterSlice'

function App() {
  //hmare redux store se count le aao and display kr do
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      {/* Propdrilling krte rh jayenge*/}
      {/* <Navbar count={count} /> */}
      <Navbar/>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        Curretly count is : {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={()=>dispatch(multiply())}>x2</button>  
      </div>
    </>
  )
}

export default App

// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux