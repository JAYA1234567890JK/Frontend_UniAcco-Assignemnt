import './index.css'
import {FcAbout} from 'react-icons/fc'

import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <FcAbout className="about-icon" />
      <h1 className="about-heading">About</h1>
      <p className="about-paragraph">
        I love to create! I am a front-end web developer
      </p>
    </div>
  </>
)

export default About
