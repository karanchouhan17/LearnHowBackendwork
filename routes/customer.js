const express= require('express')
const router= express.Router()// express mein ek function hota hai joh router ko sambhalta hai

const Customer= require('../model/customer') // import the module file



router.post('/',async(req,res)=>{
    try{
        const data= req.body
        const customer= new Customer(data)
        const response= await customer.save()
        res.status(201).json(response)
        console.log('data enterted')

    }catch(err){
        // res.status(500).json('internal error',err)
        console.log('internal error:',err)
    }
    
})



router.get('/',async(req,res)=>{
    try{
        const data= await Customer.find()
    res.status(200).json(data)
    }catch(err){
        res.status(500).json('internal erro',err)
    }

})


router.put('/:id',async(req,res)=>{
    try{
        const data= req.params.id
        const updatedata= req.body
        const response= await Customer.findByIdAndUpdate(data,updatedata,{
            new:true,
            runValidator:true
        })
        if(!response){
             return res.status(404).json({message:'Data is not Exist'})
        }
        res.status(200).json(response)


    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
})





router.delete('/:id',async (req,res)=>{
    try{
        const data= req.params.id
        const response= await Customer.findByIdAndDelete(data)
        if(!response){
            return res.status(404).json('customer not valid')
        }
        res.status(200).json(response)
    }
    catch(err){
       
    }
})




router.get('/:location',async(req,res)=>{
    try{
         const location= req.params.location
         const response= await Customer.find({address:location})
         if(response.length===0){
            res.status(404).json('address is not valid')
         }
         res.status(200).json(response)

    }
    catch(err){
         console.log(err)
        res.status(500).json({error:err.message})

    }
})



module.exports= router;