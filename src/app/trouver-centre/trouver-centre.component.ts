import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-trouver-centre',
  templateUrl: './trouver-centre.component.html',
  styleUrls: ['./trouver-centre.component.scss']
})
export class TrouverCentreComponent implements OnInit{
  searchTerm: string = '';

  performSearch(): void {
    console.log('Search Term:', this.searchTerm);
    // Ajoutez votre logique de recherche ici
  }
  
  constructor() {}
  ngOnInit(): void {}

}

