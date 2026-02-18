import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from "./redux/store.js"
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  //Provider k andr wrap kr diya pure app ko
  //Ab puri app store k compoents ko khi se v access kr skti hai
  <StrictMode>
    <Provider store={store}>  
    <App />
    </Provider>
  </StrictMode>,
)
