import { Component, OnInit } from '@angular/core';
import { Ville } from '../models/Ville';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/ApiService';
import { Center } from '../models/Center';


@Component({
  selector: 'app-choix-centre',
  templateUrl: './choix-centre.component.html',
  styleUrls: ['./choix-centre.component.scss']
})
export class ChoixCentreComponent implements OnInit{

  ville:Ville = new Ville('')
  centers:Center[] = []
  init:Boolean = false

  constructor(private route:ActivatedRoute, private apiService:ApiService) {}
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.ville.name = params['ville'];
      if(params['ville']){
        this.apiService.findVilleByName(params['ville']).subscribe((data:Ville) =>{
          console.log(data["id"]);
          this.ville.id = data["id"];
          this.ville.name = data["name"];
          this.apiService.getCentersByVille(data["id"]).subscribe((data : Center[]) =>{
            this.centers = data;
          })
          this.init = true;
        })
      }
    })
  }

  receiveVille(receivedVille:Ville){
    this.ville = receivedVille;
    this.init = true;
  }

}
