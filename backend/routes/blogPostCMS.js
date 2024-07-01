const express = require('express');
const router = express.Router();
const { getAllPosts } = require('../controllers/postControllers')

router.get('/', getAllPosts)


module.exports = router;