import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import Message from '../components/Message'

$(function(){
    ReactDOM.render(
        <Message label="Demo A" />,
        $('#root')[0]
    )
})
