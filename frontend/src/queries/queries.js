import { gql } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      id
      name
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

const GET_BOOK_DETAILS = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export { GET_AUTHORS, GET_BOOKS, GET_BOOK_DETAILS };
