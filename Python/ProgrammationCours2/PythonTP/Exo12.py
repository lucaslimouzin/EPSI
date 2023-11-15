maroc = {"president": "Mohammed VI" , "capitale": "Rabat" , "superficie": 
710850} 
algerie = {"president": "Abdelaziz Bouteflika" , "capitale": "Alger" , 
"superficie": 2382000} 
tunisie = {"president": "Kaïs Saïed" , "capitale": "Tunis", "superficie": 
163610} 

#maj du président algérien
algerie['president'] = "Abdelmadjid Tebboune"
#intégrer les 3 dictionnaires en 1
magreb = {}
magreb['maroc'] = maroc
magreb['algerie'] = algerie
magreb['tunisie'] = tunisie
print(magreb)