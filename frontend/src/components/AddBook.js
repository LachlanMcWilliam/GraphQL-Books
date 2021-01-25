import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { GET_AUTHORS } from "../queries/queries";
import { ADD_BOOK } from "../queries/mutations";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK);

  if (error) return <p>Error: {error.message}</p>;

  const onSubmit = async (event) => {
    event.preventDefault();
    addBook({
      variables: { name: bookName, genre: bookGenre, authorId: authorId },
    });
  };

  return (
    <form id="add-book" onSubmit={onSubmit}>
      <div className="field">
        <label>Book name: </label>
        <input
          type="text"
          onChange={(e) => setBookName(e.target.value)}
        ></input>
      </div>

      <div className="field">
        <label>Genre: </label>
        <input
          type="text"
          onChange={(e) => setBookGenre(e.target.value)}
        ></input>
      </div>

      <div className="field">
        <label>Author: </label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          {!loading ? (
            <>
              <option>Select Author</option>
              {data.authors.map((author) => {
                return (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                );
              })}
            </>
          ) : (
            <option disabled>Loading...</option>
          )}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
