import React from 'react'
import  { PureComponent } from 'react'
import {randomWord }from '../lib/game'

export default class NewGame extends PureComponent {
  state = {}
  
  
  render() {
    const setNewGame=()=>this.setState = randomWord()
    return (
      <div>
        <button onClick={setNewGame}>  New Game </button>
      </div>
    )
  }
   
}




