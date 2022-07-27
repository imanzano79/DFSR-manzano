from escuela import per

class Alumno(per.Persona): ## HIJO 
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, numeroCuenta, carrera):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo) ## acceder al metodo constructor (init) de el padre
        self.numeroCuenta =numeroCuenta 
        self.carrera = carrera 


    def asignarCalificacion(materia, calificacion):
        print("Se obtuvo la calificacion de " + calificacion +  " en la materia " + materia)

    def subirTrabajo(materia, nombre):
        print("Se subio exitosamente la tarea " + nombre + " de la materia " + materia  )