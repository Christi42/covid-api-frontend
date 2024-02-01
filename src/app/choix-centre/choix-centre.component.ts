import { Component, OnInit } from '@angular/core';
import { Ville } from '../models/Ville';


@Component({
  selector: 'app-choix-centre',
  templateUrl: './choix-centre.component.html',
  styleUrls: ['./choix-centre.component.scss']
})
export class ChoixCentreComponent implements OnInit{

  ville:Ville = new Ville('')

  constructor() {}
  ngOnInit(): void {}

  receiveVille(receivedVille:Ville){
    this.ville = receivedVille;
  }

}
