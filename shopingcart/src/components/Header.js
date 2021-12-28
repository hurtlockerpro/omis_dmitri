import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <h1>My E-shop</h1>
            <Link to="/">Products</Link>
             |  
            <Link to="/about">About</Link>
        </div>
    )
}

export default Header
