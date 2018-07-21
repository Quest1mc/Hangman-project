import React from 'react'

import  { PureComponent } from 'react'

export default class NewGame extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={ console.log('this will fire the random word action to start a new game')}>  New Game </button>
      </div>
    )
  }
}


//const randomWord this is a function in game lib

