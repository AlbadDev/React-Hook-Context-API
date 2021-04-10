import React, { useContext } from "react";
import { Navbar, NavbarBrand, NavItem, Badge } from "reactstrap";
import { BooksContext } from "./StoreBooks";

export default function Nav() {
  const [books, setBooks] = useContext(BooksContext);

  return (
    <div
      style={{
        backgroundColor: "gray",
        textAlign: "center",
        color: "white",
        padding: 10
      }}
    >
      <Navbar>
        <NavbarBrand className="text-white">Context API</NavbarBrand>
        <NavItem style={{ listStyle: "none" }}>
          Number of Books : <Badge className="bg-primary">{books.length}</Badge>
        </NavItem>
      </Navbar>
    </div>
  );
}
