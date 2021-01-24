import { Schema, model } from "mongoose";

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

const AuthorModel = model("Author", AuthorSchema);

export { AuthorModel };
