export interface UserLdap {
   // filter(arg0: (user: any) => boolean): UserLdap[];
    login: string;
    nom: string;
    prenom: string;
    nomComplet: string;
    motDePasse: string | null;
    mail: string;
    role: string;
    employeNumero: number;
    employeNiveau: number;
    dateEmbauche: string;
    publisherId: number;
    active: boolean;
}