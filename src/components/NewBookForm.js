import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
    setTitle("");
    setAuthor("");
  };
  return (
    <div className="row purple darken-2" style={{ paddingBottom: "20px" }}>
      <form className="col s12 center" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-field col s12">
            <input
              placeholder="Book Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <button className="btn center purple darken-1 white-text">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBookForm;
