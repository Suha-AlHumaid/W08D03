const roleModel = require("../../db/models/role");

//if it's admin or not 
const authorization = async(req, res, next) => {
    try {
        //get token if role is admin then next
        const roleID = req.suha.role;
        const result = await roleModel.findById(roleID);
        console.log(result);
        if(result.role === "admin"){
            next();
        }else{
            res.status(403).json({message:"forbidden"})
        }
    } catch (err) {
        console.log(err);
        res.status(403).json(err);
    }
};

module.exports = authorization;