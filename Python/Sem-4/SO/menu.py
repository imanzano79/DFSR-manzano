import calculadora.operaciones as operaciones
from  escuela import per
from  escuela import pro
from  escuela import a 


## PASOS A SEGUIR 
'''
 Paso numero 1  
  - importar tanto las clases como los modulos necesarios
  - importar las clases necesarias
 Paso numero 2 
 Crear enu seleccion continua de las siguientes opciones:  (DO WHILE)
    1. Crear usuario
        - Permitir el tipo de usuario (Si es alumno o si es profesor) 
            -  permitir la seleccion de forma continua de los metodos especificos 
            del objeto (tipo de persona) (DO WHILE)
    2. Operaciones
        - Permitir l
        a seleccion continua de la operacion que se desea realizar (DO WHILE)
    
'''


##nuevousuario = a.Alumno()


menuprincipal = int(input('App de opciones:  \n 1. Calculadora" \n 2. Escuela \n   Escriba la opcion: ' ))


while menuprincipal !=0:

    if (menuprincipal == 1): 
                                    
        print(" Escribe el primer numero")
        numero1 = int(input())
        print(" Escribe el segundo numero")
        numero2 = int(input())


        print(" Que quieres hacer? ")
        print(" a) Suma")
        print(" b) Resta")
        print(" c) Multiplicacion")
        print(" d) Division ")

        opcion = input("Escribe la opcion y pulsa enter: ")


        if(opcion == "a"):
            operaciones.suma(numero1, numero2)
        elif(opcion == "b"):
            operaciones.resta(numero1, numero2)
        elif(opcion == "c"):
            operaciones.multiplicacion(numero1, numero2)
        elif(opcion == "d"):
            operaciones.division(numero1, numero2)

        

    if (menuprincipal == 2):

       
        print("Que tipo de usuario eres:\n",
                "1-Alumno.\n",
                "2-Profesor.\n",)
            
        opcion = input("Escribe el número y pulsa enter: ")

        print(" Escribe calificacion")
        calificacion = int(input())
        print(" Escribe materia")
        materia = str(input())

               
        if(opcion == 1):
           a.asignarCalificacion(materia, calificacion)
        
        #if(opcion == 2):
         #  a.Alumno.subirTrabajo(materia, calificacion)




      



    if menuprincipal != 0:
        print ("Gracias por usar este programa")
    break
 
  

