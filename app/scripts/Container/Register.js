import React, { Component } from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import t from 'tcomb-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Header from './Header'
import { register } from '../modules/auth'

const Email = t.refinement(t.String, function (s) {
  return /@/.test(s)
})
const Password = t.refinement(t.String, function (s) {
  return s.length >= 2
})

const LoginForm = t.struct({
  name: t.String,
  mailaddress: Email,
  password: Password,
  rememberMe: t.Boolean
})

const options = {
  error: 'Passwords must match',
  fields: {
    email: {
      error: 'Invalid email'
    },
    password: {
      type: 'password',
      error: 'Invalid password, enter at least 2 chars'
    }
  }
};

class Register extends Component {
  constructor(props){
    super(props)
  }

  save() {
    const value = this.refs.form.getValue()
    if (value) {
      const name = value.name
      const email = value.mailaddress
      const password = value.password
      this.props.dispatch(register(name, email, password))
    }
  }

  render() {
    const { isLogged } = this.props.auth
    const Form = t.form.Form
    if (isLogged) {
      return <Redirect to="/home" />
    }
    return (
      <div >
        <Header />
        <div style={styles.container} >
          <div style={styles.form}>
            <Form
              ref="form"
              type={LoginForm}
              options={options}
            />
            <button
            style={styles.button}
            onClick={this.save.bind(this)}>Register</button>
          <Link to="/login" className="">I have account already</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {todo, auth} = state
  return {
    todo,
    auth
  }
}

export default connect(mapStateToProps)(Register)

const styles = {
  container: {
    marginTop:30,
    width: '360px',
    padding: '8% 0 0',
    margin: 'auto'
  },
  form: {
    position: 'relative',
    zIndex: 1,
    background: '#FFFFFF',
    maxWidth: '360px',
    margin: '0 auto 100px',
    padding: '45px',
    textAlign: 'center',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
  },
  button: {
    fontFamily: 'Roboto,sans-serif',
    textTransform: 'uppercase',
    outline: 0,
    background: '#4CAF50',
    width: '100%',
    border: 0,
    padding: '15px',
    color: '#FFFFFF',
    fontSize: '14px',
    transition: 'all 0.3 ease',
    cursor: 'pointer'
  }
}
