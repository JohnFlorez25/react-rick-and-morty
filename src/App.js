import React, { Component } from 'react';
import axios from  'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading : true,
      data : undefined,
      error : null
    }
  }

  componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const characters = res.data.results
        this.setState( {
          data : characters,
          loading: false
        })
        console.log(this.state.data);
      })
  }

  render(){

    if(this.state.loading === true 
        && 
        this.state.data === undefined){
      return(
        <h1>Cargando....</h1>
      )
    }

    return(
      this.state.data.map( character => {
        return(
          <div key={character.id}>
            <h3>
              {character.name}
            </h3>
            <h4>
              {character.species}
            </h4>
          </div>
        )
      })
    )
  }

}

export default App;
