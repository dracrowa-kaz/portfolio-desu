import React, { Component } from 'react'
import t from 'tcomb-form'
import { Email, Password, Options } from './FormSetting'

const login = t.struct({
  email: Email,
  password: Password,
  rememberMe: t.Boolean
})

const { Form } = t.form

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.getValue = this.getValue.bind(this)
  }

  getValue() {
    const value = this.form.getValue()
    return value || null
  }

  render() {
    return (
      <Form
        ref={(c) => { this.form = c }}
        type={login}
        options={Options}
      />
    )
  }
}
