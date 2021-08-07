const Admin = require('../models/Admin')
const {errorHandler} = require('../helpers/dbErrorHandler')
exports.create =async (req,res)=>{

console.log("Req",req.body);

        console.log(req.body);
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
exports.read= async (req,res)=>{

    const query = await Admin.find();
    if(query){
        res.status(200).send(query);
    }
    else{
        res.status(400).json({
            error:errorHandler(err)
        });
    }
   
}
exports.update= async (req,res)=>{
    if(req.body.menu){
        const query = await Admin.updateOne({district:req.body.currentDis},{menu:req.body.menu});
        if(query){
            res.status(200).send(query);
        }
        else{
            res.status(400).json({
                error:errorHandler(err)
            });
        }
    }
    else if(req.body.site){
        const query = await Admin.updateOne({district:req.body.currentDis},{site:req.body.site});
        if(query){
            res.status(200).send(query);
        }
        else{
            res.status(400).json({
                error:errorHandler(err)
            });
        }
    }
   
   
}

exports.deleteItem = async (req,res)=>{
    console.log(req.body)
    const query = await Admin.deleteOne({district:req.body.district})
    if(query){
        res.status(202).send({done:true});
    }
    else{
        res.status(400).json({
            error:errorHandler(err)
        });
    }

}

