import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { Center } from "../models/Center";
import { Ville } from "../models/Ville";
import { Reservation } from "../models/Reservation";
import { LoginRequest } from "../models/LoginRequest";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    apiUrl = 'http://localhost:8080/public/';
    apiAdmin = 'http://localhost:8080/administration/';

    constructor(private http: HttpClient) { }

    getCenters():Observable<Center[]>{
        return this.http.get<Center[]>(this.apiUrl + 'centers');
    }

    getCentersByVille(id:number):Observable<Center[]>{
        return this.http.get<Center[]>(this.apiUrl + id + '/centers')
    }

    findVilleByName(name:string):Observable<Ville>{
        return this.http.get<Ville>(this.apiUrl+'villes/'+name)
    }

    book(reservation:Reservation, centerId:number):Observable<Reservation>{
        return this.http.post<Reservation>(this.apiUrl+'books?center_id='+centerId, reservation);
    }

    login(login:LoginRequest):Observable<HttpResponse<any>>{
        return this.http.post<any>(this.apiAdmin+'login', login)
    }
}