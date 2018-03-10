import React, { Component } from 'react'
import t from 'tcomb-form'
import { Name, Email, Password, Options } from './FormSetting'

const register = t.struct({
  name: Name,
  email: Email,
  password: Password
})

const { Form } = t.form

export default class RegisterForm extends Component {
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
        type={register}
        options={Options}
      />
    )
  }
}
