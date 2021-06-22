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
          onClick={() => complexHandler(props.author)} ->  use arrow function, so its called only when clicked
        */}
      <button type="button" onClick={() => complexHandler(props.author)}>
        Add Cart
      </button>
    </article>
  );
};
// NOTE: We can use this below logic in new file and import here
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

export default Book;
