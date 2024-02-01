import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ville } from '../models/Ville';
import { ApiService } from '../services/ApiService';


@Component({
  selector: 'app-trouver-centre',
  templateUrl: './trouver-centre.component.html',
  styleUrls: ['./trouver-centre.component.scss']
})
export class TrouverCentreComponent implements OnInit{
  @Output() submitVilleEvent = new EventEmitter<Ville>()

  ville:Ville = new Ville('')

  performSearch(): void {
    console.log('nom de la ville:', this.ville.name);
    // Ajoutez votre logique de recherche ici
  }
  
  constructor(private apiService:ApiService) {}

  ngOnInit(): void {}

  onSubmit(){
    this.performSearch();
    this.apiService.findVilleByName(this.ville.name).subscribe((data:Ville) =>{
      this.ville = data
    })
    this.submitVilleEvent.emit(this.ville)
  }

}

