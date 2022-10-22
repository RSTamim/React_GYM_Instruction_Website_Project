import React from 'react'
import './Header.css'
import Logo from "../../assets/Logo.png"
function Header() {
  return (
    <div className='header'>
    <img src={Logo} alt="" className='logo'/>

    <ui className='header-menu'>
      <li>Home</li>
      <li>Programs</li>
      <li>Why Us</li>
      <li>Plans</li>
      <li></li>
    </ui>
    </div>
  )
}

export default Header
