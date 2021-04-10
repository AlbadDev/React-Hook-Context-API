import "./styles.css";
import Nav from "./components/Nav";
import BooksList from "./components/BooksList";
import AddBooks from "./components/AddBooks";
import BooksProvider from "./components/StoreBooks";

export default function App() {
  return (
    <BooksProvider>
      <div className="App">
        <Nav />
        <AddBooks />
        <BooksList />
      </div>
    </BooksProvider>
  );
}
