const bcrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const User  = require('../models/User')
const {jwtkey} = require('../key')
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.api_key}
    })
);
  
exports.signup = (req,res,next) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
    User.findOne({$or: [{email:email},{username:username}]}).then(user => {
        if(user) {
            res.status(501).send({error:'Email and username should be unique.'})
            return;
        }
        
        bcrypt.hash(password,12).then(hashedPassword => {
            const user = new User({
                username : username,
                email : email,
                password : hashedPassword
            })
            const token  = jwt.sign({userId:User._id},jwtkey)
            res.status(200).send({token:token})
            return user.save()
        }).then(
            transporter.sendMail({
            to: email,
            from: 'nikhilsinghns01@gmail.com',
            subject: 'Signup Succeeded!',
            html: `
                <h1 style="color: maroon;margin-left: 40px;">Welcome ${username} to NSBlogs</h1>
                <h2 style="text-align: center;">Please Login with Your Credentials and Create A Post.</h2>
                <h3 style=""text-align: center;>Thank You</h3>
                <h4 style="color: coral;padding-left: 10px;">Nikhil Singh</h4>
        `
          })
        ).catch(err => {
            res.status(500).send({error:err})
        })
    })
}

exports.login = (req,res) => {
    const email = req.body.email
    const password = req.body.password
    
    User.findOne({email : email}).then(user => {
        if(!user) {
            res.status(502).send({error : 'Invalid Credentials'})
            return;
        }
        const username = user.username
        bcrypt.compare(password,user.password).then(doMatch=> {
            if(!doMatch) {
                return res.status(502).send({error : "Invalid Credentials"})
            }
            const token = jwt.sign({userId:user._id},jwtkey)
            const sname = username.slice(0,2).toUpperCase();
            res.status(200).send({token:token,username:username,sname:sname})
        })
        
    })
}


