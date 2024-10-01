import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { images } from '../constant'
const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="nav__items">
        <header>
          <Link to='/'>
            <img src={images.logo} alt="website logo" width={180}/>
          </Link>
        </header>
        <ul>
            <li>Web Dev</li>
            <li>SEO</li>
            <li>Content</li>
            <li>Design</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>About Us</li>
        </ul>
        </div>
        <div className="btns">
            <button className="subs__btn"><Link to="/dashboard">Dashboard</Link></button>
            <button className='theme'>light</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar