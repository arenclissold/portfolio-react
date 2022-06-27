import React from 'react'
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";


export default function Contact() {
  return (
    <section id="contact" className="centered margin-bottom">
      <div className="sub-heading center-content">
        <div className="small-line"></div>
        <h2 >Get in Touch</h2>
        <div className="small-line"></div>
      </div>
      <p className="mx-auto last-p ">
        I'm currently interested in new opportunities. I'm always keen for a chat whether you're looking to collaborate on something or just say hello, feel free to contact me.
      </p>
      <a href="mailto:arenclissold@gmail.com" className="hello-button external-link">Say Hello</a>
      <footer>
        <div className="footer-links">
          <a href="https://github.com/arenclissold"><GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/arenclissold/"><LinkedinIcon /></a>
        </div>
      </footer>
    </section>
  )
}
