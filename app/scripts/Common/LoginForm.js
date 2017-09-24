import React, { Component } from 'react'
import t from 'tcomb-form'

const Email = t.refinement(t.String, function (s) {
  return /@/.test(s)
})

const Password = t.refinement(t.String, function (s) {
  return s.length >= 2
})

const LoginForm = t.struct({
  mailaddress: Email,
  password: Password,
  rememberMe: t.Boolean
})

const RegisterForm = t.struct({
  name: t.String,
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
}

const LoginForm = ({isLogin = false}) => ({
  const formType = isLogin ? LoginForm : RegisterForm
  <Form
    ref="form"
    type={LoginForm}
    options={options}
  />
})

export default LoginForm
