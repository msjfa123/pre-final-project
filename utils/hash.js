const bcrypt = require("bcrypt");

exports.hashing = async (password,x)=>{
    console.log("99999999999999999");
    return await bcrypt.hash(password,x)
    
}



