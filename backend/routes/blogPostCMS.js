const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/postControllers");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.get("/", createBlog);
router.get("/:id", updateBlog);
router.get("/:id", deleteBlog);

module.exports = router;
