import React from "react";
import { Card, ListGroup} from 'react-bootstrap';

const Character = ({ name, gender, birth_year, edited, homeworld }) => (
  <Card style={{ width: "40rem" }}>
    <Card.Header className="text-center">{name}</Card.Header>
    <ListGroup variant="flush">
    <ListGroup.Item><h4>Character</h4></ListGroup.Item>
      <ListGroup.Item>Gender: { gender}</ListGroup.Item>
      <ListGroup.Item>Birth year: {birth_year}</ListGroup.Item>
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

export default Character;
