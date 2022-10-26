
const express = require('express');
const mongoose = require ('mongoose');
const bodyparser = require ('body-parser');


const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



app.get('/', (req, res) =>{
        res.json(
            {
                estado: true,
                mensaje : "Conexion Exitosa" 

            }
               
        )
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
        console.log("Servidor Alzado");
} )




