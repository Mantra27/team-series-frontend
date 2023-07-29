import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Register from './Components/register'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

function App() {


  return (
    <>
      <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
   </div>
    </>
  )
}

export default App
