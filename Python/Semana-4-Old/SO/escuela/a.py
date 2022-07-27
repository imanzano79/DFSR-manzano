import Persona


class Alumno(Persona):
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, numeroCuenta, carrera):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo)
        self.numeroCuenta = numeroCuenta
        self.carrer = carrera

    def asignarCalificacion(materia, calificacion):
        print("Se obtuvo la calificacion de " + calificacion  + " en la materia" + materia)


    def subirTrabajo(materia, nombre):
        print("Se subio exitosamente la tarea" + nombre + "de la materia" + materia)
