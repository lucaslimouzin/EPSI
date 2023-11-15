import statistics as stat
eleves = { 
"Adam": [12, 15 , 17], 
"Karim" : [15, 12 , 16], 
"Joshua": [13, 15 , 7]
}
moyenne = stat.mean(eleves["Adam"])
moyenneEleves = {}
for eleve in eleves:
    moyenneEleves[eleve] = stat.mean(eleves[eleve])
print(moyenneEleves)
