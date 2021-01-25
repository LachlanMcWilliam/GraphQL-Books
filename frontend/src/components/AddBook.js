import React from "react";
import { useQuery } from "@apollo/client";

import { GET_AUTHORS } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (error) return <p>Error: {error.message}</p>;

  const getAuthorsSelectors = () => {
    if (!loading && !error) {
      return (
        <>
          <option>Select Author</option>
          {data.authors.map((author) => {
            return <option key={author.id}>{author.name}</option>;
          })}
        </>
      );
    } else {
      return <option disabled>Loading...</option>;
    }
  };

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name: </label>
        <input type="text"></input>
      </div>

      <div className="field">
        <label>Genre: </label>
        <input type="text"></input>
      </div>

      <div className="field">
        <label>Author: </label>
        <select>{getAuthorsSelectors()}</select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
