const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    _id:
        {type:String,
            required:true
        
    },
    name:{
     type:String,
     required:true
    },
    status:{
     type:String,
     required:true
    }
 },{_id:false})

module.exports=mongoose.model('Question',questionSchema)