#Manipulation de chaînes : Demandez à l'utilisateur de saisir une phrase, 
#puis affichez la phrase en majuscules, en minuscules et le nombre de mots.

#Affichage du message
print("Saisir une phrase :")
#input permet de demander à l'utilisateur de saisir
phrase = input()
#modification de la phrase en majuscule
phrase = phrase.upper()
print(phrase)
#modification de la phrase en miniscule
phrase = phrase.lower()
print(phrase)
#affichage du nombre de mots
nombreMots = len(phrase.split())
print("Il y a " + str(nombreMots) + "mots")