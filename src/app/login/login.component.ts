import { Component } from '@angular/core';
import { Personne } from '../models/Personne';
import { LoginRequest } from '../models/LoginRequest';
import { ApiService } from '../services/ApiService';
import { HttpResponse } from '@angular/common/http';
import { User } from '../models/User';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  personne:Personne = new Personne('','','');
  login:LoginRequest = new LoginRequest('','');

  constructor(private apiService:ApiService, private route:Router){

  }

  onSubmit(){
    this.apiService.login(this.login).subscribe((response:HttpResponse<any>)=>{
      console.log(response)
      if(response.status === 200){
        let user = response.body
        console.log(user);
        if(user?.role=="SUPERADMIN"){
          this.route.navigate(['/connexion'])
        }
      }else{
        console.log("erreur:"+response.statusText)
      }
    })

  }
}
