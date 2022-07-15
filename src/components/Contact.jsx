import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Waves from './assets/contact-waves.svg'
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { FiMail } from "react-icons/fi"

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const emailField = form.current.querySelector('input[name = user_email]')
    const messageField = form.current.querySelector('textarea')
    if (emailField.value && messageField.value) {
      emailjs.sendForm('service_j5qvy7b', 'template_4ex5o3d', form.current, 'LZiH3VzIaIxXMV0yW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center mx-auto my-5 max-w-96 max-w-lg">
      <input type="email" name="user_email" placeholder='Email address'
      className='my-4 p-2 shadow-lg rounded text-black focus:outline-[#7209b7] focus:outline-[3px] focus:outline' />
      <textarea name="message" placeholder='What did you have in mind?'
      className='h-32 my-4 p-2 shadow-lg rounded resize-none text-black focus:outline-[#7209b7] focus:outline-[3px] focus:outline' />
      <input type="submit" value="Send"
      className="bg-[#7209b7] text-white mx-auto inline-block rounded my-2 px-9 py-2 text-lg
      duration-500 transition-all
      hover:text-[#7209b7] hover:shadow-[inset_6.5em_0_0_0_white] focus:hover:shadow-[inset_6.5em_0_0_0_white]" />
    </form>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="scroll-m-24 mt-20 relative z-[2] min-h-[90vh]"  >
      <div className='absolute md:left-[-17%] left-[-5%] aspect[1/2] w-[120vw] h-[90vh] bg-no-repeat bg-cover bg-center z-[-1]'
      style={{backgroundImage: `url(${Waves})`}}></div>
      <div className="flex items-center justify-center mb-6">
        <div className="h-0.5 w-1/5 bg-[#2f3957] mx-4 rounded-3xl"></div>
        <h2 className='font-semibold text-4xl w-min sm:w-auto'>Get in Touch</h2>
        <div className="h-0.5 w-1/5 bg-[#2f3957] mx-4 rounded-3xl"></div>
      </div>
      <p className="mx-auto w-4/5 md:w-1/2 text-center text-lg mix-blend-difference mb-10">
        I'm always keen for a chat whether you're looking to collaborate on something or just say hello, feel free to contact me.
      </p>
      <Email />
        <div className="flex justify-center items-center mb-8">
          <a href="https://github.com/arenclissold" className='mx-3' ><GitHubIcon color='white'/></a>
          <a href="https://www.linkedin.com/in/arenclissold/" className='mx-3'><LinkedinIcon color='white'/></a>
          <a href="mailto:arenclissold@gmail.com" className='text-white mx-3 link-icon hover:text-white' ><FiMail size='33'/></a>
        </div>
    </section>
  )
}
