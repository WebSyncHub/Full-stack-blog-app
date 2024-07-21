const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Blogs", blogSchema)