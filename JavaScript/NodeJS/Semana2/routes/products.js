const router = require('express').Router(); 
const Producto = require('../models/products.model');
const flash = require('connect-flash');
const { user } = require('../models');
const { route } = require('./auth');


router.get('/nuevo', (req, res) =>{
    res.render("producto_nuevo.ejs")
}); 


router.post('/nuevo', async (req, res)  =>{
    let claveProd;
    let nombreProd;
    let cantidadProd;
    let descripcionProd;
    let precioProd;

    claveProd = req.body.clave;
    nombreProd = req.body.nombre;
    descripcionProd = req.body.descripcion;
    cantidadProd = req.body.cantidad;
    precioProd = req.body.precio;


    if(claveProd&& nombreProd && descripcionProd && cantidadProd && precioProd){
        var newProduct = new Producto({
            claveProducto : claveProd,
            nombre : nombreProd,
            descripcion : descripcionProd,
            cantidad : cantidadProd,
            precio : precioProd
        })
        try{
            console.log("Insertando nuevo producto");
            const producto = await newProduct.save();
            res.redirect('/api/user/productos');

        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }

    }

})

module.exports = router;