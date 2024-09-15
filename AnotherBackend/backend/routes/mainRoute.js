const express = require('express')
const { createPost, getAllPost, getSinglePost, deletePost, updatePost } = require('./routeContoller')





const mainRoute = express.Router()


mainRoute.get('/', getAllPost)

mainRoute.get('/:id', getSinglePost)

mainRoute.post('/', createPost)

mainRoute.delete('/:id', deletePost)

mainRoute.patch('/:id', updatePost)

module.exports = mainRoute