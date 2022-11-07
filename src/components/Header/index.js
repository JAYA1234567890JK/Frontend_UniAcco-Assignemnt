import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <ul className="nav-menu">
        <li className="link-item">
          <Link className="route-link" to="/">
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/about">
            About
          </Link>
        </li>
        <li className="link-item">
          <Link className="route-link" to="/info">
            Info
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
