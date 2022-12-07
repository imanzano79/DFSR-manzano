const router = require('express').Router();
const Curso = require('../models/curso.model');
const flash = require('connect-flash');
const { product } = require('../models');

router.get('/cursos',  async (req, res) =>{
    console.log("ENTRA");
    try{
        const cursos = await  Curso.find({}); 
       
        if(cursos){
            console.log("Existen", cursos);
            res.render("cursos.ejs", {
                cursos: cursos, 
                error : false
            }); 
        }
        else{
            res.render("cursos.ejs", {
                error : true, 
                mensaje : "No se encontraron productos."
            }); 
        }
       
    }
    catch(error){

    }  
});

router.get('/nuevoCurso', (req, res) =>{
    res.render("curso_nuevo.ejs")
}); 


router.post('/nuevoCurso', async (req, res) =>{
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
        var newProduct  = new Curso({
            claveProducto : claveProd, 
            nombre : nombreProd, 
            descripcion : descripcionProd, 
            cantidad : cantidadProd, 
            precio : precioProd
        })
        try{
                console.log("Insertando nuevo producto"); 
                const producto = await newProduct.save(); 
                res.redirect('/api/curso/cursos');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }
    }

});



router.get('/editarCurso/:id', async(req, res) =>{
    const id = req.params.id; 
    console.log("LLEGO EL ID", id);
    try{

     const editarCurso = await Curso.findOne({_id: id}); 
     if(editarCurso){
        console.log(editarCurso); 
        res.render("editar_curso.ejs", {
            editarCurso : editarCurso, 
            error : false
        })
     }else{
        res.render("editar_curso.ejs", {
           
            error : true, 
            mensaje : "No se encontro el producto"
        }); 
     }

        
    }
    catch(error){

    }
    
}); 

router.get('/deleteCurso/:id', async (req, res) =>{
    const id = req.params.id; 
    console.log("LLEGO el ID", id);
    try{
        const borrado = await Curso.findByIdAndDelete({_id: id}); 
        console.log(borrado); 
        if(borrado){
            res.redirect('/api/curso/cursos');
         }

    }
    catch(error){

    }
});


router.post('/editarCurso', async(req, res) =>{

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
            const productoAEditar = await Curso.findByIdAndUpdate(
                id, {
                    claveProducto : claveProd, 
                    nombre : nombreProd, 
                    descripcion : descripcionProd, 
                    cantidad : cantidadProd, 
                    precio : precioProd
                }
            );
                

                res.redirect('/api/curso/cursos');
        }
        catch(error){
            res.status(400).json({error});
            console.log(error);
        }
    }


})





module.exports = router;



