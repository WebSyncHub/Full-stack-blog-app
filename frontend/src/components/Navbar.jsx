import React from 'react'
import { images } from '../constant'
const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="nav__items">
        <header>
            <img src={images.logo} alt="website logo" width={180}/>
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
            <button className="subs__btn"><a href='/dashboard'>Dashboard</a></button>
            <button className='theme'>light</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar