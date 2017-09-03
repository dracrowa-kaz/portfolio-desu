import React from 'react'
import ReactDOM from 'react-dom'

export default class Message extends React.Component{
    render(){
        return (<div className="alert alert-success" role="alert">
            {this.props.label}
        </div>)
    }
}
