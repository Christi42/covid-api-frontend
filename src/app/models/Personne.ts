export class Personne{
    id:number;
    name:string;
    prenom:string;
    mail:string;
    telephone:number;

    constructor(nom:string, prenom:string, email:string){
        this.id = 0;
        this.name = nom;
        this.prenom = prenom;
        this.mail = email;
        this.telephone = 0;
        
    }
}