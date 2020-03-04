import React, { Component } from 'react';
import Axios from 'axios';
import Character from './Character';

export default class Container extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    console.log("just entering now");
    Axios.get('https://swapi.co/api/people/1')
    .then(response => this.setState({data: response.data}))
    .catch(error => console.error(error));
  }

  render = () => {
    // we use destructuring here. So instead of writing {this.state.data}, we can now write data directly
    // and we can reference the contents of data afterwards
    const { data } = this.state; 

    if(!data) {
      return <div>Loading...</div>;
    }
    return <Character 
    name={data.name}
    gender={data.gender}
    birth_year={data.birth_year}
    />;
  }
}