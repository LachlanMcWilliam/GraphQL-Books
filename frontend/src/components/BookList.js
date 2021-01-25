import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOKS } from "../queries/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      })}
    </div>
  );
};

export default BookList;
