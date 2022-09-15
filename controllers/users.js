var User = require('../models/users')
exports.addUser = (req,res,next) =>{
    console.log("add User");
    res.status(200).json({"user" : {user : "wassim"}});
}