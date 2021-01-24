import express from "express";
import mongoose from "mongoose";
import { BookSchema } from "./schema/schema.js";
import { graphqlHTTP } from "express-graphql";

if (!process.env.SERVICE_PORT) {
  throw new Error("Please define SERVICE_PORT in the environment variables");
}
if (!process.env.MONGO_URI) {
  throw new Error("Please define MONGO_URI in the environment variables");
}

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: BookSchema,
    graphiql: true,
  })
);

app.listen(process.env.SERVICE_PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Mongoose connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
  console.log(`GraphQL server listening on port ${process.env.SERVICE_PORT}`);
});
