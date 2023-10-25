#Calculatrice simple : Écrivez un programme qui prend deux nombres 
#et effectue les opérations de base : addition, soustraction, multiplication, division.

#permet d'importer des paramètres
import sys
#initialisation des variables passées
nombre1 = int(sys.argv[1])
operateur = sys.argv[2]
nombre2 = int(sys.argv[3])
#programme
if (operateur == '+'):
    result = nombre1 + nombre2
    print(result)
elif (operateur == '-'):
    result = nombre1 * nombre2
    print(result)
elif (operateur == '/'):
    result = nombre1 / nombre2
    print(result)
elif (operateur == '*'):
    result = nombre1 * nombre2
    print(result)