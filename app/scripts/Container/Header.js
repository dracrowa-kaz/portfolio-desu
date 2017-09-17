import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Header = () => (
  <nav>
      <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/register">register</Link></li>
      </ul>
  </nav>
)

export default Header
