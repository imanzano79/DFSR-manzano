const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyparser = require('body-parser'); 

const app = express(); 


app.set('views engine', 'ejs'); 

app.use(bodyparser.urlencoded({extended:false})); 
app.use(bodyparser.json()); 

const authRoutes = require('./routes/auth'); 
app.use('/api/user', authRoutes); 


app.get('/', (req, res) =>{
    /* res.json(
        {
            estado: true, 
            mensaje : "Conexion exitosa"
        }
    );  */

    res.render('index.ejs');
});


app.use(function(req, res, next) {
    var err = new Error('Not Found'); 
    err.status = 404; 
next(err); 

});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, ()=>{
    console.log("Servidor alzado"); 
})