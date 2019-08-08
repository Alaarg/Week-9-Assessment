import React, { Component } from 'react'

export default class UserInput extends Component {
    
    render() {
        return (
            <div>
            <input type="text" />
            <button onClick={this.props.addItem.bind(this ,id)}>add item</button>
            </div>
        )
    }
}
