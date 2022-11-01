const mongoose = require('mongoose'); 

const Usuario = mongoose.model(
    "Usuario", new mongoose.Schema({
        username : String, 
        password : String, 
        role :   String
        
      /*   ,
        roles:  [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ] */
    })
);

module.exports = Usuario; 
