const Operaciones = {}

function suma( num1, num2){
        return Number (num1) + Number (num2);
}


function resta(num1, num2){
    return Number (num1) - Number (num2);
}


function multiplicacion(num1, num2){
    return Number (num1) * Number (num2);
}


function division(num1, num2){
    return Number (num1) / Number (num2);
}


module.exports = Operaciones;
Operaciones.suma = suma;
Operaciones.resta = resta;
Operaciones.multiplicacion = multiplicacion;
Operaciones.division = division;