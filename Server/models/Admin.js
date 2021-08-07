const mongoose = require('mongoose')
const crypto = require('crypto')
const {v1 : uuidv1} = require('uuid')

const {ObjectId} = mongoose.Schema
const adminSchema = new mongoose.Schema({
    
   
    district:{type: String,required:true},
    menu:{
        
        submenu:{type: [String]},
        description:{type:[String]}
        
    },
    site:{
        type: [String]
    }

    
  
},{timestamps:true})



module.exports = mongoose.model("Admin",adminSchema);