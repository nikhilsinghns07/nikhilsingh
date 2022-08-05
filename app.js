const express = require('express')
const cors = require('cors')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
const fs  = require('fs')
const https = require('https')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

const PORT = process.env.PORT || 7777

if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'))
    app.get('*' , (req,res) => {
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
  }
  
app.listen(PORT,() => {
    console.log(`Server running on ${PORT}`)
})
