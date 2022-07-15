import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";


export default function Contact() {
  return (
    <section id="contact" className="scroll-m-24 mt-20">
      <div className="flex items-center justify-center mb-6">
        <div className="h-0.5 w-1/5 bg-[#2f3957] mx-4 rounded-3xl"></div>
        <h2 className='font-semibold text-4xl w-min'>Get in Touch</h2>
        <div className="h-0.5 w-1/5 bg-[#2f3957] mx-4 rounded-3xl"></div>
      </div>
      <p className="mx-auto w-3/5 text-center text-lg">
        I'm currently interested in new opportunities. I'm always keen for a chat whether you're looking to collaborate on something or just say hello, feel free to contact me.
      </p>
      <div className="flex justify-center my-8">
        <a href="mailto:arenclissold@gmail.com"
        className="border-[3px] border-primary text-primary mx-auto inline-block rounded px-8 py-4 text-lg
        hover:bg-primary hover:bg-opacity-30 transition-all">
          Say Hello
        </a>
      </div>
      <footer>
        <div className="flex justify-center mb-8">
          <a href="https://github.com/arenclissold" className='mx-2'><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/arenclissold/" className='mx-2'><LinkedinIcon /></a>
        </div>
      </footer>
    </section>
  )
}
