import axios from 'axios'

const REQUEST = 'auth/REQUEST'
const RECEIVED = 'auth/RECEIVED'
const FAILED = 'auth/FAILED'
const LOGOUT = 'auth/LOGOUT'

export function registerUser(name, email, password) {
  return (dispatch, getState) => {
    dispatch(startRequest())
    const data = {
      name,
      email,
      password
    }
    return axios({
      url: '/api/auth',
      method: 'POST',
      data
    }).then((response) => {
      const {
        uid,
        client,
        accessToken,
        expiry
      } = response.headers
      dispatch(successLogin(uid, client, accessToken, expiry))
    }).catch((error) => {
      dispatch(failLogin(error))
    })
  }
}

export function loginByEmail(email, password) {
  return (dispatch, getState) => {
    dispatch(startLogin())
    return axios({
      url: '/api/auth/sign_in',
      method: 'POST',
      data: { email, password }
    }).then((response) => {
      const {
        uid,
        client,
        accessToken,
        expiry
      } = response.headers
      dispatch(successLogin(uid, client, accessToken, expiry))
    }).catch((error) => {
      dispatch(failLogin(error))
    })
  }
}

function startRequest() {
  return { type: REQUEST }
}

function successLogin(uid, client, accessToken, expiry) {
  return {
    type: RECEIVED,
    uid,
    client,
    accessToken,
    expiry
  }
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
      return Object.assign({}, initialState)
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
