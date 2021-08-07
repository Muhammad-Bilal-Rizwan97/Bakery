const Admin = require('../models/Admin')
const {errorHandler} = require('../helpers/dbErrorHandler')
exports.create =async (req,res)=>{
  
//   const admin2 = await Admin.findOne({user:req.body.disc})
//     if(admin2){
//         try{
//         const admin3 = await Admin.updateOne(req.body._id,req.body)
//         console.log(admin3)
//         }
//         catch(e){
//             console.log(e)
//         }

//     }
//     else{
// }
console.log("Req",req.body);
const testing = {district:[{name:"North",menu:[{subMenu:"Tea"}],site:[{subSite:"Malir"}]}]};
// const testing = {name:"North"}
        const admin = new Admin(req.body)
        await admin.save((err,admin1)=>{
            if(err){
                console.log(err)
                res.status(400).json({
                    error:errorHandler(err)
                });     
            }
            else{
               
                res.json({
                    admin1
                });
            }
            
           
        });

 
  
 
  
}
