const express = require("express");
const { getPosts } = require("../controller/posts");
const router = express.Router();
const Post = require("../models/posts");

router.get("/", getPosts);

/* http://localhost:5000/posts */

router.post("/", (req, res) => {
  console.log("/posts: geldi");
  console.log(req.body);
  const newPost = new Post(req.body);
  newPost.save();
});

router.delete("/", (req, res) => {
  console.log("post-delete geldi.");
  console.log(req.body.id);
  Post.findOneAndRemove({ _id: req.body.id }, function (err) {
    if (!err) {
      console.log("Successfully deleted.");
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
