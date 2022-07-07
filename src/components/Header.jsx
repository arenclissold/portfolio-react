import React from 'react'
import Aren from "./assets/aren.jpg";

export default function Header() {
  return (
    <section>
      <div className="row">
        <div className='col-12 col-lg-6 d-flex align-items-center' >
          <div>
            <h3>Hi, my name is</h3>
            <h1>Aren</h1>
            <h2>I build things for the web</h2>
          </div>
        </div>
        <div className="col-12 col-lg-6">
            <div className="flex-center justify-content-lg-start">
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
    </section>
  )
}
