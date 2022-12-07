const mongoose  = require("mongoose");

const Curso = mongoose.model(
     "Curso", new mongoose.Schema({
        claveProducto : String, 
        nombre : String, 
        descripcion : String, 
        cantidad: Number, 
        precio : Number
     })
 );


 module.exports = Curso;

