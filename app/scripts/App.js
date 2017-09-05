import React, { Component } from 'react';
import Login from './Container/Login'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

const style = {
  margin: 15,
}

export default App;
