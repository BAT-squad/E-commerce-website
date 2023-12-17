const postModel = require('../models/posts.model.js')


const createPostController = (req, res) =>{
    const {userId,content,image} = req.body
    postModel.createPost(userId,image,content,(err,result)=>{
        if(err){
            res.status(500).json({error:'Internal Server Error'})
        }
        else{
            res.json({message:'Post created successfully',result})
        }
    })
}

const getAllPostsController = (req, res) => {
    const userId = req.params.userId
    postModel.getAllPosts(userId,(err,result)=>{
        if(err){
            res.status(500).json({error:'Internal Server Error'})
        }
        else{
            res.json(result)
        }
    })
}


module.exports = {
    createPostController,
    getAllPostsController
}