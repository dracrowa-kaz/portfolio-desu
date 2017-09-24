import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
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
import Drawer from 'material-ui/Drawer'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {open: false, screenName: ''}
    this.openDrawer = this.openDrawer.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(screenName) {
    const { location } = this.props
    const path = location.pathname
    if( screenName === path ) {
      this.setState({ open: false })
      return
    }
    this.setState({ open: false, screenName })
  }

  openDrawer(){
    this.setState({open: !this.state.open})
  }

  render() {
    if(this.state.screenName !== '') {
      return <Redirect to={this.state.screenName} />
    }

    const { isLogged } = this.props.auth
    let isLoggedLabel = ''
    if (isLogged) {
      isLoggedLabel = 'Logged'
    }
    return (
      <nav>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
          <AppBar title={'Portfolio-Desu :)'}
            onLeftIconButtonTouchTap={this.openDrawer}
            iconElementRight={<FlatButton label={isLoggedLabel} />}
             />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
            >
            <MenuItem onClick={() => this.handleClose('/home')}>Home</MenuItem>
            <MenuItem onClick={() => this.handleClose('/login')}>Login</MenuItem>
            <MenuItem onClick={() => this.handleClose('/register')}>Register</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  const {auth} = state
  return {
    auth
  }
}

export default withRouter(connect(mapStateToProps)(Header))
