import React from 'react'
import  { PureComponent } from 'react'
import newWord from './newWord'



export default class NewGame extends PureComponent {
  render() {
    
    
    return (
      <div>
        <button onClick ={(console.log (newWord))}>  New Game </button>
      </div>
    )
  }
  
};




