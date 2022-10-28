const router = require('express').Router();    //utiliza el propio ruteador de express
//const { role } = require('../models');
const Usuario = require('../models/user.model');
const flash = require ('connect-flash')


router.get('/registrar', (req, res) =>{
    res.render("registrate.ejs")
}); 

router.post('/registrar', async (req, res) =>{
    let correo; 
    let pass; 
    

   correo = req.body.correo; 
    pass = req.body.password;
    role = req.body.role;
/*     console.log('Correo: ', correo);
    console.log('Password: ', pass);
    console.log('Role: ', role);  */

    

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

        

    

    console.log('Correo: ' , correo); 
    console.log('Password: ', pass);
    //res.render("registrate.ejs")
}); 

module.exports = router;


