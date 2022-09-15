var User = require('../models/users')

// Get All users

var users = [
    {
        id:1,
        username : "wassim",
        password: "123456",
        age : 24
    },
    {
        id:2,
        username : "mohamed",
        password: "123456",
        age : 24
    },
    {
        id:3,
        username : "ramzi",
        password: "123456",
        age : 24
    },
    {
        id:4,
        username : "seif",
        password: "123456",
        age : 24
    }
]

exports.getAllUsers = (req,res,next) =>{
    console.log("get Users");
    res.status(200).json({msg: 'Get user successfully', data: users});
    next();

}

exports.addUser = (req,res,next) =>{
    console.log("add User");
    res.status(200).json({"user" : {user : "wassim"}});
    next();
}




exports.updateUser = (req,res,next) =>{
    console.log("update User");
    res.status(200).json({"user" : {user : "wassim"}});
    next();

}

exports.deleteUser = (req,res,next) =>{
    console.log("delete User");
    console.log("userId :", req.params.userId);
   return res.status(200).json({msg: 'delete user successfully', data: users.filter(user => user.id != req.params.userId)});

}


