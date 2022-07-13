import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

import Navbar from './components/Navbar'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Left, Right } from "./components/SideBar";
import MoreProjects from "./components/MoreProjects";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' text-secondary bg-[#0a1128] font-roboto overflow-hidden'>
    <Navbar />
      <div className="grid grid-cols-10 gap-8">
        <Left />
        <div className="col-span-10 px-5 lg:col-span-8">
          <Header />
          <About />
          <Projects />
          <MoreProjects />
          <Contact />
        </div>
        <Right />
      </div>
  </div>
)
