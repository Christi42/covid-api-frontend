import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  selectedCenter:Center | null = null; 

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    // this.getCenters()
  }

  searchTerm: string = '';

  performSearch(): void {
    console.log('Search Term:', this.searchTerm);
    // Ajoutez votre logique de recherche ici
  }

  adresse: string = "Texte à côté du bouton";

  onClick() {
    console.log("Le bouton a été cliqué !");
  }


}
