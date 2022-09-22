import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { FaPaperPlane } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-column">
          <h1 className="text-uppercase header-title">
            suppa webdev enterprise
          </h1>
          <p className="text-lead">
            Extremely well trained team, composed of humans and high inteligent
            monkeys, makes your website for a cheap price. Banannual have been
            awarded consecutively the 'Most nature preservation' prize since
            1371.
          </p>
          <a href="/" className="btn header-btn btn-blue">
            <FaPaperPlane /> <span>get started</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
