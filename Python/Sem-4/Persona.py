## 

class Persona: ## PADRE
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo):
        self.nombre = nombre
        self.apellido_pat = apellido_pat
        self.apellido_mat = apellido_mat
        self.domicilio = domicilio
        self.tipo = tipo


    def imprimeDatos(self): 
        print("Esta persona se llama", self.nombre)
        print("Es un", self.tipo)



class Alumno(Persona): ## HIJO 
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, numeroCuenta, carrera):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo) ## acceder al metodo constructor (init) de el padre
        self.numeroCuenta =numeroCuenta 
        self.carrera = carrera 

class Profesor(Persona): ##HIJO 
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, departamento, numeroEmpleado, gradoAcademico):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo)
        self.departamento = departamento
        self.numeroEmpleado = numeroEmpleado
        self.gradoAcademico = gradoAcademico

    def darClase(self):
        print("El orif esra dabdi clase")




p1 = Profesor("Paola", 'Sanchez', 'Castillo', 'CDMX', 'profesor', 'Sistemas', 56787656, 'Licenciatura')
p1.darClase()

p2 = Alumno('Manuel', 'Enriquez', 'Pineda', 'EDOMEX', 'alumno', 123432, 'Full Stack React')




















''' 
## Creando un objeto (instancia) <- 

persona1 = Persona("Paola", "Sanchez", "Castillo", "Rosa Carmesi 1", "Profesor")

persona2 = Persona("Manuel", "Enriquez", "Pineda", "EDOMEX", "Alumno")

## (new) < -  
## Si en la clase NO se determina el tipo de acceso (Encapsulamiento) que tendra 
## el metodo o atributo, quiere decir, que este es PUBLICO
print("Objeto (Persona) 1")
print("Esta persona es : ", persona1.nombre)
print("Su tipo : ", persona1.tipo)

print("Objeto (Persona) 2")
print("Esta persona es : ", persona2.nombre)
print("Su tipo : ", persona2.tipo)
 '''














