#Dictionnaires : Créez un dictionnaire avec des noms d'élèves et leurs notes. 
#Trouvez l'élève avec la meilleure note.
eleves = {"Martin": 12,
                  "Paul": 15,
                  "Jeanne": 18,
                  "Melanie": 13}
meilleur_etudiant = max(eleves, key=eleves.get)
print("Le résultat est " + meilleur_etudiant + " avec la note de "+ str(eleves[meilleur_etudiant]))