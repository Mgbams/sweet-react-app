import React, { Component } from "react";
import Axios from "axios";
//import Character from './Character';
import { Character } from "../container";
import Loader from "react-loader-spinner";
import { Planet } from "../container";
import { ListGroup } from "react-bootstrap";

const componentsByResource = {
  people: Character,
  planets: Planet
};

export default class DataContainer extends Component {
  state = {
    data: null
  };

  componentDidMount = () => {
    const { resource, id } = this.props.match.params;

    let url = `https://swapi.co/api/${resource}`;
    console.log("component did mount");
    if (id) {
      url += `/${id}`;
    }

    Axios.get(url)
      .then(response => this.setState({ data: response.data }))
      .catch(error => console.error(error));
  };

  render = () => {
    // we use destructuring here. So instead of writing {this.state.data}, we can now write data directly
    // and we can reference the contents of data afterwards
    const { data } = this.state;
    const { resource, id } = this.props.match.params;

    if (!data) {
      return (
        <div className="text-center">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      );
    }

    if (!id) {
      return (
        <ListGroup>
          {data.results.map(item => 
            <ListGroup.Item>{item.name}</ListGroup.Item>
          )}
        </ListGroup>
      );
    }

    const ComponentName = componentsByResource[resource] || "div";
    return <ComponentName {...data} />;
  };
}
