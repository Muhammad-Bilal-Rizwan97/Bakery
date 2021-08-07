const mongoose = require('mongoose')
const crypto = require('crypto')
const {v1 : uuidv1} = require('uuid')

const {ObjectId} = mongoose.Schema
const adminSchema = new mongoose.Schema({
    
    district:[{
        name:{
            type:String,
            required:true,
            maxlength:32
        },
        menu:[{
            subMenu : {type: String, max: 100}
        }],
        site:[{
            subSite : {type: String, max: 100}
        }]
    }],
  
},{timestamps:true})



module.exports = mongoose.model("Admin",adminSchema);