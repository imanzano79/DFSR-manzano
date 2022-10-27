const router = require('express').Router(); //utiliza el propio ruteador de express

router.get('/registrar', (req, res) =>{
    res.render("registrate.ejs")
}); 

router.post('/registrar', (req, res) =>{
    let correo; 
    let pass; 

    correo = req.body.correo; 
    pass = req.body.password;

    console.log('Correo: ' , correo); 
    console.log('Password: ', pass);
    //res.render("registrate.ejs")
}); 

module.exports = router;


