const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("<h1>localhost:5000");
});

app.post("/", function (req, res) {
  console.log("post geldi");
  console.log(req);
});

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
