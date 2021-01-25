import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS };