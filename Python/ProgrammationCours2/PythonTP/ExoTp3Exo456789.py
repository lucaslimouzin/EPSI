#exo 4
class MaDate:
    def __init__(self, jour, mois, annee):
        self.jour = jour
        self.mois = mois
        self.annee = annee

    def afficher_date(self):
        print(f"{self.jour}/{self.mois}/{self.annee}")
#exo 6  
def saisirDate():
    while (True):
        annee = int(input("Entrez l'année : "))
        if (annee > 1900 and annee <3000):
                break
    while (True):
        mois = int(input("Entrez le mois : "))
        if (mois >0 and mois <13):
                break
    while(True):
        jour = int(input("Entrez le jour : "))
        if(jour >0 and jour <32):
                break
    return MaDate(jour,mois, annee)    

#exo 7    
class Personne:
    def __init__(self, nom, prenom, dateNaissance,dateEmbauche):
          self.nom = nom
          self.prenom = prenom
          self.dateNaissance = dateNaissance
          self.dateEmbauche = dateEmbauche   
    
    def afficher_personne(self):
        print(f"Nom : {self.nom}")
        print(f"Prénom : {self.prenom}")
        print(f"Date de naissance :") 
        self.dateNaissance.afficher_date()
        print(f"Date d'Embauche :")
        self.dateEmbauche.afficher_date()


def creer_personne():
    nom = input("Entrez votre nom : ")
    prenom = input("Entrez votre prénom : ")
    print("Entrez maintenant votre date de naissance ")
    dateNaissance = saisirDate()
    print("Entrez maintenant votre date d'embauche ")
    dateEmbauche = saisirDate()

    return Personne(nom, prenom, dateNaissance, dateEmbauche)

#exo 5
#nouvelle_date = MaDate(10,01,2025)
#nouvelle_date = saisirDate()
#nouvelle_date.afficher_date()

#exo 7
nouvelle_personne = creer_personne()
nouvelle_personne.afficher_personne()

#exo 8
def estPlusRecenteQue(date1,date2):
    if date1.annee > date2.annee:
        return False
    elif date1.annee < date2.annee:
        return True
    else:  
        if date1.mois > date2.mois:
            return True
        elif date1.mois < date2.mois:
            return False
        else:  
            return date1.jour > date2.jour


date1 = MaDate(10, 1, 2025)
date2 = MaDate(8, 12, 2023)

#if estPlusRecenteQue(date1, date2):
#   print("La date 1 est plus récente que la date 2.")
#else:
#    print("La date 2 est plus récente ou égale à la date 1.")

#exo 9
def comparerAnciennete(employe1, employe2):
    if estPlusRecenteQue(employe1.dateEmbauche, employe2.dateEmbauche):
        print(f"{employe1.nom} {employe1.prenom} n'a pas plus d'expérience que :")
        employe2.afficher_personne()
    else:
        print(f"{employe2.nom} {employe2.prenom} n'a pas plus d'expérience que :")
        employe1.afficher_personne()

# Exemple d'utilisation
employe1 = creer_personne()
employe2 = creer_personne()

comparerAnciennete(employe1, employe2)