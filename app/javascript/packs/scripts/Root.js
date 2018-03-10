import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createFinalStore from './modules/store'
import App from './container/App'

const store = createFinalStore()

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})
