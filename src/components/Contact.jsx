import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import Waves from './assets/contact-waves.svg'
import GitHubIcon from "./icons/GitHubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { FiMail } from "react-icons/fi"

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.disabled = true

    const emailField = form.current.querySelector('input[name = user_email]')
    const messageField = form.current.querySelector('textarea')
    if (emailField.value && messageField.value) {
      emailjs.sendForm('service_j5qvy7b', 'template_4ex5o3d', form.current, 'LZiH3VzIaIxXMV0yW')
        .then((result) => {
            console.log(result.text);
            emailField.value = ''
            messageField.value = ''
            e.disabled = false
            emailConfetti()
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  const emailConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center mx-auto my-5 max-w-96 max-w-lg">
      <input type="email" name="user_email" placeholder='Email address'
      className='my-4 p-2 shadow-lg rounded text-black focus:outline-[#7209b7] focus:outline-[3px] focus:outline' />
      <textarea name="message" placeholder='What did you have in mind?'
      className='h-32 my-4 p-2 shadow-lg rounded resize-none text-black focus:outline-[#7209b7] focus:outline-[3px] focus:outline' />
      <div className="shadow-lg w-min m-2 rounded mx-auto">
        <input type="submit" value="Send"
        className="bg-[#7209b7] text-white rounded px-9 py-2 text-lg duration-500 transition-all
        hover:text-[#7209b7] hover:shadow-[inset_6.5em_0_0_0_white] focus:hover:shadow-[inset_6.5em_0_0_0_white]" />
      </div>
    </form>
  );
};

export default function Contact() {
  return (
    <section id="contact" className="mt-20 relative z-[1] min-h-[90vh]"  >
      <div className='absolute md:left-[-17%] left-[-10%] aspect[1/2] w-[120vw] h-full bg-no-repeat bg-cover bg-center z-[-1]'
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
