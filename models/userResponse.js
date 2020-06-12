const mongoose = require('mongoose')


// const responseSchema = new mongoose.Schema({
//     date:
//     {
//         type: Date

//     },
//     response: [{
//         qid: String,
//         answer: String
//     }]

// })
const userResponseSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    responses: [
        {
            date: {
                type: Date
            },
            response: [{
                qid: String,
                answer: String
            }]
        }
    ]

});

module.exports = mongoose.model('UserResponse', userResponseSchema)
