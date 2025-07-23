import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/frontend_assets/assets'
const Login = ({setLogin}) => {
    const [ currentState, setCurrentState] = useState("Login")
  return (
    <div className='login'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currentState === "Login" ? <></> : <input className='border' type='text' placeholder='Your Name' required/>}
                <input className='border' type="email" placeholder='Your Email' required />
                <input className='border' type="password" placeholder='Password' required />
            </div>
            <button className='border' >{currentState ==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input  type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy </p>
            </div>
            {currentState === "Login"
            ? <p>Create a new account ?<span onClick={()=> setCurrentState("Sign Up")}>Click Here</span></p>
            :  <p>Already have an account?<span onClick={()=> setCurrentState("Login")}>Login Here</span></p>
             }

        </form>
      
    </div>
  )
}

export default Login
