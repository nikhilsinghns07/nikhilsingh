const express = require('express')

const blogController = require('../controller/blog')

const router = express.Router()

router.post('/createpost',blogController.createPost)

router.get('/getPost',blogController.getPost)

router.post('/userpost',blogController.getUserPost)

router.post('/editpost',blogController.editPost)

router.post('/deletepost',blogController.deletePost)

router.post('/getPostbyId',blogController.getPostById)

module.exports = router
