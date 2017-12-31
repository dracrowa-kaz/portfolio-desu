import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { loginByEmail } from '../modules/auth'
import Header from '../component/Header'
import LoginForm from '../component/LoginForm'
import FormStyle from '../styles/FormStyle'

class Login extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
  }

  save() {
    const value = this.refs.form.getValue()
    if (value) {
      const { email, password } = value
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
            <LoginForm />
            <button
              style={styles.button}
              onClick={this.save}
            >
            Login
            </button>
            <Link to="/register"> I want to register</Link>
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

const styles = FormStyle
