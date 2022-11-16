const router = require('express').Router(); 
const Producto = require('../models/products.model');
const flash = require('connect-flash');
const { user } = require('../models');
const { route } = require('./auth');


router.get('/productos', async (req, res) =>{
        console.log("ENTRA");
        try{
            const productos = await Producto.find({});

            if (productos){
                console.log("Existen", productos);
                res.render("productos.ejs"), {
                    productos: productos,
                    error: false
                }); 
            
        }
            else{
                res.render("productos.ejs", {
                    error : true,
                    mensaje : "No se encontraron productos."
                });
            }
        
            }
        }
        catch(error){
           
        }
    
});


router.get('/nuevo', (req, res) =>{
    res.render("producto_nuevo.ejs")
}); 



router.post('/nuevo', async (req, res)  =>{

    console.log("LLEGA EDITAR")
    let id;
    let claveProd;
    let nombreProd;
    let cantidadProd;
    let descripcionProd;
    let precioProd;


    id = req.body.id;
    claveProd = req.body.claveProducto;
    nombreProd = req.body.nombre;
    descripcionProd = req.body.descripcion;
    cantidadProd = req.body.cantidad;
    precioProd = req.body.precio;


    if(id, claveProd && nombreProd && descripcionProd && cantidadProd && precioProd){
/*         var newProduct = new Producto({
            claveProducto : claveProd,
            nombre : nombreProd,
            descripcion : descripcionProd,
            cantidad : cantidadProd,
            precio : precioProd
        }) */
        try{
            console.log("Insertando nuevo producto");
            const productoAEditar = await Producto.findByIdAndUpdate(
                id, {
                    claveProducto = claveProd,
                    nombre = nombreProd,
                    descripcionProd = descripcionProd,
                    cantidad = cantidadProd,
                    precio = precioProd,

                }

            );
            res.redirect('/api/user/productos');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }

    }

})
module.exports = router;