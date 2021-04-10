import React from "react";

const Books = ({ auteur, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{auteur}</p>
      <hr />
    </div>
  );
};
export default Books;
