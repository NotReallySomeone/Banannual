import React from 'react'
import './Portfolio.css'
import sections from '../../constants/data'

const Portfolio = () => {
  return (
    <section className="portfolio section-p bg-dark" id="portfolio">
      <div className="container">
        <div className="portfolio-content">
          <div className="section-t text-center">
            <h3>Our Portfolio</h3>
            <p className="text">Bullshit text placeholder</p>
          </div>

          <div className="item-list text-center text-white grid">
            {sections.portfolio.map(portfolio => {
              return (
                <div
                  className="item flex flex-center flex-column translate-effect"
                  key={portfolio.id}
                  style={{
                    background: `url(${portfolio.image}) no-repeat`,
                    backgroundSize: '100% 100%',
                    aspectRatio: '1 / 1'
                  }}
                >
                  <div className="item-title fs-25 fw-6">{portfolio.title}</div>
                  <div className="text text-white">{portfolio.text}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
