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
            I'm a Junior Software Engineer who loves problem-solving and learning new skills. I transitioned to coding when I realised how much I enjoyed scripting network hardware configurations in my previous position as an IT technician.
            <br /><br />
            In my free time I've been learning Express, Mongo DB and Vue3/React. Working towards making a camping oriented app as I really enjoy camping in my time away from the screen.
            <br /><br />
            I'm seeking a role that will take advantage of my problem solving skills, my team-
            player mentality and my passion for coding. Excited to put my skills to use while learning new languages and tools.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 flex justify-center">
          <SkillSphere />
        </div>
      </div>
    </section>
  )
}
