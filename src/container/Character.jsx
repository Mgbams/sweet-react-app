import React from "react";

const Character = ({ name, gender, birth_year }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      <li>Gender: {gender}</li>
      <li>Birth year: {birth_year}</li>
    </ul>
  </div>
);

// Note the use of destructuring in character. instead of passing props and proceeding as {props.name}, {props.gender} e.t.c
// We simply add the proprietes we need in curly braces as {name, gender, birth_year } then we add the names directly
// without using props as {name}, {gender} e.tc

export default Character
