import { Component } from '@angular/core';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  personne:Personne = new Personne('','');

  onSubmit(){
    console.log("nom : "+this.personne.nom+"prénom : "+this.personne.prenom)
  }
}
