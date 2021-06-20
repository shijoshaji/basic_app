// ANCHOR

import './App.css';
// Setup

const array_of_books = [
  {
    img: 'https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg',
    title: 'developer',
    author: 'Haris P',
    price: '2.2',
  },
  {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51DyZNVe6XS._AC_SX184_.jpg',
    title: 'Artist',
    author: 'KP&KP',
    price: '5',
  },
  {
    img: 'https://m.media-amazon.com/images/I/41r9gQgxJOS.__AC_SY200_.jpg',
    title: 'React Basic',
    author: 'Udemy',
    price: '4',
  },
];

function BookList() {
  return (
    <section className="booklist">
      {array_of_books.map((book) => {
        return <Book {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="NO info" sizes="" />
      <AuthorTitlePrice {...props} />
    </article>
  );
};
const AuthorTitlePrice = (props) => {
  const { title, author, price } = props;
  return (
    <div className="book.h1">
      <h1>Title: {title}</h1>
      <p>Author: {author}</p>
      <p style={{ color: 'white' }}>Price: {price}</p>
    </div>
  );
};

export default BookList;
