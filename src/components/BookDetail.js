import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetail = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li
      key={book.id}
      onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}
      className="nav-h purple lighten-1"
    >
      Author: {book.author} <br /> Title: {book.title}
    </li>
  );
};

export default BookDetail;
