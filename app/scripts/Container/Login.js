import React, { Component, PropTypes } from "react"
import axios from 'axios'
import { connect } from 'react-redux'
import Header from './Header'
import { Redirect, Link } from 'react-router-dom'
import { loginByEmail } from '../modules/auth'
import { Form, LoginFormType, options } from '../common/LoginForm'

class Login extends Component {
  constructor(props){
    super(props)
    this.save = this.save.bind(this)
  }

  save() {
    const value = this.refs.form.getValue()
    if (value) {
      const email = value.mailaddress
      const password = value.password
      this.props.dispatch(loginByEmail(email, password))
    }
  }

  render() {
    const { isLogged } = this.props.auth
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
              type={LoginFormType}
              options={options}
            />
            <button
            style={styles.button}
            onClick={this.save}>Login</button>
            <Link to="/register" className="">I want to register</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)

var styles = {
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
