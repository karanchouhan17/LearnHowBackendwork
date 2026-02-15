const express= require('express')
const router= express.Router()// yeh express ka function hai joh routes ko handle karta hai
const MenuItem= require('./../model/menu')  //imprt the module file

router.post('/',async(req,res)=>{
    try{
    let data= req.body
    const additem= new MenuItem(data)
    const response= await additem.save()
    console.log('menu is also add')
    res.status(201).json(response)
    }
    catch(err){
        console.log("itntrnal error",err)
    }

})


router.get('/',async(req,res)=>{
    try{
        const items= await MenuItem.find()
        res.status(201).json(items)

    }catch(err){
        res.status(500).json('internal erro',err)
    }
    
})


router.put('/:id',async(req,res)=>{
    try{
        const Menuid= req.params.id
        const updatemenu=req.body
        const response= await MenuItem.findByIdAndUpdate(Menuid,updatemenu,{
            new:true, // for update data insert
            runValidaters:true //  mongoose validation run
        })
        if(!response){
           return  res.status(404).json('invalid User')
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
    const response= await MenuItem.findByIdAndDelete(data)
    if(!response){
        return res.status(404).json('menu is not valid')
    }
    res.status(200).json(response)
    console.log('data remove fast')

        

    }catch(err){
        console.log(err)
        res.status(500).json({error:err.message})

    }
    

    
})



router.get('/:testes',async(req,res)=>{
    try{
        const testes= req.params.testes
        const response= await MenuItem.find({taste:testes})
        if(response.length==0){
          return  res.status(404).json('URL is not Exist')
        }
        res.status(200).json(response)

    

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})

    }
    
})





module.exports= router;
