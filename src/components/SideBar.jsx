import GitHubIcon from './icons/GitHubIcon'
import LinkedinIcon from './icons/LinkedinIcon'

export function Left() {
  return (
    <div className='hidden lg:block'>
      <div className="fixed flex flex-col justify-end items-center h-full w-1/12 bottom-0">
        <a href="https://github.com/arenclissold" className='mb-4'><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/arenclissold/"><LinkedinIcon /></a>
        <div className="side-line"></div>
      </div>
    </div>
  )
}

export function Right() {
  return (
    <div className='hidden lg:block'>
      <div className="fixed flex flex-col justify-end items-center h-full bottom-0 w-1/12">
          <a className="rotate-90 mb-20 hover:mb-[5.5em] transition-all duration-500 hover:text-primary"
          href="mailto:arenclissold@gmail.com">
            arenclissold@gmail.com
          </a>
        <div className="side-line"></div>
      </div>
    </div>
  )
}
