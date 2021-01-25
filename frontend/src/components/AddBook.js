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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
        <select>
          <option>Select Author</option>
          {data.authors.map((author) => {
            return <option key={author.id}>{author.name}</option>;
          })}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
