import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Center } from '../models/Center';
import { ApiService } from '../services/ApiService';
import { Ville } from '../models/Ville';

@Component({
  selector: 'app-choisir',
  templateUrl: './choisir.component.html',
  styleUrls: ['./choisir.component.scss']
})
export class ChoisirComponent implements OnInit{

  @Input() centers:Center[] = [];
  

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    // this.getCenters()
  }

  searchTerm: string = '';

  performSearch(): void {
    console.log('Search Term:', this.searchTerm);
    // Ajoutez votre logique de recherche ici
  }

  // getCenters():void{
  //   if(this.ville!=null){
  //     this.apiService.getCentersByVille(this.ville.id).subscribe((data : Center[]) =>{
  //       this.centers = data;
  //     })
  //   }
  // }

  adresse: string = "Texte à côté du bouton";

  onClick() {
    console.log("Le bouton a été cliqué !");
  }


}
