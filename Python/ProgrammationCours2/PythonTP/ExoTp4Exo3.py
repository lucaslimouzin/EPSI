#exo 1
#pip install requests

#exo 2
import requests

#requête à l'API
response = requests.get("https://gbfs.citibikenyc.com/gbfs/fr/station_status.json")

#on vérifie si la requête a bien réussi (code 200)
if response.status_code == 200:
    #charger les données json 
    data = response.json()
    #accéder à la liste des stations
    stations = data['data']['stations']
    out_of_service = 0
    active = 0
    for station in stations: 
        if station['is_installed'] == 0:
            out_of_service = out_of_service + 1
        elif station['is_installed'] == 1 :
            active = active + 1

else:
    print(f"Erreur lors de la requête. Code de statut : {response.status_code}")

total = active + out_of_service
print("Ratio de stations en service : ", active / total)