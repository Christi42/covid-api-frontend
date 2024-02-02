import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ville } from '../models/Ville';
import { ApiService } from '../services/ApiService';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-trouver-centre',
  templateUrl: './trouver-centre.component.html',
  styleUrls: ['./trouver-centre.component.scss']
})
export class TrouverCentreComponent implements OnInit{
  @Output() submitVilleEvent = new EventEmitter<Ville>()

  ville:Ville = new Ville('')
  afficher_choix_ville: boolean =false;

  performSearch(): void {
    console.log('nom de la ville:', this.ville.name);
    // Ajoutez votre logique de recherche ici
  }
  
  constructor(private apiService:ApiService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.ville.name = params['ville']
    })
  }

  onSubmit(){
    this.performSearch();
    //this.submitVilleEvent.emit(this.ville);
    this.router.navigate(['/choix_centre',this.ville.name]);
    //Passer la ville dans la route
  }

  // this.apiService.findVilleByName(this.ville.name).subscribe((data:Ville) =>{
  //   this.ville.id = data["id"];
  //   this.ville.name = data["name"];
  //   this.submitVilleEvent.emit(this.ville);
    
  // })
}

