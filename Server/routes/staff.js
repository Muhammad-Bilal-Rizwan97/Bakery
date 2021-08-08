const express = require('express')
const router = express.Router()

const {subscribe} = require('../controllers/staff') 


//routes
router.post('/request',subscribe);





module.exports = router;