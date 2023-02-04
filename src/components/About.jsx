import SkillSphere from "./SkillSphere";

export default function About() {
  return (
    <section id="about">
      <div className="flex items-center">
        <h2 className='font-semibold text-4xl'>About</h2>
        <div className="line"></div>
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-12 lg:col-span-5">
          <p className="text-lg">
            I'm a Full Stack Software Engineer who loves problem-solving and learning new skills. I transitioned to coding when I realised how much I enjoyed scripting network hardware configurations in my previous career as an IT technician.
            <br /><br />
            I currently work at <a className="text-primary" href="https://aeon.co" target="_blank" rel="noreferrer">Aeon</a>, an online philosophy magazine. We have a passionate dev team working with Typescript, GraphQL and Ruby on Rails.
            <br /><br />
            In addition to my role at Aeon, I'm always open to new freelancing opportunities to bring a clients ideas to life and grow as a software developer.
            <br /><br />
            In my time away from the screen, I enjoy bouldering 🧗‍♂️, hiking ⛰️, camping ⛺️ and running 🏃‍♂️.
            I also love travelling and learning Japanese 🇯🇵.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 flex justify-center">
          <SkillSphere />
        </div>
      </div>
    </section>
  )
}
