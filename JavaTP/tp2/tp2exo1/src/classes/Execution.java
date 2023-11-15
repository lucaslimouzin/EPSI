package classes;

public class Execution {
    
    public static void main(String[] args){
        Voiture maVoiture = new Voiture();
        maVoiture.setMarque("Renault");
        maVoiture.setPrix(13000.0);
        maVoiture.afficher();
    }
}
