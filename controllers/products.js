
// Get All products

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

exports.getAllProducts = (req,res,next) =>{
    console.log("get Users");
    res.status(200).json({msg: 'Get user successfully', data: users});
    next();

}

exports.addProduct = (req,res,next) =>{
    console.log("add User");
    res.status(200).json({"user" : {user : "wassim"}});
    next();
}




exports.updateProduct = (req,res,next) =>{
    console.log("update User");
    res.status(200).json({"user" : {user : "wassim"}});
    next();

}

exports.deleteProduct = (req,res,next) =>{
    console.log("delete User");
    console.log("userId :", req.params.userId);
   return res.status(200).json({msg: 'delete user successfully', data: users.filter(user => user.id != req.params.userId)});

}


