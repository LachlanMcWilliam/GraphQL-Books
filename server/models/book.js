import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

const Book = model("Book", BookSchema);

export { Book };
