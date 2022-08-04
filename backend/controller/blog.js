const Blog = require('../models/Blog')

exports.createPost = async (req,res) => {    

    try {
        const post = new Blog({
            author : req.body.author,
            title : req.body.title,
            content : req.body.content,
            imageUrl : req.body.imageUrl,
        })
        let newPost  = await post.save()
        res.status(200).json({data:newPost})
    }catch (err){
        res.status(500).json({error : err})
    }
}

exports.getPost = async (req,res) => {
   try{
    Blog.find().then(posts => {
        res.status(200).json({posts})
    })
   }catch(err) {
       res.status(500).json({error : err})
   }
}


exports.getUserPost = async (req,res) => {
    const username = req.body.username
    try{
        Blog.find({author:username}).then(posts => {
        res.status(200).json({posts})
    })
    }catch(err) {
        res.status(500).json({error:err})
    }
}

exports.editPost =  (req,res) => {

    const postId = req.body.postId
    let title = req.body.title
    let content = req.body.content
    let imageUrl = req.body.imageUrl

    Blog.findByIdAndUpdate(postId,{
        title : title,
        content: content,
        imageUrl : imageUrl
    },function (err) {
        if(err) {
            res.status(500).json({error:err})
        }
        else {
            res.status(200).json({success:'Post Updated'})
        }
    })

    
}

exports.deletePost = (req,res) => {
    const postId = req.body.postId

    Blog.findByIdAndDelete(postId,function(err){
        if(err){
            res.status(500).json({error:err})
        }
        else{
            res.status(200).json({success:'Deleted'})
        }
    })
}

exports.getPostById = (req,res) => {
    const postId = req.body.postId

    Blog.findById(postId, function(err,posts) {
        if(err) {
            res.status(500).json({error: err})
        }

        res.status(200).json({posts:posts})
    })
}

