import per as Persona


class Profesor(Persona): ##HIJO 
    def __init__(self, nombre, apellido_pat, apellido_mat, domicilio, tipo, departamento, numeroEmpleado, gradoAcademico):
        super().__init__(nombre, apellido_pat, apellido_mat, domicilio, tipo)
        self.departamento = departamento
        self.numeroEmpleado = numeroEmpleado
        self.gradoAcademico = gradoAcademico

    def darClase(self):
        print("El profesor esta dando clase")

    def subirCalificaciones(self, alumno, materia, calificacion):
        print("Se subio exitosamente la calificacion de el alumno " + alumno + " de la materia " + " con " + calificacion + " de calificacion")