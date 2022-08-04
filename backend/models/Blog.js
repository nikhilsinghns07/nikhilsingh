const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    author : {
        type : String,
        required : true
    },
    title :{
        type : String,
        required : true
    },
    content : {
        required: true,
        type : String
    },
    imageUrl : {
        type : String
    },
    date : {
        type : Date,
        default : Date.now()
    },
})

module.exports = mongoose.model('Blog', BlogSchema);