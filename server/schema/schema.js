import graphql from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

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
