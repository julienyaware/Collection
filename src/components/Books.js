
import Book from './Book';
import React from "react";

const Books = ({ books, onDelete, onToggle, updateBookDetails }) => {
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} onDelete={onDelete} onToggle={onToggle} updateBookDetails={updateBookDetails}/>
      ))}
    </>
  );
};

export default Books;
