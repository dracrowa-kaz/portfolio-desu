import React, { Component } from 'react'
import t from 'tcomb-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../modules/auth'
import Header from '../component/Header'

const { Form } = t.form

const Email = t.refinement(t.String, function (s) {
  return /@/.test(s)
})

const Password = t.refinement(t.String, function (s) {
  return s.length >= 2
})

const LoginForm = t.struct({
  name: t.String,
  mailaddress: Email,
  password: Password
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
}

class Register extends Component {
  save() {
    const value = this.refs.form.getValue()
    if (value) {
      this.props.dispatch(registerUser(value.name, value.email, value.password))
    }
  }

  render() {
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
  const { todo, auth } = state
  return {
    todo,
    auth
  }
}

export default connect(mapStateToProps)(Register)

const styles = {
  container: {
    marginTop: 30,
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
