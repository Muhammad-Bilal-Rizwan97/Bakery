const express = require('express')
const router = express.Router()

const {create,read,update,deleteItem} = require('../controllers/admin') 


//routes
router.post('/create',create);
router.get('/read',read)
router.put('/update',update)
router.post('/delete',deleteItem);



module.exports = router;