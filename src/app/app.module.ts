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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrouverCentreComponent,
    ChoixCentreComponent,
    ChoisirComponent,
    RendezVousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
