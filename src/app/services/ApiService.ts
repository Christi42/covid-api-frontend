import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Center } from "../models/Center";

@Injectable({
    providedIn: 'root'
})

export class ApiService{
    apiUrl = 'http://localhost:8080/public/';

    constructor(private http: HttpClient) { }

    getCenters():Observable<Center[]>{
        return this.http.get<Center[]>(this.apiUrl + 'centers');
    }

    getCentersByVille(id:number):Observable<Center[]>{
        return this.http.get<Center[]>(this.apiUrl + id + '/centers')
    }
}