import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Author = mongoose.model("Author", AuthorSchema);

export { Author };
