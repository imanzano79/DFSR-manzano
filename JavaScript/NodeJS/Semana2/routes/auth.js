const router = require('express').Router(); 
const Usuario = require('../models/user.model');
const flash = require('connect-flash');
const { user } = require('../models');

router.get('/registrar', (req, res) =>{
    res.render("registrate.ejs")
}); 

router.post('/registrar', async (req, res) =>{
    let correo; 
    let pass; 

    correo = req.body.correo; 
    pass = req.body.password;
    role = req.body.role;
   // console.log('Correo: ' , correo); 
   // console.log('Password: ', pass);
   // console.log('Role: ', role);

    if(correo && pass && role){
        var newUser = new Usuario({
            username : correo, 
            password : pass, 
            role : role
        }); 

        try{
            console.log('Intenta crear'); 
            const usuario = await newUser.save();
           
            res.render('index.ejs'); 
         }catch(error){
             res.status(400).json({error});
             console.log(error);
         }
    }
    


    //res.render("registrate.ejs")
}); 

router.get('/login', (req, res) =>{
    res.render("login.ejs")
}); 




router.post('/login', async (req, res) =>{
    
    let correo; 
    let pass; 

    correo = req.body.correo; 
    pass = req.body.password;

    console.log(correo)
    console.log(pass)
  

    Usuario.findOne({
        username : correo, 
        password : pass
    }).exec((err, user) => {
        if(user){
            res.redirect("/api/products/productos");
        }else{
            res.status(500).send({message: "User not found"});
        }
    });



});

module.exports = router;


