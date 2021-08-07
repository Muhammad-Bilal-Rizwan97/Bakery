const express = require('express')
const router = express.Router()

const {create} = require('../controllers/admin') 


//routes
router.post('/create',create);



module.exports = router;