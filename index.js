const express= require('express')
const app= express()
const db= require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))




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


































app.listen(3000,()=>{
    console.log('listing to the port 3000')
})