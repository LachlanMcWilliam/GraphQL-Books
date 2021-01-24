import graphql from "graphql";
import lodash from "lodash";

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

//dummy data
const books = [
  { name: "Lord of The Rings", genre: "Fantasy", id: "1" },
  { name: "The Final Empire", genre: "Fantasy", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];

const authors = [
  { name: "J.R.R. Tolkien", age: 81, id: "1" },
  { name: "Brandon Sanderson", age: 42, id: "2" },
  { name: "Terry Pratchett", age: 66, id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return lodash.find(books, { id: args.id });
      },
    },
  },
});

const BookSchema = new GraphQLSchema({
  query: RootQuery,
});

export { BookSchema };
