package JavaTP;

import java.util.Scanner;

public class SommeNB {
    public static void main (String[] args) {
        
        System.out.print("Entrez un nombre pour calculer sa somme: ");
        try (Scanner scanner = new Scanner(System.in)) {
            int nbSaisie = scanner.nextInt();
            int somme = 0 ;
            for (int i = 1; i <= nbSaisie; i++) {
                somme = i + somme;
            }
            System.out.println("la somme est égale =" + somme);
        }
    }
}
