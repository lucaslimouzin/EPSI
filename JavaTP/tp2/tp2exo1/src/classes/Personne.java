package classes;

public class Personne {
    public String nom;
    public int age;

    //constructor
    public Personne(String nom, int age){
        this.nom = nom;
        this.age = age;
    }

    public void afficherDetails(){
        System.out.println(this.nom);
        System.out.println(this.age);
    }

    
}
