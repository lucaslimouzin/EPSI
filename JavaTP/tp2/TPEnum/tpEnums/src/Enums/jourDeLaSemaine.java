package Enums;

import java.util.Scanner;

enum JourSemaine {
    LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI, DIMANCHE
}

public class jourDeLaSemaine {

    public static void main(String[] args) {

        System.out.print("Veuillez saisir un jour de la semaine : ");
        try (Scanner scanner = new Scanner(System.in)) {
            String jourSaisi = scanner.nextLine().toUpperCase(); 

            try {
                JourSemaine jour = JourSemaine.valueOf(jourSaisi);

                switch (jour) {
                    case LUNDI:
                    case MARDI:
                    case MERCREDI:
                    case JEUDI:
                    case VENDREDI:
                        System.out.println("C'est un jour de travail !");
                        break;
                    case SAMEDI:
                    case DIMANCHE:
                        System.out.println("C'est le week-end !");
                        break;
                    default:
                        System.out.println("Jour invalide, veuillez saisir un jour valide de la semaine.");
                }
            } catch (IllegalArgumentException e) {
                System.out.println("Jour invalide, veuillez saisir un jour valide de la semaine.");
            }
        }
    }
}
