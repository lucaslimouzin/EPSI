package List;

import java.util.ArrayList;
import java.util.Scanner;

public class GestionNoms {

    public static void main(String[] args) {
        // Création d'une ArrayList pour stocker les noms
        ArrayList<String> listeNoms = new ArrayList<>();

        // Scanner pour la saisie utilisateur
        Scanner scanner = new Scanner(System.in);

        // Saisie des noms jusqu'à ce que l'utilisateur décide d'arrêter
        System.out.println("Saisissez les noms (saisissez 'stop' pour terminer la saisie) :");
        while (true) {
            String nom = scanner.nextLine();
            if (nom.equalsIgnoreCase("stop")) {
                break;
            }
            listeNoms.add(nom);
        }

        // Affichage de la liste des noms
        System.out.println("Liste des noms saisis :");
        for (String nom : listeNoms) {
            System.out.println(nom);
        }

        // Saisie d'un nom supplémentaire pour la recherche
        System.out.println("Saisissez un nom pour rechercher dans la liste :");
        String nomRecherche = scanner.nextLine();

        // Recherche du nom dans la liste
        if (listeNoms.contains(nomRecherche)) {
            System.out.println("Le nom '" + nomRecherche + "' a été trouvé dans la liste.");
        } else {
            System.out.println("Le nom '" + nomRecherche + "' n'a pas été trouvé dans la liste.");
        }

        // Fermeture du scanner
        scanner.close();
    }
}
