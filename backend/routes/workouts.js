const express = require('express')
const router = express.Router()
const workoutModel = require('../models/workoutModel')

router.get('/', (req, res) => {
    res.json({messg: 'Get all request'})
})

router.get('/:id', (req, res) => {
    res.json({messg: 'Get single message'})
})

router.post('/:id', async (req, res) => {
    const{title, description, load} = req.body
    
    try {
        const workout = await workoutModel.create({title, description, load})
        res.status(200).json(workout)
    } catch (error) {   
        console.log('req.body', error);
        res.status(400).json({err_m: error.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({mssg: 'making a delete request'})
})
router.patch('/', (req, res) => {
    res.json({mssg: 'making an update'})
})



module.exports = router