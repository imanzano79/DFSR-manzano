const router = require('express').Router();
const Productosrv = require('../models/servicio.model');
const flash = require('connect-flash');
const { product } = require('../models');

router.get('/servicios',  async (req, res) =>{
    console.log("ENTRA");
    try{
        const servicios = await  Productosrv.find({}); 
       
        if(servicios){
            console.log("Existen", servicios);
            res.render("servicios.ejs", {
                servicios: servicios, 
                error : false
            }); 
        }
        else{
            res.render("servicios.ejs", {
                error : true, 
                mensaje : "No se encontraron productos."
            }); 
        }
       
    }
    catch(error){

    }  
});

router.get('/nuevosrv', (req, res) =>{
    res.render("servicio_nuevo.ejs")
}); 


router.post('/nuevosrv', async (req, res) =>{
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
        var newProduct  = new Productosrv({
            claveProducto : claveProd, 
            nombre : nombreProd, 
            descripcion : descripcionProd, 
            cantidad : cantidadProd, 
            precio : precioProd
        })
        try{
                console.log("Insertando nuevo producto"); 
                const producto = await newProduct.save(); 
                res.redirect('/api/servicio/servicios');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }
    }

});



router.get('/editarsrv/:id', async(req, res) =>{
    const id = req.params.id; 
    console.log("LLEGO EL ID", id);
    try{

     const editarsrv = await Productosrv.findOne({_id: id}); 
     if(editarsrv){
        console.log(editarsrv); 
        res.render("editar_servicio.ejs", {
            editarsrv : editarsrv, 
            error : false
        })
     }else{
        res.render("editar_servicio.ejs", {
           
            error : true, 
            mensaje : "No se encontro el producto"
        }); 
     }

        
    }
    catch(error){

    }
    
}); 

router.get('/deletesrv/:id', async (req, res) =>{
    const id = req.params.id; 
    console.log("LLEGO el ID", id);
    try{
        const borrado = await Productosrv.findByIdAndDelete({_id: id}); 
        console.log(borrado); 
        if(borrado){
            res.redirect('/api/servicio/servicios');
         }

    }
    catch(error){

    }
});


router.post('/editarsrv', async(req, res) =>{

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

    console.log("ID", id)
    console.log("claveProd", claveProd)
    console.log("nombreProd", nombreProd)
    console.log("descripcionProd", descripcionProd)
    console.log("cantidadProd", cantidadProd)
    console.log("precioProd", precioProd)


    if(id, claveProd && nombreProd && descripcionProd && cantidadProd &&precioProd ){
    
      
        try{
            const productoAEditar = await Productosrv.findByIdAndUpdate(
                id, {
                    claveProducto : claveProd, 
                    nombre : nombreProd, 
                    descripcion : descripcionProd, 
                    cantidad : cantidadProd, 
                    precio : precioProd
                }
            );
                

                res.redirect('/api/servicio/servicios');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }
    }


})





module.exports = router;



