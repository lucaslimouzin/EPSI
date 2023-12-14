#exo 1
#pip install requests

#exo 2
import requests
import math
#requête à l'API
response = requests.get("https://gbfs.citibikenyc.com/gbfs/fr/station_information.json")

#on vérifie si la requête a bien réussi (code 200)
if response.status_code == 200:
    #charger les données json 
    data = response.json()
    #accéder à la liste des stations
    stations = data['data']['stations']
    distance_max = 0
    st1 = ""
    st2 = ""
    for station1 in stations:
        for station2 in stations: 
            a = station1['lat'] - station2['lat']
            b = station1['lon'] - station2['lon']
            distance = math.sqrt(a * a + b * b)
            if distance > distance_max:
                distance_max = distance
                st1 = station1['name']
                st2 = station2['name']
else:
    print(f"Erreur lors de la requête. Code de statut : {response.status_code}")

print(st1)
print(st2)