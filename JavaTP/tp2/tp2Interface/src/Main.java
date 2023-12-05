// Main.java
public class Main {

    public static void main(String[] args) {
        Chien monChien = new Chien("Buddy", "Labrador");
        monChien.afficherInfos();
        System.out.println("Le son que je fais est : " + monChien.emettreSon());

        Chat monChat = new Chat("Whiskers", 5);
        monChat.afficherInfos();
        System.out.println("Le son que je fais est : " + monChat.emettreSon());
    }
}
