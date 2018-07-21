import React from 'react'
import  { PureComponent } from 'react'
import {randomWord }from '../lib/game'

export default class NewGame extends PureComponent {
  render() {
    const newWord =  function(){this.setState(randomWord) }
    
    return (
      <div>
        <button onClick ={(console.log(event => (newWord)))}>  New Game </button>
      </div>
    )
  }
  setNewgame(){
   this.randomWord().length = "-"
  }
}




