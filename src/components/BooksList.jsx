import React, { useContext } from "react";
import { BooksContext } from "./StoreBooks";
import Books from "./Books";

const BooksList = () => {
  const [books] = useContext(BooksContext);
  return (
    <div className="text-center m-4">
      {books.map((book) => (
        <Books name={book.name} auteur={book.auteur} key={book.id} />
      ))}
    </div>
  );
};
export default BooksList;
