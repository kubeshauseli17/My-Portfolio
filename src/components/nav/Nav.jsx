import React from 'react'
import './nav.css'

const Nav = () => {
  
  return (
    <nav className='navbar'>
      <a href="#" className='nav_item'>Home</a>
      <a href="#about" className='nav_item'>About</a>
      <a href="#resume" className='nav_item'>Resume</a>
      <a href="#portfolio" className='nav_item'>Portfolio</a>
      <a href="#contact" className='nav_item'>Contact</a>
    </nav>
  )
}

export default Nav