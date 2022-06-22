import React from 'react'
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";


export default function Contact() {
  return (
    <section className="centered margin-bottom">
      <div className="sub-heading center-content">
        <div className="small-line"></div>
        <h2 id="contact">Get in Touch</h2>
        <div className="small-line"></div>
      </div>
      <p className="last">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti laboriosam
        architecto incidunt aliquid reprehenderit facilis, aliquam illum voluptatibus suscipit
        eum dolorem rerum ratione odio assumenda beatae laudantium impedit nostrum.
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
