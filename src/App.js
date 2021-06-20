// ANCHOR
// NOTE some basic idea to setup react components and work
// REVIEW: refactpred one of this can be found in Books.js

import './App.css';
// Setup

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/91hIsjFuICL._AC_UL320_.jpg',
  title: 'developer',
  author: 'Haris P',
  price: '2.2',
};

const secondBook = {
  img: 'https://images-eu.ssl-images-amazon.com/images/I/51DyZNVe6XS._AC_SX184_.jpg',
  title: 'Artist',
  author: 'KP&KP',
  price: '5',
};

// NOTE here BookList is Component always start with Capital
function BookList() {
  return (
    <section className="booklist">
      {/* NOTE full data we are passing props spread operator [...xxx]*/}
      <Book {...firstBook} />
      {/* NOTE just image we are passing */}
      <Book img={firstBook.img} />
      {/* NOTE just title we are passing */}
      <Book title={firstBook.title} />
      {/* NOTE just author we are passing */}
      <Book author={firstBook.author} />
      {/* NOTE just price we are passing */}
      <Book price={firstBook.price} />
      {/* NOTE secondbook fulldata */}
      <Book {...secondBook} />
      {/* NOTE with props-children */}
      <Book {...secondBook}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid praesentium unde, qui soluta libero ad
          eos hic. Ullam corporis facere esse possimus alias consequatur id fugiat placeat fugit illo.
        </p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  console.log('BookList_props', props);
  return (
    <article className="book">
      <img src={props.img} alt="NO info" sizes="" />
      {/* NOTE book had props title,author,price ie passed to nested component as ...props */}
      <AuthorTitlePrice {...props} />
    </article>
  );
};
const AuthorTitlePrice = (props) => {
  console.log('AuthorTitlePrice_props', props);
  // NOTE instead of using props.title etc we can use title by setting in a const as below
  // NOTE props destructuring
  // NOTE we use 'children' keyword to capture the child of props or u can use 'props.children' after price
  const { title, author, children } = props;
  return (
    <div className="book.h1">
      <h1>Title: {title}</h1>
      <p>Author: {author}</p>
      {/* NOTE CSS style in JS using 'style'*/}
      <p style={{ color: 'white' }}>Price: {props.price}</p>
      {children}
    </div>
  );
};

export default BookList;
