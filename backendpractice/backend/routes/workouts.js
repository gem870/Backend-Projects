
const express = require('express')
const {
    makePost,
    getAllPost,
    getSinglepost,
    deletePost,
    updatPost
} = require('./controlWorkout')




const routes = express.Router()

//  GETTING ALL ROUTES
routes.get('/', getAllPost)


// GETTING A SINGLE ROUTES
routes.get('/:id', getSinglepost)

// MAKE A POST
routes.post('/', makePost)

// DELETE REQUEST
routes.delete('/:id', deletePost)

// MAKING AN UPDATE
routes.patch('/:id', updatPost)





module.exports = routes