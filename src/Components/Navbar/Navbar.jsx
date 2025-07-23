import React, { useContext } from 'react'
import {assets} from "../../assets/frontend_assets/assets"
import "./Navbar.css"
import "../../../src/index.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/Storecontext'
const Navbar = ({setLogin}) => {
    const[menu, setmenu] = useState("menu")
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to="/"><img src={assets.logo} alt="" /></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setmenu("Home")} className={menu === "Home" ? "active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("Menu")} className={menu === "Menu" ? "active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setmenu("Mobile-app")} className={menu === "Mobile-app" ? "active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu("Contact us")} className={menu === "Contact us" ? "active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0 ? "" : 'dot'}></div>
            </div>
            <button onClick={()=> setLogin(true)}>Sign In</button>
        </div>

      
    </div>
  )
}

export default Navbar
