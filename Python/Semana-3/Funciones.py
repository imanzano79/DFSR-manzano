

## Ejercicio 
## Realizar 4 funciones basicas
##Suma 
##Resta 
##Multiplicacion
##Division 

##Deberan poner un buffer, y este debera preguntar/Recibir que tipo de 
## operacion quieren hacer 

## 1- Crear la funciones que reciben 2 parametros (num1, num2)
## Pintar un menu, que recibira una respuesta, es decir, 
##La operacion que quieren hacer 

## Que quieres hacer? 
## a) Suma
## b) Resta
## c) Multiplicacion
## d) Division 

##Dependiendo de lo recibido en el buffer (IF) se realizara la operacion 
## OBLIGATORIAMENTE debera invocarse una funcion 





##solucion 1
def suma(num1, num2):
    resultado = str(num1 + num2)
    print("El resultado es " + resultado)

##solucion 1
def resta(num1, num2):
    resultado = str(num1 - num2)
    print("El resultado es " + resultado)

##solucion 1
def multiplicacion(num1, num2):
    resultado = str(num1 * num2)
    print("El resultado es " + resultado)

##solucion 1
def division(num1, num2):
    if(num2 == 0):
        print("No se puede hacer division entre cero")
    else:    
        resultado = str(num1 / num2)
        print("El resultado es " + resultado)


print(" Escribe el primer numero")
numero1 = int(input())
print(" Escribe el segundo numero")
numero2 = int(input())


print(" Que quieres hacer? ")
print(" a) Suma")
print(" b)Resta")
print(" c)Multiplicacion")
print(" d)Division ")

opcion = input()

if(opcion == "a"):
    suma(numero1, numero2)
if(opcion == "b"):
    resta(numero1, numero2)
if(opcion == "c"):
    multiplicacion(numero1, numero2)
if(opcion == "d"):
    division(numero1, numero2)