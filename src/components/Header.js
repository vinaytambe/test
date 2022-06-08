import React from 'react'
import {Link} from "react-router-dom"

export default function Headerone() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
        <a href='#' className='navbar-brand'>
            <img src='https://images.vexels.com/media/users/3/128437/isolated/lists/2dd809b7c15968cb7cc577b2cb49c84f-pizza-food-restaurant-logo.png' className='logo'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item me-1'>
                    <Link to="/signup" className='btn btn-outline-secondary'>Signup</Link>
                </li>
                <li className='nav-item ms-1'>
                    <Link to="/login" className='btn btn-outline-secondary'>Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
