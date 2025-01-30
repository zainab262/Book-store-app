import React from 'react'
import {Link} from "react-router-dom"
import "../styles/nav.css"

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='nav-links'>
        <Link className='nav-link' to="/">Home</Link>
        <Link  className='nav-link' to="/books">Books</Link>
      </div>  
      <div className='nav-btn'>
        <Link  className='login-btn' to="/login">Login</Link>
        <Link  className='logout-btn' to="/">Logout</Link>
      </div>
      
      
    </div>
  )
}
