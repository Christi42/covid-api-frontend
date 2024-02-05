import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TrouverCentreComponent } from './trouver-centre/trouver-centre.component';
import { ChoixCentreComponent } from './choix-centre/choix-centre.component';
import { ChoisirComponent } from './choisir/choisir.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './connexion/connexion.component';
import { CentresComponent } from './centres/centres.component';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CentresPersonnelComponent } from './centres-personnel/centres-personnel.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrouverCentreComponent,
    ChoixCentreComponent,
    ChoisirComponent,
    RendezVousComponent,
    ConnexionComponent,
    CentresComponent,
    CentresPersonnelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
