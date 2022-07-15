import { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa'

export default function Navbar() {
  const [show, setValue] = useState(false)

  const handleClick = () => {
    setValue(!show)
  }

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  const linkData = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Projects",
      link: "projects"
    },
    {
      name: "Contact",
      link: "contact"
    }
  ]

  return (
    <nav className={`w-full flex justify-between items-center fixed z-[1001] shadow-lg backdrop-blur p-2
    transition-all duration-700
    ${show && 'pb-36'}`
    }>
      <Link
        className="font-yellowtail text-5xl text-primary m-2"
        activeClass="text-primary"
        to="header"
        spy={true}
        smooth={true}
        duration={500}
      >AC</Link>
      <button className='sm:hidden p-2' onClick={handleClick}><FaBars size='30' /></button>
      <div className={`text-lg absolute top-[-10rem] flex items-center flex-col w-full
      transition-transform duration-700 sm:top-auto sm:static sm:w-auto sm:flex-row
      ${show && 'translate-y-56'}`
      }>
        {linkData.map(data =>
          <Link
            className="mx-2 transition-all hover:text-primary border-b-[1px] border-primary border-opacity-0"
            activeClass="text-primary border-b-[1px] border-primary border-opacity-100"
            to={data.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >{data.name}</Link>
        )}
        <a href="/aren_clissold_resume.pdf"
          className="border-primary text-primary border-[3px] px-4 py-2 rounded m-2
          transition-all hover:bg-primary hover:bg-opacity-30 w-min">
          Resume
        </a>
      </div>
    </nav>
  )
}
