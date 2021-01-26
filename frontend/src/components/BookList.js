import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKS } from "../queries/queries";

import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [selectedBookId, setSelectedBookId] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return (
            <li key={book.id} onClick={(e) => setSelectedBookId(book.id)}>
              {book.name}
            </li>
          );
        })}
      </ul>
      {selectedBookId && <BookDetails bookId={selectedBookId} />}
    </div>
  );
};

export default BookList;
