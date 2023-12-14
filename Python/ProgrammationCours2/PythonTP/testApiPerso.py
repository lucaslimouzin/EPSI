#exo 1
#pip install requests

#exo 2
import requests

nom_item_search = input("Entrez l'item à chercher: ")
#requête à l'API
response = requests.get("https://nwmarketprices.com/api/latest-prices/97/")

#on vérifie si la requête a bien réussi (code 200)
if response.status_code == 200:
    #charger les données json 
    data = response.json()
    #accéder à la liste des stations
    #afficher le nom de chaque station avec sa capacité actuelle
    for item in data: 
        itemName = item['ItemName']
        if (itemName == nom_item_search):
            price = item['Price']
            print(f"Item Name: {itemName}")
            print(f"Price: {price}")
            break
else:
    print(f"Erreur lors de la requête. Code de statut : {response.status_code}")