etudiants = { 
"etudiant_1":13, 
"etudiant_2":17, 
"etudiant_3":9, 
"etudiant_4":15, 
"etudiant_5":8, 
"etudiant_6":14, 
"etudiant_7":14, 
"etudiant_8":12, 
"etudiant_9":13, 
"etudiant_10":15, 
"etudiant_11":14, 
"etudiant_112":9, 
"etudiant_13":12, 
"etudiant_14":12, 
"etudiant_15":13, 
"etudiant_16":7, 
"etudiant_17":12, 
"etudiant_18":15, 
"etudiant_19":9, 
"etudiant_20":17 
} 

#ajout de l'étudiant 21 avec la note de 18
etudiants["etudiant_21"] = 18
#partitionne le dictionnaire en deux
etudiantAdmis = {}
etudiantNonAdmis = {}
for key, value in (etudiants.items()):
    if (value >= 10):
        etudiantAdmis[key] = value
    else:
        etudiantNonAdmis[key] = value
print(etudiantAdmis)

#autre méthode
# Boucle sur les étudiants 
for etudiant in etudiants: 
    if(etudiants[etudiant] < 10): 
        etudiantNonAdmis[etudiant] = etudiants[etudiant] 
    else: 
        etudiantAdmis[etudiant] = etudiants[etudiant]

