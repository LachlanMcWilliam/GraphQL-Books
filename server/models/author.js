import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

const Author = model("Author", AuthorSchema);

export { Author };
