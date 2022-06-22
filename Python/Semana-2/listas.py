## Ejemplo de listas en python


#Creando una lista

nombres = ["Paola", "Carlos", "Mario", "ISrael", "MAnuel", "Luis", "Guillermo"] 
print(nombres)

# Accediendo y pintando un elemento con x posicion de la lista
print(nombres[1])


# Cambiando un elemento con x posicion de la lista

nombres [0]="Augusto"
print(nombres)


# Agregando un elemento a la lista

nombres.insert(7, "Juan")
nombres.insert(1, "Pedrita")

nombres.append("Perenganita")




print(nombres)


# Despues de dos meses

nombres.remove("Juan")

print(nombres)

nombres.pop(1)
print(nombres)

# Barrer una lista
# Para barrer una lista se requiere un loop
# For
# While
# DO-WHILE
# FOREACH

for x in nombres:
    print(x)











































