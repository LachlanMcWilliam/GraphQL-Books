import graphql from "graphql";
import lodash from "lodash";

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

//dummy data
const books = [
  { name: "Lord of The Rings", genre: "Fantasy", id: "1" },
  { name: "The Hobbit", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
        resolve(parent, args) {
          return lodash.find(books, { id: args.id });
          // Code for data
        },
      },
    },
  },
});

const BookSchema = new GraphQLSchema({
  query: RootQuery,
});

export { BookSchema };
