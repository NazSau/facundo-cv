import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as LinkedinIcon } from '../../../icons/linkedin.svg'
import { ReactComponent as InstagramIcon } from '../../../icons/instagram.svg'
import './GeneralFooter.scss'

const GeneralFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-title">
        <h5>FACUNDO ARGAÑARAZ</h5>
      </div>
      <div className="footer-content">
        <ul className="footer-links">
          <li>
          <Link to="/">
            <div>
              Home
            </div>
          </Link>
        </li>
        <li>
          <Link to="/publications">
            <div>
              Publications
            </div>
          </Link>
        </li>
        <li>
          <Link to="/working-papers">
            <div>
              Working Papers
            </div>
          </Link>
        </li>
        <li>
          <Link to="/talks">
            <div>
              Talks
            </div>
          </Link>
        </li>
        <li>
          <Link to="/teaching">
            <div>
              Teaching
            </div>
          </Link>
        </li>
        </ul>
      </div>

      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/facundo-arga%C3%B1araz-83861a11b/" target="_blank">
          <LinkedinIcon className="social-media-icon"/>
        </a>
        <a href="https://www.instagram.com/facu_arga/" target="_blank">
          <InstagramIcon className="social-media-icon"/>
        </a>
      </div>

    </footer>
  )
}

export default GeneralFooter