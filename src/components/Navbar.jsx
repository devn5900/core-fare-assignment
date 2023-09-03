import React from 'react'
import NavLink from './NavLink'

const Navbar = ({logo}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
       <NavLink/>
      </div>
      <div class="ml-auto me-5">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="80" height="80" class="d-inline-block align-text-top" />
    </a>
  </div>
    </div>
  </nav>
  )
}

export default Navbar