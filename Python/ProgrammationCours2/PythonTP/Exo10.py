nombre1 = int(input("Nombre 1 ?"))
nombre2 = int(input("Nombre 2 ?"))
operateur = (input("Opération ? Parmi + - * / : "))

if (operateur == '+'):
    result = nombre1 + nombre2
elif (operateur == '-'):
    result = nombre1 - nombre2
elif (operateur == '*'):
    result = nombre1 * nombre2
elif (operateur == '/'):
    if(nombre2 >0):
        result = nombre1 / nombre2
    else:
        print("Division par zéro impossible")
else:
    print("Opérateur inconnu")
print(result)
