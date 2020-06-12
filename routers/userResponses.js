const express = require('express')

const router = express.Router()
const UserResponse= require('../models/userResponse')
//const Response= require('../models/userResponse')

router.get('/',async (req,res)=>{
const userResponse= await UserResponse.find();
res.json(userResponse)
})

router.post('/',async (req,res)=>{
UserResponse.findOne({userId:req.body.userId},async(err,data)=>{
    if(!err){
        if(data){
            data.responses.push({
                date:req.body.date,
                response:req.body.response

            })
            try{
                const u1=  await data.save()
              res.json(u1)
                }
              catch(err){
                  res.send('Error' + err);
                        }
        }
        else{
            const userresponse= new UserResponse({
                userId:req.body.userId,
             
                responses:[ {
                    date:req.body.date,
                    response:req.body.response
                    }]
            }
        )
          
          try{
            const u1=  await userresponse.save()
          res.json(u1)
            }
          catch(err){
              res.send('Error' + err);
                    }
        }
    }

})

})

router.get('/:id',async (req,res)=>{
    
    try{
        const ur = await UserResponse.findOne({userId:req.params.id})
        res.json(ur)
    }
    catch(err){
        res.send('error ' + err )
    }
})

module.exports = router