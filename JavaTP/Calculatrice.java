package JavaTP;

import java.util.Scanner;

public class Calculatrice {
    private static int result;

    public static void main (String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Entrez un chiffre : ");
        int chiffre1 = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Entrez l'opérateur : ");
        String ope = scanner.nextLine();

        System.out.print("Entrez le deuxième chiffre : ");
        int chiffre2 = scanner.nextInt();
        
        if (ope.equals("+")) {
            result = chiffre1 + chiffre2;
        }
        else if (ope.equals("-")) {
            result = chiffre1 - chiffre2;
        }
        else if (ope.equals("*")) {
            result = chiffre1 * chiffre2;
        }
        else if (ope.equals("/")) {
            result = chiffre1 / chiffre2;
        }
        System.out.println("Le résultat est " + result);

    }
}
