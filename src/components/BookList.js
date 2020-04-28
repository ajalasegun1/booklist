import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetail from "./BookDetail";

const Booklist = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div>
      <ul className="purple darken-2 ">
        {books.map((book) => {
          return <BookDetail book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="no-books purple darken-2 center">
      {" "}
      <h6>You have no books to read :(</h6>
    </div>
  );
};

export default Booklist;
