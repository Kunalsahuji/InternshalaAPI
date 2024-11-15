const express = require('express')
const { homepage } = require('../controllers/indexController')
const router = express.Router()


// get route
router.get('/', homepage)
module.exports = router