import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOK_DETAILS } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK_DETAILS, {
    variables: { id: bookId },
  });

  console.log(data);

  if (loading)
    return (
      <div id="book-details">
        <p>Loading book details...</p>
      </div>
    );

  if (error)
    return (
      <div id="book-details">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div id="book-details">
      <h2>{data.book.name}</h2>
      <p>{data.book.genre}</p>
      <p>{data.book.author.name}</p>
      <p>All books by this author:</p>
      <ul className="other-books">
        {data.book.author.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookDetails;
