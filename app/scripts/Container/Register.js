import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerUser } from '../modules/auth'
import Header from '../component/Header'
import RegisterForm from '../component/RegisterForm'
import FormStyle from '../styles/FormStyle'

class Register extends Component {
  constructor(props) {
    super(props)
    this.save = this.save.bind(this)
  }

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
            <RegisterForm />
            <button
              style={styles.button}
              onClick={this.save}
            >
              Register
            </button>
            <Link to="/login" className="">I have account already</Link>
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

export default connect(mapStateToProps)(Register)

const styles = FormStyle
