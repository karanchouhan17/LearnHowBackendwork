const express= require('express')
const router= express.Router()

const hotelinfo= require('../model/hotelinfo')  //import module file

router.post('/',async(req,res)=>{
    try{
        let data= req.body
        const info= new hotelinfo(data)
        const response= await info.save()
        res.status(201).json(response)
    }
    catch(err){
        console.log('internal error',err)
    }
})

router.get('/',async(req,res)=>{
    try{
        const data= await hotelinfo.find()
        res.status(200).json(data)

    }
    catch(err){
        res.status(500).json('internal erro due to',err)
    }
    

})

router.put('/:id',async(req,res)=>{
    try{
        const data=  req.params.id     
        const updatedata= req.body
        const response= await hotelinfo.findByIdAndUpdate(data,updatedata,{
            new:true,          //return the updated document
            runValidator:true  // run mongoose validation
        })
        if(!response){
           return res.status(404).json({message:'URL not exits'})
        }
        res.status(200).json(response)


    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})

    }
    
})


router.delete('/:id',async(req,res)=>{
    try{
        const data= req.params.id
        const response= await hotelinfo.findByIdAndDelete(data)
        if(!response){
            res.status(404).json('Data not Exist')
        }
        res.status(200).json(response)
        console.log('data removed')

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})

    }
})



router.get('/:hotelname',async(req,res)=>{
    try{
        const hotels= req.params.hotelname
        const response= await hotelinfo.find({hotelName:hotels})
        if(response.length===0){
            res.status(404).json('data not exist')
        }
        res.status(200).json(response)

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})

    }
})





module.exports= router;