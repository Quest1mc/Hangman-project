import React, { Component } from 'react'
//import Alphabet from './Alphabet'




const Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

export default class AlphabetKeys extends Component {
  constructor(props){
    super(props);

    this.state = { item : ''};
  }
 
   
 
    
  render() {
    return (
        <div>
             <ol>
            {(Alphabet.map(item =><h1 className= "Alphabet" > {item}</h1>))}
             </ol>
          
        </div>
      
    )
  }
};
