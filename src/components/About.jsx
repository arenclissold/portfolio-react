import React from 'react'
import SkillSphere from "./SkillSphere";
import Aren from "./assets/aren.jpeg";

export default function About() {
  return (
    <section>
    <div className="sub-heading">
      <h2 id="about">About</h2>
      <div className="line"></div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sunt unde aliquid
            soluta maiores voluptatem fugiat excepturi, eveniet, expedita ratione magni culpa
            optio adipisci omnis, voluptatum facilis aliquam cum nesciunt.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic, repudiandae
            ad iusto atque impedit fugiat amet numquam nihil laboriosam nulla pariatur soluta
            dignissimos minus perferendis? Laborum optio quos tempora.
          </p>
          <SkillSphere />
        </div>
        <div className="col-lg">
          <div className="flex-center">
            <div className="photo-parent">
              <img
                className="shadow-lg"
                src={Aren}
                alt="profile picture"
                id="photo"
              />
              <div className="photo-border"></div>
            </div>
          </div>
        </div>
      </div>
      <span id="projects"></span>
    </div>
  </section>
  )
}
