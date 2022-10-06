const bodyParser = require('body-parser');
const express = require ('express');
const app = express();


app.set('views engine', 'ejs');

app.get('/' , (req , res)=>{

   res.render('Index.ejs');

});

app.get('/calculadora', (req, res) => {
    res.render('calculadora.ejs');

});

app.use(bodyParser.urlencoded({extended: false}));

app.post('/resultado', (req, res) => {

    num1 = req.body.num1;
    num2 = req.body.num2;
    res.send("<h1>RESPUESTA</h1>");

    console.log("Numero 1", num1);
    console.log("Numero 2", num2);

})



app.listen(9000, ()=>{
        console.log("Servidor Alzado");
})
