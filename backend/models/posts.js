const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  topic: String,
  author: String,
});

const Post = mongoose.model("POST", postSchema);

module.exports = Post;
