package classes;

public class Main {
    public static void main(String[] args) {
        //creation d'objets de la classe Personne
        Personne personne1 = new Personne("Alice", 30);
        Personne personne2 = new Personne("ROmane",26);

        Personne personne3 = new Personne("",0);
        personne3.age = 10;
        personne3.nom = "Jean";

        //affichage des détails des personnes
        personne1.afficherDetails();

    }
    
}
