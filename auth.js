const passport= require('passport')
const LocalStrategy= require('passport-local').Strategy
const Person= require('./model/Person')



passport.use(new LocalStrategy(async(username,password,done)=>{
    try{
        const user= await Person.findOne({email:username})
        if(!user){
            return done(null,false,{message:'invalid email'})
        }
        const isMatchpassword= await user.comparepassword(paasword)
        if(isMatchpassword){
            return done(null,user)
        }
        else{
            return done(null,false,{message:'invalid password'})
        }

    }
    catch(err){
        return done (err)
    }
}))







// passport.use(new LocalStrategy(async(username,password,done)=>{
//     try{
//         const user= await Person.findOne({email:username})
//         if(!user){
//             return done(null,false,{message:'Invalid Username'})

//         }
//         const ismatchpassword= await user.password===password ?true :false 
//         if(ismatchpassword){
//             return done(null,user)
//         }
//         else{
//             return done(null,false,{message:"Incorrect Paasword"})
//         }

//     }
//     catch(err){
//         return done(err)
//     }
// }))


module.exports= passport;