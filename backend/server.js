// importing express
const express = require("express");
const app = express();

// importing mongoose
const mongoose = require("mongoose");

// import cors to allow and block
const cors = require("cors");

// .env
require("dotenv").config();

// Local Imports
const blogPostController = require("./routes/blogPostCMS");
const port = process.env.PORT || 3000;
const DBConnectionString = process.env.MongoDB_URI;



// Middleware to import routes
app.use("/api/blog-post", blogPostController);

// For Cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type", "Authorization"],
  })
);

// main page get request
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// mongodb mongoose.connect
mongoose
  .connect(DBConnectionString)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error.message);
  });

// Server listening
app.listen(port, () => {
  console.log("http://localhost:4000");
});
