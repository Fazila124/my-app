import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='navbar'>
        <ul className='nav'>
            <li><a href="home">HOME</a></li>
            <li><a href="home">ABOUT</a></li>
            <li><a href="home">CONTACT</a></li>
            <li><a href="home">PROJECT</a></li>
            
        </ul>
    </header>
  )
}

export default Header