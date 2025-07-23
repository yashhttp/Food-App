import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'

function App() {
  const[showLogin, setLogin] = useState(false)


  return (
    <>
    {showLogin ? <Login setLogin={setLogin}/> : <></>}
      <div className='app'>

        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Placeorder />} />

        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
