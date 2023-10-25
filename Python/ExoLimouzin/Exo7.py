#Fichiers : Écrivez un programme qui lit un fichier texte, 
#compte le nombre de mots et écrit le résultat dans un autre fichier.

import sys
texte = sys.argv[1]
#ouverture du fichier
fichier = open(texte, "r")
#récuperation dans une variable le contenu du fichier
result = fichier.read()
#fermeture du fichier
fichier.close()

print("création du nouveau fichier")
nomFile = 'resultatCompteurMot.txt'
#ouverture du fichier en écriture
newfile = open(nomFile,'w')
#ecrit dans le fichier 
newfile.write(str(len(result.split())))
newfile.close()


