#Compréhension de liste : Utilisez la compréhension de liste 
#pour créer une liste des carrés des nombres de 1 à 10.

new_list = []
for x in range(1,11):
    new_list.append(x*x)
print(new_list)