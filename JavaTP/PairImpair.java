package JavaTP;
import java.util.Scanner;

public class PairImpair {
    public static void main (String[] args) {
        System.out.print("Entrez un nombre : ");
        try (Scanner scanner = new Scanner(System.in)) {
            int nbSaisie = scanner.nextInt();

            if (nbSaisie % 2 ==0) {
                System.out.println("Le nombre est pair");
            }
            else {
                System.out.println("Le nombre est impair");
            }
        }
        
        
    }
}
