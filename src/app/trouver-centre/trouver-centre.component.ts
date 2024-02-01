import { Component, OnInit } from '@angular/core';
import { Ville } from '../models/Ville';


@Component({
  selector: 'app-trouver-centre',
  templateUrl: './trouver-centre.component.html',
  styleUrls: ['./trouver-centre.component.scss']
})
export class TrouverCentreComponent implements OnInit{
  ville:Ville = new Ville('')

  performSearch(): void {
    console.log('nom de la ville:', this.ville.name);
    // Ajoutez votre logique de recherche ici
  }
  
  constructor() {}
  ngOnInit(): void {}

  onSubmit(){
    this.performSearch();
  }

}

