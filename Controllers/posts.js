const Post = require('../Models/Post');
exports.read = async (req,res)=>{
    try{
        const id = req.params.id;
        const post = await Post.findById(id).exec();
        res.status(200).send({status:200,message:"Success",data:post})
    }catch(error){
        res.status(500).send({status:500,message:"Error",data:error})

    }
}
exports.list = async (req,res)=>{
    try{
        const posts = await Post.find({}).exec();
        res.status(200).send({status:200,message:"Success",data:posts})

    }catch(error){      
        res.status(500).send({status:500,message:"Error",data:error})
    }
}
exports.create = async (req,res)=>{
    try{       
        const post = await Post(req.body).save();
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
        const post = await Post.findByIdAndUpdate({_id:data._id},data);
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
        
        const post = await Post.findByIdAndDelete({_id:id}).exec();
        res.status(200).send({status:200,message:"Success",data:"Delete data success."})
        
    }catch(error){  
        res.status(500).send({status:500,message:"Error",data:error})
    }
}