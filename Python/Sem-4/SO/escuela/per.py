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