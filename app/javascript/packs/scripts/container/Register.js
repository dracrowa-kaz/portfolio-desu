import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { registerUser } from '../modules/auth'
import Header from '../component/Header'
import RegisterForm from '../component/RegisterForm'
import FormStyle from '../styles/FormStyle'
import Loading from '../component/Loading'

class Register extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
  }

  save() {
    const value = this.form.getValue()
    if (value) {
      const { name, email, password } = value
      this.props.dispatch(registerUser(name, email, password))
    }
  }

  render() {
    const { isLogged, isLoading } = this.props.auth
    if (isLogged) {
      return <Redirect to="/home" />
    }
    return (
      <div >
        <Header />
        <div style={styles.container} >
          {isLoading && (<Loading />)}
          {!isLoading && (
            <div style={styles.form}>
              <RegisterForm
                ref={(c) => { this.form = c }}
              />
              <button
                style={styles.button}
                onClick={this.save}
              >
                Register
              </button>
              <Link to="/login">have account already</Link>
            </div>
        )}
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

export default connect(mapStateToProps)(Register)

const styles = FormStyle
