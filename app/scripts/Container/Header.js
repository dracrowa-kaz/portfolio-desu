import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

const Header = () => (
  <nav>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
      <AppBar title="Home" />
    </MuiThemeProvider>
    <ul>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/register">register</Link></li>
    </ul>
  </nav>
)

export default Header
