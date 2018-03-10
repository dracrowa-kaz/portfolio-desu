import axios from 'axios'
import { APIError } from './error'

const REQUEST = 'auth/REQUEST'
const RECEIVED = 'auth/RECEIVED'
const FAILED = 'auth/FAILED'
const LOGOUT = 'auth/LOGOUT'

export function registerUser(name, email, password) {
  return (dispatch, _) => {
    dispatch(startRequest())
    return axios({
      url: '/api/auth',
      method: 'POST',
      data: { name, email, password }
    }).then((response) => {
      const {
        uid,
        client,
        accessToken,
        expiry
      } = response.headers
      dispatch(successLogin(uid, client, accessToken, expiry))
    }).catch((error) => {
      dispatch(failLogin())
      APIError(error, dispatch)
    })
  }
}

export function loginByEmail(email, password) {
  return (dispatch, _) => {
    dispatch(startRequest())
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
      APIError(error, dispatch)
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

export function logout() {
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
