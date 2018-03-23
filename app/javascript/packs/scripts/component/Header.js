import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Drawer from 'material-ui/Drawer'
import { logout } from '../modules/auth'

const version = 'ver 0.13'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false, screenName: '' }
    this.openDrawer = this.openDrawer.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.loggedLabelTapped = this.loggedLabelTapped.bind(this)
  }

  handleClose(screenName) {
    const { location } = this.props
    const path = location.pathname
    if (screenName === path) {
      this.setState({ open: false })
      return
    }
    this.setState({ open: false, screenName })
  }

  openDrawer() {
    this.setState({ open: !this.state.open })
  }

  loggedLabelTapped() {
    if (confirm('Do you want to logout?')) {
      this.props.dispatch(logout())
    }
  }

  render() {
    if (this.state.screenName !== '') {
      return <Redirect to={this.state.screenName} />
    }
    const { isLogged } = this.props.auth
    const loggedLabel = isLogged
      ? <FlatButton label="Logged" onClick={this.loggedLabelTapped} primary />
      : <div />
    return (
      <nav>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
          <AppBar
            title={`Portfolio-Desu :) ${version}`}
            onLeftIconButtonTouchTap={this.openDrawer}
            iconElementRight={loggedLabel}
          />
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={this.openDrawer}
          >
            <MenuItem onClick={() => this.handleClose('/home')}>Home</MenuItem>
            <MenuItem onClick={() => this.handleClose('/login')}>Login</MenuItem>
            <MenuItem onClick={() => this.handleClose('/register')}>Register</MenuItem>
            <MenuItem onClick={() => this.handleClose('/minerView')}>Mining page</MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    auth
  }
}

export default withRouter(connect(mapStateToProps)(Header))
