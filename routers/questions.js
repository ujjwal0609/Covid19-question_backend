const express = require('express');

const router = express.Router();
const Question = require('../models/question');

router.get('/',async(req,res)=>{
    try{
        const questions = await Question.find();
        res.json(questions);


    }
    catch(err){
        res.send('Error' + err);
    }


})

router.get('/active',async(req,res)=>{
    try{
    const questions = await Question.find();
    console.log(questions);
    var activeQues = [];
    questions.forEach((obj) => {
        if(obj.status == 'active') {
            activeQues.push(obj);
        }
    });
    
    res.json(activeQues)
}

    catch(err){
        res.send('Error '+ err)
    }
   
})

router.post('/',async(req,res)=>{
    const question = new Question ({
        _id:req.body._id,
        name:req.body.name,
        status: req.body.status
        
    })

    try{
        const a1 = await question.save()
        res.json(a1)
    }
    catch(err) {
        res.send('error ' + err)
    }
})

router.get('/:id',async (req,res)=>{
    
    try{
        const question = await Question.findById(req.params.id)
        res.json(question)
    }
    catch(err){
        res.send('error ' + err )
    }
})

router.put('/',()=>{
    
})
module.exports=router