const express= require('express')
const router= express.Router()  //yhe express ka he function hai joh routes ko manage karta hai
const Person= require('./../model/Person') //import the module file


router.post('/',async(req,res)=>{
    try{
        const data= req.body
        const newperson= new Person(data)
        const response= await newperson.save()
        console.log('data saved')
        res.status(201).json(response)

    }catch(err){
    console.log(err)
    res.status(500).json({ error: err.message })
}

})


router.get('/',async(req,res)=>{
    try{
        const data= await Person.find()
        console.log('data succefully get')
        res.status(201).json(data)

    }
    catch(err){
        console.log(err)
    res.status(500).json({ error: err.message })

    }
    
})


//parameterized 

// router.get('/:worktype',async(req,res)=>{
//    try{
//     const worktype= req.params.worktype //extract th work type from the url parameter
//     if(worktype=='chif'||worktype=='master'||worktype=="water"){
//         const response= await Person.find({work:worktype})
//         console.log('respone fetch')
//         res.status(200).json(response);
//     }
//     else{
//         res.status(404).json({error:'invalid work type'})

//     }
//    }
//    catch(err){
//     res.status(500).json('internal error',err)
//    }

// })


router.get('/:worktype',async(req,res)=>{
   try{
    const worktype= req.params.worktype //extract th work type from the url parameter
        const response= await Person.find({work:worktype})

        if(response.length===0){
            return res.status(404).json('User not Found')
        }
        res.status(200).json(response)
    
   
   }
   catch(err){
    res.status(500).json({error:err.message})
   }

})








router.put('/:id',async(req,res)=>{
    try{
        const personid= req.params.id  //extract the id from the Url parameter
        const updateperson= req.body //update data for the person

        const response= await Person.findByIdAndUpdate(personid,updateperson,{   //findbyIdAndUpdate ek function hai bana banaya
            new:true, //return the update documnet 
            runValidators:true,// run Mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data updated')
        res.status(201).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error '})

    }
})


router.delete('/:id',async(req,res)=>{
    try{
        const personid= req.params.id  //extract the person id from the URL parameters

        const response= await Person.findByIdAndDelete(personid)  //Assuming you have a person model 
        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        
        res.status(200).json({message:'data is removed'})
        console.log('data removed')


    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'internal server error'})
    }
})




module.exports= router;
