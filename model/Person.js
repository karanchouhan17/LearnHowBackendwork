const mongoose= require('mongoose')
const bcrypt= require('bcrypt')

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
    },
    password:{
        type:String,
        required:true
    },
    
    
})


// personSchema.pre('save',async function(next){   
//     const person = this   //yeh current document ko represent karta hai  this ===joh user save ho rha hai 
//     if(!person.isModified('password'))return next()  //yha ismodified mongooose ka predefined function hai.
//     //  joh bata hai koi specif feild change hui hai
//     // "password" string diya hai joh schema field hai joh bata rha hai ke password mein koi change hua hai ya nhi

//         const salt = await bcrypt.genSalt(10)
//         const hashedpassword= await bcrypt.hash(person.password,salt)
//         person.password =hashedpassword     
// })


// LoginSchema.methods.comparepassword= async function (candidatepasaword){
//     try{
//         const isMatch= await bcrypt.compare(candidatepasaword,this.password)
//         return isMatch;


//     }
//     catch(err){
//         next (err)
//     }
// }




personSchema.pre('save',async function(next){
    const person= this
    if(!person.isModified('password'))return next()
        const salt= await bcrypt.genSalt(10)
    const hashedpassword= await bcrypt.hash(person.password,salt)
    person.password= hashedpassword
})

personSchema.methods.comparepassword= async function(candidatepassword){
    try{
        const isMatch= await bcrypt.compare(candidatepassword,this.password)
        return isMatch

    }
    catch(err){
        throw err
    }
}     











//create personal model and by using this model we perform operation of all database like create,read ,update ,delete

// create person model
const Person= mongoose.model('Person',personSchema)

module.exports= Person;
