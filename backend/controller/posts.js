const Post = require("../models/posts.js");

const getPosts = async (req, res) => {
  console.log("getpost running");
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: err.message,
    });
  }
};

module.exports = { getPosts };
