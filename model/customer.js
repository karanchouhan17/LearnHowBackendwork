const mongoose= require('mongoose')
const customerSchema= mongoose.Schema({
    name:{
        type:'string',
        required:true,
        
    },
    mobile:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
        enum:["jaipur",'udaipur','jodhpur']

    },
    Item:{
        type:String,
        default:"",
        required:true
    }
})

const customer= mongoose.model('Customer',customerSchema)
module.exports= customer;