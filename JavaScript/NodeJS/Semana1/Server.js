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


app.get('/tablas' , (req, res)=>{

    res.render('Tablas.ejs'); 
 });


app.post('/tablas', (req, res) => {

    var tabla = req.body.numero;
    console.log(tabla)

    if(tabla){

        pagina = '<!DOCTYPE html> <html lang="en"> <body> <h1> La tabla del ' + tabla + ' es: </h1>';

            for (i = 1; i<=10; i++){

                                
                pagina = pagina + "<p>  "  + tabla + " X " + i + " = " + tabla * i +  "</p>" ;

            }

        pagina = pagina + '<body> </html>';

        res.send(pagina);
    }

});



app.get('/factura' , (req, res)=>{

    res.render('Factura.ejs'); 
 });


app.post('/factura', (req, res) => {



});



app.listen(9000, ()=>{
        console.log("Servidor Alzado");
})
