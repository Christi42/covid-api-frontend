import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choisir',
  templateUrl: './choisir.component.html',
  styleUrl: './choisir.component.scss'
})
export class ChoisirComponent implements OnInit{

  constructor() {}
  ngOnInit(): void {}

  searchTerm: string = '';

  performSearch(): void {
    console.log('Search Term:', this.searchTerm);
    // Ajoutez votre logique de recherche ici
  }


}
