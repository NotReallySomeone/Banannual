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
              Banannual is available in multiple languages, and has
              professionals working with multiple high-end machines 24/7, for a
              flexible price.
            </p>
            <p className="text">BanAnnual is around since internet was born.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
