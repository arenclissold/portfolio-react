import React from "react";
import GitHubIcon from "./icons/GitHubIcon";
import ProjectLinkIcon from "./icons/ProjectLinkIcon";
import DaytImg from "./assets/dayt_image.jpeg"
import GigFoxImg from "./assets/gig-fox.png"
import OpenTrivia from "./assets/open_trivia.png";


export default function Projects() {
  return (
    <section id='projects'>
    <div className="sub-heading">
      <h2>Featured Projects</h2>
      <div className="line"></div>
    </div>
    <div className="project-cards">
      <div className="project-card mt-5">
          <a href="https://www.dayt.travel">
            <div className="project-opacity"></div>
            <img className="project-img" src={DaytImg} alt="dayt" />
          </a>
          <div className="project-body project-body-right">
            <h3>Dayt</h3>
            <p className="project-description project-description-right shadow-lg">
              Dayt is a travel planning web app designed to make planning your next trip simple and
              easy while providing authentic experiences recommended by locals. Featuring geocoding, image upload, authentication and front end npm packages for a smooth user experience.
            </p>
            <p className="project-technologies">
              Ruby On Rails | Postgresql | JavaScript | SCSS
            </p>
            <div className="flex lg:justify-end">
              <a href="https://github.com/hwalk1/dayt_app"><GitHubIcon /></a>
              <a href="https://www.dayt.travel" className="project-link"><ProjectLinkIcon /></a>
            </div>
          </div>
      </div>
      <div className="project-card">
        <a href="https://gig-fox.herokuapp.com/">
          <div className="project-opacity project-opacity-left"></div>
          <img
            className="project-img project-img-left"
            src={GigFoxImg}
            alt="gig fox"
            />
          </a>
          <div className="project-body">
            <h3>GigFox</h3>
            <p className="project-description shadow-lg">
              A web app for posting and booking venues around Melbourne. Post your own venue and see it appear on the map. Featuring geocoding, image upload, authentication and authorisation.
            </p>
            <p className="project-technologies">Ruby On Rails | Postgresql | JavaScript | SCSS</p>
            <div className="flex">
              <a href="https://github.com/hwalk1/gigfox"><GitHubIcon /></a>
              <a href="https://gig-fox.herokuapp.com/" className="project-link"><ProjectLinkIcon /></a>
            </div>
          </div>
      </div>
      <div className="project-card">
        <a href="https://open-trivia-time.netlify.app/">
          <div className="project-opacity"></div>
          <img className="project-img" src={OpenTrivia} alt="camping" />
          </a>
          <div className="project-body project-body-right">
            <h3>Open Trivia</h3>
            <p className="project-description project-description-right shadow-lg">
              A trivia game with scores and categories, utilising the Open Trivia API. See how many points you can get!
            </p>
            <p className="project-technologies">JavaScript | Stimulus.js | HTML | CSS | Bootstrap</p>
            <div className="flex lg:justify-end">
              <a href="https://github.com/arenclissold/open-trivia"><GitHubIcon /></a>
              <a href="https://open-trivia-time.netlify.app/" className="project-link"><ProjectLinkIcon /></a>
            </div>
          </div>
      </div>
    </div>
  </section>
  )
}
