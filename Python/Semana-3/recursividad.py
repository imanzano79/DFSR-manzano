# repeticion
# auto llamado
# Detener en un tiempo especifico

## funcion inicia
def cuenta_reg(num):
    num -= 1
    if num > 0:
        print(num)
        ## entra la recursividad
        cuenta_reg(num)
    else:
        print('Termino el timer!!')

    print(f'Termino la funcion {num}')
## termina la funcion

## llama la funcion
cuenta_reg(5)


