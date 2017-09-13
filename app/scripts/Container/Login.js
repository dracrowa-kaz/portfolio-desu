import React, { Component } from 'react'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import t from 'tcomb-form'
import axios from 'axios'

const Form = t.form.Form;
var Email = t.refinement(t.String, function (s) {
  return /@/.test(s);
})

var Password = t.refinement(t.String, function (s) {
  return s.length >= 2;
})
// define your domain model with tcomb
// https://github.com/gcanti/tcomb
const LoginForm = t.struct({
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
};

class Login extends Component {
  constructor(props){
    super(props)
  }
  save() {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue()
    // if validation fails, value will be null
    if (value) {
      // value here is an instance of Person
      console.log(value)
      //api/auth
      //localhost:3000/api/auth
      const data = {
        "name": "せんべい太郎",
        "email": "admin@example.com",
        "password": "11111111"
      }
      axios({
        //url: '/auth/sign_in',
        url: '/api/auth',
        method: 'POST',
        //data: { email, password }
        data: data
      }).then(response => {
        const uid = response.headers['uid']
        const client = response.headers['client']
        const accessToken = response.headers['access-token']
        const expiry = response.headers['expiry']
        /*
        dispatch(successAuthentication(uid, client, accessToken, expiry))*/
      }).catch(error => {
        //dispatch(failAuthentication())
      })
    }
  }
  render() {
    return (
      <div >
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)} >
          <AppBar title="Login" />
        </MuiThemeProvider>
        <div style={styles.container} >
          <div style={styles.form}>
            <Form
              ref="form"
              type={LoginForm}
              options={options}
            />
            <button
            style={styles.button}
            onClick={this.save.bind(this)}>Login</button>
          </div>
        </div>
      </div>
    )
  }
}

var styles = {
  container: {
    marginTop:30,
    width: '360px',
    padding: '8% 0 0',
    margin: 'auto'
  },
  form: {
    position: 'relative',
    zIndex: 1,
    background: '#FFFFFF',
    maxWidth: '360px',
    margin: '0 auto 100px',
    padding: '45px',
    textAlign: 'center',
    boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
  },
  button: {
    fontFamily: 'Roboto,sans-serif',
    textTransform: 'uppercase',
    outline: 0,
    background: '#4CAF50',
    width: '100%',
    border: 0,
    padding: '15px',
    color: '#FFFFFF',
    fontSize: '14px',
    transition: 'all 0.3 ease',
    cursor: 'pointer'
  }
}
export default Login;
