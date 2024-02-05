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
  // reservation:Boolean = false
  selected:Center | null = null

  constructor(private route:ActivatedRoute, private apiService:ApiService) {}
  ngOnInit(): void {
    let segments = this.route.snapshot.url;
    let last = segments[segments.length - 1].path;
    if(last === "reservation"){
      // this.reservation = true
      const id = this.route.snapshot.params['id'];
      this.selected = this.getCenter(id)
      console.log(this.selected)
    }
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

  getCenter(id:number):Center | null{
    for(let center of this.centers){
      if(center.id == id){
        return center;
      }
    }
    return null;
  }

}
