import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import Navbar from './components/Navbar'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Left, Right } from "./components/SideBar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='main'>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <Left />
        <div className="col mx-4">
          <Header />
          <About />
          <Projects />
          <Contact />
        </div>
        <Right />
      </div>
    </div>
  </div>
)
