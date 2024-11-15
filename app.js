// import express
const express = require('express')
const app = express()


// logger 
const logger = require('morgan')
app.use(logger("tiny"))

// import env
require('dotenv').config();
PORT = process.env.PORT

// Database Connection 
const DbConnection = require('./models/dbConnect').conncectDatabase();

// body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
const index = require('./routes/index');
const ErrorHandler = require('./utils/ErrorHandler');
app.use('/', index)

// error handling
app.all('*', (req, res, next) => {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404))
})

// generatedErrors Middleware
const { generatedErrors } = require('./middleware/error');
app.use(generatedErrors)

// running port
app.listen(PORT, console.log(`server running on ${PORT}`))
