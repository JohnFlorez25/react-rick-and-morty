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

  _fetchData(){
    axios.get('http://localhost:5000/characters')
      .then(res => {
        const characters = res.data
        this.setState( {
          data : characters,
          loading: false
        })
        //console.log(this.state.data);
      })
  }

  componentDidMount(){
    this._fetchData()
  }

  componentDidUpdate(prevProps, prevState){

    console.log("El estado previo "+prevState.data);
    
    console.log("El estado actual ")
    console.log(this.state.data)

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
