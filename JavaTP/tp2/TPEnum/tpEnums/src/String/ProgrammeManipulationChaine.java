package String;

import java.util.Scanner;

public class ProgrammeManipulationChaine {

    public static void main(String[] args) {
        
        System.out.print("Veuillez saisir une chaîne de caractères : ");
        try (Scanner scanner = new Scanner(System.in)) {
            String chaine = scanner.nextLine();

            System.out.println("1. Longueur de la chaîne : " + chaine.length());

            String enMajuscules = chaine.toUpperCase();
            System.out.println("2. Chaîne en majuscules : " + enMajuscules);

            String enMinuscules = chaine.toLowerCase();
            System.out.println("3. Chaîne en minuscules : " + enMinuscules);

            boolean contientJava = chaine.toLowerCase().contains("java");
            System.out.println("4. La chaîne contient le mot \"Java\" : " + contientJava);

            String chaineAvecE = chaine.replace("e", "E");
            System.out.println("5. Chaîne avec remplacement de \"e\" par \"E\" : " + chaineAvecE);

            int moitie = chaine.length() / 2;
            String premiereMoitie = chaine.substring(0, moitie);
            System.out.println("6. Première moitié de la chaîne : " + premiereMoitie);

            String deuxiemeMoitie = chaine.substring((chaine.length() + 1) / 2);
            System.out.println("7. Deuxième moitié de la chaîne : " + deuxiemeMoitie);
        }
    }
}
