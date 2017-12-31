import t from 'tcomb-form'

export const Name = t.refinement(t.String, s => (s.length >= 2))
export const Email = t.refinement(t.String, s => (/@/.test(s)))
export const Password = t.refinement(t.String, s => (s.length >= 2))
export const validateSetting = {
  name: 'Invalid name, enter at least 2 chars',
  email: 'Invalid email',
  password: 'Invalid password, enter at least 2 chars'
}
export const Options = {
  error: 'Validation failed',
  order: ['name', 'email', 'password', 'rememberMe'],
  fields: {
    name: {
      error: 'Invalid name, enter at least 2 chars'
    },
    email: {
      error: 'Invalid email'
    },
    password: {
      type: 'password',
      error: 'Invalid password, enter at least 2 chars'
    }
  }
}
