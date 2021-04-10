import React, { useState, createContext } from "react";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([
    {
      name: "Secrets of the JavaScript Ninja",
      price: "$15",
      auteur: "John Resig",
      id: 1
    },
    {
      name: "Eloquent JavaScript",
      price: "$15",
      auteur: "Marijn Haverbeke",
      id: 2
    },
    {
      name: "JavaScript Modern",
      price: "$15",
      auteur: "Nicolas Bivasqua ",
      id: 3
    },
    {
      name: "You Don't Know Js ES6",
      price: "$15",
      auteur: "Kyle Simpson ",
      id: 4
    }
  ]);
  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {props.children}
    </BooksContext.Provider>
  );
};
export default BooksProvider;
