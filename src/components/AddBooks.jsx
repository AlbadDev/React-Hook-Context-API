import React, { useState, useContext } from "react";
import { BooksContext } from "./StoreBooks";

const AddBooks = () => {
  const [books, setBooks] = useContext(BooksContext);

  const [name, setName] = useState("");
  const [auteur, setAuteur] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAuteurChange = (e) => {
    setAuteur(e.target.value);
  };
  const AddBook = (e) => {
    e.preventDefault();
    name !== "" &&
      setBooks([
        ...books,
        { name: name, auteur: auteur || "unknow", id: new Date() }
      ]);
  };

  return (
    <div className="m-3 d-flex">
      <form>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Book Name"
        />
        <input
          type="text"
          value={auteur}
          onChange={handleAuteurChange}
          placeholder="Enter Book Author"
        />
        <button
          type="submit"
          onClick={AddBook}
          className="bg-primary text-white m-2"
          style={{ border: "none" }}
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default AddBooks;
