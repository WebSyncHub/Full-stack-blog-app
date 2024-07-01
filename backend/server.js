const express = require('express');
const app = express();
const blogPostController = require('./routes/blogPostCMS')
const port = 4000


app.use('/api/blog-post', blogPostController)

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.listen(port, () => {
    console.log('http://localhost:4000')
})