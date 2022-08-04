const express = require('express')
const cors = require('cors')

const app = express()
const bodyparser = require('body-parser')
const PORT = process.env.PORT || 7777
const mongoose = require('mongoose')
const MONGO_URL = 'mongodb+srv://Ns07:35STPPybDvWe9cuu@cluster0.mg3qo.mongodb.net/Blog'
const authRoutes = require('./routes/auth')
const blogRoutes = require('./routes/blog')

app.use(cors())
app.use(bodyparser.json())
app.use(authRoutes)
app.use(blogRoutes)

app.get('/cv',function(req,res){
    const file = `${__dirname}/CV.pdf`
    res.download(file);
})

if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('frontend/build'))
    app.get('*' , (req,res) => {
      res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
  }
  
  
  
mongoose.connect(MONGO_URL).then(res => {
    console.log("Mongo Running")
}).catch(error => {
    console.log(error)
})

app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`)
})
