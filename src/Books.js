// ANCHOR

import './App.css';
// Setup

const array_of_books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg',
    title: 'developer',
    author: 'Haris P',
    price: '2.2',
  },
  {
    id: 2,
    img: 'https://images-eu.ssl-images-amazon.com/images/I/51DyZNVe6XS._AC_SX184_.jpg',
    title: 'Artist',
    author: 'KP&KP',
    price: '5',
  },
  {
    id: 3,
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
        // NOTE add key so the unique are selected when we do CRUD, and we dont see log warning
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  // REVIEW
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    alert(`I just clicked ${props.title}`);
  };
  const complexHandler = (author) => {
    console.log('Complex handle', author);
  };

  const NormalImage = () => {
    console.log('Pic is Small');
  };
  return (
    <article className="book">
      <img src={props.img} alt="NO info" sizes="" onMouseOut={() => NormalImage()} />
      <AuthorTitlePrice {...props} />
      <button type="button" onClick={clickHandler}>
        call Alert
      </button>
      <br />
      {/* NOTE:
        onClick={complexHandler(props.author)} -> gets called the moment the page loads, which is not what we wanted
        onClick={() => complexHandler(props.author)} ->  use arrow function, so its called only when clicked*/}
      <button type="button" onClick={() => complexHandler(props.author)}>
        Add Cart
      </button>
    </article>
  );
};
const AuthorTitlePrice = (props) => {
  const { title, author, price } = props;
  return (
    <div className="book.h1">
      <h1 onMouseOver={() => console.log('From h1')}>Title: {title}</h1>
      <p>Author: {author}</p>
      <p style={{ color: 'white' }}>Price: {price}</p>
    </div>
  );
};

export default BookList;
