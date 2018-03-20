import axios from 'axios'
import { APIError } from './error'

const REQUEST = 'project/REQUEST'
const RECEIVED = 'project/RECEIVED'
const FAILED = 'project/FAILED'

export function fetchProjects() {
  return (dispatch, _) => {
    dispatch(startRequest())
    return axios({
      url: '/api/projects',
      method: 'GET'
    }).then((response) => {
      dispatch(receivedProjects(response.data.projects))
    }).catch((error) => {
      dispatch(failRequest())
      APIError(error, dispatch)
    })
  }
}

export function createProject(title, content, url, coverUrl) {
  return (dispatch, _) => {
    dispatch(startRequest())
    return axios({
      url: '/api/projects',
      method: 'POST',
      data: {
        title, content, url, cover_url: coverUrl
      }
    }).then((response) => {
      console.log(response)
    }).catch((error) => {
      dispatch(failRequest())
      APIError(error, dispatch)
    })
  }
}

function startRequest() {
  return { type: REQUEST }
}

function receivedProjects(projects) {
  console.log(projects)
  return {
    type: RECEIVED,
    projects
  }
}

function failRequest() {
  return { type: FAILED }
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, { isLoading: true })
    case RECEIVED:
      return Object.assign({}, state, {
        isLoading: false,
        projects: action.projects
      })
    case FAILED:
      return Object.assign({}, state, { isLoading: false })
    default: return state
  }
}

const initialState = {
  isLoading: false,
  projects: {}
}
