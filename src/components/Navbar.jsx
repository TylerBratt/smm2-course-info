import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css"
import logo from "../assets/smm2-logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <div>
            <img className="navbar__logo" src={logo} alt="super mario maker 2 logo" />
          </div>
        </Link>
        <div className="navbar__navigation">
          <Link to="/search">
            <div className="navbar__link">Search</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
