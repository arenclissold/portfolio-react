import React from 'react'

export default function Navbar() {
  return (
    <div className="sticky-top">
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <a href="#" className="brand">AC</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-2" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item mx-2 mb-md-0 mb-2">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <a href="/aren_clissold_resume.pdf" className="button-link external-link m-2">Resume</a>
        </div>
      </div>
    </nav>
  </div>
  )
}
