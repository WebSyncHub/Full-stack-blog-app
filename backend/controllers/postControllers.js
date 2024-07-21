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
    const blog = await Blogs.findById(req.params.id);
    res.json(blog)

    if(!blog) {
      return res.status(404).json({error: 'Blog not found'})
    }
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch blogs'})
  } 
}

const createBlog = async (req, res) => {
  const { title, desc, image } = req.body;
  
  try {
     const blog = await Blogs.create({ title, desc, image });
     res.status(200).json(blog);
  } catch (error) {
     console.error(error);
     res.status(400).json({ error: "Failed to create blog" });
  }
}


const updateBlog = async (req, res) => {
  try {
    const { title, desc, image } = req.body;
    const blog =  await Blogs.findByIdAndUpdate(req.params.id, {title, desc, image}, { new: true })
    if (!blog) {
      res.status(404).json({error: 'Blog not found'})
    }
    res.status(200).json(blog)
  } catch (error) {
    res.status(500).json({error: 'Failed to fetch the blog'})
  }
}

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findByIdAndDelete(req.params.id);
    if (!blog) {
        return res.status(404).json({ error: 'Student not found' });
    }
    res.json(blog);
} catch (error) {
    res.status(500).json({ error: 'Failed to delete student' });
}
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
}