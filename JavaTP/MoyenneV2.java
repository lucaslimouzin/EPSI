package JavaTP;
import java.lang.Math;

import java.util.Scanner;

public class MoyenneV2 {
    

    private static int note;
    private static int Nb;
    private static int tableau[];
    public static void main (String[] args) {
        int i = 1;
        
        while (i == 1) {
            System.out.print("Entrez un nombre compris entre 3 et 20 : ");
            Scanner scanner = new Scanner(System.in);
            Nb = scanner.nextInt();
            if (Nb >= 3 && Nb <= 20) {
                break;
            }
        }

        tableau = new int[Nb];
        // défini la range
        int max = 100;
        int min = 0;
        int range = max - min + 1;
        for (int j = 0; j < Nb ; j++) {
            tableau[j] = (int)(Math.random() * range) + min;
            
        }
            
        
        int somme = 0;
        for( int k : tableau) {
            somme = somme + k;
        }
        int moyFinal = somme / Nb;
        System.out.println("la moyenne est de " + moyFinal);
        
        
    }

    
}
