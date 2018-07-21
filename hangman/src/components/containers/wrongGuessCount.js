import React, { Component } from 'react'
import wrongGuessCount from './lib/games'
import React from 'react'

export default () => {
// this needs to return an incrementer on the amount of times that some one clicks a letter and it is != to any in the array 
function runWrongGuessCount(letter) {
  if (letter == props.newWord) { 
    <div>
      <h1 > 'on to the next one! ' </h1> 
      </div>
  }
  else {
    return wrongGuessCount() (
      <div>
         <h1> Whoops!keep trying! </h1> 
      </div>
     ) }
}
  
}
