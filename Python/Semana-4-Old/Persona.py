
class Persona:
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo):
        self.nombre = nombre
        self.apellido_pat = apellido_pat
        self.apellido_mat = apellido_mat
        self.domicilio = domicilio
        self.tipo = tipo

    def imprimeDatos(self):
        print("Esta persona se llama", self.nombre)
        print("Es un", self.tipo)
    



class Alumno(Persona):
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, numeroCuenta, carrera):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo)
        self.numeroCuenta = numeroCuenta
        self.carrer = carrera




class Profesor(Persona):
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, departamento, numeroEmpleado, gradoAcademico):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo)
        self.departamento = departamento
        self.numeroEmpleado = numeroEmpleado
        self.gradoAcademico = gradoAcademico

    def darClase(self):
        print("El profesore esta dando clase")


p1 = Profesor("Israel", "Manzano", "Martinez", "San Gerardo", "Profesor", "Sistemas", 123213321, "Licenciatura")
p1.darClase()
p2 = Alumno("Manuel", "Enriquez", "Pineda", "EdoMex", "Alumno", 987654, "Full Stack REact")





""" persona1 = Persona("Israel", "Manzano", "Martinez", "San Gerardo", "Profesor")

persona2 = Persona("Paola", "Sanchez", "Castillo", "Rosa Carmesi 1", "Alumno")


print("Objeto Persona 1")
print("Esta persona es:", persona1.nombre)
print("Su tipo es:", persona1.tipo)

print("Objeto Persona 2")
print("Esta persona es:", persona2.nombre)
print("Su tipo es:", persona2.tipo)
 """