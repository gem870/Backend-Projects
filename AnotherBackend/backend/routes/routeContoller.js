const schemaModel = require('../models/schemaModel')
const mongoose = require("mongoose")


const createPost = async (req, res) => {
    const{title, discription, itemValue} = req.body
    try {
        const schemaPost = await schemaModel.create({title, discription, itemValue})
        res.status(200).json(schemaPost)
    } catch (error) {
        res.status(400).json({err_m: error.message})
    }
}

const getAllPost = async (req, res) => {
    const allPost = await schemaModel.find({}).sort({createAt: -1})
    res.status(200).json(allPost)
}

const getSinglePost = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err_m: "No such file in database."})
    }

    const singlePost = await schemaModel.findById(id)
    if(!singlePost){
        return res.status(400).json({mssg: "No such file in database."})
    }
    res.status(200).json(singlePost)
}

const deletePost = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({err_m: "No such file in database."})
    }

    const del_post = await schemaModel.findOneAndDelete({_id: id})
    if(!del_post){
        return res.status(400).json({mssg: "No such file in database."})
    }

    res.status(200).json(del_post)
}

const updatePost = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mssg: "No such file in the database."})
    }
    const upd_post = await schemaModel.findByIdAndUpdate({_id: id},{
        ...req.body
    })
    if(!upd_post){
        return res.status(400).json({mssg: "No such file in the database."})
    }
    res.status(200).json(upd_post)
}






module.exports = {
    createPost,
    getAllPost,
    getSinglePost,
    deletePost,
    updatePost
}