import React from 'react'
import './About.css'
import images from '../../constants/images'

const About = () => {
  return (
    <section className="about section-p bg-dark" id="about">
      <div className="container">
        <div className="about-content grid text-center">
          <div className="content-left">
            <img src={images.about_main_img} alt="" />
          </div>
          <div className="content-right">
            <div className="section-t">
              <h3>About Us</h3>
            </div>
            <p className="text">
              Banannual has multi-languages support, with professionals working
              at multiple high-end machine simultaneusly.
            </p>
            <p className="text">
              Banannual is around since prehistory, when website interfaces were
              designed in caves walls.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
