import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar__container">
      <nav className="navbar">
        <div className="nav__items">
        <header>
          <Link to='/'>
            <h1 className="logo">Blogi</h1>
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