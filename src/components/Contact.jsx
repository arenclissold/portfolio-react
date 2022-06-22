import React from 'react'
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";


export default function Contact() {
  return (
    <section class="centered margin-bottom">
          <div class="sub-heading center-content">
            <div class="small-line"></div>
            <h2 id="contact">Get in Touch</h2>
            <div class="small-line"></div>
          </div>
          <p class="last">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti laboriosam
            architecto incidunt aliquid reprehenderit facilis, aliquam illum voluptatibus suscipit
            eum dolorem rerum ratione odio assumenda beatae laudantium impedit nostrum.
          </p>
          <a href="mailto:arenclissold@gmail.com" class="hello-button external-link">Say Hello</a>
          <footer>
            <div class="footer-links">
              <a href="https://github.com/arenclissold"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/arenclissold/"><LinkedinIcon /></a>
            </div>
          </footer>
        </section>

  )
}
