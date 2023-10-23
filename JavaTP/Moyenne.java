package JavaTP;

import java.util.Scanner;

public class Moyenne {
    

    private static int note;

    public static void main (String[] args) {
        System.out.print("Entrez le nombre de note : ");
         Scanner scanner = new Scanner(System.in);
            int Nbnote = scanner.nextInt();
            
        
        int somme = 0;
        for (int i =0; i < Nbnote; i++ ) {
            
            somme = saisimoy() + somme;
        }
        int moyFinal = somme / Nbnote;
        System.out.println("la moyenne est de " + moyFinal);
        scanner.close();
        
    }

    static int saisimoy() {
        System.out.print("Entrez une note : ");
        Scanner uneNote = new Scanner(System.in);
            int note =uneNote.nextInt();
        
        return note;
    }
}
