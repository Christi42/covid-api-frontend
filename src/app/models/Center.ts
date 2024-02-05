import { Admin } from "./Admin";
import { Doctor } from "./Doctor";
import { Reservation } from "./Reservation";
import { Ville } from "./Ville";

export class Center{
    id:number;
    name:string;
    ville:Ville;
    admin:Admin;
    doctors:Doctor[];
    reservations:Reservation[];
    adresse:string;
    code:number;

    constructor(id:number, name:string, ville:Ville, admin:Admin){
        this.id = id;
        this.name = name;
        this.admin = admin;
        this.ville = ville;
        this.doctors = [];
        this.reservations = [];
        this.adresse = "";
        this.code = 0;
    }
}