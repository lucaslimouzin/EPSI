// Chien.java
public class Chien implements Animal {

    private String nom;
    private String race;

    public Chien(String nom, String race) {
        this.nom = nom;
        this.race = race;
    }

    @Override
    public String emettreSon() {
        return "Woof";
    }

    @Override
    public void afficherInfos() {
        System.out.println("Je suis un chien. Mon nom est " + nom + " et ma race est " + race + ".");
    }
}
