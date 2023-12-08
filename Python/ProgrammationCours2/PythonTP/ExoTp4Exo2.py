#exo 1
#pip install requests

#exo 2
import requests

#requête à l'API
response = requests.get("https://gbfs.citibikenyc.com/gbfs/fr/station_information.json")

#on vérifie si la requête a bien réussi (code 200)
if response.status_code == 200:
    #charger les données json 
    data = response.json()
    #accéder à la liste des stations
    stations = data['data']['stations']
    #afficher le nom de chaque station avec sa capacité actuelle
    for station in stations: 
        nom_station = station['name']
        capacite_actuelle = station['capacity']
        print(f"Station: {nom_station}, Capacité actuelle: {capacite_actuelle}")
else:
    print(f"Erreur lors de la requête. Code de statut : {response.status_code}")