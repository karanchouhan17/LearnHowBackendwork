const mongoose= require('mongoose')

const personSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chif','master','water'],
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }
    
})

//create personal model and by using this model we perform operation of all database like create,read ,update ,delete

// create person model
const Person= mongoose.model('Person',personSchema)

module.exports= Person;
