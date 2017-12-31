import React from 'react'
import t from 'tcomb-form'
import { Email, Password } from './FormSetting'

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

const login = t.struct({
  mailaddress: Email,
  password: Password,
  rememberMe: t.Boolean
})

const { Form } = t.form
const LoginForm = () => (
  <Form
    ref="form"
    type={login}
    options={options}
  />
)

export default LoginForm
