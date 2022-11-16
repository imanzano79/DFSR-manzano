const router = require('express').Router();
const Producto = require('../models/product.model');
const flash = require('connect-flash');
const { product } = require('../models');

router.get('/productos',  async (req, res) =>{
    console.log("ENTRA");
    try{
        const productos = await  Producto.find({}); 
       
        if(productos){
            console.log("Existen", productos);
            res.render("productos.ejs", {
                productos: productos, 
                error : false
            }); 
        }
        else{
            res.render("productos.ejs", {
                error : true, 
                mensaje : "No se encontraron productos."
            }); 
        }
       
    }
    catch(error){

    }  
});

router.get('/nuevo', (req, res) =>{
    res.render("producto_nuevo.ejs")
}); 


router.post('/nuevo', async (req, res) =>{
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

    if(claveProd && nombreProd && descripcionProd && cantidadProd &&precioProd ){
        var newProduct  = new Producto({
            claveProducto : claveProd, 
            nombre : nombreProd, 
            descripcion : descripcionProd, 
            cantidad : cantidadProd, 
            precio : precioProd
        })
        try{
                console.log("Insertando nuevo producto"); 
                const producto = await newProduct.save(); 
                res.redirect('/api/products/productos');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }
    }

});



router.get('/editar/:id', async(req, res) =>{
    const id = req.params.id; 
    console.log("LLEGO EL ID", id);
    try{

     const producto = await Producto.findOne({_id: id}); 
     if(producto){
        console.log(producto); 
        res.render("editar_producto.ejs", {
            producto : producto, 
            error : false
        })
     }else{
        res.render("editar_producto.ejs", {
           
            error : true, 
            mensaje : "No se encontro el producto"
        }); 
     }

        
    }
    catch(error){

    }
    
}); 


router.post('/editar', async(req, res) =>{

    let id; 
    let claveProd; 
    let nombreProd; 
    let cantidadProd; 
    let descripcionProd; 
    let precioProd; 

    id = req.body._id;
    claveProd = req.body.clave; 
    nombreProd = req.body.nombre;
    descripcionProd = req.body.descripcion; 
    cantidadProd = req.body.cantidad; 
    precioProd = req.body.precio; 




    if(id, claveProd && nombreProd && descripcionProd && cantidadProd &&precioProd ){
    
       
        try{
            const productoAEditar = await Producto.findByIdAndUpdate(
                id, {
                    claveProducto : claveProd, 
                    nombre : nombreProd, 
                    descripcion : descripcionProd, 
                    cantidad : cantidadProd, 
                    precio : precioProd
                }
            );
                

                res.redirect('/api/products/productos');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }
    }


})



module.exports = router;



