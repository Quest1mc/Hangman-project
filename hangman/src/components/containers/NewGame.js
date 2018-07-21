import React from 'react'
import  { PureComponent } from 'react'
import word from './newWord'


  
export default class NewGame extends PureComponent{
  render() {
    return(
    <div> 
        <button onClick ={(console.log (word))}>  New Game </button>
      </div>)
    
  
  
};

}


// having problems on this page trying to add a recursive fuction to add dashes for length of word 