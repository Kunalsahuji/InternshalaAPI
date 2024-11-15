const express = require('express')
const { homepage, studentSignUp, studentSignIn, studentSignOut, currentStudent } = require('../controllers/indexController')
const { isAuthenticated } = require('../middleware/auth')
const router = express.Router()


// get route
router.get('/', isAuthenticated, homepage)

// post student
router.get('/student', isAuthenticated, currentStudent)

// post /student/signup
router.post('/student/signup', studentSignUp)

// post /student/signin
router.post('/student/signin', studentSignIn)

// get /student/signout
router.get('/student/signout', isAuthenticated, studentSignOut)


module.exports = router 