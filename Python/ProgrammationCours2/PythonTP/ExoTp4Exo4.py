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
    ebikes_available = 0
    bikes_available = 0
    for station in stations: 
        ebikes_available = ebikes_available + station['num_ebikes_available']
        bikes_available = bikes_available + station['num_bikes_available']

else:
    print(f"Erreur lors de la requête. Code de statut : {response.status_code}")

total = ebikes_available + bikes_available
print("Ratio de vélos électriques : ", ebikes_available/total)