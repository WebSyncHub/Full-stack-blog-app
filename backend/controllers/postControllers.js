const mongoose = require('mongoose');
const Blogs = require('../blog_schema/blogSchema')


const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blogs.find()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch blogs'})
  }
}

const getBlogById = async (req, res) => {
  try {
    const blog = Blogs.findById(req.params.id);
    res.json(blog)

    if(!blog) {
      return res.status(404).json({error: 'Blog not found'})
    }
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch blogs'})
  } 
}

const createBlog = async (req, res) => {
  console.log("Blog posts logic here!") 
}

const updateBlog = async (req, res) => {
  console.log("Blog posts logic here!") 
}

const deleteBlog = async (req, res) => {
  console.log("Blog posts logic here!")
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
}