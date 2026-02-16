const express= require('express')
const app= express()
const db= require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('dotenv').config()     // .env server ko pta hai yeh ek file hai or variables ko utah rha hai

const PORT= process.env.PORT || 3000   // process.env.PORT mein agr PORT ka value persent hoga toh voh us port number ko use kargega varna 3000 ko



//import the router file

const personRoutes= require('./routes/personRoute')
app.use('/person',personRoutes)

const menuRoute= require('./routes/menuRoute')
app.use('/menu',menuRoute)

const hotelRoute= require('./routes/hotelRoutes')
app.use('/hotelinfo',hotelRoute)


const customer= require('./routes/customer')
app.use('/customer',customer)

const owner= require('./routes/OwnerRoute')
app.use('/owner',owner)




app.get('/',(req,res)=>{
    res.send('hello welcome to the learning BBC')

})



//.env file mein joh variable hota hai usko procces.env.PORt se access karte hai




app.listen(PORT,()=>{
    console.log('listing to the port 3000')
})