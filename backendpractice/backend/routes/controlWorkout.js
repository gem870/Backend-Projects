const workoutModel = require('../models/workoutModel')
const mongoose = require('mongoose')

const makePost = async (req, res) => {
    const {title, discription, load} = req.body
    try {
        const PostData = await workoutModel.create({title, discription, load})
        res.status(200).json(PostData)
    } catch (err) {
        res.status(400).json((err) =>{err.message})
    }
}

const getAllPost = async (req, res) => {
    const allPost = await workoutModel.find({}).sort({createAt: -1})
    res.status(200).json(allPost)
}

const getSinglepost = async (req, res) => {
    const {id} = req.params
    if(mongoose.Types.isValid(id)){
        const singlePost = await workoutModel.findById(id)
        if(!singlePost){
           return res.status(400).json({err_m: "No such file found in database."})
        }
       return res.status(200).json(singlePost)
    }
    res.status(400).json({err_m: "No such file found in database"})
}

const deletePost = async (req, res) => {
    const {id} = req.params
    if(mongoose.Types.isValid(id)){
        const del_post = await workoutModel.findOneAndDelete({_id: id})
        if(!del_post){
            return res.status(400).json({err_m: "No such file found in database"})
        }
        return res.status(200).json(del_post)
    }
    res.status(400).json({err_m: "No such file found in database"})
}

const updatPost = async (req, res) => {
    const {id} = req.params
    if(mongoose.Types.isValid(id)){
        const postData = await workoutModel.findByIdAndUpdate({_id: id}, {
            ...req.body
        })
        if(!postData){
            return res.status(400).json({err_m: "No such file found in database"})
        }
        return res.status(200).json(postData)
    }
    res.status(400).json({err_m: "No such file found in database"})
}


module.exports = {
    makePost,
    getAllPost,
    getSinglepost,
    deletePost,
    updatPost
}