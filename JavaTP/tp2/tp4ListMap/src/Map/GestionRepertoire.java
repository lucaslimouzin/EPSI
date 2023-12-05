package Map;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class GestionRepertoire {

    public static void main(String[] args) {
        // Création d'une HashMap pour stocker les contacts (nom, numéro de téléphone)
        Map<String, String> repertoire = new HashMap<>();

        // Scanner pour la saisie utilisateur
        Scanner scanner = new Scanner(System.in);

        // Menu d'options pour l'utilisateur
        while (true) {
            afficherMenu();

            int choix = scanner.nextInt();
            scanner.nextLine(); // Pour consommer le saut de ligne restant

            switch (choix) {
                case 1:
                    ajouterContact(repertoire, scanner);
                    break;
                case 2:
                    mettreAJourNumero(repertoire, scanner);
                    break;
                case 3:
                    supprimerContact(repertoire, scanner);
                    break;
                case 4:
                    afficherContacts(repertoire);
                    break;
                case 5:
                    System.out.println("Au revoir !");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Option invalide. Veuillez choisir une option valide.");
            }
        }
    }

    private static void afficherMenu() {
        System.out.println("Menu :");
        System.out.println("1. Ajouter un contact");
        System.out.println("2. Mettre à jour un numéro de téléphone");
        System.out.println("3. Supprimer un contact");
        System.out.println("4. Afficher la liste des contacts");
        System.out.println("5. Quitter");
        System.out.println("Choisissez une option :");
    }

    private static void ajouterContact(Map<String, String> repertoire, Scanner scanner) {
        System.out.println("Saisissez le nom du contact :");
        String nom = scanner.nextLine();

        System.out.println("Saisissez le numéro de téléphone :");
        String numero = scanner.nextLine();

        repertoire.put(nom, numero);
        System.out.println("Contact ajouté avec succès.");
    }

    private static void mettreAJourNumero(Map<String, String> repertoire, Scanner scanner) {
        System.out.println("Saisissez le nom du contact dont vous voulez mettre à jour le numéro :");
        String nom = scanner.nextLine();

        if (repertoire.containsKey(nom)) {
            System.out.println("Saisissez le nouveau numéro de téléphone :");
            String nouveauNumero = scanner.nextLine();
            repertoire.put(nom, nouveauNumero);
            System.out.println("Numéro de téléphone mis à jour avec succès.");
        } else {
            System.out.println("Le contact n'existe pas dans le répertoire.");
        }
    }

    private static void supprimerContact(Map<String, String> repertoire, Scanner scanner) {
        System.out.println("Saisissez le nom du contact que vous voulez supprimer :");
        String nom = scanner.nextLine();

        if (repertoire.containsKey(nom)) {
            repertoire.remove(nom);
            System.out.println("Contact supprimé avec succès.");
        } else {
            System.out.println("Le contact n'existe pas dans le répertoire.");
        }
    }

    private static void afficherContacts(Map<String, String> repertoire) {
        if (repertoire.isEmpty()) {
            System.out.println("Le répertoire est vide.");
        } else {
            System.out.println("Liste des contacts :");
            for (Map.Entry<String, String> entry : repertoire.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
}
