import React from "react";
import GitHubIcon from "./icons/GitHubIcon";
import ProjectLinkIcon from "./icons/ProjectLinkIcon";
import DaytImg from "./assets/dayt_image.jpeg"
import GigFoxImg from "./assets/gig-fox.png"
import ticTacToe from './assets/tic-tac-toe.png'


export default function Projects() {
  const projectData = [
    {
      name: 'Dayt',
      description: 'Dayt is a travel planning web app designed to make planning your next trip simple and easy while providing authentic experiences recommended by locals. Featuring geocoding, image upload, authentication and front end npm packages for a smooth user experience.',
      technologies: ['Ruby On Rails', 'Postgresql', 'JavaScript', 'SCSS'],
      github: 'https://github.com/hwalk1/dayt_app',
      website: 'https://www.dayt.travel',
      img: DaytImg
    },
    {
      name: 'GigFox',
      description: 'A web app for posting and booking venues around Melbourne. Post your own venue and see it appear on the map. Featuring geocoding, image upload, authentication and authorisation.',
      technologies: ['Ruby On Rails', 'Postgresql', 'JavaScript', 'SCSS'],
      github: 'https://github.com/hwalk1/gigfox',
      website: 'https://gig-fox.herokuapp.com/',
      img: GigFoxImg
    },
    {
      name: 'Tic Tac Toe',
      description: 'A game of Tic Tac Toe made using React, Tailwind and Vite. Featuring time travel and a beautiful UI',
      img: ticTacToe,
      github: 'https://github.com/arenclissold/react-tic-tac-toe',
      website: 'https://myreact-tic-tac-toe.netlify.app/',
      technologies: ['JS', 'React', 'Vite', 'Tailwind']
    },
  ]

  const Project = (props) => {
    return (
      <div className="h-80 shadow-lg md:shadow-none mt-28 relative">
        <a href={props.data.website} className="group">
          <div className={`transition-all duration-500 h-full w-full opacity-95 absolute z-[1] bg-[#001f54]
          md:hidden rounded right-0
          ${props.index % 2 === 1 && 'right-0'}`
          }></div>
          <img className={`h-full w-full md:w-[55%] w- absolute z-0 rounded object-cover object-top
          transition-all duration-500 group-hover:scale-105 ${props.index % 2 === 1 && 'right-0'}`}
          src={props.data.img} alt={props.data.name} />
        </a>
        <div className={`z-[2] relative flex flex-col justify-between p-4 w-full h-full md:w-[55%] items-start
        ${props.index % 2 === 1 ? '' : 'float-right  md:items-end'}`
        }>
          <h3 className="font-mono text-primary">{props.data.name}</h3>
          <p className=" md:bg-[#001f54] md:p-6 rounded md:shadow-lg">
            {props.data.description}
          </p>
          <p>
            {props.data.technologies.map((technology, i) => i !== props.data.technologies.length - 1 ? `${technology} | ` : technology)}
          </p>
          <div className="flex lg:justify-end">
            <a href={props.data.github} className="mx-2"><GitHubIcon /></a>
            <a href={props.data.website}><ProjectLinkIcon /></a>
          </div>
        </div>
      </div>
    )
  }

  const projects = projectData.map((data, i) => <Project key={i} data={data} index={i} />)

  return (
    <section id='projects' className='scroll-m-24 mt-20'>
      <div className="flex items-center">
        <h2 className='font-semibold text-4xl'>Featured Projects</h2>
        <div className="line"></div>
      </div>
      <div className="flex flex-col">
        {projects}
      </div>
    </section>
  )
}
