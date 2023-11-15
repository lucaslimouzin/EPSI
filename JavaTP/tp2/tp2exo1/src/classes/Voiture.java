package classes;
public class Voiture {
    public String marque;
    public Double prix;

    //constructeur
    public Voiture() {

    }

    //creation des setters
    public void setMarque (String mq){
        this.marque = mq;
    }
    public void setPrix(Double pr){
        this.prix = pr;
    }

    //creation des getters
    public String getMarque(){
        return marque;
    }
    public Double getPrix(){
        return prix;
    }

    public void afficher(){
        System.out.println("La marque de la voiture est : " + this.marque);
        System.out.println("Le prix de la voiture est : " + this.prix + " euros");
    }
}
