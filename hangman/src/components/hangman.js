import React, { Component } from 'react'
import NewGame from './containers/NewGame'
import AlphabetKeys from './containers/AlphabetKeys';


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
      </div>
    )
  }
}

export default Hangman;