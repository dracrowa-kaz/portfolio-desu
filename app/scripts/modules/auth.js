import axios from 'axios'

const REQUEST = 'auth/REQUEST'
const RECEIVED = 'auth/RECEIVED'
const FAILED = 'auth/FAILED'
const LOGOUT = 'auth/LOGOUT'

export function register(name, email, password) {
  return (dispatch, getState) => {
    dispatch(startLogin())
    const data = {
      "name": name,
      "email": email,
      "password": password
    }
    return axios({
      url: '/auth',
      method: 'POST',
      data: data
    }).then(response => {
      const uid = response.headers['uid']
      const client = response.headers['client']
      const accessToken = response.headers['access-token']
      const expiry = response.headers['expiry']
      dispatch(successLogin(uid, client, accessToken, expiry))
    }).catch(error => {
      alert(error)
      dispatch(failLogin())
    })
  }
}

export function loginByEmail(email, password) {
  return (dispatch, getState) => {
    dispatch(startLogin())
    return axios({
      url: '/auth/sign_in',
      method: 'POST',
      data: {email, password}
    }).then(response => {
      const uid = response.headers['uid']
      const client = response.headers['client']
      const accessToken = response.headers['access-token']
      const expiry = response.headers['expiry']
      dispatch(successLogin(uid, client, accessToken, expiry))
    }).catch(error => {
      alert(error)
      dispatch(failLogin())
    })
  }
}

function startLogin() {
  return { type: REQUEST }
}

function successLogin(uid, client, accessToken, expiry) {
  return { type: RECEIVED, uid, client, accessToken, expiry }
}

function failLogin() {
  return { type: FAILED }
}

function logout() {
  return { type: LOGOUT }
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, { isLoading: true })
    case RECEIVED:
      return Object.assign({}, state, {
          isLoading: false,
          isLogged: true,
          uid: action.uid,
          client: action.client,
          accessToken: action.accessToken,
          expiry: action.expiry
        })
    case FAILED:
      return Object.assign({}, state, { isLoading: false })
    case LOGOUT:
      return Object.assign({}, initialState )
    default: return state
  }
}

const initialState = {
  isLoading: false,
  isLogged: false,
  client: null,
  accessToken: null,
  uid: null,
  expiry: null
}
