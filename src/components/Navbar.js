import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="nav-h center purple lighten-1">
      <h1>Mario Reading List</h1>
      <p>You have books {books.length} to read during this lockdown...</p>
    </div>
  );
};

export default Navbar;
