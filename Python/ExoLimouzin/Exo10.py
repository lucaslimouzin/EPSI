#Tri par insertion : Implémentez l'algorithme de tri par insertion,
#la fonction prendra en paramètre une liste.

new_list = []
#insèrer dans une liste
def insertList():
    print("combien de nombres vous voulez ajouter?")
    nb = int(input())
    for x in range(1,nb +1):
        print("Nombre n°" + str(x))
        new_list.append(int(input()))

#trie de la liste

def trieDeLaList(trier):
    for i in range (1, len(trier)):
        k = trier[i]
        j = i
        while (j > 0 and trier[j - 1] > k):
            trier[j] = trier[j-1]
            j = j -1
        trier[j] = k

    print(trier)

#corps
insertList()
trieDeLaList(new_list)

