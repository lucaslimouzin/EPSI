#Listes : Créez une liste de 10 nombres, 
#trouvez le maximum, le minimum, 
#et calculez la moyenne.

import sys
maList = [
    int(sys.argv[1]),
    int(sys.argv[2]),
    int(sys.argv[3]),
    int(sys.argv[4]),
    int(sys.argv[5]),
    int(sys.argv[6]),
    int(sys.argv[7]),
    int(sys.argv[8]),
    int(sys.argv[9]),
    int(sys.argv[10])
]
print(maList)
max_number = max(maList)
print("le maximum est " + str(max_number))
min_number = min(maList)
print("le minimum est " + str(min_number))
moy_number = sum(maList)/10
print("la moyenne est de " + str(moy_number))