const userModel = require (" ../models/userModel");

const createUser =(req, res ,next) => {
userModel.create ({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    hasPet: Response.body. hasPet
}, function (err, result) {
    if (err) {
res.status (401) .json ({
    sucess: false,
    message: "Cannot create this user yet, ty another one"
});
    } else {
        res.status (200) .json ({
sucess:true,
message: result
        });
    }
});
};
module.exports ={
    createUser
}