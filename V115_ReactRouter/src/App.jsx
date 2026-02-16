import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//anchor tag se agr hm ye kam krenge to page reload hoga hr click pe thats why we are using this, react router se page reload ni hoga bar bar

//npm  i react-router-dom...in terminal to install react router

//Router provider: jha v aap apne elements ko fit krna chahte ho wha pe router provider lga doge

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      //username is parameter
      path: "/user/:username",
      element: <><Navbar /><User /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App