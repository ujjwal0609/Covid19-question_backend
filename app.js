  const express = require('express')
  const mongoose = require('mongoose')

  const url= 'mongodb://localhost/COVID19'
  const app = express()

  mongoose.connect(url,{useNewUrlParser:true})

  const con = mongoose.connection

  con.on('open',()=>{
    console.log(' DATABASE connected ...')
  })

   app.use(express.json())

  const userResponseRouter = require('./routers/userResponses')
  app.use('/userResponse',userResponseRouter)

  const questionRouter = require('./routers/questions')
  app.use('/questions',questionRouter)


  app.listen(9000,()=>{
    console.log('server started ')
  })