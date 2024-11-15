const express = require('express')
const { homepage, studentSignUp, studentSignIn, studentSignOut } = require('../controllers/indexController')
const router = express.Router()


// get route
router.get('/', homepage)

// post /student/signup
router.post('/student/singup', studentSignUp)
 
// post /student/signin
router.post('/student/singin', studentSignIn)

// get /student/signout
router.get('/student/singout', studentSignOut)
 

module.exports = router 