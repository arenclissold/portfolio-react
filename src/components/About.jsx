import React from 'react'
import SkillSphere from "./SkillSphere";


export default function About() {
  return (
    <section id="about">
    <div className="sub-heading">
      <h2>About</h2>
      <div className="line"></div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xxl mt-4">
          <p className='text-about'>
          I'm a Junior Software Engineer who loves problem-solving and learning new skills. I transitioned to coding when I realised how much I enjoyed scripting network hardware configurations in my previous position as an IT technician.
          <br /><br />
          In my free time I've been learning Express, Mongo DB and Vue3/React. Working towards making a camping oriented app as I really enjoy camping in my time away from the screen.
          <br /><br />
          I'm seeking a role that will take advantage of my problem solving skills, my team-
          player mentality and my passion for coding. Excited to put my skills to use while learning new languages and tools.
          </p>
        </div>
        <div className="col-xxl flex-center">
          <SkillSphere />
        </div>
      </div>
    </div>
  </section>
  )
}
