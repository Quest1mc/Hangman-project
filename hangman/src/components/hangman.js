import React, { Component } from 'react'
import NewGame from './containers/NewGame'
import AlphabetKeys from './containers/AlphabetKeys'
import MakeGuess from './containers/MakeGuess'


class Hangman extends Component {
    componentDidMount() {
       ;
    }
  render() {
    return (
      <div>
        <h1> This is  my hangman game</h1>
        <NewGame />

        <AlphabetKeys />
        <MakeGuess />
      </div>
    )
  }
}

export default Hangman;