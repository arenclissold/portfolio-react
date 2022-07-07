import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full flex justify-between items-center fixed z-[1001] shadow-lg backdrop-blur-sm p-2'>
      <a href="#" className="font-yellowtail text-5xl text-primary m-2">AC</a>
      <div className="text-lg">
        <a className="mx-2 transition-all hover:text-primary" href="#about">About</a>
        <a className="mx-2 transition-all hover:text-primary" href="#projects">Projects</a>
        <a className="mx-2 transition-all hover:text-primary" href="#contact">Contact</a>
        <a href="/aren_clissold_resume.pdf"
          className="border-primary text-primary border-[3px] px-4 py-2 rounded m-2
          transition-all hover:bg-primary hover:bg-opacity-30">
          Resume
        </a>
      </div>
    </nav>
  )
}
