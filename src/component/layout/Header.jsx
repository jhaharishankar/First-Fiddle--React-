import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* navbar start */}
      <nav className='navbar navbar-expand-md bg-dark navbar-dark fixed-top'>
        <div className="container-fluid">
          <a href="" className='navbar-brand'>
            <img src="https://pn-paul.netlify.app/image/ff-logo-02.png" alt="" className='weblogo' />
            <img src="https://pn-paul.netlify.app/image/logo-for-mobile.png" alt="" className='moblogo' />
          </a>

          {/* mobile menu */}
          <button className="navbar-toggler" data-bs-target="#pn" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* menu div start */}
          <div class="navbar-collapse collapse" id="pn">
            <ul class="navbar-nav text-center ms-auto">
              <li><Link to="/" className="nav-link">HOME</Link></li>
              <li><Link to="about" className="nav-link">ABOUT</Link></li>
              <li><Link to="brand" className="nav-link">BRAND</Link></li>
              <li><Link to="/ourteam" className="nav-link">OUR TEAM</Link></li>
              <li><Link to="/pressrelease" className="nav-link">PRESS RELEASE</Link></li>
              <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
              <li><Link to="/carriers" className="nav-link">CARRIERS</Link></li>
            </ul>
          </div>
          {/* menu div end */}
        </div>
        {/* container fluid end */}
      </nav>
      {/* navbar end */}
    </>
  )
}

export default Header
