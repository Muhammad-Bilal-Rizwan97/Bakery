require('dotenv').config();
const Admin = require('../models/Admin')
const {errorHandler} = require('../helpers/dbErrorHandler')
const nodemailer = require("nodemailer");

exports.subscribe =async (req,res)=>{

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            
          user: 'mb92733@gmail.com', // generated ethereal user
          pass: process.env.MAIL_PASSWORD, // generated ethereal password
        },
      });
    let info = await transporter.sendMail({
        from: 'mb92733@gmail.com', // sender address
        to: "mb92733@gmail.com", // list of receivers
        subject: "Delivery Request", // Subject line
        text: `
               District:                ${req.body.district}  
               Site:                    ${req.body.site}
               Menu:                    ${req.body.menu}
               deliveryDate:        ${req.body.deliveryDate}
               `, // plain text body
       
        
      },(err,data)=>{
        if(err){
            console.log("error")
            res.status(500).json({status:'failed'})
        }
        else{
            console.log("done")
            res.status(200).json({status:'success'})
        }
      });


}

