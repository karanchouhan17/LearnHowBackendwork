const mongoose= require('mongoose')
const OwnerSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Post:{
        type:String,
        enum:['CEO','Manager','foodmanger','decorationManager','SubManager','PO'],
        required:true

    },
    salary:{
        type:Number,
        default:"",
    },
    visitCountry:{
        type:[String],
        default:[]


    }
})

const Owner= mongoose.model('Owner',OwnerSchema)   
module.exports= Owner
