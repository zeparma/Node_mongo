const { default: mongoose } = require("mongoose");
const User = require('../models/user.model')

const getUser = (async(req,res)=>{
    // let data  = new User({
    //     name:req.body.name,
    //     id:req.body.id,
    //     age:req.body.age
    // })
    // await data.save();
    let data = await User.find()
    console.log(`here`,data);
    res.json(data);
})

module.exports={getUser}