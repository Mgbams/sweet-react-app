import React from "react";
import DataContainer from "./container/DataContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StarWarsLogo } from "./images";

const App = () => (
  <Container>
    <h1 className=" title d-flex flex-column align-items-center">
      The
      <Image src={StarWarsLogo} style={{ width: "15rem" }} className="img1"/>
      Encyclopedia
    </h1>
    <BrowserRouter>
      <Switch>
        <Route exact path="/:resource(\w+)/" component={DataContainer} />
        <Route
          exact
          path="/:resource(\w+)/:id(\d+)"
          component={DataContainer}
        />
      </Switch>
    </BrowserRouter>
  </Container>
);

export default App;
