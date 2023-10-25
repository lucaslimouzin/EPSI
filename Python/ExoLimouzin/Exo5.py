#Fonctions : Écrivez une fonction qui calcule le factorial d'un nombre.
print("Entrez un nombre : ")

def factorial(nb):
    result = 1
    for x  in range(1,nb+1):    
        result = x * result
    print(result)
nombre = int(input())
factorial(nombre)