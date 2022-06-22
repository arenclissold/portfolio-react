import React from "react";
import GitHubIcon from "./icons/GitHubIcon";
import ProjectLinkIcon from "./icons/ProjectLinkIcon";
import DaytImg from "./assets/dayt_image.jpeg"
import GigFoxImg from "./assets/gig-fox.png"
import CampingImg from "./assets/hiking_pic.jpg";


export default function Projects() {
  return (
    <section>
    <div className="sub-heading">
      <h2>Things I've Built</h2>
      <div className="line"></div>
    </div>
    <div className="project-cards">
      <div className="project-card mt-5">
        <div className="project-opacity"></div>
        <img className="project-img" src={DaytImg} alt="dayt" />
        <div className="project-body project-body-right">
          <h3>Dayt</h3>
          <p className="project-description project-description-right shadow-lg">
            Dayt is a travel planning web app designed to make planning your next trip simple and
            easy while providing authentic experiences recommended by locals. Featuring geocoding, image upload, authentication and front end npm packages for a smooth user experience.
          </p>
          <p className="project-technologies">
            Ruby On Rails | Postgresql | JavaScript | SCSS | REST
          </p>
          <div className="project-links">
            <a href="https://github.com/hwalk1/dayt_app"><GitHubIcon /></a>
            <a href="https://www.dayt.travel" className="project-link"><ProjectLinkIcon /></a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-opacity project-opacity-left"></div>
        <img
          className="project-img project-img-left"
          src={GigFoxImg}
          alt="gig fox"
        />
        <div className="project-body">
          <h3>GigFox</h3>
          <p className="project-description shadow-lg">
            A web app for posting and booking venues around Melbourne. Post your own venue and see it appear on the map. Featuring geocoding, image upload, authentication and authorisation.
          </p>
          <p className="project-technologies">Ruby On Rails | Postgresql | JavaScript | SCSS | REST</p>
          <div className="project-links">
            <a href="https://github.com/hwalk1/gigfox"><GitHubIcon /></a>
            <a href="https://gig-fox.herokuapp.com/" className="project-link"><ProjectLinkIcon /></a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-opacity"></div>
        <img className="project-img" src={CampingImg} alt="camping" />
        <div className="project-body project-body-right">
          <h3>Coming Soon - Camping App</h3>
          <p className="project-description project-description-right shadow-lg">
            A modern application to find, share and review camping spots. Helping you discover those magical camping spots and miss the so-so ones.
          </p>
          <p className="project-technologies">Express | MongoDB | mongoose | Node | REST</p>
          <div className="project-links">
            <a href="https://github.com/arenclissold/open-trivia"><GitHubIcon /></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
  }
