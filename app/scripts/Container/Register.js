import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Header from './Header'
import { register } from '../modules/auth'
import { Form, RegisterFormType, options } from '../common/LoginForm'

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
              type={RegisterFormType}
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
  const {auth} = state
  return {
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
