const mongoose  = require("mongoose");

const Productosrv = mongoose.model(
     "Productosrv", new mongoose.Schema({
        claveProducto : String, 
        nombre : String, 
        descripcion : String, 
        cantidad: Number, 
        precio : Number
     })
 );


 module.exports = Productosrv;

