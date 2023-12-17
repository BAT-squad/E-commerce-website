const express = require('express');
const postController = require('../controllers/post.controller.js')

const router = express.Router();


router.post('/createPost',postController.createPostController)
router.get('/getAll/:userId',postController.getAllPostsController)


module.exports = router