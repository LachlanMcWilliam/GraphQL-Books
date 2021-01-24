import express from "express";
import { BookSchema } from "./schema/schema.js";
import { graphqlHTTP } from "express-graphql";

if (!process.env.SERVICE_PORT) {
  throw new Error("Please define SERVICE_PORT in the environment variables");
}

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: BookSchema,
    graphiql: true,
  })
);

app.listen(process.env.SERVICE_PORT, () => {
  console.log(`GraphQL server listening on port ${process.env.SERVICE_PORT}`);
});
