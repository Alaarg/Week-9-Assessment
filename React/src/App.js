import React, { Component } from 'react'
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'

export default class App extends Component {
  addItem =() =>{
console.log()


  }

  render() {
    return (
      <div>
        <h1>App Component</h1>
        <UserInput addItem={this.addItem}/>
        <UserOutput/>
      </div>
    )
  }
}
