import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

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
    } else if (error) {
      return <option disabled>There was an error</option>;
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
