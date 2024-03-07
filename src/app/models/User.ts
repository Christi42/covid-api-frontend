export class User{
    id:number;
    name:string;
    prenom:string;
    mail:string;
    role:string;

    constructor(id:number, name:string, prenom:string, mail:string, role:string){
        this.id = id;
        this.name = name;
        this.prenom = prenom;
        this.mail = mail;
        this.role = role
    }
}