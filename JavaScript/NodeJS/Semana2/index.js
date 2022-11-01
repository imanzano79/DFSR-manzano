const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyparser = require('body-parser'); 
const flash = require('connect-flash')



const app = express();



app.set('views engine', 'ejs'); 

app.use(bodyparser.urlencoded({extended:false})); 
app.use(bodyparser.json()); 

const authRoutes = require('./routes/auth'); 
app.use('/api/user', authRoutes); 



const db = require('./models');     
//ar MongoClient = require('mongodb').MongoClient;

const Role =  db.Role; 



mongoose.connect('mongodb://localhost:27017/test',{
        useNewUrlParser : true, 
        useUnifiedTopology : true
    }).then(() =>{
        console.log("Conexion exitosa a la BD"); 
       // initial(); 
    }).catch(err =>{
        console.log("Error en conexion", err); 
        process.exit(); 
    });


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