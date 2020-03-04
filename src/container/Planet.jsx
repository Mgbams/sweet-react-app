import React from "react";
import { Card, ListGroup} from 'react-bootstrap';

const Planet = ({ name, population, gravity, edited }) => (
  <Card style={{ width: "18rem" }}>
    <Card.Header>{name}</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>Population: {population}</ListGroup.Item>
      <ListGroup.Item>Gravity: {gravity}</ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small className="text-muted">
        Last updated { new Date(edited).toDateString() }
      </small>
    </Card.Footer>
  </Card>
);

// Note the use of destructuring in character. instead of passing props and proceeding as {props.name}, {props.gender} e.t.c
// We simply add the proprietes we need in curly braces as {name, gender, birth_year } then we add the names directly
// without using props as {name}, {gender} e.tc

export default Planet;