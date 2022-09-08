const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    limit: "5mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.get("/", function (req, res) {
  res.send("<h1>Rabia");
});

app.post("/", function (req, res) {
  console.log("post geldi");
  console.log(req.rawBody);
});

/* 
{mongodb+srv://admin-akinaykut:<password>@blog-app.s5kss9n.mongodb.net/?retryWrites=true&w=majority} */

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
