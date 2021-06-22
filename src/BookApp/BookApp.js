// ANCHOR Extension

import '../App.css';
import { array_of_books } from './books_data';
import Book from './Book';
// Setup

function BookList() {
  return (
    <section className="booklist">
      {array_of_books.map((book) => {
        // NOTE add key so the unique are selected when we do CRUD, and we dont see log warning
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

export default BookList;
