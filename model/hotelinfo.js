const mongoose= require('mongoose')

const hotelinfoSchema= mongoose.Schema({
    hotelName:{
        type:String,
        required:true

    },
    Star:{
        type:Number,
        default:0
    },
    comeAgain:{
        type:Boolean,
        default:true
    },
    feedback:{
        type:String,
        default:""
    },
    additionfood:{
        type:String,
        enum:["desert",'crispy','sour']
    }
})

const hotelinfo= mongoose.model('Hotelinfo',hotelinfoSchema)
module.exports= hotelinfo;