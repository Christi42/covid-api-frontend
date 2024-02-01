import { Personne } from "./Personne";

export class Reservation{
    id:number;
    personne:Personne

    constructor(id:number, personne:Personne){
        this.id = id;
        this.personne = personne;
    }
}