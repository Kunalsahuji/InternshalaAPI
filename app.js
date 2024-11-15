// import express
const express = require('express')
const app = express()


// logger 
const logger = require('morgan')
app.use(logger("tiny"))


// import env
require('dotenv').config();
PORT = process.env.PORT

// routes
const index = require('./routes/index');
app.use('/', index)

// running port
app.listen(PORT, console.log(`server running on ${PORT}`))
