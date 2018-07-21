import React from 'react'
import  { PureComponent } from 'react'
import {randomWord }from '../lib/game'

export default class NewGame extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={ console.log(randomWord())}>  New Game </button>
      </div>
    )
  }
}


//const randomWord this is a function in game lib

