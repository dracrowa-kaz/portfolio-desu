import React from 'react'
import t from 'tcomb-form'
import { Email, Password } from './FormSetting'

const register = t.struct({
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

const { Form } = t.form
const RegisterForm = () => (
  <Form
    ref="form"
    type={register}
    options={options}
  />
)

export default RegisterForm
