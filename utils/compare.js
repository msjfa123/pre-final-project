const bcrypt = require("bcrypt");

exports.compare = async (password,userPassword)=>{
    return await bcrypt.compare(password,userPassword)
    
}