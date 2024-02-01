import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { TrouverCentreComponent } from './trouver-centre/trouver-centre.component';
import { ChoixCentreComponent } from './choix-centre/choix-centre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrouverCentreComponent,
    ChoixCentreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
