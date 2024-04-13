const User = require('../Models/User');
exports.read = async (req,res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id).exec();
        res.status(200).send({status:200,message:"Success",data:user})
    }catch(error){
        res.status(500).send({status:500,message:"Error",data:error})

    }
}
exports.list = async (req,res)=>{
    try{
        const users = await User.find({}).exec();
        res.status(200).send({status:200,message:"Success",data:users})

    }catch(error){      
        res.status(500).send({status:500,message:"Error",data:error})
    }
}
exports.create = async (req,res)=>{
    try{       
        const user = await User(req.body).save();
        res.status(200).send({status:200,message:"Success",data:"Create data success."})
    }catch(error){  
        res.status(500).send({status:500,message:"Error",data:error})
    }
}
exports.update = async (req,res)=>{
    try{       
        const data = req.body;
        // console.log(data);
        // return;
        const user = await User.findByIdAndUpdate({_id:data._id},data);
        res.status(200).send({status:200,message:"Success",data:"Update data success."})
        
    }catch(error){  
        res.status(500).send({status:500,message:"Error",data:error})
    }
}
exports.remove = async (req,res)=>{
    try{       
        const id = req.params.id??req.body._id;
         //console.log("params"+req.params.id)
        // console.log("body"+req.body._id)
        
        const user = await User.findByIdAndDelete({_id:id}).exec();
        res.status(200).send({status:200,message:"Success",data:"Delete data success."})
        
    }catch(error){  
        res.status(500).send({status:500,message:"Error",data:error})
    }
}