import { Personne } from "./Personne";

export class Reservation{
    id:number;
    personne:Personne;
    date:string;

    constructor(personne:Personne, date:string){
        this.id = 0;
        this.personne = personne;
        this.date = date+"T10:15:30";
    }
}