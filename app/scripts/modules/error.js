import { logout } from './auth'

export function APIError(error, dispatch) {
  if (error.response) {
    switch (error.response.status) {
      case 401: {
        alert('Login failed. Wrong email or password')
        dispatch(logout())
        break
      }
      case 422: {
        alert('Already that email is used by another user')
        break
      }
      case 500: {
        alert('We are sorry, something wrong')
        break
      }
      default: {
        alert('We are sorry, something wrong')
      }
    }
  } else {
    alert('We are sorry, something wrong')
  }
}

export default { APIError }
