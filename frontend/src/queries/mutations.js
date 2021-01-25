import { gql } from "@apollo/client";

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
      author {
        name
      }
    }
  }
`;

export { ADD_BOOK };
