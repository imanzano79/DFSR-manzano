const Operaciones = {}

function suma(num1, num2){
        return num1 + num2;
}


function resta(num1, num2){
    return num1 - num2;
}


module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;