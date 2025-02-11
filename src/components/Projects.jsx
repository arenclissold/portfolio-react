import OpenTrivia from "./assets/open_trivia.png";
import ThreeJS from "./assets/3js.webp"
import { FaGithub } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import ticTacToe from './assets/tic-tac-toe.png'

export default function Projects() {
  const projectData = [
    {
      name: 'Tic Tac Toe',
      description: 'A game of Tic Tac Toe made using React, Tailwind and Vite. Featuring time travel and a beautiful UI.',
      img: ticTacToe,
      github: 'https://github.com/arenclissold/react-tic-tac-toe',
      website: 'https://myreact-tic-tac-toe.netlify.app/',
      technologies: ['JS', 'React', 'Vite', 'Tailwind']
    },
    {
      name: 'Open Trivia',
      description: 'A trivia game with scores and categories, utilising the Open Trivia API. See how many points you can get!',
      technologies: ['JavaScript', 'Stimulus.js', 'HTML', 'CSS', 'Bootstrap'],
      github: 'https://github.com/arenclissold/open-trivia',
      website: 'https://open-trivia-time.netlify.app/',
      img: OpenTrivia
    },
    {
      name: 'ThreeJS System',
      technologies: ['ThreeJS', 'Javascript', 'Vite', 'CSS'],
      github: 'https://github.com/arenclissold/3js-practice',
      website: 'https://three-js-solar-sytem.netlify.app/',
      img: ThreeJS
    }
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
              <a className="text-black bg-blue-400 bg-opacity-90 rounded-3xl mx-1 p-2" href={props.data.github}><FaGithub size='30' /></a>
              <a className="text-black bg-blue-400 bg-opacity-90 rounded-3xl mx-1 p-2" href={props.data.website}><BsArrowUpRight size="30" /></a>
            </div>
            :
            <div className="flex justify-center text-white">
              Coming Soon
            </div>
          }
          {props.data.technologies &&
            <div className="flex flex-wrap justify-center mt-1">
              {props.data.technologies.map((technology, i) =>
                <Technology key={i} name={technology} />
              )}
            </div>
          }
        </div>
      </div>
    )
  }

  const projects = projectData.map((data, i) => <Project key={i} data={data} />)

  const GithubSquare = () => {
    return (
      <div className="h-40 w-full p-2 z-10 top-0 bg-slate-600 bg-opacity-70 rounded-lg
        flex flex-col justify-center shadow-lg transition-all duration-300 transform hover:scale-105">
        <h4 className="text-white text-center">
          Checkout my <a className=' text-primary underline' href="https://github.com/arenclissold/">github profile</a> if you want to see more projects
        </h4>
      </div>
    )
  }

  return (
    <section>
      <div id='projects' className='mt-20 min-h-[30em]'>
        <div className="flex items-center mb-14">
          <h2 className='font-semibold text-4xl'>Projects</h2>
          <div className="line"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
          {projects}
          <GithubSquare />
        </div>
      </div>
    </section>
  )
}
