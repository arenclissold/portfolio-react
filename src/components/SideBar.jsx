import React from 'react'
import GitHubIcon from './icons/GitHubIcon'
import LinkedinIcon from './icons/LinkedinIcon'

export function Left() {
  return (
    <div className="col col-1 d-none d-lg-flex justify-content-center">
        <div className="sidebar">
          <div className='sidebar-link-div push-bottom'>
            <a href="https://github.com/arenclissold"><GitHubIcon /></a>
          </div>
          <div className='sidebar-link-div'>
            <a href="https://www.linkedin.com/in/arenclissold/"><LinkedinIcon /></a>
          </div>
          <div className="side-line"></div>
        </div>
      </div>
  )
}

export function Right() {
  return (
    <div className="col col-1 d-none d-lg-flex justify-content-center">
        <div className="sidebar">
          <div className="sideways">
            <a className="sidebar-link" href="mailto:arenclissold@gmail.com">arenclissold@gmail.com</a>
          </div>
          <div className="side-line"></div>
        </div>
      </div>
  )
}
