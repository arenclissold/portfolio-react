import React from "react";
import { render } from "react-dom";
import camping from './assets/hiking_pic.jpg'
import ticTacToe from './assets/tic-tac-toe.png'
import { FaGithub } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';

export default function MoreProjects() {
  const projectData = [
        {
          name: 'Tic Tac Toe',
          img: ticTacToe,
          github: 'https://github.com/arenclissold/react-tic-tac-toe',
          website: 'https://myreact-tic-tac-toe.netlify.app/',
          technologies: ['JS', 'React', 'Vite', 'Tailwind']
        },
        {name: 'Yelp Camp', img: camping},
        ]

  const Project = (props) => {
    const Technology = (props) => {
      return <div className=" bg-blue-300 text-blue-700 m-0.5 rounded border-blue-700 border-2 px-1">{props.name}</div>
    }

    return (
      <div
      className="h-40 border-white border-[3px] rounded-lg relative z-10 bg-white shadow-lg transition-all duration-300 transform hover:scale-105">
        <img
        className="z-0 h-full w-full rounded-lg object-cover object-center block"
        src={props.data.img} alt={props.data.name} />
        <div className="absolute h-full w-full z-10 top-0 bg-slate-900 bg-opacity-70 rounded-lg p-2 flex flex-col justify-center">
          <h4 className="text-white text-center">{props.data.name}</h4>
           {props.data.github ?
              <div className="flex justify-center">
                <a className="text-black bg-blue-400 bg-opacity-90 rounded-3xl mx-1 p-2" href={props.data.github}><FaGithub size='30'/></a>
                <a className="text-black bg-blue-400 bg-opacity-90 rounded-3xl mx-1 p-2" href={props.data.website}><BsArrowUpRight size="30"/></a>
              </div>
              :
              <div className="flex justify-center text-white">
                Coming Soon
              </div>
           }
           {props.data.technologies &&
            <div className="flex flex-wrap justify-center mt-1">
                {props.data.technologies.map((technology, i) =>
                  <Technology key={i} name={technology}/>
                )}
            </div>
           }
        </div>
      </div>
    )
  }

  const projects = projectData.map((data, i) => <Project key={i} data={data} />)

  return (
    <section id='more-projects' className='scroll-m-24 mt-20 min-h-[30em]'>
      <div className="flex items-center">
        <h2 className='font-semibold text-4xl'>More Projects</h2>
        <div className="line"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        {projects}
      </div>
    </section>
  )
}
