// Chat.java
public class Chat implements Animal {

    private String nom;
    private int nombreDeGriffes;

    public Chat(String nom, int nombreDeGriffes) {
        this.nom = nom;
        this.nombreDeGriffes = nombreDeGriffes;
    }

    @Override
    public String emettreSon() {
        return "Meow";
    }

    @Override
    public void afficherInfos() {
        System.out.println("Je suis un chat. Mon nom est " + nom + " et j'ai " + nombreDeGriffes + " griffes.");
    }
}
