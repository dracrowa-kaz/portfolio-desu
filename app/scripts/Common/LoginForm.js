import React, { Component } from 'react'
import t from 'tcomb-form'

const Email = t.refinement(t.String, function (s) {
  return /@/.test(s)
})

const Password = t.refinement(t.String, function (s) {
  return s.length >= 2
})

export const Form = t.form.Form

export const LoginFormType = t.struct({
  mailaddress: Email,
  password: Password,
  rememberMe: t.Boolean
})

export const RegisterFormType = t.struct({
  name: t.String,
  mailaddress: Email,
  password: Password,
  rememberMe: t.Boolean
})

export const options = {
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
