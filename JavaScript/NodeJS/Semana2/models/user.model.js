const mongoose = require ('mongoose');

const Usuario= mongoose.model(
    "Usuario", new mongoose.Schema({
        username : String,
        password : String,
        role: String
           
    })
);

module.exports = Usuario;