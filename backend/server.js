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

let posts = [
  {
    id: 1,
    title: "How to improve web1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl:
      "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/software-engineering-perspectives-what-is-a-software-engineer.jpeg",
    topic: "mobil-programming",
    author: "akinaykut05@gmail.com",
  },
  {
    id: 2,
    title: "How to improve web4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl:
      "https://www.springboard.com/blog/wp-content/uploads/2020/07/what-skills-do-you-need-to-become-a-software-engineer.png",
    topic: "web-development",
    author: "",
  },
  {
    id: 3,
    title: "How to improve web3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl:
      "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/09/04184424/How-to-Become-a-Software-Engineer.jpg",
    topic: "game-development",
    author: "akinaykut05@gmail.com",
  },
  {
    id: 4,
    title: "How to improve web2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl:
      "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/software-engineering-perspectives-software-engineer-job-outlook.jpeg",
    topic: "web-development",
    author: "",
  },
  {
    id: 5,
    title: "How to improve web2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl:
      "https://www.cio.com/wp-content/uploads/2021/12/4_software-engineering-100733150-orig.jpg?quality=50&strip=all",
    topic: "game-development",
    author: "akinaykut05@gmail.com",
  },
  {
    id: 6,
    title: "How to improve web2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl:
      "https://img.emg-services.net/educations/education1425589/applied-computer-science-1-1-1-1-1.png",
    topic: "cyber-security",
    author: "",
  },
  {
    id: 7,
    title: "How to improve web2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    imageUrl: "https://miro.medium.com/max/1400/1*ULnvjYy9sFmxnXLIgjRXLQ.png",
    topic: "data-sience",
    author: "akinaykut05@gmail.com",
  },
];

app.get("/", function (req, res) {
  res.send(posts);
});

app.post("/", function (req, res) {
  posts.unshift(JSON.parse(req.rawBody));
});

app.post("/delete-post", (req, res) => {
  let id = JSON.parse(req.rawBody).id;
  posts = posts.filter((post) => post.id !== id);
});

/* 
{mongodb+srv://admin-akinaykut:<password>@blog-app.s5kss9n.mongodb.net/?retryWrites=true&w=majority} */

app.listen(5000, function () {
  console.log("Server started on port 5000");
});
