import './index.css'
import {AiFillInfoCircle} from 'react-icons/ai'

import Header from '../Header'

const Info = () => (
  <>
    <Header />
    <div className="about-container">
      <AiFillInfoCircle className="info-icon" />
      <h1 className="about-heading">Info</h1>
      <p className="about-paragraph">
        I love to create! I am a front-end web developer
      </p>
    </div>
  </>
)

export default Info
