import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css"


function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='nav-title'>moveIT</h1>
      <nav className='nav-wrap'>
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/Login">Login</NavLink>
        <NavLink className="navlink" to="/Signup">Signup</NavLink>
      </nav>
    </div>
  )
}

export default Navbar