const mongoose= require('mongoose')
require('dotenv').config()
// const mongoURL= 'mongodb://0.0.0.0:27017/hotels' 

const mongoURL= 'mongodb+srv://karandev75614_db_user:karan1234@cluster0.a6z9eud.mongodb.net/' // online db culster setup

// const mongoURL= process.env.MONGOD_URL;   

// set up mongodb connection
mongoose.connect(mongoURL)

// get the defauult connection
// mongoose maintaines a default connection object representing the mongodb connection.

const db= mongoose.connection

// define event listener for database connection

db.on('connected',()=>{
    console.log('connected to mongodb server')
})

db.on('error',(err)=>{
    console.log('mongodb connection erro',err)
})
db.on('disconnected',()=>{
    console.log('mongodb disconncted')
})

// export the database connection
module.exports= db;
