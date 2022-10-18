const bodyParser = require('body-parser');
const express = require ('express');
const operaciones = require('./Operaciones');
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

    let resultado;
    num1 = req.body.numero1;
    num2 = req.body.numero2;
    operacion = req.body.operacion;
    console.log(operacion);


        if (operacion == 'suma'){
            resultado = operaciones.suma(num1, num2);
            console.log("El resultado es" , resultado);
        }

        if (operacion == 'resta'){
                resultado = operaciones.resta(num1, num2);
                console.log("El resultado es" , resultado);
        
        }

        if (operacion == 'multiplicacion'){
            resultado = operaciones.multiplicacion(num1, num2);
            console.log("El resultado es" , resultado);
    
        }

        if (operacion == 'division'){
            resultado = operaciones.division(num1, num2);
            console.log("El resultado es" , resultado);
    
        }

         
       
        var pagina;
        
        pagina = '<!DOCTYPE html> <html lang="en"> <body> <h1> La respuesta es ' + resultado; pagina = pagina + '</h1> <body> </html>';

        res.send(pagina);


        console.log("numero1", num1);
        console.log("numero2", num2);

})
app.listen(9000, ()=>{
        console.log("Servidor Alzado");
})
