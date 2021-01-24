import { Schema, model } from "mongoose";

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

const BookModel = model("Book", BookSchema);

export { BookModel };
