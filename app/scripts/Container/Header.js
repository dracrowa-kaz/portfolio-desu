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
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import Drawer from 'material-ui/Drawer';

const Logged = (props) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)

const homeButton = () => (
  <IconButton tooltip="Font Icon">
    <FontIcon className="muidocs-icon-action-home" />
  </IconButton>
)

const Header = () => (
  <nav>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
      <AppBar title="Home"
        iconElementRight={<Logged />}
        />
    </MuiThemeProvider>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
      <Drawer open={true} >
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    </MuiThemeProvider>
    <ul>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/register">register</Link></li>
    </ul>
  </nav>
)

export default Header
