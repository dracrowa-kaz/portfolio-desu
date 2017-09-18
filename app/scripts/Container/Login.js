import React, { Component, PropTypes } from "react"
import t from 'tcomb-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'

const Form = t.form.Form;
const Email = t.refinement(t.String, function (s) {
  return /@/.test(s);
})
const Password = t.refinement(t.String, function (s) {
  return s.length >= 2;
})
const LoginForm = t.struct({
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

class Login extends Component {
  constructor(props){
    super(props)
  }
  save() {
    var value = this.refs.form.getValue()
    if (value) {
      const data = {
        "name": value.mailaddress,
        "email": value.mailaddress,
        "password": value.password
      }
      axios({
        url: '/api/auth',
        method: 'POST',
        data: data
      }).then(response => {
        const uid = response.headers['uid']
        const client = response.headers['client']
        const accessToken = response.headers['access-token']
        const expiry = response.headers['expiry']
      }).catch(error => {
      })
    }
  }
  render() {
    console.log(this.props)
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
            onClick={this.save.bind(this)}>Login</button>
          <Link to="/register" className="">I want to register</Link>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {todo} = state
  return {
    todo,
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
