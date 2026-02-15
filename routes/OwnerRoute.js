const express= require('express')
const router= express.Router() // yeh express ka funtion hota hai jo routes ko handel karta hai
const Owner= require('../model/Owner')




router.post('/',async(req,res)=>{
    try{
        const data = req.body
        const Ownerdata= new Owner(data)
        const response= await Ownerdata.save()
        res.status(201).json(response)
        console.log('owner data add')

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})

    }

})

router.get('/',async(req,res)=>{
    try{
        const response= await Owner.find()
        res.status(200).json(response)

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})


    }
})



router.put('/:id',async(req,res)=>{
    try{
        const findId= req.params.id  // find the id from the url
        const updateOwner= req.body  //update data for the person
        const response = await Owner.findByIdAndUpdate(findId,updateOwner,{
            new:true, // return the updatedoucmnet 
            runValidators:true  //apply the mongoose validation
        })
        res.status(200).json(response)
        if(!response){
            return res.status(404).json({error:'Owner not found'})
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})

    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const findid= req.params.id
        const response= await Owner.findByIdAndDelete(findid)
        if(!response){
            return res.status(404).json('Owner not found')
        }

        res.status(200).json(response)
        console.log('data removed')


    }catch(err){
        console.log(err)
        res.status(500).json({error:'internal error'})

    }
})


router.get('/:Ownership',async(req,res)=>{
    try{
        const Ownership= req.params.Ownership
        const response= await Owner.find({Post:Ownership})

        if(response.length===0){
            
            return res.status(404).json('Owner not valid')
        }
        res.status(200).json(response)
       
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'intarnal server error'})
    }
})


// commit add for testing purpose 









module.exports= router