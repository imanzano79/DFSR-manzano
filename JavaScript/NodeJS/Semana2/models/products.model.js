const  mongoose  = require("mongoose");

const Producto = mongoose.model(
        "Producto", new mongoose.Schema({
            claveProducto : String,
            nombre : String,
            descripcion : String,
            cantidad : Number,
            precio : Number

        })

    );

    
    module.exports = Producto;